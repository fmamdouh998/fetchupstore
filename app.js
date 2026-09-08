const A = 'assets/';
const products = [
  { id: 'sizzle-sausage', name: 'Sizzle Sausage', price: 180, regular: 250, tag: 'Squeak. Crinkle. Chase. Repeat.', personality: 'The Goofball', img: 'product-sausage.jpeg', category: 'Plush & Soft Toys', play: ['Squeak', 'Crinkle', 'Shake', 'Fetch'], desc: 'A playful sausage-shaped plush toy designed for dogs who turn every play session into a full-blown event. Sizzle Sausage combines a soft, furry texture with squeaky and crinkly elements.', traits: ['Goofy', 'Playful', 'Social', 'High-energy'] },
  { id: 'worried-star', name: 'Worried Star', price: 180, regular: 250, tag: 'Big feelings. Soft cuddles.', personality: 'The Sensitive Soul', img: 'product-star.jpeg', category: 'Plush & Soft Toys', play: ['Cuddle', 'Gentle Play', 'Carry', 'Squeak'], desc: 'A soft, star-shaped plush toy for dogs who love comfort, cuddles and gentle play. Its expressive face and plush texture make it a soft companion to carry and snuggle.', traits: ['Gentle', 'Affectionate', 'Comfort-seeking', 'Loyal'] },
  { id: 'puff-stick', name: 'Puff Stick', price: 180, regular: 250, tag: 'Soft to bite. Fun to fetch.', personality: 'The Explorer', img: 'product-stick.jpeg', category: 'Outdoor Play', play: ['Fetch', 'Carry', 'Toss', 'Chase'], desc: 'A lightweight plush stick designed for dogs who love to carry, chase, toss and retrieve. Its elongated shape is easy to grab while the soft texture keeps play comfortable.', traits: ['Curious', 'Adventurous', 'Active', 'Ready-to-go'] },
  { id: 'spicy-pepper', name: 'Spicy Pepper', price: 180, regular: 250, tag: 'A little spice. A lot of play.', personality: 'The Firecracker', img: 'product-pepper.jpeg', category: 'Chew Toys', play: ['Squeak', 'Shake', 'Chase', 'Fetch'], desc: 'A lively pepper-shaped character made for energetic dogs who love biting, shaking, tossing and chasing. A little spice turns every session into game time.', traits: ['Energetic', 'Bold', 'Fast', 'Excitable'] },
  { id: 'cloud-bone', name: 'Cloud Bone', price: 180, regular: 250, tag: 'Soft hugs. Happy chews.', personality: 'The Cuddler', img: 'product-bone.jpeg', category: 'Puppy Toys', play: ['Cuddle', 'Gentle Chew', 'Carry', 'Relax'], desc: 'A soft bone companion for dogs who prefer cozy, comforting play and gentle chewing. Made for carrying, relaxing and happy little chews.', traits: ['Cozy', 'Calm', 'Affectionate', 'Gentle'] }
];
const cats = [
  ['Chew Toys', 'Teethy treats designed for the ultimate dental health and mental stimulation.'],
  ['Puppy Toys', 'Small, safe, and fun favorites for their first big adventures.'],
  ['Plush & Soft Toys', 'Cozy companions for the ultimate cuddle and comfort session.'],
  ['Outdoor Play', 'Sturdy gear designed for the great outdoors and backyard adventures.']
];
const quiz = [
  ["What's your dog's idea of a perfect day?", ['Exploring somewhere new.', 'Running around and playing.', 'A cozy day full of cuddles.', 'Staying close to their favorite person.', 'Playing until they run out of energy.']],
  ['How does your dog usually play?', ['Chase, fetch and carry.', 'Bite, shake and throw toys everywhere.', 'Gentle play with soft toys.', 'Calm play and relaxing with their favorite toy.', 'Constant action: chase, shake and squeak.']],
  ['What happens when your dog finds a toy they LOVE?', ['They bring it to me to play.', 'They throw it around like crazy.', 'They take it somewhere cozy.', 'They keep it close.', 'They immediately attack it and start playing.']],
  ['Where would your dog most likely be found?', ['At the door waiting for an adventure.', 'In the middle of something funny.', 'Curled up somewhere cozy.', 'Right beside their favorite human.', 'Running around the house.']],
  ['How does your dog react to a squeaky toy?', ['Squeak it and take it on an adventure.', 'Squeak, shake and throw it.', 'Play gently with it.', 'Enjoy having it nearby.', 'Squeak means GAME ON.']],
  ['What does your dog love most?', ['Discovering something new.', 'Having fun and making people laugh.', 'Comfort and cuddles.', 'Being close to their person.', 'Excitement and movement.']],
  ['Which sentence sounds most like your dog?', ['Where are we going?', 'Look what I can do!', 'Can we cuddle now?', 'Stay with me.', 'LET’S PLAY!']]
];
const profiles = { Explorer: products[2], Goofball: products[0], Cuddler: products[4], 'Sensitive Soul': products[1], Firecracker: products[3] };

function header() {
  return `<header><a class="brand" href="index.html"><img src="${A}logo.png" alt="FetchUp"></a><nav><a href="index.html">Home</a><a href="shop.html">Shop</a><a href="quiz.html">Find Your FetchUp</a><a href="about.html">About</a></nav><a class="cart" href="cart.html">Cart <span id="cartCount">0</span></a><button class="menu" onclick="document.body.classList.toggle('nav-open')" aria-label="Toggle navigation">☰</button></header>`;
}
function footer() {
  return `<footer><div><img class="footer-logo" src="${A}logo.png" alt="FetchUp"><p>Play hard, nap harder.</p></div><div><b>Shop</b><a href="shop.html">All Toys</a><a href="shop.html?cat=Plush%20%26%20Soft%20Toys">Plush & Soft Toys</a><a href="shop.html?cat=Outdoor%20Play">Outdoor Play</a></div><div><b>Explore</b><a href="quiz.html">Find Your FetchUp</a><a href="about.html">Our Story</a><a href="blog.html">The FetchUp Guide</a></div><div><b>Contact</b><a href="mailto:fetchupsupport@gmail.com">fetchupsupport@gmail.com</a><p>© 2026 FetchUp</p></div></footer>`;
}
function layout(content) {
  return header() + `<main>${content}</main>` + footer();
}
function productCard(p) {
  return `<article class="product-card"><a href="product.html?id=${p.id}"><div class="product-img"><img src="${A + p.img}" alt="${p.name}"></div><div class="product-info"><span>${p.personality}</span><h3>${p.name}</h3><p>${p.tag}</p><div><strong>EGP ${p.price}</strong><del>EGP ${p.regular}</del></div></div></a></article>`;
}
function heroSlider() {
  const slides = [
    { img: 'AZ6A4466-Edit.jpg', eyebrow: 'FETCHUP FOR HAPPY TAILS', h1: 'Play hard,<br><em>nap harder.</em>', p: 'Get toys that burn energy, boost happiness and turn every living room into the ultimate dog park.', cta: 'Shop Now', href: 'shop.html' },
    { img: 'AZ6A4310-Edit.jpg', eyebrow: 'NOT SURE WHERE TO START?', h1: 'Every dog has<br><em>a personality.</em>', p: 'Take our 2-minute quiz and find the FetchUp toy made for your dog’s playstyle.', cta: 'Find Their Match', href: 'quiz.html' },
    { img: 'AZ6A4344-Edit.jpg', eyebrow: 'JUST LANDED', h1: 'Fresh toys,<br><em>fresh chaos.</em>', p: 'New squeaks, new crinkles, new favorites. Explore what just landed in the FetchUp shop.', cta: 'Shop New In', href: 'shop.html' },
    { img: 'AZ6A4362-Edit.jpg', eyebrow: 'MADE FOR REAL PLAY', h1: 'Built to be<br><em>chewed, chased &amp; loved.</em>', p: 'Every FetchUp toy is designed around how dogs actually play, not just how they look on a shelf.', cta: 'Meet The Toys', href: 'shop.html' }
  ];
  return `<section class="hero" id="heroSlider" aria-roledescription="carousel" aria-label="FetchUp highlights"><div class="hero-track">${slides.map((s, i) => `<div class="hero-slide${i === 0 ? ' active' : ''}" style="background-image:url('${A + s.img}')" aria-hidden="${i === 0 ? 'false' : 'true'}"><div class="hero-scrim"></div><div class="hero-copy"><p class="eyebrow">${s.eyebrow}</p><h1>${s.h1}</h1><p>${s.p}</p><a class="btn orange" href="${s.href}">${s.cta}</a></div></div>`).join('')}</div><button class="hero-arrow prev" onclick="heroSlide(-1)" aria-label="Previous slide">‹</button><button class="hero-arrow next" onclick="heroSlide(1)" aria-label="Next slide">›</button><div class="hero-dots">${slides.map((s, i) => `<button class="${i === 0 ? 'active' : ''}" onclick="heroGo(${i})" aria-label="Go to slide ${i + 1}"></button>`).join('')}</div></section>`;
}
function initHeroSlider() {
  const root = document.getElementById('heroSlider');
  if (!root) return;
  const slidesEls = [...root.querySelectorAll('.hero-slide')], dots = [...root.querySelectorAll('.hero-dots button')];
  let i = 0, timer;
  function show(n) {
    slidesEls[i].classList.remove('active');
    slidesEls[i].setAttribute('aria-hidden', 'true');
    dots[i].classList.remove('active');
    i = (n + slidesEls.length) % slidesEls.length;
    slidesEls[i].classList.add('active');
    slidesEls[i].setAttribute('aria-hidden', 'false');
    dots[i].classList.add('active');
  }
  function play() { timer = setInterval(() => show(i + 1), 5500); }
  function stop() { clearInterval(timer); }
  window.heroSlide = d => { show(i + d); stop(); play(); };
  window.heroGo = n => { show(n); stop(); play(); };
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', play);
  let touchX = null;
  root.addEventListener('touchstart', e => touchX = e.touches[0].clientX, { passive: true });
  root.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { show(i + (dx < 0 ? 1 : -1)); stop(); play(); }
    touchX = null;
  }, { passive: true });
  play();
}

function home() {
  return layout(`${heroSlider()}<section class="section"><div class="section-head"><div><p class="eyebrow">JUST LANDED</p><h2>New In</h2></div><a href="shop.html">View all →</a></div><div class="grid3">${products.slice(0, 3).map(productCard).join('')}</div></section><section class="categories"><div class="center"><p class="eyebrow">FIND THEIR FAVORITE</p><h2>Pick their kind of play.</h2></div><div class="cat-grid">${cats.map((c, i) => `<a class="cat" href="shop.html?cat=${encodeURIComponent(c[0])}"><div class="cat-art"><img src="${A + [products[3].img, products[4].img, products[1].img, products[2].img][i]}" alt="${c[0]}"></div><h3>${c[0]}</h3><p>${c[1]}</p><span>Explore →</span></a>`).join('')}</div></section><section class="quiz-banner"><div><p class="eyebrow">NOT SURE WHERE TO START?</p><h2>Every dog has a personality.<br>Every personality has a FetchUp.</h2><a class="btn dark" href="quiz.html">Find their match 🐾</a></div></section><section class="guide"><div><p class="eyebrow">THE FETCHUP GUIDE</p><h2>Discover your dog’s play style.</h2><p>Because choosing a toy is easier when you know what makes their tail wag.</p><a href="quiz.html" class="text-link">Take the quiz →</a></div><div class="guide-card"><img src="${A}AZ6A4310-Edit.jpg" alt="Guide"><b>What kind of player is your pup?</b><span>7 questions · 2 minutes</span></div></section><section class="newsletter"><p class="eyebrow">JOIN THE FETCHUP PACK</p><h2>First dibs on new toys, special treats and playful updates.</h2><form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/" onsubmit="handleNewsletter(event)"><input type="hidden" name="form-name" value="newsletter"><input type="text" name="bot-field" class="hp" tabindex="-1" autocomplete="off"><input required type="email" name="email" placeholder="Enter your email"><button type="submit">Join the Pack</button></form></section>`);
}

async function handleNewsletter(e) {
  if (e) e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  const input = form.querySelector('input[type="email"]');
  const original = btn ? btn.textContent : 'Join the Pack';
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Joining...';
  }
  const formData = new FormData(form);
  formData.set('form-name', 'newsletter');
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    if (btn) btn.textContent = 'Welcome to the pack! 🐾';
    if (input) input.value = '';
    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
    }, 4000);
  } catch (err) {
    if (btn) {
      btn.disabled = false;
      btn.textContent = original;
    }
  }
}

function shop() {
  let params = new URLSearchParams(location.search), cat = params.get('cat');
  let list = cat ? products.filter(p => p.category === cat) : products;
  return layout(`<section class="shop-hero"><p class="eyebrow">FETCHUP SHOP</p><h1>${cat || 'All Products'}</h1><p>Pick the toy that matches their kind of fun.</p></section><section class="shop-layout"><aside><b>Shop by play</b>${cats.map(c => `<a href="shop.html?cat=${encodeURIComponent(c[0])}">${c[0]}</a>`).join('')}<a href="shop.html">All Products</a></aside><div class="shop-grid">${list.map(productCard).join('')}</div></section>`);
}

function productPage() {
  let id = new URLSearchParams(location.search).get('id') || 'sizzle-sausage', p = products.find(x => x.id === id) || products[0];
  return layout(`<section class="product-detail"><div class="product-gallery"><img src="${A + p.img}" alt="${p.name}"></div><div class="product-copy"><span class="eyebrow">${p.personality.toUpperCase()}</span><h1>${p.name}</h1><p class="tagline">${p.tag}</p><div class="price"><strong>EGP ${p.price}</strong><del>EGP ${p.regular}</del><small>20% OFF</small></div><p>${p.desc}</p><div class="traits"><b>Perfect for ${p.personality}</b>${p.traits.map(t => `<span>✓ ${t}</span>`).join('')}</div><label>Quantity <input id="qty" type="number" min="1" value="1"></label><button class="btn orange" onclick="addToCart('${p.id}',Number(document.getElementById('qty').value))">Add to Cart</button><a class="btn outline" href="cart.html">Go to Cart</a><div class="play"><b>Play styles</b><div>${p.play.map(x => `<span>${x}</span>`).join('')}</div></div></div></section>`);
}

function cart() {
  let c = getCart();
  return layout(`<section class="cart-page"><p class="eyebrow">YOUR FETCHUPS</p><h1>Your Cart</h1>${c.length ? `<div class="cart-wrap"><div>${c.map(item => { let p = products.find(x => x.id === item.id); if (!p) return ''; return `<div class="cart-row"><img src="${A + p.img}" alt="${p.name}"><div><h3>${p.name}</h3><p>EGP ${p.price}</p></div><input type="number" min="1" value="${item.qty}" onchange="updateQty('${p.id}',this.value)"><button onclick="removeCart('${p.id}')">×</button></div>`; }).join('')}</div><div class="summary"><h3>Order summary</h3><p>Subtotal <b>EGP ${subtotal(c)}</b></p><p>Delivery <b>Confirmed after order</b></p><hr><h2>Total <b>EGP ${subtotal(c)}</b></h2><a class="btn orange" href="checkout.html">Checkout</a></div></div>` : `<div class="empty"><h2>Your cart is waiting for a tail wag.</h2><a class="btn orange" href="shop.html">Shop Toys</a></div>`}</section>`);
}

function checkout() {
  let c = getCart();
  if (!c.length) {
    return layout(`<section class="checkout"><div class="empty" style="grid-column:1/-1"><h2>Your cart is empty!</h2><p>Add your dog’s new favorite FetchUp to proceed to checkout.</p><a class="btn orange" href="shop.html">Shop Toys 🐾</a></div></section>`);
  }
  return layout(`<section class="checkout"><div><p class="eyebrow">FETCHUP CHECKOUT</p><h1>Let’s get their new favorite home.</h1><form name="orders" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank.html" onsubmit="prepareOrder(event)"><input type="hidden" name="form-name" value="orders"><input type="text" name="bot-field" class="hp" tabindex="-1" autocomplete="off"><input type="hidden" name="order" id="orderField"><input type="hidden" name="total" id="totalField"><div class="form-grid"><label>Full name*<input required name="customer_name" autocomplete="name"></label><label>Phone*<input required name="phone" type="tel" autocomplete="tel"></label><label>Email*<input required name="email" type="email" autocomplete="email"></label><label>Governorate*<input required name="governorate"></label><label class="wide">Delivery address*<textarea required name="address"></textarea></label><label class="wide">Order notes<textarea name="notes" placeholder="Anything we should know?"></textarea></label></div><h3>Payment</h3><label class="radio"><input type="radio" checked name="payment" value="Cash on Delivery"> Cash on Delivery</label><button class="btn orange" type="submit" id="submitOrderBtn">Place Order</button></form></div><div class="summary"><h3>Your order</h3>${c.map(i => { let p = products.find(x => x.id === i.id); return `<p>${p ? p.name : i.id} × ${i.qty}<b>EGP ${(p ? p.price : 0) * i.qty}</b></p>`; }).join('')}<hr><h2>Total <b>EGP ${subtotal(c)}</b></h2></div></section>`);
}

async function prepareOrder(e) {
  if (e) e.preventDefault();
  let c = getCart();
  if (!c || !c.length) {
    alert('Your cart is empty! Please add a toy first.');
    location.href = 'shop.html';
    return;
  }
  const form = document.querySelector('form[name="orders"]') || (e && e.target);
  const btn = document.getElementById('submitOrderBtn') || (form && form.querySelector('button[type="submit"]'));
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Placing Order... 🐾';
  }

  const orderSummary = c.map(i => {
    let p = products.find(x => x.id === i.id);
    return `${p ? p.name : i.id} x ${i.qty} = EGP ${(p ? p.price : 0) * i.qty}`;
  }).join(' | ');
  const orderTotal = 'EGP ' + subtotal(c);

  const orderField = document.getElementById('orderField');
  const totalField = document.getElementById('totalField');
  if (orderField) orderField.value = orderSummary;
  if (totalField) totalField.value = orderTotal;

  if (form) {
    const formData = new FormData(form);
    formData.set('order', orderSummary);
    formData.set('total', orderTotal);
    formData.set('form-name', 'orders');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
    } catch (err) {
      console.warn('Form submission network notification:', err);
    }
  }

  localStorage.removeItem('fetchupCart');
  location.href = 'thank.html';
}

function thank() {
  return layout(`<section class="thank"><div class="paw">🐾</div><p class="eyebrow">ORDER RECEIVED</p><h1>Thank you for choosing FetchUp!</h1><p>Your order is on its way to becoming a very good day for a very good dog. We’ll contact you to confirm the delivery details.</p><a class="btn orange" href="shop.html">Keep shopping</a><a class="text-link" href="index.html">Back home</a></section>`);
}
function about() {
  return layout(`<section class="about"><div><p class="eyebrow">OUR STORY</p><h1>Made for dogs.<br>Built around their personalities.</h1><p>FetchUp celebrates the little things that make every dog wonderfully themselves. From the dog who turns a squeak into a concert to the one who carries their favorite toy everywhere, we make play feel personal.</p><p class="quote">“Every dog has a personality.<br>Every personality has a FetchUp.”</p></div><img src="${A}AZ6A4344-Edit.jpg" alt="FetchUp story"></section>`);
}
function blog() {
  return layout(`<section class="shop-hero"><p class="eyebrow">THE FETCHUP GUIDE</p><h1>Better play starts with knowing them.</h1></section><section class="blog"><article><img src="${A}AZ6A4310-Edit.jpg" alt="Play style"><p class="eyebrow">PLAY STYLE</p><h2>Discover your dog’s play style</h2><p>Understanding what your dog loves about play can help you choose toys they actually reach for.</p><a href="quiz.html">Discover their personality →</a></article><article><img src="${A}AZ6A4362-Edit.jpg" alt="FetchUp toys"><p class="eyebrow">FETCHUP</p><h2>Every toy tells a little story</h2><p>Explore the personalities behind the FetchUp pack.</p><a href="shop.html">Meet the toys →</a></article></section>`);
}
function quizPage() {
  return `<header><a class="brand" href="index.html"><img src="${A}logo.png" alt="FetchUp"></a><a class="quiz-exit" href="index.html">Exit</a></header><main><section id="quizApp" class="quiz"></section></main>`;
}
function renderQuiz() {
  let qstate = JSON.parse(localStorage.getItem('fetchupQuiz') || 'null') || { step: -1, name: '', age: '', who: '', answers: [] };
  const root = document.getElementById('quizApp');
  function draw() {
    if (qstate.step === -1) {
      root.innerHTML = `<div class="quiz-intro"><div class="quiz-doodle">🐾</div><p class="eyebrow">FETCHUP PERSONALITY QUIZ</p><h1>Find Your Dog’s<br><em>FetchUp.</em></h1><p>7 playful questions. One very personal toy match.</p><div class="optional"><label>What’s your dog’s name? <small>optional</small><input id="dogName" placeholder="e.g. Bruno"></label><label>How old are they? <small>optional</small><input id="dogAge" placeholder="e.g. 3 years"></label><label>Who’s taking the quiz? <small>optional</small><input id="quizWho" placeholder="e.g. Mum, Dad, human..."></label></div><button class="btn orange" onclick="startQuiz()">Let’s find their match →</button></div>`;
      return;
    }
    if (qstate.step >= 7) {
      showResult();
      return;
    }
    let q = quiz[qstate.step];
    root.innerHTML = `<div class="progress"><span>Question ${qstate.step + 1} of 7</span><div><i style="width:${((qstate.step + 1) / 7) * 100}%"></i></div></div><div class="question"><button class="back" onclick="quizBack()">← Back</button><p class="eyebrow">A LITTLE ABOUT THEM</p><h1>${q[0]}</h1><div class="answers">${q[1].map((a, i) => `<button onclick="answer(${i})"><span>${String.fromCharCode(65 + i)}</span>${a}</button>`).join('')}</div></div>`;
  }
  window.startQuiz = () => {
    qstate.name = document.getElementById('dogName').value.trim();
    qstate.age = document.getElementById('dogAge').value.trim();
    qstate.who = document.getElementById('quizWho').value.trim();
    qstate.step = 0;
    save();
    draw();
  };
  window.answer = i => {
    qstate.answers[qstate.step] = i;
    qstate.step++;
    save();
    draw();
  };
  window.quizBack = () => {
    if (qstate.step > 0) {
      qstate.step--;
      save();
      draw();
    } else {
      qstate.step = -1;
      save();
      draw();
    }
  };
  function save() {
    localStorage.setItem('fetchupQuiz', JSON.stringify(qstate));
  }
  function showResult() {
    let scores = [0, 0, 0, 0, 0];
    qstate.answers.forEach(a => scores[a]++);
    let max = Math.max(...scores), winners = scores.map((s, i) => s === max ? i : -1).filter(i => i >= 0);
    let winner = winners[0];
    if (winners.length > 1) {
      winner = qstate.answers[1] === qstate.answers[2] ? qstate.answers[1] : winners.find(i => qstate.answers[1] === i || qstate.answers[2] === i) || winner;
    }
    let names = ['Explorer', 'Goofball', 'Cuddler', 'Sensitive Soul', 'Firecracker'];
    let p = profiles[names[winner]];
    let name = qstate.name ? `${qstate.name} is a` : 'Your dog is a';
    root.innerHTML = `<div class="result"><p class="eyebrow">MEET YOUR FETCHUP MATCH 🐾</p><h1>${name}<br><em>${p.personality.toUpperCase()}!</em></h1><p class="result-lead">And their perfect FetchUp is...</p><div class="result-card"><img src="${A + p.img}" alt="${p.name}"><div><p class="eyebrow">${p.personality}</p><h2>${p.name}</h2><p class="tagline">${p.tag}</p><p>${p.desc}</p><h3>Why it’s their match</h3><ul>${p.traits.map(x => `<li>✓ ${x}</li>`).join('')}</ul><h3>Recommended play styles</h3><div class="play">${p.play.map(x => `<span>${x}</span>`).join('')}</div><div class="result-actions"><a class="btn orange" href="product.html?id=${p.id}">Shop ${p.name}</a><button class="btn outline" onclick="retake()">Retake Quiz</button></div></div></div><div class="share"><h3>Think we got it right?</h3><p>Share your dog’s FetchUp personality with the pack.</p><button class="btn dark" onclick="shareResult('${p.personality}','${p.name}')">Share result</button><button class="text-link" onclick="retake()">Find another FetchUp →</button></div></div>`;
  }
  window.retake = () => {
    localStorage.removeItem('fetchupQuiz');
    location.reload();
  };
  window.shareResult = async (personality, product) => {
    let text = `My dog is ${personality}! Their FetchUp match is ${product}. 🐾`;
    if (navigator.share) navigator.share({ title: 'My FetchUp Match', text, url: location.href });
    else {
      await navigator.clipboard.writeText(text);
      alert('Your FetchUp result was copied!');
    }
  };
  draw();
}

function getCart() {
  return JSON.parse(localStorage.getItem('fetchupCart') || '[]');
}
function saveCart(c) {
  localStorage.setItem('fetchupCart', JSON.stringify(c));
  updateCartCount();
}
function addToCart(id, qty = 1) {
  let c = getCart(), x = c.find(i => i.id === id);
  if (x) x.qty += qty;
  else c.push({ id, qty });
  saveCart(c);
  location.href = 'cart.html';
}
function removeCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
  location.reload();
}
function updateQty(id, qty) {
  let c = getCart(), x = c.find(i => i.id === id);
  if (x) {
    x.qty = Math.max(1, Number(qty));
    saveCart(c);
    location.reload();
  }
}
function subtotal(c) {
  return c.reduce((s, i) => {
    let p = products.find(x => x.id === i.id);
    return s + (p ? p.price : 0) * i.qty;
  }, 0);
}
function updateCartCount() {
  let n = getCart().reduce((s, i) => s + i.qty, 0), e = document.getElementById('cartCount');
  if (e) e.textContent = n;
}

const page = document.body.dataset.page;
let content = page === 'home' ? home() : page === 'shop' ? shop() : page === 'product' ? productPage() : page === 'cart' ? cart() : page === 'checkout' ? checkout() : page === 'thank' ? thank() : page === 'about' ? about() : page === 'blog' ? blog() : page === 'quiz' ? quizPage() : home();
document.getElementById('app').innerHTML = content;
updateCartCount();
if (page === 'quiz') renderQuiz();
if (page === 'home') initHeroSlider();

