import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { profile, socialLinks } from "@/lib/data";

const icons = {
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-16 text-center">
      <p className="font-mono text-sm text-muted">{profile.location}</p>

      <div className="mt-6 flex justify-center gap-4">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      <p className="mt-10 text-xs text-muted">
        &copy; {profile.name} {new Date().getFullYear()}
      </p>
    </footer>
  );
}
