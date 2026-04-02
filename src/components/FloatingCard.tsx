import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className: string;
  delay?: number;
}

const FloatingCard = ({ icon, title, subtitle, className, delay = 0 }: FloatingCardProps) => {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-blue-100 ${className}`}
    >
      <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {title}
        </p>
        <p className="text-sm font-bold text-slate-900">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default FloatingCard;