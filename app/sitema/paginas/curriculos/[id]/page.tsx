"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, GitBranch, Link, Globe, Code2 } from 'lucide-react';
export default function PerfilDevPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // No mundo real, você buscaria isso de um Banco de Dados ou API.
  // Aqui usamos os mesmos dados mockados para exemplo:
  const devs = [
    {
      id: '1',
      nome: 'Letícia Kreuzberg',
      cargo: 'Fullstack Developer',
      nivel: 'Junior',
      tecnologias: ['JavaScript', 'SQL', 'Pascal', 'Next.js', 'Node.js', 'React', 'Tailwind', 'TypeScript'],
      bio: 'Especialista em sistemas distribuídos e arquitetura de microsserviços de alta disponibilidade.'
    },
    {
      id: '2',
      nome: 'Beatriz Silva',
      cargo: 'Frontend Developer',
      nivel: 'Pleno',
      tecnologias: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      bio: 'Desenvolvedora focada em performance web e experiências de usuário memoráveis.'
    },
    {
      id: '3',
      nome: 'Alice pereira',
      cargo: 'Fullstack Developer',
      nivel: 'Junior',
      tecnologias: ['Node.js', 'React', 'MongoDB', 'Express'],
      bio: 'Entusiasta de código limpo e aprendendo diariamente sobre o ecossistema JavaScript.'
    }
  ];

  const dev = devs.find((d) => d.id === id);

  if (!dev) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Dev não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          type="button"
          onClick={() => router.push('/sitema/paginas/curriculos')}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 mb-8 transition-colors font-mono text-sm"
        >
          <ArrowLeft size={18} /> Voltar para a lista
           href={(`/sitema/paginas/curriculos/`)}
        </button>

        <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Efeito visual de fundo */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-600/10 blur-[100px]" />

            <header className="relative z-10 border-b border-white/5 pb-8 mb-8">
                <span className="text-indigo-500 font-mono text-xs uppercase tracking-[0.3em] mb-2 block">
                    {dev.nivel} // {dev.cargo}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                    {dev.nome}
                </h1>
                
                <div className="flex gap-4">
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><GitBranch size={20}/></button>
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Link size={20}/></button>
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Globe size={20}/></button>
                </div>
            </header>

            <section className="relative z-10 space-y-8">
                <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code2 size={16} /> Sobre_mim
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed italic">
                        "{dev.bio}"
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Tecnologias_Dominadas</h3>
                    <div className="flex flex-wrap gap-2">
                        {dev.tecnologias.map(tech => (
                            <span key={tech} className="px-4 py-2 bg-indigo-500/5 border border-indigo-500/20 text-indigo-400 rounded-xl font-mono text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}