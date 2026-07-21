import {
  Database, Code, BarChart3, Sheet, LayoutDashboard,
  TrendingUp, Workflow, GitBranch,
} from 'lucide-react';

const iconMap = {
  Database, Code, BarChart3, Sheet, LayoutDashboard,
  TrendingUp, Workflow, GitBranch,
};

export default function ToolkitIcon({ name, size = 24 }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
