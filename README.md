# 🎮 Sistema de Gerenciamento - Loja de Jogos

Este projeto é a aplicação prática final do módulo de **Angular**, focada na construção de um ecossistema completo envolvendo componentes, roteamento, serviços e consumo de API REST.

## 📋 Sobre o Projeto
O sistema simula o painel administrativo de uma loja de games, permitindo realizar todas as operações de **CRUD** (Create, Read, Update, Delete) através de uma interface moderna e responsiva.

### Principais Funcionalidades:
- **Painel Principal**: Listagem dinâmica de produtos consumidos via API.
- **Cadastro/Edição**: Formulário inteligente que alterna entre criação de novos itens e atualização de registros existentes.
- **Exclusão**: Remoção de registros com atualização automática da interface.
- **Navegação**: Sistema de rotas (`SPA`) para transições suaves entre telas.

## 🛠️ Tecnologias e Ferramentas
- **Framework**: [Angular](https://angular.io/)
- **Estilização**: [Bootstrap 5](https://getbootstrap.com/)
- **API Fake**: [JSON Server](https://www.npmjs.com/package/json-server)
- **Linguagem**: TypeScript
- **Gerenciamento**: NPM e Git

## 📂 Estrutura de Pastas Exigida
Seguindo os manuais da atividade, o projeto foi organizado da seguinte forma:
- `src/app/componentes/menu`: Barra de navegação global.
- `src/app/componentes/painel-principal`: Tabela de exibição de produtos.
- `src/app/componentes/cadastro-produto`: Formulário de dados.
- `src/app/componentes/rodape`: Informações de rodapé.
- `src/app/servicos/produto.service.ts`: Centralização das chamadas HTTP.

## 🚀 Instruções para Execução

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Clonar e Instalar
```bash
# Clone este repositório
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)

# Acesse a pasta do projeto
cd loja-jogos

```
### 2. Iniciar o Banco de Dados (API)
```bash
É fundamental que o json-server esteja rodando para que os produtos apareçam na tela:
npx json-server --watch db.json

```
### 3. Iniciar a Aplicação Angular
```bash
Em um novo terminal, execute:
ng serve

Abra o navegador em: http://localhost:4200

```

#### Projeto "Implementar Service de consumo de API" da disciplina Framework Front-End com Consumo de API, do curso de Programação FullStack do SENAI.
