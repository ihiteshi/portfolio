import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';

const SOCIALS = [
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hitesh-choudhary-62386b10a/', label: 'LinkedIn' },
  { Icon: FaGithub, href: 'https://github.com/ihiteshi', label: 'GitHub' },
  { Icon: FaFacebookF, href: 'https://www.facebook.com/hiiteshh', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/imhiteshc', label: 'Instagram' },
  { Icon: FaWhatsapp, href: 'https://wa.me/+610450625800', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-center gap-6">
        <div className="flex gap-4">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:scale-110 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <Icon size="18px" />
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
