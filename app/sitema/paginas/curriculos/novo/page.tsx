"use client";
import React, { useState } from 'react';
import { 
  Terminal, Code2, Save, Mail, Phone, Briefcase, 
  GraduationCap, Target, Fingerprint, AlignLeft, User, ArrowLeft 
} from 'lucide-react';

export default function NovoCurriculoPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [desiredRole, setDesiredRole] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      desiredRole,
      email,
      phone,
      cpf,
      summary,
      skills: tags,
    };
    console.log('Salvar currículo:', payload);
    // TODO: enviar para API ou persistir localmente
  };

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
        
        {/* Botão Voltar */}
        <button 
          type="button" 
          onClick={() => window.history.back()} 
          className="flex items-center text-slate-500 hover:text-indigo-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </button>

        {/* Header com estilo Terminal */}
        <header className="mb-10 flex items-center space-x-4">
          <div className="bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
            <Terminal size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Criar Novo Currículo
            </h1>
            <p className="text-slate-500 text-sm font-mono">system.candidates.create()</p>
          </div>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-8" onSubmit={handleSubmit}>
          
          {/* Coluna da Esquerda: Contatos e Documentos */}
          <aside className="space-y-6">
            <div className="bg-[#151921] p-6 rounded-2xl border border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Contato & Doc</h2>
              <div className="space-y-4">
                {/* E-mail */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
                {/* Telefone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
                {/* CPF */}
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" className="w-full bg-[#0B0E14] border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
              </div>
            </div>

            <div className="bg-indigo-600/5 border border-indigo-500/20 p-6 rounded-2xl">

            </div>
          </aside>

          {/* Coluna da Direita: Dados Principais */}
          <main className="md:col-span-2 space-y-6">
            <div className="bg-[#151921] p-8 rounded-2xl border border-slate-800 space-y-6">
              
              {/* Nome e Cargo Desejado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                    <User size={14} className="mr-1" /> Nome
                  </label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-indigo-500 outline-none text-sm" placeholder="Seu nome completo" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                    <Target size={14} className="mr-1" /> Cargo Desejado
                  </label>
                  <input type="text" value={desiredRole} onChange={(e) => setDesiredRole(e.target.value)} className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-indigo-500 outline-none text-sm" placeholder="Ex: Desenvolvedor Front-end" />
                </div>
              </div>

              {/* Resumo Profissional */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                  <AlignLeft size={14} className="mr-1" /> Resumo Profissional
                </label>
                <textarea rows={4} value={summary} onChange={(e) => setSummary(e.target.value)} className="bg-[#0B0E14] border border-slate-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-indigo-500 outline-none font-mono text-sm leading-relaxed" placeholder="Descreva sua trajetória, principais conquistas e o que você busca na carreira..." />
              </div>

              {/* Habilidades (Sistema de Tags) */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                  <Code2 size={14} className="mr-1" /> Habilidades (Pressione Enter)
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
                    className="bg-transparent outline-none text-sm p-1 flex-1 min-w-[150px]" 
                    placeholder={tags.length === 0 ? "Ex: React, Gestão de Tempo..." : ""}
                  />
                </div>
              </div>

              {/* Experiências Profissionais */}
              <div className="flex flex-col pt-2">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                  <Briefcase size={14} className="mr-1" /> Experiências Profissionais
                </label>
                <div className="space-y-3 bg-[#0B0E14] border border-slate-700 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Cargo" className="bg-transparent border-b border-slate-700 pb-1 text-sm focus:border-indigo-500 outline-none" />
                    <input type="text" placeholder="Empresa" className="bg-transparent border-b border-slate-700 pb-1 text-sm focus:border-indigo-500 outline-none" />
                  </div>
                  <textarea rows={2} className="w-full bg-transparent border-b border-slate-700 pb-1 focus:border-indigo-500 outline-none text-sm mt-2 resize-none" placeholder="Descrição das atividades..." />
                </div>
              </div>

              {/* Formações Acadêmicas */}
              <div className="flex flex-col pt-2">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center">
                  <GraduationCap size={15} className="mr-1" /> Formações Acadêmicas
                </label>
                <div className="space-y-3 bg-[#0B0E14] border border-slate-700 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Curso" className="bg-transparent border-b border-slate-700 pb-1 text-sm focus:border-indigo-500 outline-none" />
                    <input type="text" placeholder="Instituição" className="bg-transparent border-b border-slate-700 pb-1 text-sm focus:border-indigo-500 outline-none" />
                  </div>
                </div>
              </div>

            </div>

            {/* Ações */}
            <div className="flex items-center justify-end space-x-4">
              <button type="button" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                Cancelar
              </button>
              <button type="submit" className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                <Save size={18} className="mr-2" />
                Salvar Currículo
              </button>
            </div>
          </main>

        </form>
      </div>
    </div>
  );
}