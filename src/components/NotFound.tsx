import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0B1020] relative overflow-hidden px-4">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-glow/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center p-8 rounded-2xl glass-card relative z-10 border border-blue-glow/10"
      >
        <div className="flex justify-center mb-6 text-cyan-accent">
          <AlertCircle className="w-16 h-16 animate-pulse" />
        </div>
        
        <h1 className="text-4xl font-extrabold font-heading text-slate-100 mb-2 tracking-tight">
          404
        </h1>
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The page you are looking for doesn't exist, has been removed, or has been renamed. Let's get you back on track.
        </p>

        <button
          onClick={onGoHome}
          className="w-full py-3 px-6 rounded-lg glass-button flex items-center justify-center gap-2 text-cyan-accent font-medium hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 focus:ring-offset-navy-900 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
