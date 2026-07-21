import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  ExternalLink,
  PlayCircle,
  Wrench,
  TrendingUp,
  Lightbulb,
  Image,
  Layers,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/portfolio';

const DEFAULT_THEME = '#22d3ee';

function isValidUrl(value) {
  return typeof value === 'string' && value.trim() !== '' && value.trim() !== '#';
}

function pickFirstUrl(...values) {
  return values.find(isValidUrl) || null;
}

function hexToRgba(hex, alpha = 1) {
  if (!hex || typeof hex !== 'string') return `rgba(34, 211, 238, ${alpha})`;

  const cleaned = hex.trim().replace('#', '');

  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16);
    const g = parseInt(cleaned[1] + cleaned[1], 16);
    const b = parseInt(cleaned[2] + cleaned[2], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  if (cleaned.length === 6) {
    const r = parseInt(cleaned.slice(0, 2), 16);
    const g = parseInt(cleaned.slice(2, 4), 16);
    const b = parseInt(cleaned.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgba(34, 211, 238, ${alpha})`;
}

function renderInlineText(text) {
  if (typeof text !== 'string') return text;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function InsightSection({ section, themeColor }) {
  const paragraphs = Array.isArray(section.paragraphs)
    ? section.paragraphs
    : Array.isArray(section.content)
      ? section.content
      : section.text
        ? [section.text]
        : [];

  const bullets = Array.isArray(section.bullets) ? section.bullets : [];
  const steps = Array.isArray(section.steps) ? section.steps : [];

  return (
    <section className="space-y-3">
      {section.heading && (
        <div className="flex items-start gap-2">
          <span
            className="mt-[7px] h-2 w-2 shrink-0 rounded-full"
            style={{ background: themeColor }}
          />
          <h3
            className="text-[14px] font-semibold tracking-tight"
            style={{ color: themeColor }}
          >
            {section.heading}
          </h3>
        </div>
      )}

      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-[13px] leading-relaxed text-text-secondary">
          {renderInlineText(paragraph)}
        </p>
      ))}

      {bullets.length > 0 && (
        <div className="space-y-2.5">
          {bullets.map((item, i) => {
            if (typeof item === 'string') {
              return (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: themeColor }}
                  />
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    {renderInlineText(item)}
                  </p>
                </div>
              );
            }

            return (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: themeColor }}
                />
                <p className="text-[13px] leading-relaxed text-text-secondary">
                  {item.title && (
                    <span className="font-semibold text-text-primary">
                      {renderInlineText(item.title)}
                      {item.description ? ': ' : ''}
                    </span>
                  )}
                  {item.description && renderInlineText(item.description)}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {steps.length > 0 && (
        <ol className="space-y-2.5">
          {steps.map((item, i) => {
            if (typeof item === 'string') {
              return (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-[1px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-text-primary"
                    style={{ background: hexToRgba(themeColor, 0.14) }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    {renderInlineText(item)}
                  </p>
                </li>
              );
            }

            return (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-[1px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-text-primary"
                  style={{ background: hexToRgba(themeColor, 0.14) }}
                >
                  {i + 1}
                </span>
                <p className="text-[13px] leading-relaxed text-text-secondary">
                  {item.title && (
                    <span className="font-semibold text-text-primary">
                      {renderInlineText(item.title)}
                      {item.description ? ': ' : ''}
                    </span>
                  )}
                  {item.description && renderInlineText(item.description)}
                </p>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}

function InsightsRenderer({ project, themeColor }) {
  const insights = Array.isArray(project.insights) ? project.insights : [];
  const fallbackDescription = project.description;

  if (insights.length === 0 && fallbackDescription) {
    return (
      <div className="space-y-4">
        <p className="text-[13px] leading-relaxed text-text-secondary">
          {fallbackDescription}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {insights.map((section, i) => (
        <InsightSection key={section.heading || i} section={section} themeColor={themeColor} />
      ))}
    </div>
  );
}

function ProjectCarousel({ images, title, themeColor, current, direction, goTo }) {
  if (!images.length) {
    return (
      <div className="relative h-full w-full min-h-[280px] rounded-xl glass-inner overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent-indigo/6 to-accent-violet/3"
          style={{
            background: `linear-gradient(135deg, ${hexToRgba(themeColor, 0.08)}, rgba(139,92,246,0.03))`,
          }}
        />
        <div className="relative z-10 text-center">
          <Layers size={40} className="mx-auto text-text-muted/30 mb-3" />
          <p className="text-[13px] text-text-muted">Dashboard preview / screenshot</p>
          <p className="text-[11px] text-text-muted/60 mt-1">Replace with project image</p>
        </div>
      </div>
    );
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 220 : -220,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -220 : 220,
      opacity: 0,
      scale: 0.985,
    }),
  };

  return (
    <div className="relative h-full w-full min-h-[280px] rounded-xl glass-inner overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent-indigo/6 to-accent-violet/3"
        style={{
          background: `linear-gradient(135deg, ${hexToRgba(themeColor, 0.08)}, rgba(139,92,246,0.03))`,
        }}
      />

      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="absolute inset-0 h-full w-full object-contain bg-[#0b1020]"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/15 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full px-2 py-1 bg-black/15 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === current ? '18px' : '6px',
                background: i === current ? themeColor : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="section-fade py-20 text-center">
        <p className="text-text-secondary">Project not found.</p>
        <button onClick={() => navigate('/projects')} className="text-accent-indigo mt-4 text-sm">
          Return to Projects
        </button>
      </div>
    );
  }

  const themeColor = project.themeColor || DEFAULT_THEME;
  const tools = Array.isArray(project.tools) ? project.tools : [];
  const techniques = Array.isArray(project.techniques) ? project.techniques : [];
  const metrics = Array.isArray(project.metrics) ? project.metrics : [];
  const showcase = Array.isArray(project.showcase) && project.showcase.length
    ? project.showcase
    : Array.isArray(project.images)
      ? project.images
      : [];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrent(0);
    setDirection(0);
  }, [showcase.length, project.title]);

  const goTo = (nextIndex) => {
    if (!showcase.length || nextIndex === current) return;
    setDirection(nextIndex > current ? 1 : -1);
    setCurrent((nextIndex + showcase.length) % showcase.length);
  };

  const prev = () => goTo((current - 1 + showcase.length) % showcase.length);
  const next = () => goTo((current + 1) % showcase.length);

  const liveDemoHref = pickFirstUrl(
    project.links?.liveDemo,
    project.links?.demo,
    project.links?.dashboard,
  );

  const githubHref = pickFirstUrl(project.links?.github);
  const videoHref = pickFirstUrl(project.links?.video);

  return (
    <div className="section-fade flex flex-col min-h-full">
      <PageHeader title={project.title} subtitle={project.subtitle} backLabel="Back to Projects" backTo="/projects"/>

      <div
        className="flex-1 grid gap-3 min-h-0"
        style={{ gridTemplateColumns: '260px 1fr 360px', minHeight: '420px' }}
      >
        {/* LEFT: Metrics + Tools + Techniques */}
        <motion.div
          className="flex h-full min-h-0 flex-col gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {/* Key Metrics */}
          <GlassPanel className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={12} style={{ color: themeColor, opacity: 0.85 }} />
              <h2 className="section-label">Key Metrics</h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-xl glass-inner text-center"
                  title={m.description || ''}
                  aria-label={
                    m.description
                      ? `${m.label}: ${m.value}. ${m.description}`
                      : `${m.label}: ${m.value}`
                  }
                >
                  <p
                    className="text-[28px] font-bold leading-none"
                    style={{ color: themeColor }}
                  >
                    {m.value}
                  </p>

                  {m.unit && (
                    <p
                      className="text-[7px] uppercase tracking-[0.18em] mt-1"
                      style={{ color: themeColor, opacity: 0.75 }}
                    >
                      {m.unit}
                    </p>
                  )}

                  <p
                    className="text-[8px] uppercase tracking-wider mt-2 leading-snug"
                    style={{ color: themeColor, opacity: 0.9 }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Tools + Techniques */}
          <GlassPanel className="p-5 flex-1 min-h-0 flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0 overflow-y-auto pr-1">
              <div className="flex items-center gap-2 mb-4">
                <Wrench size={12} className="text-accent-gold opacity-70" />
                <h2 className="section-label">Tools Used</h2>
              </div>

              <div className="space-y-2">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl glass-inner"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: themeColor }}
                    />
                    <span className="text-[13px] text-text-primary">{tool}</span>
                  </motion.div>
                ))}
              </div>

              {techniques.length > 0 && (
                <>
                  <div className="h-px bg-white/[0.06] my-4" />

                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{ background: themeColor }}
                    />
                    <h2 className="section-label">Techniques Used</h2>
                  </div>

                  <div className="space-y-2">
                    {techniques.map((technique, i) => (
                      <motion.div
                        key={technique}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl glass-inner"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.04 }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: themeColor }}
                        />

                        <span className="text-[13px] text-text-primary">
                          {technique}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </GlassPanel>
        </motion.div>

        {/* CENTER: Showcase */}
        <motion.div
          className="min-h-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <GlassPanel className="p-5 h-full flex flex-col min-h-0">
            <div className="flex items-center gap-2 mb-4">
              <Image size={12} className="text-accent-gold opacity-70" />
              <h2 className="section-label">Project Showcase</h2>
            </div>

                        <div className="flex-1 min-h-0 h-full">
              <ProjectCarousel
                images={showcase}
                title={project.title}
                themeColor={themeColor}
                current={current}
                direction={direction}
                goTo={goTo}
              />
            </div>

            <div className="mt-4 grid grid-cols-[32px_1fr_32px] items-center gap-3">
              {showcase.length > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous screenshot"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: themeColor,
                    color: '#08111f',
                    boxShadow: `0 0 0 1px ${hexToRgba(themeColor, 0.18)}`,
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
              ) : (
                <div className="w-8 h-8" />
              )}

              <div className="flex flex-wrap items-center justify-center gap-2">
                {liveDemoHref && (
                  <ActionBtn
                    href={liveDemoHref}
                    icon={<ExternalLink size={13} />}
                    label="Live Demo"
                    themeColor={themeColor}
                  />
                )}
                {githubHref && (
                  <ActionBtn
                    href={githubHref}
                    icon={<Code2 size={13} />}
                    label="GitHub Code"
                    themeColor={themeColor}
                  />
                )}
                {videoHref && (
                  <ActionBtn
                    href={videoHref}
                    icon={<PlayCircle size={13} />}
                    label="Video Walkthrough"
                    themeColor={themeColor}
                  />
                )}
              </div>

              {showcase.length > 1 ? (
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next screenshot"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: themeColor,
                    color: '#08111f',
                    boxShadow: `0 0 0 1px ${hexToRgba(themeColor, 0.18)}`,
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              ) : (
                <div className="w-8 h-8" />
              )}
            </div>
          </GlassPanel>
        </motion.div>

        {/* RIGHT: Insights */}
        <motion.div
          className="flex flex-col gap-3 min-h-0"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <GlassPanel className="p-5 h-full flex flex-col overflow-hidden min-h-0">
            <div className="flex items-center gap-2 mb-3 shrink-0">
              <Lightbulb size={12} style={{ color: themeColor, opacity: 0.85 }} />
              <h2 className="section-label">Insights & Impact</h2>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pr-1">
              <InsightsRenderer project={project} themeColor={themeColor} />
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
}

function ActionBtn({ icon, label, href, themeColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-[11px] font-medium glass-inner transition-all"
      style={{
        color: themeColor,
        borderColor: hexToRgba(themeColor, 0.18),
      }}
    >
      {icon}
      {label}
    </a>
  );
}