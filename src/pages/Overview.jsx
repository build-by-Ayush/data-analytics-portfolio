import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight, Award, Briefcase, Code, ArrowRight,
  BarChart3, TrendingUp, PieChart, Activity,
} from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import { profile, toolkit, projects, certificates, experiences } from '../data/portfolio';

const providerLogos = {
  'Microsoft': '/ProviderLogos/microsoft.png',
  'Infosys Springboard': '/ProviderLogos/infosys.png',
  'Udemy': '/ProviderLogos/udemy.png',
};

const stagger = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } },
  item: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function Overview() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <div className="section-fade flex flex-col h-full gap-2 min-h-0">
      <ProfileHeader />

      <motion.div
        className="flex-1 grid gap-2 min-h-0"
        style={{
          gridTemplateColumns: '240px 1fr 1fr 1.6fr',
          gridTemplateRows: '3fr 2fr',
        }}
        variants={stagger.container}
        initial="hidden"
        animate="visible"
      >
        {/* COL 1: Toolkit */}
        <motion.div variants={stagger.item} className="row-span-2 min-h-0">
          <ToolkitPanel />
        </motion.div>

        {/* COL 2: About Me */}
        <motion.div variants={stagger.item} className="min-h-0">
          <GlassPanel className="p-4 h-full overflow-hidden text-left flex flex-col items-stretch justify-start" hover onClick={() => navigate('/about')}>
            <div className="flex items-center justify-between">
              <SectionLabel text="About Me" icon={<Activity size={12} />} />
              <span className="text-[11px] text-accent-cyan hover:text-white transition-colors flex items-center gap-0.5">
                More <ChevronRight size={12} />
              </span>
            </div>
            <div className="mt-4 text-left">
              {/* Headline */}
              <p className="text-[12.5px] font-semibold leading-[1.5] text-text-primary opacity-80">
                I combine engineering logic with data storytelling to turn messy datasets into clear business decisions.
              </p>

              {/* Bullet Points */}
              <div className="mt-4 space-y-2">

                <div className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[2px]">•</span>
                  <p className="text-[11px] leading-[1.6]">
                    <span className="font-semibold text-text-primary">Problem-First:</span>
                    <span className="text-text-secondary"> Solving actual friction, not just writing code.</span>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[2px]">•</span>
                  <p className="text-[11px] leading-[1.6]">
                    <span className="font-semibold text-text-primary">End-to-End:</span>
                    <span className="text-text-secondary"> Handling everything from raw data to interactive dashboards.</span>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[2px]">•</span>
                  <p className="text-[11px] leading-[1.6]">
                    <span className="font-semibold text-text-primary">Cloud-Native:</span>
                    <span className="text-text-secondary"> Expanding into Google BigQuery and dbt.</span>
                  </p>
                </div>

              </div>

            </div>
          </GlassPanel>
        </motion.div>

        {/* COL 3: Experience */}
        <motion.div variants={stagger.item} className="min-h-0">
          <GlassPanel className="p-4 h-full overflow-hidden">
            <div className="flex items-center justify-between">
              <SectionLabel text="Experience" icon={<Briefcase size={12} />} />
              <button
                onClick={() => navigate('/experience')}
                className="text-[11px] text-accent-cyan hover:text-white transition-colors flex items-center gap-0.5"
              >
                View All <ChevronRight size={12} />
              </button>
            </div>

            <div className="mt-3 space-y-2.5">
              {experiences.slice(0, 3).map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => navigate('/experience')}
                  className="w-full text-left glass-inner p-4 rounded-xl group"
                >
                  <div className="flex items-start gap-2.5">
                    {/* Icon */}
                    <div
                      className="
                        w-8 h-8
                        rounded-lg
                        bg-accent-violet/12
                        border border-accent-violet/15
                        backdrop-blur-xl
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                        flex items-center justify-center
                        shrink-0 mt-0.5
                        p-1
                      "
                    >
                      <img
                        src={exp.logo}
                        alt={exp.organization}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[13px] font-semibold text-text-primary
                        group-hover:text-accent-cyan transition-colors"
                      >
                        {exp.title}
                      </p>

                      <p className="text-[11px] text-text-muted mt-0.5">
                        {exp.organization} &middot; {exp.duration}
                      </p>

                      {exp.overview && (
                        <ul className="mt-4 space-y-3 -ml-8">
                          {exp.overview.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-1 text-[10.5px] leading-snug text-text-muted"
                            >
                              <span className="text-accent-cyan mt-0.5 shrink-0">
                                &#8226;
                              </span>

                              <span className="leading-snug">
                                <span className="font-semibold text-text-primary opacity-75">
                                  {item.title}
                                </span>
                                <span className="text-text-muted">
                                  {item.text}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* COL 4: Featured Projects */}
        <motion.div variants={stagger.item} className="row-span-2 min-h-0">
          <GlassPanel className="p-4 h-full overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <SectionLabel
                text="Featured Projects"
                icon={<BarChart3 size={12} />}
              />
              <button
                onClick={() => navigate('/projects')}
                className="text-[11px] text-accent-cyan hover:text-white transition-colors flex items-center gap-0.5"
              >
                View All <ArrowRight size={12} />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-2.5 min-h-0">
              {featured.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full text-left group flex-1 min-h-0"
                >
                  <div
                    className="rounded-xl overflow-hidden border border-white/[0.06]
                    hover:border-accent-cyan/20 transition-all h-full flex flex-col
                    bg-white/[0.02]"
                  >
                    {/* Dashboard Preview */}
                    <div className="flex-1 relative overflow-hidden min-h-0">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover object-center
                          brightness-[0.96] contrast-[0.95] saturate-[0.92]
                          transition-all duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <DashboardPreview
                          index={idx}
                          subtitle={project.subtitle}
                        />
                      )}

                      {/* Overlay */}
                      <div
                        className="absolute inset-0
                        bg-gradient-to-t
                        from-navy-900/75
                        via-navy-900/15
                        to-white/[0.04]
                        backdrop-blur-[1.5px]"
                      />
                    </div>

                    {/* Info Bar */}
                    <div className="p-2.5 shrink-0 flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p
                          className="text-[12px] font-semibold text-text-primary
                          group-hover:text-accent-cyan transition-colors truncate"
                        >
                          {project.title}
                        </p>

                        <div className="flex gap-1 mt-1 flex-wrap">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] px-1.5 py-0.5 rounded-full
                              bg-accent-indigo/10 text-accent-indigo/90
                              border border-accent-indigo/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0">
                        <span
                          className={`badge ${
                            project.status === 'Completed'
                              ? 'badge-completed'
                              : project.status === 'Active'
                              ? 'badge-active'
                              : 'badge-default'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* COL 2-3 BOTTOM: Certificates */}
        <motion.div variants={stagger.item} className="col-span-2 min-h-0">
          <GlassPanel className="p-4 h-full overflow-hidden flex flex-col">
            <div className="flex items-center justify-between shrink-0">
              <SectionLabel text="Certifications" icon={<Award size={12} />} />
              <button
                onClick={() => navigate('/certificates')}
                className="text-[11px] text-accent-cyan hover:text-white transition-colors flex items-center gap-0.5"
              >
                More <ChevronRight size={12} />
              </button>
            </div>
            <div className="flex-1 flex items-center">
            <div className="grid grid-cols-4 gap-2 w-full">
              {certificates.slice(0, 4).map((cert) => {
                const logo = providerLogos[cert.issuer];

                return (
                  <button
                    key={cert.id}
                    onClick={() => navigate('/certificates')}
                    className="text-left glass-inner p-3 rounded-xl group"
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt={cert.issuer}
                        className="h-8 w-auto object-contain mb-2"
                      />
                    ) : (
                      <div
                        className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/15
                        flex items-center justify-center text-accent-cyan mb-2"
                      >
                        <Award size={14} />
                      </div>
                    )}
                    <p className="text-[11px] font-semibold text-text-primary leading-snug line-clamp-2
                      group-hover:text-accent-cyan transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-[9px] text-text-muted mt-1">
                      {cert.issuer} &middot; {cert.date}
                    </p>
                  </button>
                );
              })}
            </div>
            </div>
          </GlassPanel>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Profile Header ── */
function ProfileHeader() {
  return (
    <motion.div
      className="glass-panel px-6 py-4 flex items-center gap-6 shrink-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0"
        style={{
          border: '2px solid rgba(34, 211, 238, 0.3)',
          boxShadow: '0 0 25px rgba(34, 211, 238, 0.12), 0 0 50px rgba(99, 102, 241, 0.06)',
        }}
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{profile.name}</h1>
        <p className="text-[15px] text-text-secondary mt-1">{profile.title}</p>
        <p className="text-[12px] text-text-muted mt-0.5">{profile.tagline}</p>
      </div>
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-inner">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[12px] text-text-secondary font-medium">Open to opportunities</span>
      </div>
    </motion.div>
  );
}

/* ── Toolkit — organic floating icons ── */
function ToolkitPanel() {
  const positions = [
    { top: '8%', left: '12%' }, { top: '6%', left: '55%' }, { top: '8%', right: '8%' },
    { top: '33%', left: '5%' }, { top: '35%', left: '48%' }, { top: '30%', right: '10%' },
    { top: '58%', left: '18%' }, { top: '60%', left: '60%' },
  ];

  return (
    <GlassPanel className="p-4 h-full overflow-hidden">
      <SectionLabel text="Technical Toolkit" icon={<Code size={12} />} />
      <div className="relative h-[calc(100%-28px)] mt-2">
        {toolkit.map((skill, i) => {
        const pos = skill.pos || {};

        return (
          <motion.div
            key={skill.name}
            className="absolute group cursor-default"
            style={pos}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            whileHover={{ y: -5, scale: 1.08 }}
          >
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-h-14 max-w-14 object-contain drop-shadow-[0_0_14px_rgba(34,211,238,0.18)]"
                />
              </div>

              <span className="text-[12px] font-medium text-text-primary group-hover:text-accent-cyan transition-colors">
                {skill.name}
              </span>

              {skill.subtitle && (
                <span className="text-[9px] text-text-muted leading-tight">
                  {skill.subtitle}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
      </div>
    </GlassPanel>
  );
}

/* ── Dashboard preview placeholder ── */
function DashboardPreview({ index, subtitle }) {
  const schemes = [
    { from: 'rgba(20,30,60,0.95)', to: 'rgba(15,25,50,0.8)', accent: '#22d3ee' },
    { from: 'rgba(25,20,55,0.95)', to: 'rgba(18,15,45,0.8)', accent: '#8b5cf6' },
    { from: 'rgba(15,25,40,0.95)', to: 'rgba(12,20,35,0.8)', accent: '#6366f1' },
  ];
  const s = schemes[index % 3];

  return (
    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}>
      {/* Mini dashboard mockup */}
      <div className="absolute inset-2 flex gap-1.5">
        {/* Left chart area */}
        <div className="flex-[2] flex flex-col gap-1.5">
          <div className="flex-1 rounded-lg border border-white/[0.04] p-2 flex items-end gap-1">
            {[65, 40, 80, 55, 70, 45, 90, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm transition-all"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, ${s.accent}40, ${s.accent}15)`,
                  border: `1px solid ${s.accent}20`,
                }}
              />
            ))}
          </div>
          <div className="h-8 rounded-lg border border-white/[0.04] flex items-center px-2 gap-2">
            <TrendingUp size={10} style={{ color: s.accent, opacity: 0.6 }} />
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.04]">
              <div className="h-full rounded-full" style={{ width: '65%', background: `${s.accent}30` }} />
            </div>
          </div>
        </div>
        {/* Right stats */}
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex-1 rounded-lg border border-white/[0.04] p-2 flex flex-col justify-center items-center">
            <PieChart size={20} style={{ color: s.accent, opacity: 0.4 }} />
          </div>
          <div className="flex-1 rounded-lg border border-white/[0.04] p-2 flex flex-col justify-center items-center">
            <BarChart3 size={20} style={{ color: s.accent, opacity: 0.4 }} />
          </div>
        </div>
      </div>
      {/* Bottom gradient + label */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />
      <div className="absolute bottom-1.5 left-2.5 right-2.5">
        <p className="text-[9px] text-text-muted uppercase tracking-widest font-medium">{subtitle}</p>
      </div>
    </div>
  );
}

/* ── Section label ── */
function SectionLabel({ text, icon }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-accent-gold opacity-70">{icon}</span>}
      <h2 className="section-label">{text}</h2>
    </div>
  );
}
