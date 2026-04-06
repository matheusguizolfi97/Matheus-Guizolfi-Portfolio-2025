import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollBox from '../components/ScrollBox';

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];
  
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl mb-4">Projeto não encontrado</h2>
        <Link to="/" className="text-blue-400 hover:underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={id}
      className="pb-32"
    >
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project detail"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Image */}
      <div 
        className="aspect-[16/7] w-full overflow-hidden rounded-xl bg-zinc-900 mb-12 cursor-zoom-in"
        onClick={() => setSelectedImage(project.heroImage)}
      >
        <img 
          src={project.heroImage} 
          alt={`${project.title} Hero`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      {/* Project Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
          <h2 className="text-3xl font-medium tracking-tight">{project.title}</h2>
        </div>
        <span className="text-3xl font-medium text-white">{project.year}</span>
      </div>

      {/* Project Description */}
      <div className="space-y-6 text-zinc-400 leading-relaxed text-base max-w-4xl mb-24">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Website Scroll Box */}
      {(project.type === 'website' || project.type === 'both') && project.websiteImage && (
        <div className="mb-24">
          <ScrollBox imageSrc={project.websiteImage} />
        </div>
      )}

      {/* Asset Grid */}
      {(project.type === 'images' || project.type === 'both') && project.assets && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {project.assets.map((asset, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900 cursor-zoom-in"
              onClick={() => setSelectedImage(asset)}
            >
              <img 
                src={asset} 
                alt={`${project.title} asset ${i + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 lg:left-[400px] right-0 bg-black/80 backdrop-blur-md border-t border-zinc-900 px-8 py-6 flex justify-between items-center z-50">
        <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm">
          <ArrowLeft size={18} /> Voltar
        </Link>
        
        <Link to="/" className="text-zinc-500 hover:text-white transition-colors" aria-label="Home">
          <HomeIcon size={20} />
        </Link>

        <Link to={`/project/${nextProject.id}`} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm">
          Próximo <ArrowRight size={18} />
        </Link>
      </nav>
    </motion.div>
  );
}
