/* ============================================================
   lesson.js — dựng nội dung bài học và chấm bài tập
   ============================================================ */

/* ---------- 1. Dựng phần lý thuyết ---------- */
function renderBlocks(blocks) {
  return (blocks || []).map(b => {
    switch (b.t) {
      case 'h': return `<h2>${esc(b.text)}</h2>`;
      case 'p': return `<p>${b.html}</p>`;
      case 'note': return `<div class="callout note">${b.html}</div>`;
      case 'tip': return `<div class="callout tip">${b.html}</div>`;
      case 'warn': return `<div class="callout">${b.html}</div>`;

      case 'letters':
        return `<div class="grid grid-2">${b.items.map(it => `
          <div class="card letter-card">
            <div class="row" style="gap:12px;align-items:flex-start">
              <div class="letter-big ru">${esc(it.L)}</div>
              <div style="flex:1;min-width:0">
                <div class="row" style="gap:8px">
                  <span class="pill">${esc(it.read)}</span>
                  ${speakBtn(it.say, it.L)}
                </div>
                <p class="small soft" style="margin:8px 0 6px">${it.note}</p>
                ${it.ex ? `<div class="row small"><span class="ru"><b>${esc(it.ex)}</b></span>
                  ${speakBtn(it.ex, it.ex)} <span class="muted">— ${esc(it.exvn)}</span></div>` : ''}
              </div>
            </div>
          </div>`).join('')}</div>`;

      case 'words':
        return `<div class="wordlist">${b.items.map(w => `
          <div class="word-row">
            ${speakBtn(w.ru, w.ru)}
            <span class="ru w-ru">${esc(w.ru)}</span>
            <span class="w-vn">${esc(w.vn)}${w.note ? ` <span class="tiny muted">— ${esc(w.note)}</span>` : ''}</span>
          </div>`).join('')}</div>`;

      case 'table':
        return `<div class="table-scroll card" style="padding:6px 14px"><table>
          <thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
          <tbody>${b.rows.map(r => `<tr>${r.map((c, i) => `<td${i === 0 ? ' class="ru"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;

      case 'dialog':
        return `<div class="card">${b.lines.map(l => `
          <div class="dlg-line">
            <span class="dlg-who">${esc(l.who)}</span>
            <div style="flex:1">
              <div class="row" style="gap:8px"><span class="ru" style="font-size:1.05rem">${esc(l.ru)}</span>${speakBtn(l.ru, l.ru)}</div>
              <div class="small muted">${esc(l.vn)}</div>
            </div>
          </div>`).join('')}</div>`;

      case 'alphabet':
        return `<div class="alpha-grid">${ALPHABET.map(([L, say, read]) => `
          <button class="alpha-cell" data-say="${escAttr(say)}" title="Nghe">
            <span class="ru">${esc(L)}</span><small>${esc(read)}</small>
          </button>`).join('')}</div>`;

      default: return '';
    }
  }).join('');
}

/* ---------- 2. Dựng bài tập ---------- */
function renderExercises(ex) {
  return ex.map((q, i) => {
    let body = '';
    if (q.t === 'choice') {
      body = `<div class="opts">${q.options.map((o, j) =>
        `<label class="opt"><input type="radio" name="q${i}" value="${j}"><span class="ru-mix">${o}</span></label>`).join('')}</div>`;
    } else if (q.t === 'type' || q.t === 'listen') {
      body = `<div class="row">
        ${q.t === 'listen' ? speakBtn(q.say, 'câu hỏi') : ''}
        <input class="inp" type="text" name="q${i}" placeholder="Gõ chữ Nga ở đây…" autocomplete="off" spellcheck="false">
      </div>${q.hint ? `<div class="tiny muted" style="margin-top:5px">Gợi ý: ${esc(q.hint)}</div>` : ''}`;
    } else if (q.t === 'match') {
      const right = shuffle(q.pairs.map(p => p[1]));
      body = `<div class="match">${q.pairs.map((p, j) => `
        <div class="match-row">
          <span class="ru">${esc(p[0])}</span>
          ${speakBtn(p[0], p[0])}
          <select name="q${i}_${j}">
            <option value="">— chọn nghĩa —</option>
            ${right.map(r => `<option value="${escAttr(r)}">${esc(r)}</option>`).join('')}
          </select>
        </div>`).join('')}</div>`;
    }
    return `<div class="card exq" data-i="${i}">
      <div class="row" style="align-items:flex-start;gap:10px">
        <span class="qn">${i + 1}</span>
        <div style="flex:1"><div class="qtext">${q.q}</div>${body}
          <div class="fb" hidden></div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ---------- 3. Chấm bài ---------- */
function gradeExercises(ex, root) {
  let correct = 0;
  ex.forEach((q, i) => {
    const card = root.querySelector(`.exq[data-i="${i}"]`);
    const fb = card.querySelector('.fb');
    let ok = false, shown = '';

    if (q.t === 'choice') {
      const picked = card.querySelector(`input[name="q${i}"]:checked`);
      ok = picked && Number(picked.value) === q.a;
      shown = q.options[q.a];
    } else if (q.t === 'type' || q.t === 'listen') {
      const v = card.querySelector(`input[name="q${i}"]`).value;
      const accepted = [q.a].concat(q.alt || []).map(norm);
      ok = accepted.includes(norm(v));
      shown = q.a;
    } else if (q.t === 'match') {
      ok = q.pairs.every((p, j) => {
        const sel = card.querySelector(`select[name="q${i}_${j}"]`);
        const good = sel.value === p[1];
        sel.classList.toggle('bad', !good);
        sel.classList.toggle('good', good);
        return good;
      });
      shown = q.pairs.map(p => `${p[0]} = ${p[1]}`).join(' · ');
    }

    if (ok) correct++;
    card.classList.toggle('ok', ok);
    card.classList.toggle('bad', !ok);
    fb.hidden = false;
    fb.className = 'fb ' + (ok ? 'good' : 'wrong');
    fb.innerHTML = ok
      ? `<b>Đúng rồi!</b> ${q.why ? `<span class="soft">${q.why}</span>` : ''}`
      : `<b>Chưa đúng.</b> Đáp án: <span class="ru">${esc(shown)}</span>${q.why ? `<div class="small soft" style="margin-top:4px">${q.why}</div>` : ''}`;
  });
  return correct;
}

/* ---------- 4. Nạp từ vựng của bài vào bộ thẻ ---------- */
function seedCards(vocab) {
  if (!vocab || !vocab.length) return 0;
  const d = Store.load();
  let added = 0;
  vocab.forEach(v => {
    if (!d.cards[v.ru]) {
      d.cards[v.ru] = { vn: v.vn, ef: 2.5, n: 0, iv: 0, due: today() };
      added++;
    } else if (!d.cards[v.ru].vn) {
      d.cards[v.ru].vn = v.vn;
    }
  });
  Store.save();
  return added;
}
