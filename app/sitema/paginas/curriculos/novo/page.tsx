"use client";
import React, { useState } from 'react';
import { Terminal, GitBranch, Link, Globe, Code2, Save } from 'lucide-react';

export default function NovoCurriculoPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-300 font-sans selection:bg-indigo-500/30">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Header com estilo Terminal */}
        <header className="mb-10 flex items-center space-x-4">
          <div className="bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
            <Terminal size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Faça seu currículo brilhar no See<span className="text-indigo-500">You</span>
            </h1>
            <p className="text-slate-500 text-sm font-mono">system.candidates.new(new Dev())</p>
          </div>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda: Links e Redes */}
          <aside className="space-y-6">
            <div className="bg-[#151921] p-6 rounded-2xl border border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Links Sociais</h2>
              <div className="space-y-4">
                <div className="relative">
                  <GitBranch className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="text" placeholder="github.com/user" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <Link className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="text" placeholder="linkedin.com/in/user" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="text" placeholder="portfolio.dev" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
              </div>
            </div>

            <div className="bg-indigo-600/5 border border-indigo-500/20 p-6 rounded-2xl">

            </div>
          </aside>

          {/* Coluna da Direita: Dados Principais */}
          <main className="md:col-span-2 space-y-6">
            <div className="bg-[#151921] p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">Nome Público</label>
                  <input type="text" className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="Ex: Dev Pro" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">Main Stack</label>
                  <select className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-indigo-500 outline-none appearance-none">
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Fullstack</option>
                    <option>Mobile</option>
                    <option>DevOps</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2">Bio / Readme.md</label>
                <textarea rows={5} className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-indigo-500 outline-none font-mono text-sm" placeholder="Descreva suas experiências técnicas..." />
              </div>

              {/* Input de Tags de Stacks */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                  <Code2 size={14} className="mr-1" /> Tecnologias (Press Enter)
                </label>
                <div className="bg-[#0B0E14] border border-slate-700 rounded-lg p-2 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded text-xs font-mono flex items-center">
                      {tag}
                      <button type="button" onClick={() => removeTag(index)} className="ml-2 hover:text-white">×</button>
                    </span>
                  ))}
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={addTag}
                    className="bg-transparent outline-none text-sm p-1 flex-1 min-w-[120px]" 
                    placeholder={tags.length === 0 ? "Ex: React, Go, Docker..." : ""}
                  />
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="flex items-center justify-end space-x-4">
              <button type="button" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                Discard
              </button>
              <button type="submit" className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                <Save size={18} className="mr-2" />
                Commit Changes
              </button>
            </div>
          </main>

        </form>
      </div>
    </div>
  );
}