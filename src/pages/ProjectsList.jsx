import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import { projects } from '../data/portfolio';

const stagger = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } },
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

function getPreviewText(project) {
  return (
    project.insights?.[0]?.paragraphs?.[0] ||
    project.insights?.[0]?.content?.[0] ||
    project.description ||
    ''
  );
}

function getPreviewImage(project) {
  return project.showcase?.[0] || project.thumbnail || '';
}

export default function ProjectsList() {
  const navigate = useNavigate();

  return (
    <div className="section-fade flex flex-col min-h-full gap-3">
      {/* Header */}
      <motion.div
        className="glass-panel px-6 py-4 flex items-center gap-4 shrink-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => navigate('/')}
          className="w-8 h-8 rounded-lg bg-white/[0.04] border border-border-glass
            flex items-center justify-center text-text-muted hover:text-text-primary
            hover:bg-white/[0.08] transition-all"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-text-primary tracking-tight">All Projects</h1>
          <p className="text-[12px] text-text-muted mt-0.5">{projects.length} projects</p>
        </div>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        className="flex-1 min-h-0 overflow-y-auto pr-1"
        variants={stagger.container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-3 pb-2">
          {projects.map((project, idx) => {
            const previewImage = getPreviewImage(project);
            const previewText = getPreviewText(project);

            return (
              <motion.div key={project.id} variants={stagger.item}>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full text-left group"
                >
                  <GlassPanel className="overflow-hidden glass-panel-hover" hover>
                    {/* Preview */}
                    <div className="h-36 relative overflow-hidden">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg,
                              rgba(${12 + idx * 5}, ${16 + idx * 3}, ${35 + idx * 7}, 0.92) 0%,
                              rgba(${18 + idx * 4}, ${24 + idx * 5}, ${50 + idx * 8}, 0.75) 100%)`,
                          }}
                        />
                      )}

                      {/* Dashboard placeholder when there is no preview image */}
                      {!previewImage && (
                        <div className="absolute inset-3 rounded-lg border border-white/[0.05] overflow-hidden">
                          <div className="h-full flex gap-1 p-1.5">
                            <div
                              className="flex-1 rounded bg-white/[0.03] border border-white/[0.03]
                              flex items-center justify-center"
                            >
                              <Layers size={18} className="text-accent-indigo/30" />
                            </div>

                            <div className="flex flex-col gap-1 w-1/3">
                              <div className="flex-1 rounded bg-accent-indigo/[0.05] border border-accent-indigo/[0.06]" />
                              <div className="flex-1 rounded bg-accent-violet/[0.05] border border-accent-violet/[0.06]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom shadow */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.72) 18%, rgba(0,0,0,0.30) 38%, rgba(0,0,0,0) 65%)",
                        }}
                      />

                      {/* Subtitle */}
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <p
                          className="text-[7.5px] font-thin uppercase tracking-[0.18em] text-stone-50/70"
                          style={{
                            textShadow: "0 0 18px rgba(0,0,0,0.95)"
                          }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <p className="text-[14px] font-semibold text-text-primary
                        group-hover:text-accent-indigo transition-colors">
                        {project.title}
                      </p>

                      <p className="text-[12px] text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                        {previewText}
                      </p>

                      <div className="flex gap-1.5 mt-2.5 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full
                              bg-accent-indigo/8 text-accent-indigo/80 border border-accent-indigo/12"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassPanel>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}