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
    default: 'Ayamullah Khan — AI Engineer',
    template: '%s | Ayamullah Khan'
  },
  description: 'AI Engineer specializing in LLM fine-tuning (LoRA/QLoRA), model quantization and inference optimization, and agentic systems — plus the full-stack products around them. Shipped AI tools used by thousands. Open to AI/ML engineering roles.',
  keywords: ['AI Engineer', 'Machine Learning Engineer', 'LLM Fine-Tuning', 'LoRA', 'QLoRA', 'Model Quantization', 'Inference Optimization', 'vLLM', 'RLHF', 'AI Agents', 'MLOps', 'GenAI', 'Full Stack Developer'],
  authors: [{ name: 'Ayamullah Khan' }],
  creator: 'Ayamullah Khan',
  publisher: 'Ayamullah Khan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ayamullah-khan.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayamullah-khan.vercel.app',
    title: 'Ayamullah Khan — AI Engineer',
    description: 'AI Engineer specializing in LLM fine-tuning, quantization, and agentic systems. Shipped AI tools used by thousands. Open to AI/ML engineering roles.',
    siteName: 'Ayamullah Khan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayamullah Khan — AI Engineer',
    description: 'AI Engineer specializing in LLM fine-tuning, quantization, and agentic systems. Open to AI/ML engineering roles.',
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
  url: "https://ayamullah-khan.vercel.app",
  jobTitle: "AI Engineer",
  description:
    "AI Engineer specializing in LLM fine-tuning (LoRA/QLoRA), model quantization and inference optimization, and agentic systems, plus the full-stack products around them.",
  image: "https://ayamullah-khan.vercel.app/images/IMG_7779.png",
  email: "mailto:ayamullahkhan04@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ayam04",
    "https://linkedin.com/in/ayam04",
    "https://leetlingo.site",
  ],
  knowsAbout: [
    "LLM fine-tuning",
    "LoRA",
    "QLoRA",
    "PEFT",
    "RLHF",
    "DPO",
    "Model quantization",
    "Inference optimization",
    "vLLM",
    "TensorRT-LLM",
    "Knowledge distillation",
    "Multi-agent systems",
    "Retrieval-augmented generation",
    "MLOps",
    "Machine learning",
    "Computer vision",
    "Natural language processing",
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
