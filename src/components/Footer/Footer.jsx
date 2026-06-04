import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

const SOCIALS = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/hitesh-choudhary-62386b10a/', label: 'LinkedIn' },
  { Icon: FaGithubSquare, href: 'https://github.com/ihiteshi', label: 'GitHub' },
  { Icon: FaFacebookSquare, href: 'https://www.facebook.com/hiiteshh', label: 'Facebook' },
  { Icon: FaInstagramSquare, href: 'https://www.instagram.com/imhiteshc', label: 'Instagram' },
  { Icon: FaWhatsappSquare, href: 'https://wa.me/+610450625800', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-white/60 transition-all hover:scale-110 hover:text-white"
            >
              <Icon size="32px" />
            </a>
          ))}
        </div>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Hitesh Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
