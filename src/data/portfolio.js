export const profile = {
  name: 'Priyanka Thakuri',
  title: 'Web Developer & Designer',
  tagline: 'BCA Graduate & Web Developer',
  location: 'Bharatpur, Chitwan, Nepal',
  phone: '9741897634',
  email: 'priyankathakuri895@gmail.com',
  github: 'https://github.com/priyankathakuri895',
  githubHandle: 'github.com/priyankathakuri895',
  summary:
    "I'm a BCA graduate and web developer with hands-on full-stack training in the MERN stack and practical experience building real-world Laravel/PHP applications. I work across the stack — JavaScript, HTML, CSS and React on the front end, Laravel/PHP with MySQL on the back end — and enjoy turning real business requirements into functional software.",
  resumeAvailable: true,
}

export const skills = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'HTML5', 'CSS3', 'React'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MariaDB', 'SQLite', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub', 'Blade Templating', 'Bootstrap 5'],
  },
]

export const projects = [
  {
    title: 'Cafe Management System',
    stack: ['Laravel', 'Blade', 'Bootstrap 5', 'MySQL'],
    description:
      'A full POS and billing system for a cafe covering order billing, menu & categories, tables and reservations, and ingredient inventory.',
    features: [
      'End-to-end order status flow (Pending → Preparing → Ready → Completed → Cancelled) across dine-in, takeaway and delivery',
      'Multiple payment methods — cash, card and QR',
      'Customer management, expense tracking and sales reporting',
      'Role-based access for Admin and Cashier/Staff users',
    ],
    repo: 'https://github.com/priyankathakuri895/cafe-management',
  },
  {
    title: 'Anmol — Raw Material Inventory System',
    stack: ['Laravel 12', 'PHP', 'SQLite'],
    description:
      'A raw-material inventory system for a bakery-type business to track deliveries, stock, and supplier relationships.',
    features: [
      'Full receiving workflow: deliveries checked against supplier bills, with pending and damaged quantities tracked separately',
      'Stock formula (opening + accepted received − used ± adjustments) with a complete transaction history',
      'Seven core modules — Suppliers, Supplier Vehicles, Raw Materials, Raw Material Receiving, Pending Receipts, Raw Material Stock, and Stock Checking',
    ],
    repo: 'https://github.com/priyankathakuri895/AnmolBakeryCompany',
  },
  {
    title: 'Beauty E-commerce',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    description:
      'An e-commerce storefront for beauty products with a full shopping and checkout experience.',
    features: [
      'Product management with categories',
      'Shopping cart and order flow',
      'User authentication',
      'Khalti payment integration',
    ],
    repo: 'https://github.com/priyankathakuri895/beauty-based-ecommerce-by-laravel',
  },
  {
    title: 'Hotel Billing System',
    stack: ['Laravel', 'MySQL', 'Blade'],
    description:
      'A billing system for hotel and cafe-style businesses with tax-compliant invoicing.',
    features: [
      'Food & service billing',
      'VAT / tax calculation',
      'Professional, print-ready invoices',
    ],
    repo: 'https://github.com/priyankathakuri895/hotel-billing',
  },
]

export const timeline = [
  {
    type: 'Certification',
    title: 'MERN Stack Training',
    place: 'Techdint Pvt Ltd, Kathmandu',
    period: 'February 2026 – April 2026',
    detail: 'Certificate No. T2026MS0101C',
  },
  {
    type: 'Education',
    title: 'Bachelor in Computer Application (BCA)',
    place: 'Tribhuvan University (TU) affiliated college',
    period: '',
    detail: '',
  },
]
