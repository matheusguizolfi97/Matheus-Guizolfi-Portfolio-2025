import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Analista de Marketing digital',
    period: 'fev de 2023 - mar de 2024',
    company: 'Masi Laboratório',
    description: 'Produção gráfica • Direção de arte • Gestão de Redes Sociais • Edição de vídeo • Materiais On e Off • Infográficos e Apresentações • Comunicação interna • Produção de conteúdo • E-mail Marketing • Manutenção de Website • Apresentações Institucionais'
  },
  {
    role: 'Web Designer Gráfico',
    period: 'jul de 2022 - mar de 2023',
    company: 'Mark',
    description: 'Produção gráfica • Direção de arte • Landing Pages • Identidade visual • Desenvolvimento e produção de Websites • Artes • Marketing • Adobe Illustrator • Adobe Premiere Pro'
  },
  {
    role: 'Analista de Marketing Digital',
    period: 'mai de 2021 - jul de 2022',
    company: 'Decision IT',
    description: 'Produção gráfica • Direção de arte • Edição de vídeo • E-mail Marketing • Materiais On e Off • Infográficos e Apresentações • Comunicação interna • Organização de Eventos • Produção de conteúdo • Gestão de Redes Sociais'
  }
];

export default function Info() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20"
    >
      {/* Hero Section */}
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="w-full xl:w-1/2 aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900">
          <img 
            src="https://picsum.photos/seed/matheus/800/600?grayscale" 
            alt="Matheus Guizolfi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full xl:w-1/2 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            Acredito que o design vai muito além da estética, é sobre contar histórias, resolver problemas e criar conexões reais.
          </h2>
          <p className="text-2xl lg:text-3xl text-zinc-400 font-light leading-snug">
            Gosto de mergulhar em cada projeto com curiosidade e entendendo o que faz cada ideia ser única.
          </p>
        </div>
      </div>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12 border-t border-zinc-900 group">
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-lg font-medium group-hover:text-zinc-300 transition-colors">{exp.role}</h3>
              <p className="text-sm text-zinc-500">{exp.period}</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg font-medium">{exp.company}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
