type PageProps = {
  params: {
    id: string;
  };
};

export default function CurriculoDetalhesPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Perfil do candidato</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white">Currículo #{params.id}</h1>
          <p className="mt-3 text-slate-400">
            Visualizando detalhes do candidato com ID <span className="font-mono text-indigo-300">{params.id}</span>.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 rounded-3xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Resumo</h2>
            <p className="text-slate-400 leading-relaxed">
              Aqui você pode exibir as informações completas do currículo do candidato,
              como experiência, stack principal, contatos e links de portfólio.
            </p>
          </div>

          <div className="space-y-5 rounded-3xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Navegação</h2>
            <p className="text-slate-400 leading-relaxed">
              Use o menu anterior para voltar à lista de candidatos ou adaptar esta página para
              carregar dados reais a partir do ID dinâmico.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
