import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import PageHeader from '../components/PageHeader';
import { experiences } from '../data/portfolio';

export default function ExperienceList() {
  const navigate = useNavigate();

  return (
    <div className="section-fade">
      <PageHeader title="Experience" subtitle={`${experiences.length} roles`} />

      <div className="max-w-2xl mx-auto space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <GlassPanel
              className="p-6 glass-panel-hover cursor-pointer"
              hover
              onClick={() => navigate(`/experience/${exp.id}`)}
              delay={i * 0.1}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20
                  flex items-center justify-center text-accent-violet shrink-0">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{exp.title}</h3>
                  <p className="text-sm text-accent-indigo mt-0.5">{exp.organization}</p>
                  <p className="text-xs text-text-muted mt-1">{exp.duration} · {exp.role}</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
