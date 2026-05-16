# Brew & Bean - Coffee Shop Frontend

A modern, responsive coffee shop website built with Vue.js 3 and Tailwind CSS. This application provides a complete frontend experience for a coffee shop, including menu browsing, shopping cart functionality, and company information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Modern Vue.js 3**: Built with Composition API and latest Vue features
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Shopping Cart**: Full cart functionality with Pinia state management
- **Routing**: Vue Router for seamless navigation between pages
- **Component Architecture**: Modular, reusable components
- **Coffee Shop Theme**: Custom color palette and typography

## 📱 Pages & Components

### Pages
- **Home**: Hero section, features, and featured products
- **Menu**: Complete menu with categories and filtering
- **About**: Company story, values, and team information
- **Contact**: Contact form, location, and FAQ
- **Cart**: Shopping cart with quantity management

### Components
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Company information and links
- **Product Cards**: Reusable product display components

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Package Manager**: npm
- **Development Server**: Vite Dev Server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coffee-shop-vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build

## 🎨 Customization

### Colors
The application uses a custom coffee-themed color palette defined in `tailwind.config.js`:

- **Coffee Colors**: Various shades of brown for primary elements
- **Cream Colors**: Light, warm tones for backgrounds and accents

### Typography
- **Primary Font**: Inter (sans-serif) for body text
- **Display Font**: Playfair Display (serif) for headings

### Styling
Custom CSS classes are defined in `src/style.css`:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling
- `.section-padding` - Consistent section spacing

## 📁 Project Structure

```
coffee-shop-vue/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.vue
│   │   └── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Menu.vue
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   └── Cart.vue
│   ├── stores/
│   │   └── cart.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
- Vue plugin configuration
- Development server settings
- Port configuration (3000)

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette
- Font family definitions
- Content paths for purging

### PostCSS Configuration (`postcss.config.js`)
- Tailwind CSS processing
- Autoprefixer for browser compatibility

## 🛍️ Shopping Cart Features

The application includes a fully functional shopping cart with:
- Add/remove items
- Quantity management
- Price calculations
- Persistent state (Pinia store)
- Cart total and tax calculations

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive design using Tailwind's responsive utilities
- **Navigation**: Collapsible mobile menu
- **Grid Layouts**: Responsive grid systems for different screen sizes

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- Coffee shop community for inspiration
- Icons from Heroicons

## 📞 Support

For questions or support, please contact:
- Email: hello@brewandbean.com
- Phone: (555) 123-4567

---

**Brew & Bean** - Crafting exceptional coffee experiences since 2010 ☕
