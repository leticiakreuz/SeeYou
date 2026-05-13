"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import { GitBranch, Link, Globe, Search, Filter, Code2, ExternalLink } from 'lucide-react';

// Tipagem para os devs cadastrados
interface Developer {
  id: string;
  nome: string;
  nivel: 'Junior' | 'Pleno' | 'Senior' | 'Staff';
  stackPrincipal: string;
  tecnologias: string[];
  github: string;
  linkedin: string;
  portfolio: string;
  bio: string;
}

export default function FeedCurriculosPage() {
  const [devs] = useState<Developer[]>([
    {
      id: '1',
      nome: 'Letícia Kreuzberg',
      nivel: 'Junior',
      stackPrincipal: 'fullstack',
      tecnologias: ['JavaScript', 'SQL', 'Pascal', 'Next.js', 'Node.js', 'React', 'Tailwind', 'TypeScript'],
      github: '#',
      linkedin: '#',
      portfolio: '#',
      bio: 'Especialista em sistemas distribuídos e arquitetura de microsserviços de alta disponibilidade.'
    },
    {
      id: '2',
      nome: 'Beatriz Silva',
      nivel: 'Pleno',
      stackPrincipal: 'Frontend',
      tecnologias: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      github: '#',
      linkedin: '#',
      portfolio: '#',
      bio: 'Desenvolvedora focada em performance web e experiências de usuário memoráveis.'
    },
    {
      id: '3',
      nome: 'Alice pereira',
      nivel: 'Junior',
      stackPrincipal: 'Fullstack',
      tecnologias: ['Node.js', 'React', 'MongoDB', 'Express'],
      github: '#',
      linkedin: '#',
      portfolio: '#',
      bio: 'Entusiasta de código limpo e aprendendo diariamente sobre o ecossistema JavaScript.'
    }
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-indigo-500/40">
      
      {/* Top Bar / Navegação Interna */}
      <nav className="border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-mono font-bold text-white tracking-tighter text-lg uppercase">SeeYou</span>
          </div>
          
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 gap-3">
            <Search size={16} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar por stack ou nome..." 
              className="bg-transparent border-none outline-none text-sm w-48 md:w-64"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-6">
        
        {/* Header da Seção */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Devs Disponíveis</h1>
            <p className="text-slate-500 font-mono text-sm">Mostrando {devs.length} desenvolvedores ativos no SeeYou</p>
          </div>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all text-sm font-bold">
            <Filter size={16} /> Filtros Avançados
          </button>
        </div>

        {/* Listagem em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {devs.map((dev) => (
            <div 
              key={dev.id} 
              className="group bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Efeito de Glow no Hover */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-600/5 blur-[80px] group-hover:bg-indigo-600/15 transition-all" />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                {/* Lado Esquerdo: Info Básica */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{dev.nome}</h2>
                    <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      {dev.nivel}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-indigo-500 text-sm font-mono mb-4">
                    <Code2 size={14} />
                    {dev.stackPrincipal}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">
                    {dev.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {dev.tecnologias.map(tech => (
                      <span key={tech} className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lado Direito: Links/Ações */}
                <div className="flex md:flex-col justify-between md:justify-start gap-3 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 min-w-[120px]">
                  <a href={dev.github} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors">
                    <GitBranch size={16} /> GitHub
                  </a>
                  <a href={dev.linkedin} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors">
                    <Link size={16} /> LinkedIn
                  </a>
                  <a href={dev.portfolio} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors">
                    <Globe size={16} /> Portfolio
                  </a>
                  
                  <NextLink href={`/sitema/paginas/curriculos/${dev.id}`} className="mt-auto hidden md:flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-tighter py-2 px-3 rounded-lg transition-all active:scale-95">
                    View Full <ExternalLink size={12} />
                  </NextLink>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}