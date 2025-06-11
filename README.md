# Ryan St Dare - Professional CV & Portfolio

## Project Overview
This is a mobile-first, fully responsive, animated Next.js CV website with integrated AI chatbot functionality. The site showcases Ryan St Dare's professional background, experience, and qualifications with a modern design and interactive features.

## Features
- **Mobile-First Responsive Design**: Optimized for all device sizes
- **Advanced Animations**: Smooth transitions, hover effects, and scroll-triggered animations using Framer Motion
- **AI Chatbot Integration**: OpenRouter-powered chatbot with comprehensive knowledge about Ryan's background
- **Professional Color Scheme**: Custom gradient backgrounds (light grey, dark grey, beige)
- **Dark/Light Theme Toggle**: User-controlled theme switching
- **Document Downloads**: Direct access to certifications and clearance documents
- **Comprehensive CV Content**: All information from CVsiteInfo.txt and LLMtrainingInfo.txt

## Technology Stack
- **Framework**: Next.js 15.3.3 with TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: Framer Motion for advanced animations
- **Icons**: Lucide React
- **AI Integration**: OpenRouter API with DeepSeek model
- **Deployment Ready**: Optimized for Vercel deployment

## Color Scheme
- **Light Grey**: `linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(153, 151, 151, 1) 100%)`
- **Dark Grey**: `linear-gradient(135deg, rgba(115, 115, 115, 1) 0%, rgba(66, 66, 66, 1) 100%)`
- **Beige Accent**: `linear-gradient(135deg, rgba(255, 244, 222, 1) 0%, rgba(252, 223, 177, 1) 100%)`

## Project Structure
```
ryan-cv-site/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # OpenRouter API integration
│   │   ├── globals.css               # Global styles and custom CSS
│   │   ├── layout.tsx                # Root layout with metadata
│   │   └── page.tsx                  # Main CV page with all sections
│   └── components/
│       └── Chatbot.tsx               # AI chatbot component
├── public/
│   └── documents/                    # CV documents and certifications
│       ├── RSDCertification.pdf
│       └── RSDCriminalClearance.jpg
├── tailwind.config.ts                # Tailwind configuration with custom animations
└── package.json                      # Dependencies and scripts
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Navigate to the project directory:
   ```bash
   cd ryan-cv-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel Deployment (Recommended)
1. Push the project to a GitHub repository
2. Connect the repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Static Export (if needed)
1. Add to `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. Build and export:
   ```bash
   npm run build
   ```

## Key Components

### Main Sections
1. **Hero Section**: Introduction with profile, contact info, and action buttons
2. **Personal Information**: Detailed personal and professional details
3. **Education & Qualifications**: Academic background and certifications
4. **Professional Experience**: Comprehensive work timeline with animations
5. **Skills & Interests**: Categorized skill sets and personal interests
6. **Documents & Certifications**: Downloadable documents section

### AI Chatbot
- **Model**: DeepSeek Chat v3 (Free tier)
- **Knowledge Base**: Comprehensive information about Ryan's background
- **Features**: Real-time chat, professional responses, career-focused conversations
- **UI**: Modern chat interface with animations and responsive design

## Customization

### Updating Content
- Modify the CV content in `src/app/page.tsx`
- Update the chatbot knowledge base in `src/app/api/chat/route.ts`
- Add new documents to `public/documents/`

### Styling Changes
- Modify colors in `tailwind.config.ts`
- Update animations and transitions in component files
- Adjust responsive breakpoints as needed

## Performance Features
- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimized**: Proper meta tags and structured data
- **Mobile Performance**: Optimized for mobile devices
- **Smooth Animations**: Hardware-accelerated animations

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information
- **Email**: rstdare@gmail.com
- **Portfolio**: This CV website
- **AI Assistant**: Available via the chat button for inquiries

---

**Note**: This project is ready for production deployment and includes all necessary optimizations for performance, SEO, and user experience.
