import { useNavigate } from 'react-router-dom';
import { Link2, Code2, Mail, FileText, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  const navigate = useNavigate();
  const { social } = profile;

  const handleContact = async () => {
    const phone = social.phone;

    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Windows Phone/i.test(
        navigator.userAgent
      );

    // Mobile: open phone dialer
    if (isMobile) {
      window.location.href = `tel:${phone}`;
      return;
    }

    // Desktop: copy number
    try {
      await navigator.clipboard.writeText(phone);
      alert('Phone number copied to clipboard!');
    } catch {
      window.prompt('Copy this phone number:', phone);
    }
  };

  return (
    <footer className="relative z-10 shrink-0">
      <div
        className="px-5 py-2.5 flex items-center gap-3"
        style={{
          background:
            'linear-gradient(180deg, rgba(8, 12, 24, 0.85) 0%, rgba(8, 12, 24, 0.95) 100%)',
          borderTop: '1px solid rgba(148, 163, 184, 0.06)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Left group: Contact + Resume */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleContact}
            className="pill-btn pill-btn-primary"
          >
            <Phone size={13} />
            Contact
          </button>

          <button
            onClick={() => navigate('/resume')}
            className="pill-btn pill-btn-primary"
          >
            <FileText size={13} />
            Resume
          </button>
        </div>

        <div className="flex-1" />

        {/* Right: Social pills */}
        <div className="flex items-center gap-2">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn"
            >
              <Link2 size={13} />
              LinkedIn
            </a>
          )}

          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn"
            >
              <Code2 size={13} />
              GitHub
            </a>
          )}

          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="pill-btn"
            >
              <Mail size={13} />
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}