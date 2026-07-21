import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar, Building2, BookOpen } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/portfolio';

export default function CertificateDetail() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => goTo((current - 1 + certificates.length) % certificates.length);
  const next = () => goTo((current + 1) % certificates.length);

  const cert = certificates[current];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.82,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (dir) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.82,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  return (
    <div className="section-fade flex flex-col min-h-full">
      <PageHeader title="Certifications" subtitle={`${certificates.length} certificates`} />

      <div className="flex-1 flex items-stretch gap-4 relative">
        {/* LEFT ARROW — far left side */}
        <div className="flex items-center">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full glass-panel flex items-center justify-center
              text-text-secondary hover:text-text-primary hover:border-accent-indigo/20 transition-all"
          >
            <ChevronLeft size={22} />
          </button>
        </div>

        {/* Certificate Image — left panel */}
        <div className="flex-[3] relative overflow-hidden rounded-2xl">
          <GlassPanel className="h-full flex items-center justify-center p-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={cert.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 0.68, 0.36, 1.0] }}
                className="w-full max-w-xl"
                style={{ perspective: 1200 }}
              >
                <div
                  className="aspect-[4/3] rounded-xl border border-border-glass
                  overflow-hidden shadow-2xl shadow-black/25"
                >
                  <div className="flex items-center justify-center h-full p-6">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="
                        max-w-full
                        max-h-full
                        object-contain
                        rounded-xl
                        shadow-2xl
                      "
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-accent-indigo w-7'
                      : 'bg-text-muted/25 w-2 hover:bg-text-muted/40'
                  }`}
                />
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* RIGHT: Certificate Details */}
        <div className="flex-[2]">
          <GlassPanel className="p-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 border border-accent-cyan/15
                    flex items-center justify-center text-accent-cyan">
                    <Award size={17} />
                  </div>
                  <span className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">
                    Certificate Details
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-text-primary mb-2 leading-snug">
                  {cert.title}
                </h2>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                    <Building2 size={13} className="text-accent-indigo" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                    <Calendar size={13} className="text-accent-indigo" />
                    {cert.date}
                  </div>
                </div>

                <div className="h-px bg-border-glass mb-5" />

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={13} className="text-accent-violet" />
                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                    What I Learned
                  </h3>
                </div>
                <div className="space-y-4 text-[13px] leading-relaxed text-text-secondary">
                  {/* Scope */}
                  <p>
                    <span className="font-semibold text-text-primary">
                      The Scope:
                    </span>{' '}
                    {cert.learned.scope}
                  </p>

                  {/* Analytics Application */}
                  <div>
                    <span className="font-semibold text-text-primary">
                      Analytics Application:
                    </span>

                    <ul className="mt-2 space-y-1.5 ml-4">
                      {cert.learned.analytics.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2"
                        >
                          <span className="text-accent-violet mt-[5px] shrink-0">
                            •
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Takeaway */}
                  <p>
                    <span className="font-semibold text-text-primary">
                      The Takeaway:
                    </span>{' '}
                    {cert.learned.takeaway}
                  </p>

                </div>
              </motion.div>
            </AnimatePresence>
          </GlassPanel>
        </div>

        {/* RIGHT ARROW — far right side */}
        <div className="flex items-center">
          <button
            onClick={next}
            className="w-11 h-11 rounded-full glass-panel flex items-center justify-center
              text-text-secondary hover:text-text-primary hover:border-accent-indigo/20 transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
