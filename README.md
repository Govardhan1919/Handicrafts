# Tribal Handicrafts Platform

A responsive React web platform connecting tribal artisans with global customers to preserve traditional crafts and support tribal communities.

## Features

### 🏠 Home Page
- Cultural introduction with tribal art elements
- Call-to-action buttons for exploring crafts and joining as artisan
- Animated craft showcase with floating effects

### 🛍️ Customer Shop
- Browse handcrafted products with filtering by category and price
- Add items to cart with quantity management
- Product ratings and reviews display
- Responsive product grid layout

### 🎨 Artisan Dashboard
- Add new products with form validation
- Manage existing products and view approval status
- Track customer orders
- Image upload placeholder with emoji selection

### 🔍 Cultural Consultant
- Review pending products for cultural authenticity
- Add verification notes and approval comments
- Approve, request changes, or reject submissions

### 👨‍💼 Admin Dashboard
- Platform statistics and analytics
- User management and content moderation
- Generate reports and manage platform settings
- Recent activity tracking

### 🛒 Shopping Cart
- Add/remove items with quantity controls
- Real-time total calculation
- Mock checkout functionality

## Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktop
- **Cultural Theme**: Earthy color palette (browns, beiges, greens) inspired by tribal aesthetics
- **Smooth Animations**: CSS keyframe animations for enhanced user experience
- **Accessibility**: Semantic HTML and proper contrast ratios

## Technology Stack

- **Frontend**: React 18.2.0
- **Styling**: CSS3 with Flexbox and Grid
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Emoji-based icons for cultural authenticity

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js            # Landing page
│   ├── Customer.js        # Product browsing
│   ├── Artisan.js         # Artisan dashboard
│   ├── Consultant.js      # Cultural verification
│   ├── Admin.js           # Admin panel
│   ├── Cart.js            # Shopping cart
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── App.css               # Global styles
└── index.js              # React entry point
```

## Key Components

### State Management
- Products array with approval status
- Shopping cart with quantity tracking
- Page navigation without routing library
- Form data management for product creation

### Responsive Features
- Mobile navigation (hidden menu on small screens)
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and interactions
- Optimized typography scaling

### Cultural Elements
- Traditional color scheme reflecting tribal aesthetics
- Emoji-based product representations
- Heritage-focused content and messaging
- Authentic craft categories (pottery, textiles, jewelry, baskets)

## Mock Data

The platform includes sample products representing different craft categories:
- Handwoven Baskets
- Clay Pottery
- Beaded Jewelry
- Traditional Textiles

## Future Enhancements

- Backend integration for data persistence
- Real payment processing
- User authentication system
- Advanced search and filtering
- Multi-language support
- Mobile app version

## Cultural Impact

This platform aims to:
- Preserve traditional crafting techniques
- Provide economic opportunities for tribal communities
- Connect artisans with global markets
- Maintain cultural authenticity through expert verification
- Support fair trade practices