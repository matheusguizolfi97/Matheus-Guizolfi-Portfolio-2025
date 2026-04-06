import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Plus, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-[400px] lg:fixed lg:h-screen p-8 lg:p-12 flex flex-col justify-between border-r border-zinc-900">
          <div>
            <Link to="/" className="block group">
              <h1 className="text-4xl font-medium tracking-tight mb-8 group-hover:opacity-70 transition-opacity">
                Matheus Guizolfi
              </h1>
            </Link>
            
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed max-w-[300px]">
              <p className="text-white font-medium">
                Transformo ideias em experiências visuais marcantes.
              </p>
              <p>
                Com 6 anos de experiência em Design Gráfico, Branding e Web Design, crio com propósito, curiosidade e atenção aos detalhes. Entre a lógica e a criatividade, desenvolvo soluções visuais que comunicam com clareza.
              </p>
            </div>

            <Link 
              to="/info"
              className="inline-flex items-center gap-2 mt-10 px-6 py-2.5 border border-zinc-700 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Mais Informações <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="space-y-4">
              <a href="mailto:matheus.guizolfi7@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <Mail size={18} /> matheus.guizolfi7@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/matheus-guizolfi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="shrink-0"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Linkedin
              </a>
            </div>

            <div className="pt-8 border-t border-zinc-900">
              <p className="text-2xl font-medium">© 2025</p>
            </div>

            <button 
              onClick={scrollToTop}
              className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-md hover:bg-zinc-200 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} strokeWidth={3} />
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-[400px] p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
