# FetchUp Standalone Website

This is a high-performance static HTML/CSS/JavaScript storefront for FetchUp dog toys. It includes the shop, dynamic product views, interactive cart, seamless checkout with order handling, order thank-you page, 7-question personality quiz, and the FetchUp guide.

---

## Deploying to Netlify (Drag and Drop)

1. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag and drop the **`fetchup-site-netlify-ready`** folder (make sure you drop the folder containing `index.html` at its root, not a parent directory or a `.zip` file).
3. Once the upload finishes, Netlify will show **"Site is live"**.
4. Go to **Site Configuration > Forms** in the Netlify dashboard to verify both forms (`orders` and `newsletter`) are detected.
5. In Netlify Form Settings, configure email notifications to send new orders to `fetchupsupport@gmail.com`.

---

## ⚠️ Important Note for Visitors in Egypt ("Site Can't Be Reached" / Endless Loading)

If you deploy to Netlify and the site keeps loading endlessly and finally says **"This site can't be reached"** (`ERR_CONNECTION_CLOSED` or `ERR_CONNECTION_TIMED_OUT`):

### Why this happens:
Egyptian consumer ISPs (Telecom Egypt / WE, Vodafone Egypt, Orange, Etisalat) have active network routing restrictions on Netlify's default `*.netlify.app` IP addresses. The website is live, but your local ISP is dropping the connection.

### How to verify:
- Open your Netlify URL while connected to a **VPN** (e.g., Cloudflare WARP 1.1.1.1, Windscribe, or ProtonVPN). The website will load instantly and work 100%.

### How to make it accessible to everyone in Egypt:
1. **Option A: Connect a Custom Domain via Cloudflare Proxy (Recommended for Netlify)**
   - When you purchase a domain (e.g. `fetchup.shop` or `fetchupstore.com`), manage its DNS with **Cloudflare** (free).
   - Turn on the orange cloud (**Proxied**) for your DNS records pointing to Netlify.
   - Cloudflare edges are hosted directly inside Egypt (peered with Telecom Egypt in Cairo/Alexandria), so visitors in Egypt can access your Netlify site without any VPN.

2. **Option B: Deploy to Cloudflare Pages (Free, Drag-and-Drop, Never Blocked in Egypt)**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/) (free account).
   - Go to **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
   - Drag and drop the `fetchup-site-netlify-ready` folder.
   - Click **Deploy site**.
   - You will get a `*.pages.dev` URL that loads instantly anywhere in Egypt with zero network blocks.

---

## Form Submissions (Orders & Newsletter)

- **Asynchronous AJAX Submission**: The checkout form submits order data asynchronously to Netlify (`/`) using `fetch()`, disables the button with a loading state (`Placing Order... 🐾`), clears the cart, and redirects cleanly to `thank.html`.
- **Hidden Static Replicas**: `checkout.html` and `index.html` maintain static HTML replicas of `<form name="orders">` and `<form name="newsletter">` with matching fields so Netlify's deploy bot registers them automatically.
- **Spam Protection**: Both forms include honeypot spam protection (`bot-field`).

---

## Product & Content Updates

- **Products**: Edit product details (names, prices, descriptions, images, traits) in `app.js` under `const products`.
- **Categories**: Edit categories in `app.js` under `const cats`.
- **Quiz**: Questions and answers are located in `app.js` under `const quiz`.
- **Homepage Hero**: Edit the carousel slides in `heroSlider()` in `app.js`.

---

## Running Locally

Open `index.html` in any modern web browser, or run a local static server:
```bash
python3 -m http.server 8000
```

