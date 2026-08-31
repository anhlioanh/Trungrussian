/* ============================================================
   phrases.js — KHO CÂU

   Từ rời không làm người ta nói được. Câu mới làm được, vì câu mang
   theo cả ngữ pháp lẫn hoàn cảnh dùng. File này là phần câu được
   chọn tay; kho câu trên web còn tự gom thêm 238 câu hội thoại nằm
   sẵn trong 114 bài học.

   Mỗi câu có:
     ru   — câu tiếng Nga (có dấu trọng âm)
     vn   — nghĩa tiếng Việt
     cat  — nhóm (xem PHRASE_CATS)
     when — DÙNG LÚC NÀO. Đây là trường quan trọng nhất: biết nghĩa
            mà không biết lúc nào được nói thì vẫn không dùng được.
     bad  — (chỉ nhóm 'error') cách nói sai mà người Việt hay mắc
     lv   — cấp độ gợi ý
   ============================================================ */

const PHRASE_CATS = [
  { id: 'song',  name: 'Câu cửa miệng',      icon: '💬', desc: 'Những câu người Nga nói suốt ngày mà sách giáo khoa ít dạy. Nghe hiểu được mấy câu này là hiểu được một nửa cuộc trò chuyện đời thường.' },
  { id: 'speak', name: 'Nói khác viết',      icon: '🗣️', desc: 'Người Nga nói ngoài đời không giống chữ trong sách. Phần này để em NGHE HIỂU được — còn khi viết và khi thi thì vẫn dùng dạng chuẩn.' },
  { id: 'error', name: 'Lỗi người Việt hay mắc', icon: '⚠️', desc: 'Những câu gần như người Việt nào học tiếng Nga cũng nói sai ít nhất một lần, vì dịch thẳng từ tiếng Việt sang.' },
  { id: 'idiom', name: 'Thành ngữ, tục ngữ', icon: '🇷🇺', desc: 'Thành ngữ và tục ngữ người Nga dùng thật trong đời sống, không phải loại chỉ có trong từ điển.' },
  { id: 'tease', name: 'Trêu nhau, đùa vui', icon: '😄', desc: 'Cách bạn bè Nga chọc nhau. Nói được mấy câu này đúng lúc là em không còn là "người nước ngoài đang học tiếng" nữa.' },
  { id: 'life',  name: 'Sống ở Nga',         icon: '🧳', desc: 'Câu cần đến trong những tình huống thật: cửa hàng, tàu xe, bệnh viện, ký túc xá, gặp thầy cô.' }
];

const PHRASES = [
  /* ---------- CÂU CỬA MIỆNG ---------- */
  { ru: 'Ну да.', vn: 'Ừ thì đúng vậy.', cat: 'song', lv: 'a1', when: 'Đồng ý nhưng hơi miễn cưỡng, kiểu "ừ thì công nhận". Khác với "Да" gọn gàng.' },
  { ru: 'Вот и́менно!', vn: 'Chính xác! Đúng cái đó!', cat: 'song', lv: 'a2', when: 'Khi ai đó nói trúng ý em đang nghĩ. Rất hay dùng trong tranh luận.' },
  { ru: 'Да ла́дно!', vn: 'Thật á? Thôi đi!', cat: 'song', lv: 'a2', when: 'Ngạc nhiên hoặc không tin. Tuỳ ngữ điệu mà thành "thật hả trời" hay "xạo đi".' },
  { ru: 'Ничего́ себе́!', vn: 'Ôi trời! Ghê thật!', cat: 'song', lv: 'a2', when: 'Ngạc nhiên mạnh, thường là ngạc nhiên tích cực. Nghĩa đen không liên quan gì tới nghĩa dùng.' },
  { ru: 'Поня́тно.', vn: 'Hiểu rồi.', cat: 'song', lv: 'a1', when: 'Xác nhận là đã hiểu. Nói cụt lủn quá thì nghe hơi lạnh nhạt, kiểu "à, thế à".' },
  { ru: 'Я́сно.', vn: 'Rõ rồi.', cat: 'song', lv: 'a1', when: 'Giống Понятно nhưng gọn hơn và dễ nghe lạnh hơn nữa. Với người lớn tuổi nên nói cả câu.' },
  { ru: 'В смы́сле?', vn: 'Ý là sao?', cat: 'song', lv: 'a2', when: 'Hỏi lại khi chưa hiểu ý người ta. Rất thông dụng, thân mật.' },
  { ru: 'Серьёзно?', vn: 'Thật đấy à?', cat: 'song', lv: 'a2', when: 'Hỏi lại cho chắc khi nghe tin bất ngờ.' },
  { ru: 'Ла́дно.', vn: 'Thôi được.', cat: 'song', lv: 'a1', when: 'Đồng ý kiểu xuôi theo, chấp nhận. Không trang trọng.' },
  { ru: 'Договори́лись!', vn: 'Chốt vậy nhé!', cat: 'song', lv: 'a2', when: 'Kết thúc một cuộc hẹn hoặc thoả thuận. Câu rất Nga, dùng được cả trong công việc.' },
  { ru: 'Не за что.', vn: 'Có gì đâu.', cat: 'song', lv: 'a1', when: 'Đáp lại "Спасибо". Đây là câu đáp phổ biến nhất, tự nhiên hơn "Пожалуйста".' },
  { ru: 'Кста́ти…', vn: 'Nhân tiện…', cat: 'song', lv: 'a2', when: 'Chuyển sang chuyện khác giữa cuộc trò chuyện.' },
  { ru: 'Коро́че,', vn: 'Nói ngắn gọn là,', cat: 'song', lv: 'b1', when: 'Tóm lại câu chuyện. Người trẻ dùng cực nhiều, đôi khi thành thói quen nói đệm.' },
  { ru: 'Слу́шай…', vn: 'Này…', cat: 'song', lv: 'a2', when: 'Mở lời với bạn bè trước khi nói chuyện gì đó. Với người trên thì nói "Слушайте".' },
  { ru: 'Как раз.', vn: 'Vừa đúng lúc. / Đúng cái đó.', cat: 'song', lv: 'b1', when: 'Khi cái gì đó đến đúng lúc hoặc vừa vặn.' },
  { ru: 'Всё в поря́дке.', vn: 'Mọi thứ ổn cả.', cat: 'song', lv: 'a2', when: 'Trấn an người khác, hoặc trả lời khi ai đó hỏi có sao không.' },
  { ru: 'Без пробле́м.', vn: 'Không vấn đề gì.', cat: 'song', lv: 'a2', when: 'Nhận lời giúp ai đó một cách nhẹ nhàng.' },
  { ru: 'Я не в ку́рсе.', vn: 'Tôi không nắm được chuyện đó.', cat: 'song', lv: 'b1', when: 'Nói mình không biết tin đó, lịch sự hơn "Я не знаю" cụt lủn.' },

  /* ---------- NÓI KHÁC VIẾT ---------- */
  { ru: 'не́ту', vn: 'không có (dạng nói của «нет»)', cat: 'speak', lv: 'a1',
    when: 'Nghe suốt ngoài đời: «У меня нету времени». Trong bài viết và bài thi thì LUÔN dùng «нет». Đây là dạng khẩu ngữ, không sai về giao tiếp nhưng sai trong văn viết.' },
  { ru: 'щас', vn: 'bây giờ (dạng nói của «сейча́с»)', cat: 'speak', lv: 'a2',
    when: 'Nói nhanh thì «сейчас» rút thành «щас». Chỉ để nghe hiểu — em viết ra là bị coi là lỗi chính tả.' },
  { ru: 'чё', vn: 'gì (dạng nói của «что»)', cat: 'speak', lv: 'a2',
    when: '«Чё делаешь?» = «Что делаешь?». Rất thân mật, chỉ dùng với bạn bè. Đừng nói với thầy cô hay người lạ.' },
  { ru: 'здра́сьте', vn: 'chào (dạng nói của «здра́вствуйте»)', cat: 'speak', lv: 'a1',
    when: 'Người Nga nói nhanh gần như luôn nuốt bớt. Em cứ đọc đủ «здравствуйте» cho chắc, nhưng phải nghe ra được dạng rút này.' },
  { ru: 'ты́ща', vn: 'nghìn (dạng nói của «ты́сяча»)', cat: 'speak', lv: 'a2',
    when: 'Hay nghe khi nói về tiền: «две тыщи рублей». Viết thì phải là «две тысячи рублей».' },
  { ru: 'ваще́', vn: 'nói chung, hoàn toàn (dạng nói của «вообще́»)', cat: 'speak', lv: 'b1',
    when: 'Khẩu ngữ mạnh, thường đi với cảm xúc: «Ваще круто!». Không dùng trong văn viết.' },
  { ru: 'У меня́ маши́на.', vn: 'Tôi có xe ô tô.', cat: 'speak', lv: 'a2',
    when: 'Trong nói chuyện, người Nga hay bỏ «есть» khi không nhấn vào chuyện CÓ hay KHÔNG: «У меня машина» thay vì «У меня есть машина». Cả hai đều đúng, nhưng nghĩa hơi khác nhau.' },
  { ru: 'Норма́льно.', vn: 'Bình thường. / Ổn.', cat: 'speak', lv: 'a1',
    when: 'Câu trả lời phổ biến nhất cho «Как дела?». Người Nga ít khi nói «Хорошо» — nói «Нормально» mới là tự nhiên.' },
  { ru: 'Дава́й!', vn: 'Thôi nhé! / Chào nhé!', cat: 'speak', lv: 'a2',
    when: 'Cách chào tạm biệt cực phổ biến qua điện thoại giữa bạn bè, nghĩa gốc là "nào, làm đi" nhưng dùng như "thôi nhé, cúp máy đây".' },
  { ru: 'Ну…', vn: 'Ừ thì… / Thế…', cat: 'speak', lv: 'a1',
    when: 'Tiếng đệm khi đang nghĩ, giống "ờ…" của tiếng Việt. Người Nga dùng liên tục.' },

  /* ---------- LỖI NGƯỜI VIỆT HAY MẮC ---------- */
  { ru: 'Я студе́нт.', bad: 'Я есть студе́нт.', vn: 'Tôi là sinh viên.', cat: 'error', lv: 'a1',
    when: 'Tiếng Nga ở thì hiện tại KHÔNG có động từ "là". Người Việt quen tiếng Anh nên hay thêm «есть» vào. Bỏ hẳn nó đi.' },
  { ru: 'У меня́ нет вре́мени.', bad: 'Я не име́ю вре́мя.', vn: 'Tôi không có thời gian.', cat: 'error', lv: 'a1',
    when: 'Tiếng Nga nói "ở chỗ tôi không có" chứ không nói "tôi không sở hữu". Và sau «нет» thì danh từ phải ở cách 2: вре́мени, chứ không phải вре́мя.' },
  { ru: 'Я люблю́ тебя́.', bad: 'Я люблю́ ты.', vn: 'Anh yêu em.', cat: 'error', lv: 'a1',
    when: 'Sau động từ, đại từ phải đổi sang cách 4: ты → тебя́. Người Việt hay quên vì tiếng Việt không đổi dạng từ.' },
  { ru: 'Ско́лько тебе́ лет?', bad: 'Ско́лько твой во́зраст?', vn: 'Bạn bao nhiêu tuổi?', cat: 'error', lv: 'a1',
    when: 'Tiếng Nga hỏi tuổi bằng cách 3: "với bạn bao nhiêu năm". Dịch thẳng "tuổi của bạn là bao nhiêu" nghe rất Tây, người Nga không nói vậy.' },
  { ru: 'Я рабо́таю на заво́де.', bad: 'Я рабо́таю в заво́де.', vn: 'Tôi làm ở nhà máy.', cat: 'error', lv: 'a1',
    when: 'Một số nơi bắt buộc đi với «на» chứ không phải «в»: на заводе, на работе, на почте, на вокзале. Đây là danh sách phải học thuộc, không có quy tắc.' },
  { ru: 'Я учу́сь в университе́те.', bad: 'Я изуча́ю в университе́те.', vn: 'Tôi học ở trường đại học.', cat: 'error', lv: 'a1',
    when: '«Учиться» = đi học ở đâu. «Изучать» = nghiên cứu môn gì, và bắt buộc phải có tân ngữ: «Я изучаю русский язык».' },
  { ru: 'Я ничего́ не понима́ю.', bad: 'Я понима́ю ничего́.', vn: 'Tôi chẳng hiểu gì cả.', cat: 'error', lv: 'a2',
    when: 'Tiếng Nga bắt buộc phủ định hai lần: có «ничего» thì phải có cả «не». Bỏ một trong hai là sai.' },
  { ru: 'Спаси́бо тебе́.', bad: 'Спаси́бо тебя́.', vn: 'Cảm ơn bạn.', cat: 'error', lv: 'a1',
    when: '«Спасибо» đi với cách 3 (cho ai), không phải cách 4. Nói trống không «Спасибо» cũng hoàn toàn ổn.' },
  { ru: 'Я хочу́, что́бы ты пришёл.', bad: 'Я хочу́ что ты пришёл.', vn: 'Tôi muốn bạn đến.', cat: 'error', lv: 'b1',
    when: 'Khi muốn NGƯỜI KHÁC làm gì thì phải dùng «чтобы» + động từ ở dạng quá khứ. Dùng «что» là sai hẳn cấu trúc.' },
  { ru: 'Ско́лько э́то сто́ит?', bad: 'Э́то сто́ит ско́лько?', vn: 'Cái này giá bao nhiêu?', cat: 'error', lv: 'a1',
    when: 'Từ để hỏi trong tiếng Nga đứng đầu câu, không đứng cuối như tiếng Việt.' },
  { ru: 'Мне нра́вится э́та кни́га.', bad: 'Я нра́влюсь э́ту кни́гу.', vn: 'Tôi thích quyển sách này.', cat: 'error', lv: 'a1',
    when: 'Câu này lật ngược so với tiếng Việt: quyển sách mới là chủ ngữ, còn "tôi" ở cách 3. Nghĩa đen là "quyển sách này làm vừa lòng tôi".' },
  { ru: 'Вчера́ я ходи́л в шко́лу.', bad: 'Вчера́ я иду́ в шко́лу.', vn: 'Hôm qua tôi đã đến trường.', cat: 'error', lv: 'a1',
    when: 'Tiếng Việt không đổi động từ theo thì, chỉ thêm "đã". Tiếng Nga bắt buộc đổi chính động từ. Có «вчера» thì động từ phải ở quá khứ.' },

  /* ---------- THÀNH NGỮ, TỤC NGỮ ---------- */
  { ru: 'Ни пу́ха ни пера́!', vn: 'Chúc may mắn! (trước kỳ thi, việc quan trọng)', cat: 'idiom', lv: 'b1',
    when: 'Phải đáp lại đúng câu «К чёрту!» — đáp «Спасибо» bị coi là xui. Gốc từ tục kiêng của thợ săn.' },
  { ru: 'К чёрту!', vn: '(câu đáp bắt buộc cho «Ни пуха ни пера!»)', cat: 'idiom', lv: 'b1',
    when: 'Chỉ dùng để đáp lại lời chúc trên. Ngoài ngữ cảnh đó thì đây là câu thô, đừng dùng bừa.' },
  { ru: 'Не бери́ в го́лову.', vn: 'Đừng để bụng. Đừng nghĩ ngợi.', cat: 'idiom', lv: 'a2',
    when: 'An ủi bạn bè khi họ đang lo lắng chuyện gì đó.' },
  { ru: 'Всё бу́дет хорошо́.', vn: 'Rồi mọi chuyện sẽ ổn thôi.', cat: 'idiom', lv: 'a1',
    when: 'Câu an ủi phổ biến nhất trong tiếng Nga.' },
  { ru: 'Ти́ше е́дешь — да́льше бу́дешь.', vn: 'Chậm mà chắc.', cat: 'idiom', lv: 'b1',
    when: 'Khuyên ai đó đừng vội. Tục ngữ rất quen thuộc, người Nga nào cũng biết.' },
  { ru: 'Семь раз отме́рь, оди́н раз отре́жь.', vn: 'Đo bảy lần, cắt một lần (uốn lưỡi bảy lần trước khi nói).', cat: 'idiom', lv: 'b1',
    when: 'Khuyên cân nhắc kỹ trước khi làm việc gì.' },
  { ru: 'У́тро ве́чера мудрене́е.', vn: 'Sáng suốt hơn buổi tối (ngủ một giấc rồi tính).', cat: 'idiom', lv: 'b1',
    when: 'Khuyên đừng quyết định lúc đang mệt hay đang rối, để mai tính.' },
  { ru: 'Друг познаётся в беде́.', vn: 'Hoạn nạn mới biết bạn hiền.', cat: 'idiom', lv: 'b1',
    when: 'Nói về tình bạn thật. Gần y hệt tục ngữ tiếng Việt.' },
  { ru: 'Терпе́ние и труд всё перетру́т.', vn: 'Có công mài sắt có ngày nên kim.', cat: 'idiom', lv: 'b1',
    when: 'Động viên ai đó kiên trì — hợp với chuyện học tiếng Nga.' },
  { ru: 'В тесноте́, да не в оби́де.', vn: 'Chật nhưng vui (chật chội mà chan hoà).', cat: 'idiom', lv: 'b2',
    when: 'Nói khi nhiều người chen chúc trong không gian nhỏ mà vẫn vui vẻ — bàn ăn đông, phòng ký túc chật.' },
  { ru: 'Де́ло в том, что…', vn: 'Vấn đề là ở chỗ…', cat: 'idiom', lv: 'b1',
    when: 'Mở đầu khi sắp giải thích lý do. Cực kỳ hay dùng, cả trong nói lẫn viết.' },
  { ru: 'Одна́ голова́ хорошо́, а две — лу́чше.', vn: 'Một cây làm chẳng nên non.', cat: 'idiom', lv: 'b1',
    when: 'Rủ ai đó cùng nghĩ, cùng làm.' },

  /* ---------- TRÊU NHAU, ĐÙA VUI ---------- */
  { ru: 'Ну ты даёшь!', vn: 'Cậu ghê thật đấy!', cat: 'tease', lv: 'b1',
    when: 'Nửa khen nửa trách, khi ai đó làm chuyện gì bất ngờ. Ngữ điệu quyết định là khen hay là trách.' },
  { ru: 'Шу́тка!', vn: 'Đùa thôi!', cat: 'tease', lv: 'a2',
    when: 'Chữa lại ngay sau khi nói đùa, phòng người ta tưởng thật.' },
  { ru: 'Я пошути́л.', vn: 'Tôi đùa đấy.', cat: 'tease', lv: 'a2',
    when: 'Con gái nói «Я пошутила». Nhớ đổi đuôi theo giới tính.' },
  { ru: 'Ага́, коне́чно!', vn: 'Ừ, chắc rồi! (mỉa mai)', cat: 'tease', lv: 'b1',
    when: 'Nói khi KHÔNG tin lời người kia. Nghe chữ thì là đồng ý, nghe giọng thì là "xạo".' },
  { ru: 'Ты чего́?', vn: 'Cậu sao thế?', cat: 'tease', lv: 'a2',
    when: 'Hỏi khi ai đó cư xử lạ. Thân mật, không dùng với người lớn tuổi.' },
  { ru: 'Хва́тит прика́лываться.', vn: 'Thôi đùa đi.', cat: 'tease', lv: 'b1',
    when: 'Bảo bạn ngừng chọc mình. Khẩu ngữ, chỉ với bạn bè.' },
  { ru: 'Не смеши́ меня́.', vn: 'Đừng làm tôi cười.', cat: 'tease', lv: 'b1',
    when: 'Khi nghe điều gì buồn cười hoặc vô lý.' },
  { ru: 'Соня!', vn: 'Đồ ngủ nướng!', cat: 'tease', lv: 'a2',
    when: 'Trêu người dậy muộn. Trùng với tên riêng Соня nên là một câu chơi chữ quen thuộc.' },
  { ru: 'Кто ра́но встаёт, тому́ Бог подаёт.', vn: 'Ai dậy sớm thì trời cho lộc.', cat: 'tease', lv: 'b1',
    when: 'Tục ngữ thật, nhưng hay được nói kiểu trêu người ngủ dậy muộn.' },
  { ru: 'Молоде́ц!', vn: 'Giỏi lắm!', cat: 'tease', lv: 'a1',
    when: 'Khen thật lòng. Nhưng nói kéo dài giọng thì thành mỉa. Người Nga dùng câu này rất nhiều với trẻ con và người học.' },

  /* ---------- SỐNG Ở NGA ---------- */
  { ru: 'Мо́жно посмотре́ть?', vn: 'Tôi xem được không?', cat: 'life', lv: 'a1', when: 'Trong cửa hàng, khi muốn cầm xem món đồ.' },
  { ru: 'Я про́сто смотрю́.', vn: 'Tôi chỉ xem thôi.', cat: 'life', lv: 'a1', when: 'Khi nhân viên hỏi có cần giúp gì không mà em chưa muốn mua.' },
  { ru: 'Мо́жно ка́ртой?', vn: 'Trả thẻ được không?', cat: 'life', lv: 'a1', when: 'Ở quầy thanh toán. Ngắn gọn, đúng cách người Nga hỏi.' },
  { ru: 'Переда́йте, пожа́луйста.', vn: 'Làm ơn chuyền hộ.', cat: 'life', lv: 'a2', when: 'Trên xe buýt, nhờ chuyền tiền vé lên cho tài xế — chuyện rất thường ở Nga.' },
  { ru: 'Вы выхо́дите?', vn: 'Anh/chị có xuống không?', cat: 'life', lv: 'a2', when: 'Hỏi người đứng trước cửa xe khi em sắp xuống. Không hỏi mà chen là bị nhắc ngay.' },
  { ru: 'Я пло́хо себя́ чу́вствую.', vn: 'Tôi thấy trong người không khoẻ.', cat: 'life', lv: 'a2', when: 'Câu đầu tiên nói khi đi khám bệnh hoặc xin nghỉ.' },
  { ru: 'Повтори́те, пожа́луйста, ме́дленнее.', vn: 'Làm ơn nhắc lại chậm hơn.', cat: 'life', lv: 'a1', when: 'Câu cứu mạng số một của người mới học. Không có gì phải ngại khi nói câu này.' },
  { ru: 'Я не совсе́м по́нял.', vn: 'Tôi chưa hiểu lắm.', cat: 'life', lv: 'a2', when: 'Lịch sự hơn «Я не понимаю». Con gái nói «поняла».' },
  { ru: 'Извини́те, я не ру́сский. Говори́те, пожа́луйста, ме́дленно.', vn: 'Xin lỗi, tôi không phải người Nga. Làm ơn nói chậm thôi.', cat: 'life', lv: 'a1', when: 'Nói trước là người ta sẽ kiên nhẫn hơn hẳn. Con gái nói «я не русская».' },
  { ru: 'Мо́жно зада́ть вопро́с?', vn: 'Em hỏi một câu được không ạ?', cat: 'life', lv: 'a2', when: 'Trong lớp học, trước khi hỏi thầy cô. Lịch sự và chuẩn mực.' },
  { ru: 'Когда́ бу́дет заче́т?', vn: 'Khi nào thì có bài kiểm tra ạ?', cat: 'life', lv: 'b1', when: 'Зачёт là kiểm tra đạt/không đạt, khác với экзамен có chấm điểm. Sinh viên ở Nga hỏi câu này suốt.' },
  { ru: 'Мне ну́жно продли́ть регистра́цию.', vn: 'Tôi cần gia hạn đăng ký cư trú.', cat: 'life', lv: 'b1', when: 'Việc bắt buộc với người nước ngoài ở Nga. Nhớ câu này để nói đúng chỗ cần nói.' }
];
