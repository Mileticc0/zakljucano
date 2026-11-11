/* ZAKLJUČANO — zajednički podaci i logika za sve stranice (window.ZK) */
(function () {
  if (window.ZK) return;
  const ZK = (window.ZK = {});
  ZK.PHONE = '+381 60 123 4567'; ZK.TEL = '+381601234567'; ZK.WA = '381601234567'; ZK.EMAIL = 'ekipa@zakljucano.rs';
  ZK.ADDRESS = 'Ulica i broj, 11000 Beograd';
  ZK.MAPS = 'https://www.google.com/maps/search/?api=1&query=Beograd';
  ZK.W3F_KEY = 'OVDE_KLJUC'; // Web3Forms access_key
  ZK.IMG = 'slike/';

  ZK.ROOMS = [
    { id: 'podrum', no: '01', page: 'soba-podrum.dc.html', img: 'podrum-hodnik.webp', gallery: ['podrum-vrata.webp', 'podrum-laboratorija.webp', 'podrum-apoteka.webp', 'podrum-mikroskop.webp'],
      diff: 4, escape: 38, min: 2, max: 6, age: 16, fear: 3, light: '#7CC4A0', glow: 'rgba(124,196,160,.55)', tint: 'rgba(124,196,160,.16)',
      sr: { name: 'Podrum doktora Vuka', genre: 'Horor', teaser: 'Doktor Vuk nije izašao iz podruma od 1974. Večeras ste vi njegovi pacijenti.', alt: 'Mračan betonski hodnik podruma sa cevima i jednom sijalicom',
        story: ['Beograd, novembar 1974. Doktor Vuk prestaje da dolazi na kliniku. Komšije prijavljuju svetlo u podrumu koje gori svake noći.', 'Policija ulazi tri nedelje kasnije. Nalazi laboratoriju, bočice bez etiketa i dnevnik sa poslednjom rečenicom: „Sledeći pacijenti stižu u 21:00.“', 'Vrata za vama se zaključavaju. Imate 60 minuta da otkrijete šta je doktor radio — pre nego što se vrati.'],
        facts: ['Jedina horor soba — mrak, zvuci i iznenađenja', 'Od 16 godina', 'Dva prostora povezana tajnim prolazom', 'Bez fizičkog kontakta glumaca'],
        caps: ['Vrata podruma', 'Stara laboratorija', 'Apoteka doktora Vuka', 'Mikroskop sa preparatom'] },
      en: { name: 'Dr. Vuk’s Basement', genre: 'Horror', teaser: 'Dr. Vuk hasn’t left his basement since 1974. Tonight, you are his patients.', alt: 'Dark concrete basement corridor with pipes and a single bulb',
        story: ['Belgrade, November 1974. Dr. Vuk stops coming to the clinic. Neighbours report a light in the basement that burns every night.', 'Police enter three weeks later. They find a lab, unlabeled vials and a diary ending with: “The next patients arrive at 9 pm.”', 'The door locks behind you. You have 60 minutes to find out what the doctor was doing — before he returns.'],
        facts: ['Our only horror room — darkness, sounds and surprises', '16+', 'Two spaces joined by a secret passage', 'No physical contact with actors'],
        caps: ['Basement door', 'The old lab', 'Dr. Vuk’s pharmacy', 'Microscope with a specimen'] } },
    { id: 'sef', no: '02', page: 'soba-sef.dc.html', img: 'sef-vrata.webp', gallery: ['sef-trezor.webp', 'sef-sefovi.webp'],
      diff: 3, escape: 52, min: 2, max: 6, age: 10, fear: 0, light: '#E2B45C', glow: 'rgba(226,180,92,.6)', tint: 'rgba(226,180,92,.16)',
      sr: { name: 'Sef Narodne banke', genre: 'Pljačka', teaser: 'Trezor se zaključava u ponoć. Alarm kasni tačno 60 minuta — ni sekundu više.', alt: 'Ukrašena mesingana vrata starog bankarskog sefa',
        story: ['Plan je savršen. Unutrašnji čovek je isključio alarm na tačno 60 minuta, a čuvar je na pauzi.', 'Između vas i zlata stoje trezor iz 1931, zid sefova sa brojevima i sat koji ne prašta.', 'Uđite, otvorite trezor i izađite pre nego što se alarm vrati. Niko ne sme da zna da ste bili tu.'],
        facts: ['Dobra za prvu igru', 'Od 10 godina uz odraslu osobu', 'Puno mehaničkih zagonetki', 'Bez strašnih momenata'],
        caps: ['Glavni trezor', 'Zid sefova'] },
      en: { name: 'National Bank Vault', genre: 'Heist', teaser: 'The vault locks at midnight. The alarm is exactly 60 minutes late — not a second more.', alt: 'Ornate brass door of an old bank vault',
        story: ['The plan is perfect. The inside man has disabled the alarm for exactly 60 minutes, and the guard is on a break.', 'Between you and the gold: a 1931 vault, a wall of numbered safe boxes and a clock that forgives nothing.', 'Get in, open the vault and get out before the alarm comes back. No one can know you were there.'],
        facts: ['Good for a first game', '10+ with an adult', 'Lots of mechanical puzzles', 'No scares'],
        caps: ['Main vault', 'Wall of safe boxes'] } },
    { id: 'kabina', no: '03', page: 'soba-kabina.dc.html', img: 'kabina-hodnik.webp', gallery: ['kabina-kupe.webp', 'kabina-restoran.webp', 'kabina-salon.webp'],
      diff: 3, escape: 47, min: 2, max: 5, age: 12, fear: 1, light: '#E26A50', glow: 'rgba(226,106,80,.55)', tint: 'rgba(226,106,80,.16)',
      sr: { name: 'Kabina 7 – Orijent ekspres', genre: 'Misterija', teaser: 'Putnik iz kabine 7 nestao je između Niša i Sofije. Voz ne staje dok ne otkrijete zašto.', alt: 'Uski hodnik vagona sa drvenim zidovima i crvenim tepihom',
        story: ['Orijent ekspres, 1936. Voz je napustio Niš u 22:40. Kad je kondukter pokucao na kabinu 7, unutra nije bilo nikoga.', 'Prtljag je tu. Karta je tu. Kafa je još topla. A svaki putnik u vagonu ima alibi koji se ne slaže sa ostalima.', 'Pregledajte kupe, salon i vagon-restoran. Do Sofije ima tačno 60 minuta.'],
        facts: ['Najjača priča među našim sobama', 'Od 12 godina', 'Za 2–5 igrača', 'Blaga napetost, bez strašnih momenata'],
        caps: ['Kupe putnika', 'Vagon-restoran', 'Salon vagon'] },
      en: { name: 'Cabin 7 – Orient Express', genre: 'Mystery', teaser: 'The passenger from cabin 7 vanished between Niš and Sofia. The train won’t stop until you find out why.', alt: 'Narrow train corridor with wooden walls and a red carpet',
        story: ['Orient Express, 1936. The train left Niš at 22:40. When the conductor knocked on cabin 7, no one was inside.', 'The luggage is there. The ticket is there. The coffee is still warm. And every passenger has an alibi that doesn’t match the others.', 'Search the compartment, the salon and the dining car. Sofia is exactly 60 minutes away.'],
        facts: ['Our strongest story', '12+', 'For 2–5 players', 'Mild tension, no scares'],
        caps: ['Passenger compartment', 'Dining car', 'Salon car'] } },
    { id: 'lab', no: '04', page: 'soba-laboratorija.dc.html', img: 'lab-reaktor.webp', gallery: ['lab-masine.webp', 'lab-hodnik.webp'],
      diff: 5, escape: 24, min: 3, max: 6, age: 14, fear: 1, light: '#62AEEA', glow: 'rgba(98,174,234,.55)', tint: 'rgba(98,174,234,.16)',
      sr: { name: 'Laboratorija 0', genre: 'Sci-fi', teaser: 'Reaktor je nestabilan, a protokol za gašenje zaključan. Šifra je negde u laboratoriji.', alt: 'Futuristički reaktor koji svetli plavo, ispred njega silueta naučnika',
        story: ['Podzemni institut, nivo minus tri. Eksperiment „Nula“ je otišao predaleko, a glavni naučnik je zaključao protokol za gašenje i nestao.', 'Reaktor se zagreva. Sistemi su na rezervnom napajanju. Hodnici svetle zeleno.', 'Imate 60 minuta da rekonstruišete šifru, stabilizujete jezgro i izađete živi.'],
        facts: ['Najteža soba — izađe samo 24% timova', 'Od 14 godina', 'Za 3–6 igrača', 'Elektronske zagonetke i svetlosni efekti'],
        caps: ['Mašinska sala', 'Hodnik nivoa –3'] },
      en: { name: 'Laboratory 0', genre: 'Sci-fi', teaser: 'The reactor is unstable and the shutdown protocol is locked. The code is somewhere in the lab.', alt: 'Futuristic reactor glowing blue with a scientist’s silhouette',
        story: ['Underground institute, level minus three. Experiment “Zero” went too far, and the lead scientist locked the shutdown protocol and disappeared.', 'The reactor is heating up. Systems are on backup power. The corridors glow green.', 'You have 60 minutes to rebuild the code, stabilise the core and get out alive.'],
        facts: ['Hardest room — only 24% escape', '14+', 'For 3–6 players', 'Electronic puzzles and light effects'],
        caps: ['Machine hall', 'Level –3 corridor'] } }
  ];
  ZK.room = id => ZK.ROOMS.find(r => r.id === id) || ZK.ROOMS[0];

  ZK.TIMES = ['12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00', '22:30'];
  ZK.PRICES = { 2: 2400, 3: 2100, 4: 1900, 5: 1800, 6: 1700 };
  ZK.ADDONS = [
    { id: 'foto', price: 800, sr: 'Fotografija tima (štampana + digitalna)', en: 'Team photo (print + digital)' },
    { id: 'torta', price: 2900, sr: 'Rođendanska torta', en: 'Birthday cake' },
    { id: 'eng', price: 0, sr: 'Igra na engleskom jeziku', en: 'Game in English' }
  ];
  ZK.DEPOSIT = 0.2;

  // BOOKED — demo zauzetost (deterministički po sobi, datumu i satu)
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return Math.abs(h); };
  ZK.BOOKED = (room, dateKey, time) => hash(room + dateKey + time) % 100 < 40;
  ZK.toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  ZK.dateKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  ZK.parseKey = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  ZK.slotsFor = (room, dateKey) => {
    const now = new Date(), today = ZK.dateKey(now) === dateKey, nm = now.getHours() * 60 + now.getMinutes();
    return ZK.TIMES.map(time => {
      const past = today && ZK.toMin(time) <= nm + 15;
      return { time, past, booked: !past && ZK.BOOKED(room, dateKey, time), free: !past && !ZK.BOOKED(room, dateKey, time) };
    });
  };
  ZK.fmt = n => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  ZK.MONTHS = { sr: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'], en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] };
  ZK.DAYS = { sr: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'], en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] };
  ZK.fmtDate = (k, L) => { const d = ZK.parseKey(k); L = L || ZK.lang(); return L === 'en' ? `${ZK.DAYS.en[d.getDay()]}, ${ZK.MONTHS.en[d.getMonth()]} ${d.getDate()}` : `${ZK.DAYS.sr[d.getDay()]}, ${d.getDate()}. ${ZK.MONTHS.sr[d.getMonth()]}`; };

  // Rang-lista (demo podaci)
  const TEAMS = ['Bez nagoveštaja', 'Ključari', 'Porodica Petrović', 'Noćna smena', 'Tim Lupa', 'Dorćolci', 'Šifranti', 'Zemunski detektivi', 'Četvorka sa Vračara', 'Kancelarija 404', 'Brava i ključ', 'Ekipa iz Zemuna', 'Sherlock & co', 'Beogradski šapat', 'Poslednji voz', 'Trezor tim', 'Mali Pirot', 'Laboratorija 1', 'Crveni konac', 'Pisaća mašina'];
  ZK.LEADERBOARD = (() => {
    const out = [], now = new Date();
    for (let m = 0; m < 3; m++) {
      const d = new Date(now.getFullYear(), now.getMonth() - m, 1);
      ZK.ROOMS.forEach((r, ri) => {
        for (let k = 0; k < 4; k++) {
          const h = hash(r.id + m + k), base = 34 + r.diff * 2 + (h % 17), sec = h % 60;
          out.push({ team: TEAMS[(h + ri + k) % TEAMS.length], room: r.id, time: `${base}:${String(sec).padStart(2, '0')}`, hints: h % 4, date: ZK.dateKey(new Date(d.getFullYear(), d.getMonth(), 1 + (h % 26))) });
        }
      });
    }
    return out;
  })();
  ZK.MEDALS = ['linear-gradient(145deg,#ECCB86,#B8893E 55%,#7E5A22)', 'linear-gradient(145deg,#DCCFB4,#A99A7C 55%,#6E634F)', 'linear-gradient(145deg,#D9A070,#A8683A 55%,#6B3E1E)'];

  // localStorage u try/catch
  ZK.ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
    json(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } },
    put(k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} }
  };

  // Analitika — sve preko jedne funkcije
  ZK.track = (name, params = {}) => {
    try { if (window.gtag) window.gtag('event', name, params); } catch (e) {}
    try { console.info('[track]', name, params); } catch (e) {}
  };

  // Jezik SR/EN — elementi sa data-en
  ZK.lang = () => (ZK.ls.get('zk_lang') === 'en' ? 'en' : 'sr');
  ZK.applyLang = (root) => {
    const en = ZK.lang() === 'en';
    document.documentElement.lang = en ? 'en' : 'sr';
    (root || document).querySelectorAll('[data-en]').forEach(el => {
      if (el.dataset.sr == null) el.dataset.sr = el.textContent;
      const want = en ? el.dataset.en : el.dataset.sr;
      if (el.textContent !== want) el.textContent = want;
    });
    (root || document).querySelectorAll('[data-en-ph]').forEach(el => {
      if (el.dataset.srPh == null) el.dataset.srPh = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', en ? el.dataset.enPh : el.dataset.srPh);
    });
  };
  ZK.setLang = l => { ZK.ls.set('zk_lang', l); ZK.applyLang(); window.dispatchEvent(new CustomEvent('zk-lang', { detail: l })); };
  const mo = new MutationObserver(muts => { if (ZK.lang() !== 'en') return; for (const m of muts) m.addedNodes.forEach(n => { if (n.nodeType === 1) { if (n.hasAttribute && n.hasAttribute('data-en')) ZK.applyLang(n.parentNode || document); else ZK.applyLang(n); } }); });
  const startMO = () => { mo.observe(document.body, { childList: true, subtree: true }); ZK.applyLang(); };
  if (document.body) startMO(); else document.addEventListener('DOMContentLoaded', startMO);

  // Validacija
  ZK.cleanPhone = s => (s || '').replace(/[\s\-\/().]/g, '');
  ZK.validPhone = s => /^(\+381|00381|0)(6\d{7,8}|[1-3]\d{6,8})$/.test(ZK.cleanPhone(s));
  ZK.validEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((s || '').trim());

  // Popusti: zagonetka (TRAG10) i vaučeri
  ZK.vouchers = () => Object.assign({ 'ZK-POKLON-2026': 4800 }, ZK.ls.json('zk_vouchers', {}));
  ZK.checkCode = (raw, subtotal, L) => {
    const code = (raw || '').trim().toUpperCase(); L = L || ZK.lang();
    if (!code) return null;
    if (code === 'TRAG10') return { ok: true, code, kind: 'promo', amount: Math.round(subtotal * 0.1), label: L === 'en' ? 'Puzzle solved — 10%' : 'Rešena zagonetka — 10%' };
    const v = ZK.vouchers()[code];
    if (v) return { ok: true, code, kind: 'voucher', amount: Math.min(v, subtotal), label: (L === 'en' ? 'Voucher ' : 'Vaučer ') + code };
    return { ok: false, code, msg: L === 'en' ? 'This code doesn’t exist or has expired.' : 'Ovaj kod ne postoji ili je istekao.' };
  };

  // Forme: Web3Forms + WhatsApp
  ZK.send = async (subject, data) => {
    const payload = Object.assign({ access_key: ZK.W3F_KEY, subject, from_name: 'ZAKLJUČANO sajt' }, data);
    if (ZK.W3F_KEY === 'OVDE_KLJUC') { console.info('[Web3Forms demo] ', payload); return { ok: true, demo: true }; }
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
      const j = await r.json(); return { ok: !!j.success, msg: j.message };
    } catch (e) { return { ok: false, msg: 'network' }; }
  };
  ZK.waText = (title, data) => [`*${title}*`, ...Object.entries(data).filter(([, v]) => v !== '' && v != null).map(([k, v]) => `${k}: ${v}`)].join('\n');
  ZK.openWA = (text) => { ZK.track('whatsapp_click', { source: 'form' }); window.open(`https://wa.me/${ZK.WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener'); };

  ZK.newId = () => 'ZK-' + String(Math.floor(100000 + Math.random() * 900000));
  ZK.DEMO_BOOKINGS = [
    { id: 'ZK-482913', email: 'test@zakljucano.rs', room: 'sef', date: null, time: '19:30', players: 4, team: 'Demo tim', name: 'Demo korisnik', total: 7600, paid: 7600, mode: 'full' }
  ];
  ZK.findBooking = (id, email) => {
    id = (id || '').trim().toUpperCase(); email = (email || '').trim().toLowerCase();
    const all = ZK.ls.json('zk_bookings', []).concat(ZK.DEMO_BOOKINGS.map(b => Object.assign({}, b, { date: b.date || ZK.dateKey(new Date(Date.now() + 3 * 864e5)) })));
    return all.find(b => b.id === id && (b.email || '').toLowerCase() === email) || null;
  };
  ZK.saveBooking = b => { const all = ZK.ls.json('zk_bookings', []).filter(x => x.id !== b.id); all.push(b); ZK.ls.put('zk_bookings', all); };

  // Motion: Lenis + GSAP ScrollTrigger
  ZK.reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  ZK.coarse = () => window.matchMedia && matchMedia('(pointer: coarse)').matches;
  ZK.motion = () => {
    if (ZK._motion || ZK.reduced()) return;
    ZK._motion = true;
    const go = (n = 0) => {
      const g = window.gsap, ST = window.ScrollTrigger;
      const els = document.querySelectorAll('[data-up],[data-clip]');
      if (!g || !ST || (!els.length && n < 40)) { if (n < 80) setTimeout(() => go(n + 1), 100); return; }
      g.registerPlugin(ST);
      if (window.Lenis && !ZK.lenis) { ZK.lenis = new window.Lenis({ lerp: 0.11 }); ZK.lenis.on('scroll', ST.update); g.ticker.add(t => ZK.lenis.raf(t * 1000)); g.ticker.lagSmoothing(0); }
      const ease = 'expo.out', inView = el => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; };
      const anim = (el, from, to) => {
        if (el.dataset.zkAnim) return; el.dataset.zkAnim = '1';
        if (inView(el)) { g.fromTo(el, from, { ...to, duration: 1.1, ease, delay: 0.1 }); return; }
        g.set(el, from);
        ST.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => g.to(el, { ...to, duration: 1.2, ease }) });
      };
      const bind = () => {
        document.querySelectorAll('[data-up]').forEach(el => anim(el, { yPercent: 105 }, { yPercent: 0 }));
        document.querySelectorAll('[data-clip]').forEach(el => anim(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }));
        requestAnimationFrame(() => requestAnimationFrame(() => ST.refresh()));
      };
      bind(); ZK.rebind = bind;
      // nove [data-clip]/[data-up] posle re-rendera
      new MutationObserver(() => { clearTimeout(ZK._rb); ZK._rb = setTimeout(bind, 120); }).observe(document.body, { childList: true, subtree: true });
      // sigurnosna mreža: ništa ne sme ostati skriveno
      setTimeout(() => document.querySelectorAll('[data-zk-anim]').forEach(el => { if (inView(el)) g.to(el, { yPercent: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease, overwrite: 'auto' }); }), 2500);
    };
    go();
  };
  ZK.scrollTop = () => { if (ZK.lenis) ZK.lenis.scrollTo(0, { duration: 0.8 }); else window.scrollTo({ top: 0, behavior: ZK.reduced() ? 'auto' : 'smooth' }); };
  ZK.scrollToEl = (el, off = -90) => { if (!el) return; if (ZK.lenis) ZK.lenis.scrollTo(el, { offset: off }); else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + off, behavior: ZK.reduced() ? 'auto' : 'smooth' }); };

  // Lampa: radijalna maska prati miš (lerp); telefon — sama se kreće
  ZK.lamp = (getEls) => {
    if (ZK.reduced()) return () => {};
    const coarse = ZK.coarse(); const tg = { x: innerWidth * 0.6, y: innerHeight * 0.45 }, cur = { ...tg }; let last = 0, raf;
    const mv = e => { tg.x = e.clientX; tg.y = e.clientY; last = Date.now(); };
    const tc = e => { const t = e.touches[0]; if (t) mv(t); };
    addEventListener('pointermove', mv, { passive: true }); addEventListener('touchstart', tc, { passive: true });
    const loop = ts => {
      if (coarse && Date.now() - last > 2500) { const t = ts / 1000; tg.x = innerWidth * (0.5 + 0.3 * Math.sin(t * 0.45)); tg.y = innerHeight * (0.42 + 0.18 * Math.sin(t * 0.62 + 1)); }
      cur.x += (tg.x - cur.x) * 0.12; cur.y += (tg.y - cur.y) * 0.12;
      (getEls() || []).forEach(el => { if (!el) return; const b = el.getBoundingClientRect(); if (b.bottom < 0 || b.top > innerHeight) return; el.style.setProperty('--lx', (cur.x - b.left) + 'px'); el.style.setProperty('--ly', (cur.y - b.top) + 'px'); });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener('pointermove', mv); removeEventListener('touchstart', tc); };
  };

  // Mali klik zvuk (brave, pečati)
  ZK.click = (vol = 0.22, freq = 2000) => {
    try {
      const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      const ctx = ZK._actx || (ZK._actx = new C()); const n = Math.floor(ctx.sampleRate * 0.03);
      const buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 5);
      const s = ctx.createBufferSource(); s.buffer = buf; const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = vol; s.connect(f); f.connect(g); g.connect(ctx.destination); s.start();
    } catch (e) {}
  };

  // QR (qrcode-generator iz CDN-a)
  ZK.qrSvg = (text, cell = 5) => {
    try { const q = window.qrcode(0, 'M'); q.addData(text); q.make(); return q.createSvgTag({ cellSize: cell, margin: 0, scalable: true }); } catch (e) { return ''; }
  };
  ZK.qrMatrix = (text) => {
    try { const q = window.qrcode(0, 'M'); q.addData(text); q.make(); const n = q.getModuleCount(), m = []; for (let r = 0; r < n; r++) { const row = []; for (let c = 0; c < n; c++) row.push(q.isDark(r, c)); m.push(row); } return m; } catch (e) { return null; }
  };

  // Otvoreno sada? (svaki dan 12–24)
  ZK.HOURS = [[12, 24], [12, 24], [12, 24], [12, 24], [12, 24], [12, 24], [12, 24]]; // ned..sub
  ZK.isOpen = (d = new Date()) => { const [a, b] = ZK.HOURS[d.getDay()]; const h = d.getHours() + d.getMinutes() / 60; return h >= a && h < b; };
})();
