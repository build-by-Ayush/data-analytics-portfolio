import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PageHeader({
  title,
  subtitle,
  backLabel = 'Back to Overview',
  backTo = '/',
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-muted
          hover:text-text-primary hover:bg-white/5 transition-all text-sm"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </button>
      <div className="h-6 w-px bg-border-glass" />
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-text-primary leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
