"use client";

import React, { useState } from "react";
import { Heart, Share2, ExternalLink, Code, Database, Layers } from "lucide-react";

export default function DevCVHub() {
  const [selectedStack, setSelectedStack] = useState("All");

  const stacks = [
    { name: "Front-end", icon: <Code size={18} />, description: "Foca na interface e experiência do usuário (UI/UX). Trabalha com React, Vue, CSS e performance no navegador." },
    { name: "Back-end", icon: <Database size={18} />, description: "Cuida da lógica, servidores e banco de dados. Responsável pela segurança, APIs e processamento de dados." },
    { name: "Full Stack", icon: <Layers size={18} />, description: "Domina tanto o Front quanto o Back-end, tendo uma visão 360º da aplicação e sua arquitetura." }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-indigo-500/30">
      {/* Header Estilizado */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Code className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white">See<span className="text-indigo-500">You</span></h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-indigo-400 transition">Explorar Devs</a>
            <a href="#" className="hover:text-indigo-400 transition">Empresas</a>
            <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition">Sou Desenvolvedor</a>
          </nav>
        </div>
      </header>

      {/* Guia de Carreiras (A explicação que você pediu) */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {stacks.map((stack) => (
            <div 
              key={stack.name} 
              onClick={() => setSelectedStack(stack.name)}
              className={`p-6 rounded-2xl transition group cursor-pointer ${
                selectedStack === stack.name
                  ? 'bg-indigo-600/20 border border-indigo-500'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3 text-indigo-400">
                {stack.icon}
                <h3 className="text-xl font-bold text-white">{stack.name}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {stack.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Centralizado */}
      <section className="text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Onde o código encontra a <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">próxima oportunidade.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          A plataforma de currículos feita por devs, para devs. Exiba seu GitHub, suas stacks e seu histórico profissional de forma técnica.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition shadow-lg shadow-white/5">
            Publicar meu Perfil
          </button>
          <button className="border border-slate-700 bg-slate-800/50 px-8 py-3 rounded-xl hover:bg-slate-800 transition">
            Ver Vagas Tech
          </button>
        </div>
      </section>

      {/* Lista de Devs (Robustez nos Cards) */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Talentos em Destaque</h3>
            <p className="text-slate-500">Filtrando por: <span className="text-indigo-400 font-mono">{selectedStack}</span></p>
          </div>
          {selectedStack !== "All" && (
            <button 
              onClick={() => setSelectedStack("All")}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition"
            >
              Limpar filtro
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full border-2 border-indigo-500"></div>
                  <div className="flex gap-2">
                    <Heart size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                    <Share2 size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <h4 className="font-bold text-xl text-white">Dev Name {i}</h4>
                <p className="text-indigo-400 font-mono text-xs mb-4 uppercase tracking-widest">Full Stack Developer</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'PostgreSQL', 'Docker'].map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full group flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-indigo-600 py-3 rounded-xl transition text-sm font-semibold">
                Ver Portfólio Completo
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Dark */}
      <footer className="border-t border-slate-800 py-10 text-center">
        <p className="text-slate-500 text-sm italic">
          &lt; Feito com ❤️ para a comunidade tech /&gt;
        </p>
      </footer>
    </div>
  );
}