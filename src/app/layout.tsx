// app/layout.jsx
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Devanagari, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"
import Script from 'next/script'

// Font optimization for Hindi + English
const notoDev = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  variable: '--font-noto',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

// Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ],
}

// Complete SEO Metadata for Ghazipur Focus
export const metadata: Metadata = {
  metadataBase: new URL('https://zajpurpratibhakhoj.in'),
  
  title: {
    template: '%s | गाजीपुर प्रतिभा खोज - Ghazipur Pratibha Khoj',
    default: 'गाजीपुर प्रतिभा खोज 2026 | Ghazipur Pratibha Khoj - शिक्षा, सम्मान, अवसर',
  },
  
  description: 'गाजीपुर प्रतिभा खोज - Ghazipur की प्रतिभाओं को पहचान, सम्मान और अवसर देने वाला संगठन। बेटी सम्मान योजना, शिक्षा, रोजगार और सामाजिक न्याय के लिए जुड़ें।',
  
  keywords: [
    'गाजीपुर प्रतिभा खोज',
    'Ghazipur Pratibha Khoj',
    'Ghazipur talent hunt',
    'बेटी सम्मान योजना Ghazipur',
    'Ghazipur शिक्षा',
    'Ghazipur रोजगार',
    'प्रतिभा खोज गाजीपुर',
    'Ghazipur UP',
    'zajpur pratibha khoj',
  ],
  
  alternates: {
    canonical: 'https://zajpurpratibhakhoj.in',
  },
  
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: 'en_US',
    url: 'https://zajpurpratibhakhoj.in',
    siteName: 'गाजीपुर प्रतिभा खोज | Ghazipur Pratibha Khoj',
    title: 'गाजीपुर प्रतिभा खोज 2026 - Ghazipur की प्रतिभाओं को नया मंच',
    description: 'गाजीपुर जिले की प्रतिभाओं को पहचान, सम्मान और अवसर। बेटी सम्मान योजना, शिक्षा, रोजगार और सामाजिक न्याय के लिए हमसे जुड़ें।',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'गाजीपुर प्रतिभा खोज - Ghazipur Pratibha Khoj',
        type: 'image/jpeg',
      }
    ],
    emails: ['info@pratibhakhoj.org'],
    phoneNumbers: ['+9194152 89162'],
    countryName: 'India',
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@pratibhakhoj',
    creator: '@pratibhakhoj',
    title: 'गाजीपुर प्रतिभा खोज | Ghazipur Pratibha Khoj',
    description: 'गाजीपुर जिले की प्रतिभाओं को सम्मान और अवसर। बेटी सम्मान योजना, शिक्षा, रोजगार के लिए जुड़ें।',
    images: ['/twitter-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code', // Search Console se code daalein
  },
  
  authors: [
    { name: 'गाजीपुर प्रतिभा खोज टीम', url: 'https://zajpurpratibhakhoj.in' }
  ],
  
  publisher: 'गाजीपुर प्रतिभा खोज संगठन',
  applicationName: 'गाजीपुर प्रतिभा खोज',
  
  appleWebApp: {
    capable: true,
    title: 'गाजीपुर प्रतिभा खोज',
    statusBarStyle: 'default',
  },
  
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

// JSON-LD: Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'गाजीपुर प्रतिभा खोज संगठन',
  alternateName: 'Ghazipur Pratibha Khoj',
  url: 'https://zajpurpratibhakhoj.in',
  logo: 'https://zajpurpratibhakhoj.in/logo.png',
  description: 'गाजीपुर जिले में शिक्षा, रोजगार और सामाजिक न्याय के लिए कार्यरत संगठन। बेटी सम्मान योजना और प्रतिभा खोज कार्यक्रम आयोजित करता है।',
  foundingDate: '2015',
  founder: {
    '@type': 'Person',
    name: 'श्री अरविंद भूषण सरकार',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ghazipur',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-88817-03633',
    contactType: 'customer service',
    availableLanguage: ['Hindi', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/ghazipurpratibhakhoj',
    'https://www.instagram.com/ghazipurpratibhakhoj',
    'https://www.youtube.com/ghazipurpratibhakhoj',
  ],
}

// JSON-LD: Local Business (Ghazipur specific)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'गाजीपुर प्रतिभा खोज',
  image: 'https://zajpurpratibhakhoj.in/og-image.jpg',
  '@id': 'https://zajpurpratibhakhoj.in',
  url: 'https://zajpurpratibhakhoj.in',
  telephone: '+91-88817-03633',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'गाजीपुर जिला मुख्यालय',
    addressLocality: 'Ghazipur',
    addressRegion: 'UP',
    postalCode: '233001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.5833,
    longitude: 83.5667,
  },
  areaServed: {
    '@type': 'City',
    name: 'Ghazipur',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'बेटी सम्मान योजना',
      description: '21 अनमोल उपहार शादी के लिए',
      price: '0',
      priceCurrency: 'INR',
    },
    {
      '@type': 'Offer',
      name: 'प्रतिभा खोज प्रतियोगिता',
      description: 'गाजीपुर की प्रतिभाओं के लिए मंच',
    },
  ],
}

// JSON-LD: WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'गाजीपुर प्रतिभा खोज',
  url: 'https://zajpurpratibhakhoj.in',
  description: 'गाजीपुर जिले की प्रतिभाओं को सम्मान और अवसर प्रदान करने वाला संगठन',
  author: {
    '@type': 'Organization',
    name: 'गाजीपुर प्रतिभा खोज संगठन',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://zajpurpratibhakhoj.in/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// JSON-LD: Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://zajpurpratibhakhoj.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'गाजीपुर प्रतिभा खोज',
      item: 'https://zajpurpratibhakhoj.in/about',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="hi" 
      className={`${inter.variable} ${notoDev.variable}`}
      dir="ltr"
    >
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ghazipur" />
        <meta name="geo.position" content="25.5833;83.5667" />
        <meta name="ICBM" content="25.5833, 83.5667" />
        
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      
      <body className="bg-gray-50 antialiased font-sans">
        <Navbar />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Google Analytics with Ghazipur tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {'dimension1': 'city'},
              'city': 'Ghazipur'
            });
          `}
        </Script>
      </body>
    </html>
  )
}