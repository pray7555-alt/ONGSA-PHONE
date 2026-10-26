/* =====================================================================
   ===================================================================== */
(function () {
    'use strict';

    /* ------------------------------------------------------------------
       ------------------------------------------------------------------ */
    const RULES = [
        {
            keys: ['เลิกกัน', 'เลิก', 'พอแล้ว', 'ไม่รักแล้ว'], replies: [
                ['องศาพูดอะไรเนี่ย…', 'มุกใช่มั้ยบอกมาเดี๋ยวนี้เลยนะ'],
                ['ล้อเล่นใช่ไหม', 'บอกมาเดี๋ยวนี้ว่าล้อเล่น']]
        },
        {
            keys: ['ขอโทษ', 'โทษที', 'ขออภัย'], replies: [
                ['ไม่เป็นไรนะองศา', 'คราวหน้าก็อย่าทำอีกนะ'],
                ['ให้อภัยแล้ว~', 'ไว้เจอกันเดี๋ยวกอดคืนนะ'],
                ['อื้อ ไม่โกรธแล้ว', 'องศานี่นะ']]
        },
        {
            keys: ['งอน', 'โกรธ'], replies: [
                ['ไม่ได้งอนสักหน่อย', '(งอน)'],
                ['จะง้อมั้ยล่ะ'],
                ['ถ้าองศาโทรมา เราก็หายงอน', 'แต่ตอนนี้ยังงอนอยู่']]
        },
        {
            keys: ['ไม่สบาย', 'ป่วย', 'ปวดหัว', 'เป็นไข้', 'ตัวร้อน'], replies: [
                ['องศาไม่สบายเหรอ', 'กินยาหรือยัง พักผ่อนเยอะ ๆ นะ'],
                ['ดูแลตัวเองด้วยสิองศา', 'เราเป็นห่วง']]
        },
        {
            keys: ['น่ารัก', 'สวย', 'หล่อ', 'ดูดี', 'ชมนะ'], replies: [
                ['พูดแบบนี้อีกแล้ว', 'เขินหมดแล้วเนี่ย'],
                ['ปากหวานจัง', 'แต่ชอบ'],
                ['ก็รู้ตัวอยู่แล้วนะ', 'อ่ะ ล้อเล่นนน']]
        },
        {
            keys: ['รัก'], replies: [
                ['เราก็รักองศานะ', '♥️'],
                ['พูดแบบนี้ตอนนี้ได้ไง', 'เราก็รักหมาที่ชื่อองศาที่สุดเลยยยย'],
                ['รู้แล้วว', 'รักเหมือนกันนะ']]
        },
        {
            keys: ['คิดถึง', 'miss you'], replies: [
                ['เราก็คิดถึงองศา', 'คิดถึงมากเลย'],
                ['อยากเจอองศาจัง'],
                ['กำลังคิดอยู่เลยว่าองศาจะทักมาหาเรามั้ย', 'เราก็คิดถึงองศานะ']]
        },
        {
            keys: ['อรุณสวัสดิ์', 'ตื่นแล้ว', 'ตื่นยัง', 'ตอนเช้า', 'เช้านี้', 'เช้า', 'มอนิ่ง'], replies: [
                ['อรุณสวัสดิ์นะ☀️', 'กินข้าวเช้าด้วย'],
                ['ตื่นเร็วจังองศา', 'เรายังงัวเงียอยู่เลย']]
        },
        {
            keys: ['ฝันดี', 'ไปนอนแล้ว', 'ไปนอนนะ', 'ราตรีสวัสดิ์', 'นอนแล้วนะ', 'นอนก่อน'], replies: [
                ['ฝันดีนะ', 'ถ้าฝันถึงเรา'],
                ['ราตรีสวัสดิ์นะองศา'],
                ['อื้อ ฝันดี', 'รักนะ']]
        },
        {
            keys: ['ง่วง', 'นอนไม่หลับ', 'นอน'], replies: [
                ['ง่วงก็นอนสิ', 'อย่านอนดึกมากนะ'],
                ['เราก็ง่วง', 'แต่ยังอยากคุยกับองศาอยู่']]
        },
        {
            keys: ['กินข้าว', 'กินอะไร', 'กินยัง', 'หิว', 'อาหาร', 'มื้อเย็น', 'มื้อเที่ยง'], replies: [
                ['ยังเลย', 'องศากินข้าวหรือยัง'],
                ['กินแล้ววว', 'องศาล่ะ'],
                ['หิวเหมือนกัน', 'อยากกินด้วยกันกับองศาจัง']]
        },
        {
            keys: ['ทำอะไรอยู่', 'ทำไรอยู่', 'ทำไรอ่ะ', 'ทำไรอะ', 'ทำอะไรอ่ะ', 'ทำไรเหรอ'], replies: [
                ['กำลังรอข้อความองศาอยู่พอดี', 'ล้อเล่นนน แต่ก็จริงนะ'],
                ['ไม่ได้ทำอะไรเลย', 'องศาล่ะ']]
        },
        {
            keys: ['อยู่ไหม', 'อยู่มั้ย', 'อยู่หรือเปล่า', 'อยู่เปล่า'], replies: [
                ['อยู่สิ', 'องศามีอะไรเหรอ']]
        },
        {
            keys: ['เหนื่อย', 'เครียด', 'เศร้า', 'ท้อ', 'ร้องไห้', 'ไม่ไหว'], replies: [
                ['เหนื่อยมากมั้ย', 'พักก่อนนะ'],
                ['องศาเป็นอะไรหรือเปล่า', 'เล่าให้เราฟังได้นะ']]
        },
        {
            keys: ['เหงา', 'เบื่อ'], replies: [
                ['ก็มีเราอยู่นี่ไง', 'คุยกับเราได้ตลอดนะ'],
                ['งั้นก็คุยกับเราไปเรื่อย ๆ เลย']]
        },
        {
            keys: ['ขอบคุณ', 'ขอบใจ', 'thank'], replies: [
                ['ไม่เป็นไร', 'ระหว่างเราไม่ต้องขอบคุณหรอก']]
        },
        {
            keys: ['เรียน', 'สอบ', 'การบ้าน', 'ทำงาน', 'งานเยอะ'], replies: [
                ['เหนื่อยแต่ก็สู้', 'องศาล่ะ'],
                ['เรียนอยู่ แต่ใจลอยไปหาองศาตลอดเลย']]
        },
        {
            keys: ['ชอบ'], replies: [
                ['เราก็ชอบองศา', 'มากกว่าที่องศาคิดอีก'],
                ['ชอบสิ', 'ถามมาได้']]
        },
        {
            keys: ['ไปก่อน', 'ไปนะ', 'บาย', 'แล้วเจอกัน', 'ไปแล้วนะ'], replies: [
                ['รักนะ'],
                ['อื้อ ♥️']]
        },
        {
            keys: ['555', 'ฮ่า', 'ขำ'], replies: [
                ['ขำอะไรเนี่ย'],
                ['องศานี่นะ']]
        },
        {
            keys: ['ใช่ไหม', 'ใช่มั้ย', 'จริงไหม', 'จริงมั้ย', 'ใช่หรือเปล่า'], replies: [
                ['ใช่สิ', 'แน่นอน'],
                ['ก็ใช่นั่นแหละ']]
        },
        {
            keys: ['MilkLove Fancon'], replies: [
                ['MILK LOVE WHIMSICAL HOUSE FANCON', 'วันที่ 15 พฤศจิกายน 2569', 'ซื้อบัตร Livestream ได้ที่ ThaiTicketmajor.com นะคะ']]
        },
        {
            keys: ['MilkLove', 'มิ้ลค์เลิฟ'], replies: [
                ['เป็นแฟนกัน']]
        },
        {
            keys: [/^(ได้|โอเค|ok|okay|อื้อ|อือ|อืม|ครับ|ค่ะ|จ้า)[\s!~.]*$/], replies: [
                ['อื้อ']]
        }
        
    ];

    /* ไม่เข้ากติกาไหนเลย → สุ่มจากชุดนี้ */
    const FALLBACK = [
        ['ว่าไง'],
        ['อื้อ~ แล้วยังไงต่อ'],
        ['เล่าให้ฟังต่อสิ', 'ฟังอยู่']
    ];

    /* ------------------------------------------------------------------ */
    const $ = (s, r) => (r || document).querySelector(s);
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const rand = (a, b) => a + Math.random() * (b - a);
    const sfx = n => {try {if (window.SFX && SFX[n]) SFX[n]();} catch (e) { } };
    const norm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();

    const lastPick = new Map();
    function pick(list, id) {
        if (list.length === 1) return list[0];
        let i;
        do {i = Math.floor(Math.random() * list.length);} while (i === lastPick.get(id));
        lastPick.set(id, i);
        return list[i];
    }
    function makeReply(text) {
        const t = norm(text);
        for (let i = 0; i < RULES.length; i++) {
            const hit = RULES[i].keys.some(k => k instanceof RegExp ? k.test(t) : t.includes(String(k).toLowerCase()));
            if (hit) return pick(RULES[i].replies, 'r' + i);
        }
        return pick(FALLBACK, 'fb');
    }

    /* ---------- วาดห้องแชทใหม่จากข้อมูล ---------- */
    let typingOn = false;
    function viewing() {return !!$('#instagram-screen.active input.dm-fi[data-free]');}
    function showTyping() {
        typingOn = true;
        const a = $('#ig-dm-messages'); if (!a || a.querySelector('.typing')) return;
        const c = window.__igChat(); const av = c && c.avatar ? '<img src="' + c.avatar + '" alt="">' : '';
        a.insertAdjacentHTML('beforeend', '<div class="dm-m in gs typing"><span class="dm-mav">' + av + '</span><div class="dm-b in tp"><i></i><i></i><i></i></div></div>');
        a.scrollTop = a.scrollHeight;
    }
    function hideTyping() {
        typingOn = false;
        document.querySelectorAll('#ig-dm-messages .typing').forEach(e => e.remove());
    }
    function render(pop) {
        const c = window.__igChat(), a = $('#ig-dm-messages'); if (!c || !a) return;
        Array.from(a.children).forEach(n => {if (!n.classList.contains('dm-intro')) n.remove();});
        a.insertAdjacentHTML('beforeend', window.__igBodyHtml(c));
        if (pop) {const ms = a.querySelectorAll('.dm-m'); const l = ms[ms.length - 1]; if (l) l.classList.add('pop');}
        if (typingOn) showTyping();
        a.scrollTop = a.scrollHeight;
    }

    /* ---------- ส่ง / ตอบ ---------- */
    let buf = [], timer = 0, queue = Promise.resolve();

    function submit(input, scr) {
        const v = input.value.trim(); if (!v) return;
        input.value = ''; scr.classList.remove('has-text');
        const c = window.__igChat(); if (!c) return;
        c.messages.push({type: 'outgoing', text: v});
        c.time = 'now'; c.activityAt = Date.now();
        sfx('send'); render(true);
        buf.push(v);
        clearTimeout(timer);
        timer = setTimeout(() => {          /* รอ 1.4 วิ เผื่อพิมพ์ต่อหลายข้อความ แล้วตอบรวมทีเดียว */
            const text = buf.join(' '); buf = [];
            queue = queue.then(() => answer(text));
        }, 1400);
        input.focus({preventScroll: true});
    }

    async function answer(text) {
        const c = window.__igChat(); if (!c) return;
        const msgs = makeReply(text);
        await sleep(rand(600, 1100));
        for (const m of msgs) {
            if (viewing()) showTyping();
            await sleep(rand(800, 1200) + m.length * 28);
            hideTyping();
            c.messages.push({type: 'incoming', text: m});
            c.time = 'now'; c.activityAt = Date.now();
            if (viewing()) {render(true); sfx('receive');}
            else {try {window.__igNotifyAway(m);} catch (e) { } }   /* ออกจากห้องแล้ว → badge + แบนเนอร์ */
            await sleep(250);
        }
    }

    /* ---------- เปลี่ยนช่องพิมพ์เดิม (readonly + แป้นจำลอง) ให้พิมพ์จริงได้ ---------- */
    function setup() {
        const scr = $('#instagram-screen .ios-app.ig-dm-app'); if (!scr) return;
        const old = $('.dm-pill', scr); if (!old || !old.querySelector('.dm-fi')) return;
        scr.querySelectorAll('.kb-tray,.ikb').forEach(e => e.remove());
        scr.classList.remove('kb-on');
        const pill = old.cloneNode(true);          /* โคลน = ล้าง event เดิมที่เปิดแป้นจำลอง */
        old.replaceWith(pill);
        const input = $('.dm-fi', pill), send = $('.dm-sendtxt', pill);
        input.readOnly = false;
        input.removeAttribute('readonly');
        input.removeAttribute('inputmode');
        input.setAttribute('enterkeyhint', 'send');
        input.setAttribute('autocomplete', 'off');
        input.dataset.free = '1';
        pill.style.cursor = 'text';
        input.addEventListener('input', () => scr.classList.toggle('has-text', !!input.value.trim()));
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.isComposing) {e.preventDefault(); submit(input, scr);}
        });
        if (send) {
            send.addEventListener('mousedown', e => e.preventDefault());   /* กดส่งแล้วคีย์บอร์ดไม่หุบ */
            send.addEventListener('click', () => submit(input, scr));
        }
        pill.addEventListener('click', () => input.focus({preventScroll: true}));
        if (typingOn) showTyping();
    }

    const _openChat = window.openInstagramChat;
    window.openInstagramChat = function (id) {
        const r = _openChat.apply(this, arguments);
        if (id === 'riku_new') setup();
        return r;
    };

    /* ---------- หน้ารายการ DM: เหลือห้องเดียว ---------- */
    function trimList() {
        const scr = document.getElementById('instagram-screen'); if (!scr) return;
        scr.querySelectorAll('.dm-row').forEach(row => {
            if (!/riku_new/.test(row.getAttribute('onclick') || '')) row.remove();
        });
        const notes = scr.querySelector('.ig-dm-notes');           /* โน้ตของเรา + ของแฟน เท่านั้น */
        if (notes) Array.from(notes.children).slice(2).forEach(n => n.remove());
        const req = scr.querySelector('.ig-dm-heading button');    /* ปุ่ม "คำขอ" */
        if (req) req.remove();
    }
    const _openDM = window.openInstagramDM;
    window.openInstagramDM = function () {
        const r = _openDM.apply(this, arguments);
        trimList();
        return r;
    };
})();