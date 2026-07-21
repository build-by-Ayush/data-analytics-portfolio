import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronUp,
  ChevronDown,
  Briefcase,
  Calendar,
  Building2,
  Target,
} from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import PageHeader from '../components/PageHeader';
import { experiences } from '../data/portfolio';

export default function ExperienceDetail() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () =>
    goTo((current - 1 + experiences.length) % experiences.length);

  const next = () =>
    goTo((current + 1) % experiences.length);

  const exp = experiences[current];

  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.88,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      y: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.88,
    }),
  };

  return (
    <div className="section-fade flex flex-col min-h-full">
      <PageHeader
        title="Experience"
        subtitle={`${experiences.length} roles`}
      />

      <div className="flex-1 flex items-center justify-center py-8 overflow-hidden">

        {/* ===== Card + Side Buttons ===== */}
        <div className="relative flex items-center justify-center w-full max-w-5xl">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full glass-panel
              flex items-center justify-center
              text-text-secondary
              hover:text-text-primary
              hover:border-accent-indigo/20
              transition-all"
          >
            <ChevronUp size={20} />
          </button>

          {/* CARD */}
          <div
            className="relative w-full max-w-2xl mx-20"
            style={{ minHeight: 500 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={exp.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute inset-0"
              >
                <div
                  className="h-full rounded-[28px] p-8"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(42,48,78,0.62) 0%, rgba(30,35,60,0.78) 100%)",

                    backdropFilter: "blur(32px) saturate(180%)",
                    WebkitBackdropFilter: "blur(32px) saturate(180%)",

                    border: "1px solid rgba(140,165,255,0.12)",

                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.08),
                      inset 0 0 60px rgba(255,255,255,0.03),
                      0 0 40px rgba(65,90,255,0.12),
                      0 20px 60px rgba(0,0,0,0.35)
                    `,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        bg-accent-violet/10
                        border border-accent-violet/15
                        backdrop-blur-xl
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                        flex items-center justify-center
                        shrink-0
                        p-1.5
                      "
                    >
                      <img
                        src={exp.logo}
                        alt={exp.organization}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-text-primary">
                        {exp.title}
                      </h2>

                      <div className="flex items-center gap-3 mt-1.5 text-[12px] text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Building2 size={12} />
                          {exp.organization}
                        </span>

                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2">
                      <Target
                        size={13}
                        className="text-accent-indigo"
                      />

                      <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Role
                      </span>

                      <span className="text-[13px] font-medium text-text-secondary ml-1">
                        {exp.role}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="mt-2 ml-1 text-[12px] leading-relaxed text-primay opacity-65 max-w-[90%]">
                      {exp.tagline}
                    </p>
                  </div>

                  <div className="h-px bg-border-glass mb-5" />

                  {/* Responsibilities */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                      Key Outcomes
                    </span>

                    <ul className="mt-3 space-y-2.5">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.15 + i * 0.06,
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full glass-panel
              flex items-center justify-center
              text-text-secondary
              hover:text-text-primary
              hover:border-accent-indigo/20
              transition-all"
          >
            <ChevronDown size={20} />
          </button>

        </div>

        {/* Dot indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-accent-indigo h-6'
                  : 'bg-text-muted/25 h-2 hover:bg-text-muted/40'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}