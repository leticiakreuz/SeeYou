# SeeYou - Plataforma de Currículos Tech

SeeYou é uma aplicação front-end em Next.js feita para destacar talentos de tecnologia, apresentar currículos e permitir que desenvolvedores publiquem seus perfis técnicos.

## Visão geral

O projeto oferece:
- página inicial com destaque para desenvolvedores e filtros por stack
- listagem de currículos
- perfil individual de desenvolvedor
- formulário para criar novo currículo com campos de contato, resumo e habilidades
- navegação interna usando o App Router do Next.js

## Tecnologias usadas

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react para ícones

## Estrutura principal do projeto

- `app/page.tsx` - página inicial da plataforma
- `app/sitema/paginas/curriculos/page.tsx` - listagem de currículos
- `app/sitema/paginas/curriculos/novo/page.tsx` - página de cadastro de novo currículo
- `app/sitema/paginas/curriculos/[id]/page.tsx` - perfil individual de desenvolvedor com dados de exemplo

## Funcionalidades

- filtro de desenvolvedores por stack (`Front-end`, `Back-end`, `Full Stack`)
- cards com resumo de perfil e botão para ver detalhes
- tela de criação de currículo com sistema de tags para habilidades
- interface dark, moderna e responsiva

## Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```bash
http://localhost:3000
```

## Scripts disponíveis

- `npm run dev` - inicia o servidor local de desenvolvimento
- `npm run build` - gera a versão de produção
- `npm run start` - executa o projeto em modo de produção
- `npm run lint` - executa o ESLint

## Sugestões de melhoria

- conectar a um backend/API para salvar e carregar currículos reais
- adicionar autenticação de usuário
- melhorar validação de formulário
- suportar upload de foto/perfil
- adicionar busca e ordenação de perfis

## Sobre este projeto

A plataforma é pensada para uma apresentação de talentos tech, onde o desenvolvedor pode mostrar suas stacks, experiência e perfil profissional em um layout atraente.
