import { motion } from 'framer-motion';
import {
  GraduationCap, MapPin, Calendar, Award, BookOpen,
  Activity, User,
} from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import PageHeader from '../components/PageHeader';
import { profile, education } from '../data/portfolio';

const stagger = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } },
  item: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function AboutPage() {
  return (
    <div className="section-fade flex flex-col min-h-full">
      <PageHeader title="About Me" subtitle="Background & Education" />

      <motion.div
        className="flex-1 grid gap-3 min-h-0"
        style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr' }}
        variants={stagger.container}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT: About */}
        <motion.div variants={stagger.item} className="min-h-0">
          <GlassPanel className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <User size={13} className="text-accent-gold opacity-70" />
                <h2 className="section-label">About</h2>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] text-text-secondary font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Hero Section */}
            <div className="flex items-center gap-8 mb-2">

              {/* Profile Photo */}
              <div
                className="w-44 h-44 rounded-full overflow-hidden shrink-0"
                style={{
                  border: '2px solid rgba(34,211,238,0.25)',
                  boxShadow:
                    '0 0 35px rgba(34,211,238,0.12), 0 0 70px rgba(99,102,241,0.08)',
                }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Title */}
              <div className="flex flex-col justify-center flex-1">

                <h1 className="text-4xl font-bold text-text-primary tracking-tight">
                  {profile.name}
                </h1>

                <p className="text-lg text-accent-cyan mt-2 font-medium">
                  {profile.title}
                </p>

                <div
                  className="mt-5 h-px w-48"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(34,211,238,.45), transparent)',
                  }}
                />
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pr-2 text-[13px] leading-[1.8] text-text-secondary space-y-1.8 custom-scroll">
              {profile.aboutDetailed.split('\n\n').map((paragraph, index) => {
                const isHeading =
                  paragraph === 'From Code to Context' ||
                  paragraph === 'Driven by Curiosity' ||
                  paragraph === 'My Current Focus';

                return isHeading ? (
                  <h4
                    key={index}
                    className="text-[15px] font-semibold text-text-primary mt-2"
                  >
                    {paragraph}
                  </h4>
                ) : (
                  <p key={index}>{paragraph}</p>
                );
              })}
            </div>
          </GlassPanel>
        </motion.div>

        {/* RIGHT: Education */}
        <motion.div variants={stagger.item} className="min-h-0">
          <GlassPanel className="p-6 h-full overflow-auto flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={13} className="text-accent-gold opacity-70" />
              <h2 className="section-label">Education</h2>
            </div>

            <div className="glass-inner p-5 rounded-xl mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 border border-accent-indigo/15
                  flex items-center justify-center text-accent-indigo shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-text-primary">{education.degree}</h3>
                  <p className="text-[13px] text-accent-cyan mt-0.5">{education.field}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-text-muted">
                    <span className="flex items-center gap-1"><Award size={11} /> {education.college}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {education.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-[11px] text-text-muted">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {education.duration}</span>
                    <span className="flex items-center gap-1">
                      <Activity size={11} className="text-accent-gold" /> CGPA: {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.06] my-4" />

              <p className="text-[13px] leading-[1.7] text-text-secondary">
                {education.description}
              </p>
            </div>

            {/* Coursework */}
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={12} className="text-accent-gold opacity-70" />
              <span className="section-label">Relevant Coursework</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {education.coursework.map((course, i) => (
                <motion.div
                  key={course}
                  className="glass-inner px-3 py-2.5 rounded-xl flex items-center gap-2.5"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                  <span className="text-[12px] text-text-secondary">{course}</span>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </motion.div>
    </div>
  );
}
