import './style.css'

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: "/phones/go1.jpg",
    description: "Latest Apple flagship with A17 Pro chip",
    badge: "New"
  },
  {
    id: 2,
    name: "playstation 5",
    image: "/phones/go2.jpg",
    description: "Powerful Android phone with amazing camera",
    badge: "Sale"
  },
  {
    id: 3,
    name: "Samsung",
    image: "/phones/go3.jpg",
    description: "Durable protective case"
  },
  {
    id: 4,
    name: "iphone",
    image: "/phones/go4.jpg",
    description: "15W wireless charger"
  },
  {
    id: 5,
    name: "Samsaung fold",
    image: "/phones/go5.jpg",
    description: "Wireless earbuds with noise canceling"
  },
  {
    id: 6,
    name: "Phone Stand",
    image: "/phones/go12.jpg",
    description: "Adjustable phone stand"
  },
  {
    id: 9,
    name: "All Types of iphones",
    image: "/phones/go6.jpg",
    description: "Complete selection of iPhone models"
  },
  {
    id: 10,
    name: "Apple Watch",
    image: "/phones/go11.jpg",
    description: "Premium smartwatches and wearables"
  },
  {
    id: 11,
    name: "Head set",
    image: "/phones/go22.jpg",
    description: "Professional audio recording devices"
  },
  {
    id: 11,
    name: "laptops",
    image: "/phones/go23.jpg",
    description: "all kinds of laptops"
  },
  {
    id: 11,
    name: "Games ",
    image: "/phones/go24.jpg",
    description: "Top notch games devices"
  },
  {
    id: 12,
    name: "Camera glasses",
    image: "/phones/go25.jpg",
    description: "Premium Android Glasses and Cctv gadgets"
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="header">
    <img src="/phones/g01101.jpg" alt="Reinhard's Logo" class="logo-img">
    <h1 class="title">Reinhard's Luxury Passel Phones, watches and Gadgets</h1>
  </header>
  <footer class="footer">
    <a href="https://wa.me/2347034233007" target="_blank" rel="noopener noreferrer" class="footer-column">
      <h3>📱 Passel Phones</h3>
      <p>Latest smartphone models and accessories</p>
    </a>
    <a href="https://wa.me/2347034233007" target="_blank" rel="noopener noreferrer" class="footer-column">
      <h3>⌚ Watches</h3>
      <p>Premium smartwatches and luxury timepieces</p>
    </a>
    <a href="https://wa.me/2347034233007" target="_blank" rel="noopener noreferrer" class="footer-column">
      <h3>🎧 Gadgets</h3>
      <p>High-tech accessories and gadgets</p>
    </a>
  </footer>
  <div class="grid">
    ${products.map(p => `
      <div class="card">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
      </div>
    `).join('')}
  </div>
  <div class="whatsapp-container">
    <a href="https://wa.me/2347034233007" target="_blank" rel="noopener noreferrer" class="whatsapp-icon">
      💬 WhatsApp
    </a>
  </div>
`;
