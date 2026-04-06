import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link to={`/project/${project.id}`} className="group block relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <h3 className="text-xl font-medium">{project.title}</h3>
               <p className="text-sm text-zinc-400">{project.year}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
