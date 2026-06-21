import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="px-5 md:px-10 pt-20 md:pt-28">
        {/* Top */}
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-paper/15">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span className="eyebrow text-paper/60">Available for AI/ML roles</span>
            </div>
            <p className="font-display text-2xl md:text-3xl tracking-tight max-w-md leading-snug">
              Building intelligent products from prototype to production.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-paper/40 mb-6">Navigate</h4>
            <ul className="space-y-3 text-paper/70">
              <li><Link href="#about" className="link-underline hover:text-paper">About</Link></li>
              <li><Link href="#work" className="link-underline hover:text-paper">Work</Link></li>
              <li><Link href="#contact" className="link-underline hover:text-paper">Contact</Link></li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1qw-CG5YYz_8YhJ26e0e9vqSVBVgqt31W/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-paper"
                >
                  Résumé
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-paper/40 mb-6">Elsewhere</h4>
            <ul className="space-y-3 text-paper/70">
              <li><Link href="https://github.com/ayam04" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-paper">GitHub</Link></li>
              <li><Link href="https://linkedin.com/in/ayam04" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-paper">LinkedIn</Link></li>
              <li><a href="mailto:ayamullahkhan04@gmail.com" className="link-underline hover:text-paper">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 text-sm text-paper/45">
          <p>© {currentYear} Ayamullah Khan. All rights reserved.</p>
          <p className="eyebrow text-paper/40">New Delhi, IN · ©2026</p>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="select-none leading-none -mb-[2.5vw] md:-mb-[3vw]">
        <div className="font-display font-bold uppercase tracking-tightest text-center text-paper/[0.07] text-[34vw] leading-[0.8]">
          Ayam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
