-- ============================================================
-- Học tiếng Nga cùng Oanh — cấu trúc cơ sở dữ liệu Supabase
-- Dán TOÀN BỘ file này vào Supabase → SQL Editor → Run (một lần duy nhất)
-- ============================================================

-- ---------- 1. Bảng hồ sơ người học ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users on delete cascade,
  email       text,
  full_name   text,
  role        text not null default 'student',   -- 'student' hoặc 'teacher'
  created_at  timestamptz not null default now()
);

-- ---------- 2. Bảng tiến độ (mỗi người một dòng) ----------
create table if not exists public.progress (
  user_id      uuid primary key references auth.users on delete cascade,
  data         jsonb not null default '{}'::jsonb,  -- toàn bộ tiến độ, y như trong trình duyệt
  lessons_done int  not null default 0,
  words        int  not null default 0,
  streak       int  not null default 0,
  updated_at   timestamptz not null default now()
);

-- ---------- 3. Bảng lưu từng lần thi ----------
create table if not exists public.exam_results (
  id         bigserial primary key,
  user_id    uuid not null references auth.users on delete cascade,
  level      text not null,
  score      int  not null,
  passed     boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists exam_results_user_idx on public.exam_results (user_id, created_at desc);

-- ---------- 4. Hàm kiểm tra quyền giáo viên ----------
-- security definer để không bị đệ quy khi dùng trong chính policy của bảng profiles
create or replace function public.is_teacher()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'teacher'
  );
$$;

-- ---------- 5. Tự tạo hồ sơ khi có người đăng ký ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 6. Bật Row Level Security ----------
alter table public.profiles      enable row level security;
alter table public.progress      enable row level security;
alter table public.exam_results  enable row level security;

-- profiles: ai cũng chỉ thấy hồ sơ của mình, riêng giáo viên thấy tất cả
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (id = auth.uid() or public.is_teacher());

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists profiles_insert on public.profiles;
create policy profiles_insert on public.profiles
  for insert with check (id = auth.uid());

-- progress: mỗi người đọc/ghi tiến độ của chính mình, giáo viên được đọc tất cả
drop policy if exists progress_select on public.progress;
create policy progress_select on public.progress
  for select using (user_id = auth.uid() or public.is_teacher());

drop policy if exists progress_insert on public.progress;
create policy progress_insert on public.progress
  for insert with check (user_id = auth.uid());

drop policy if exists progress_update on public.progress;
create policy progress_update on public.progress
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- exam_results: người học ghi và đọc bài thi của mình, giáo viên đọc tất cả
drop policy if exists exam_select on public.exam_results;
create policy exam_select on public.exam_results
  for select using (user_id = auth.uid() or public.is_teacher());

drop policy if exists exam_insert on public.exam_results;
create policy exam_insert on public.exam_results
  for insert with check (user_id = auth.uid());

-- ============================================================
-- SAU KHI CHẠY XONG: tự đặt mình làm giáo viên
-- Đăng ký tài khoản trên web trước, rồi chạy dòng này với email của em:
--
--   update public.profiles set role = 'teacher' where email = 'khactrung200107@gmail.com';
--
-- ============================================================
