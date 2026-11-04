import './globals.css'
import { Inter, Space_Grotesk, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

export const metadata = {
  title: {
    default: 'Ayamullah Khan | Full-Stack & AI Engineer',
    template: '%s | Ayamullah Khan'
  },
  description: 'Full-stack and AI engineer with 3 years shipping production systems end to end in Go, TypeScript and Python. Founding engineer at oorik Technologies; built a multi-tenant SaaS ERP, a restaurant POS, and the open-source security scanner fya.',
  keywords: ['Full Stack Engineer', 'AI Engineer', 'Go', 'TypeScript', 'Python', 'LLM Systems', 'AI Agents', 'RAG', 'Backend Engineer', 'PostgreSQL', 'SaaS', 'Open Source'],
  authors: [{ name: 'Ayamullah Khan' }],
  creator: 'Ayamullah Khan',
  publisher: 'Ayamullah Khan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ayamk.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayamk.in',
    title: 'Ayamullah Khan | Full-Stack & AI Engineer',
    description: 'Full-stack and AI engineer. Go, TypeScript, Python. Founding engineer at oorik Technologies; open to engineering roles.',
    siteName: 'Ayamullah Khan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayamullah Khan | Full-Stack & AI Engineer',
    description: 'Full-stack and AI engineer. Go, TypeScript, Python. Founding engineer at oorik Technologies; open to engineering roles.',
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
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayamullah Khan",
  url: "https://ayamk.in",
  jobTitle: "Founding Engineer and Software Consultant",
  worksFor: { "@type": "Organization", name: "oorik Technologies" },
  description:
    "Full-stack and AI engineer with 3 years shipping production systems end to end in Go, TypeScript and Python. Founding engineer at oorik Technologies; built a multi-tenant SaaS ERP, a restaurant POS, and the open-source security scanner fya.",
  image: "https://ayamk.in/images/IMG_7779.png",
  email: "mailto:ayamullahkhan04@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ayam04",
    "https://linkedin.com/in/ayam04",
    "https://leetlingo.site",
    "https://fya.ayamk.in",
  ],
  knowsAbout: [
    "Go",
    "TypeScript",
    "Python",
    "Backend engineering",
    "REST and OpenAPI design",
    "PostgreSQL",
    "Multi-tenant SaaS",
    "Agentic workflows",
    "Retrieval-augmented generation",
    "LLM evaluation",
    "Voice AI",
    "Application security",
    "Full-stack development",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Manipal University Jaipur" },
    { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology, Madras" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://media.gettyimages.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
