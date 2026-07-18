import './globals.css'
import { Kanit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '900'],
  variable: '--font-kanit',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0C0C0C',
}

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
  metadataBase: new URL('https://ayam.codes'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayam.codes',
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
  url: "https://ayam.codes",
  jobTitle: "AI Engineer",
  description:
    "AI Engineer specializing in LLM fine-tuning (LoRA/QLoRA), model quantization and inference optimization, and agentic systems, plus the full-stack products around them.",
  image: "https://ayam.codes/images/IMG_7779.png",
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
    <html lang="en" className={kanit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={kanit.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
