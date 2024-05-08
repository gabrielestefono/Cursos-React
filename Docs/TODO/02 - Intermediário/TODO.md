# Rotas Dinâmicas

## 1. Blog Pessoal
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas e Rotas Dinâmicas.
- **Descrição**: Crie um blog pessoal onde cada post é uma página dinâmica. Você pode ter uma página inicial listando todos os posts (com título e resumo) e, ao clicar em um post, ele abre em uma nova página usando rotas dinâmicas (por exemplo, `/posts/[id]`).
- **Desafio Adicional**: Adicione tags aos posts e crie uma página que filtra posts por tags.

## 2. Portfólio de Projetos
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas e Rotas Dinâmicas.
- **Descrição**: Crie um site de portfólio para exibir projetos em que você trabalhou. Cada projeto pode ter sua própria página dinâmica acessada por uma rota dinâmica (ex: `/projetos/[nome]`). Na página inicial, você pode listar todos os projetos com uma pequena descrição e uma imagem.
- **Desafio Adicional**: Implemente uma funcionalidade de "Projetos Relacionados" ao final da página de cada projeto, usando componentes para reutilizar a lógica de exibição.

## 3. Sistema de Perguntas e Respostas (FAQ)
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas e Rotas Dinâmicas.
- **Descrição**: Desenvolva um sistema de FAQ onde cada pergunta tem sua própria página dinâmica. Você pode começar com uma página que lista todas as perguntas. Ao clicar em uma pergunta, o usuário é redirecionado para uma página de detalhes da pergunta usando rotas dinâmicas (ex: `/faq/[id]`).
- **Desafio Adicional**: Adicione uma funcionalidade de busca onde os usuários podem digitar palavras-chave para filtrar as perguntas na página inicial.

# Pré-Renderização

## 1. Catálogo de Produtos
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, e Pre-renderização.
- **Descrição**: Crie um catálogo online para produtos, onde cada produto tem sua própria página. Use a pre-renderização estática (Static Generation) para as páginas de produto, gerando-as no momento da build com base em dados de produtos (pode ser um arquivo JSON estático como fonte de dados inicialmente). Na página inicial, liste todos os produtos, cada um levando a sua página detalhada.
- **Desafio Adicional**: Implemente um mecanismo de busca ou filtros para os produtos usando client-side JavaScript.

## 2. Blog com Posts Markdown
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, e Pre-renderização.
- **Descrição**: Desenvolva um blog onde os posts são escritos em Markdown e convertidos em páginas HTML no momento da build. Utilize a pre-renderização estática para as páginas de posts, lendo os arquivos Markdown e convertendo-os em HTML/CSS durante a build. A página inicial deve listar os títulos dos posts, cada um redirecionando para sua própria página detalhada.
- **Desafio Adicional**: Adicione uma página de categorias que usa pre-renderização dinâmica (Server-side Rendering) para exibir posts baseados em uma categoria selecionada.

## 3. Eventos e Inscrições
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, e Pre-renderização.
- **Descrição**: Crie um sistema para eventos, onde cada evento tem sua própria página dinâmica com detalhes sobre o evento. Utilize pre-renderização estática para as páginas de eventos, permitindo que os detalhes sejam indexados por motores de busca. A página inicial deve listar todos os eventos futuros, com links para suas páginas detalhadas.
- **Desafio Adicional**: Adicione um sistema de inscrição para os eventos, onde os usuários podem se inscrever através de um formulário. Para a página de inscrição, considere usar pre-renderização dinâmica (Server-side Rendering) para carregar os detalhes do evento a partir de uma API ou banco de dados.

# Fetch de Dados

## 1. Aplicativo de Previsão do Tempo
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, e Fetch de Dados.
- **Descrição**: Desenvolva um aplicativo de previsão do tempo que permite aos usuários buscar por cidades. Use a pre-renderização dinâmica (Server-side Rendering - SSR) para exibir a previsão do tempo inicial baseada na localização do usuário ou uma localização padrão. Em seguida, permita buscas por outras cidades usando fetch de dados do lado do cliente para atualizar a previsão sem recarregar a página.
- **Desafio Adicional**: Implemente gráficos para a previsão do tempo da semana usando uma biblioteca de gráficos JS.

## 2. Blog com Comentários
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, e Fetch de Dados.
- **Descrição**: Crie um blog onde os posts são pre-renderizados e os comentários são carregados dinamicamente em cada post usando fetch de dados. Você pode armazenar os comentários em um banco de dados ou usar uma API de terceiros. A página de cada post deve buscar os comentários quando o usuário acessa a página, mostrando a interatividade em tempo real.
- **Desafio Adicional**: Adicione um formulário para que os usuários possam enviar comentários, atualizando a lista de comentários dinamicamente.

## 3. Loja Virtual de Produtos
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, e Fetch de Dados.
- **Descrição**: Construa uma loja virtual simples onde a lista de produtos é gerada usando pre-renderização estática (Static Generation - SSG) para SEO e performance. Use fetch de dados para implementar a funcionalidade de adicionar produtos ao carrinho de compras. Os detalhes do produto, incluindo preço e descrição, podem ser buscados quando o usuário acessa a página do produto, utilizando SSR ou Client-side Rendering para mostrar dados atualizados.
- **Desafio Adicional**: Implemente um sistema de filtros para categorias de produtos, que busque dinamicamente os produtos filtrados sem necessidade de recarregar a página.

# API Routes

## 1. Aplicativo de Tarefas (To-Do List)
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, e API Routes.
- **Descrição**: Crie um aplicativo de lista de tarefas que permite aos usuários adicionar, listar, marcar como concluído e deletar tarefas. Use API Routes para criar uma API interna que lida com operações de CRUD (Create, Read, Update, Delete) em um array de tarefas. Você pode armazenar as tarefas diretamente no servidor durante o desenvolvimento, antes de adicionar um banco de dados.
- **Desafio Adicional**: Implemente a persistência dos dados usando um banco de dados simples como SQLite ou MongoDB.

## 2. Blog com Sistema de Comentários
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, e API Routes.
- **Descrição**: Expanda seu blog para incluir um sistema de comentários dinâmico. Use API Routes para desenvolver endpoints que permitem aos usuários adicionar, visualizar e deletar comentários em posts. Armazene os comentários em um array no lado do servidor ou em um banco de dados. Use fetch de dados no lado do cliente para interagir com esses endpoints e atualizar a interface do usuário dinamicamente.
- **Desafio Adicional**: Adicione autenticação para que apenas usuários logados possam postar comentários.

## 3. Dashboard de Análise de Dados
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, e API Routes.
- **Descrição**: Crie um dashboard para visualizar e analisar dados. Use API Routes para construir uma API que busca dados de fontes externas ou de um banco de dados local, processa esses dados (por exemplo, agregação, filtragem) e retorna ao cliente. No front-end, use os dados para renderizar gráficos e tabelas. 
- **Desafio Adicional**: Implemente filtros dinâmicos que os usuários podem aplicar para alterar os dados visualizados.