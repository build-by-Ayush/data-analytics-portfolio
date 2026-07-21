import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import { profile } from '../data/portfolio';

export default function ResumePage() {
  const navigate = useNavigate();
  const resumeUrl = profile.resumeUrl || '/resume.pdf';

  return (
    <div className="section-fade flex flex-col min-h-full gap-3">
      {/* Header bar */}
      <motion.div
        className="glass-panel px-6 py-4 flex items-center gap-4 shrink-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06]
            flex items-center justify-center text-text-muted hover:text-text-primary
            hover:bg-white/[0.08] transition-all"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-text-primary tracking-tight">Resume</h1>
          <p className="text-[12px] text-text-muted mt-0.5">{profile.name} &middot; {profile.title}</p>
        </div>
        <a
          href={resumeUrl}
          download
          className="pill-btn pill-btn-primary"
        >
          <Download size={13} />
          Download Resume
        </a>
      </motion.div>

      {/* Resume viewer — centered with side margins */}
      <div className="flex justify-center px-16 pb-8">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassPanel className="overflow-hidden p-3">
            {/* Try to embed the PDF */}
            <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full rounded-xl"
              style={{ height: "1105px" }}
            >
              {/* Fallback if PDF can't be embedded */}
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                  }}
                >
                  <FileText size={36} className="text-accent-indigo" />
                </div>
                <h2 className="text-lg font-semibold text-text-primary mb-2">
                  Resume Preview
                </h2>
                <p className="text-[13px] text-text-secondary max-w-md leading-relaxed mb-6">
                  Place your resume file at <code className="text-accent-indigo text-[12px]">/public/resume.pdf</code> to
                  display it here. The viewer supports PDF files.
                </p>
                <a
                  href={resumeUrl}
                  download
                  className="pill-btn pill-btn-primary"
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </div>
            </object>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
}
