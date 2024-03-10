# Custom App e Document

## 1. Plataforma de Cursos Online
- **Conceitos Aplicados**: Todos os conceitos anteriores, Custom App, e Custom Document.
- **Descrição**: Desenvolva uma plataforma de cursos online onde os usuários podem navegar por cursos, assistir aulas e acompanhar seu progresso. Utilize "Custom App" para manter o estado global do usuário (por exemplo, autenticação, progresso do curso) e implemente "Custom Document" para otimizar a marcação HTML (linguagem, direção do texto, etc.) de acordo com as preferências do usuário.
- **Desafio Adicional**: Adicione um modo escuro/clássico que pode ser alternado pelo usuário, salvando a preferência no estado global com "Custom App".

## 2. Aplicativo de Blog Multilíngue com Tema Dinâmico
- **Conceitos Aplicados**: Todos os conceitos anteriores, Custom App, e Custom Document.
- **Descrição**: Crie um blog que suporte múltiplos idiomas e permita que os usuários alternem entre temas claros e escuros. Use "Custom App" para gerenciar o tema atual e a localização, aplicando essas preferências em toda a aplicação. Com "Custom Document", insira as tags `lang` apropriadas e modifique o CSS base do tema antes do carregamento da página para melhorar a experiência do usuário.
- **Desafio Adicional**: Implemente um sistema de comentários onde os comentários também mudam de acordo com o tema escolhido.

## 3. Dashboard Administrativo com Analytics Integrado
- **Conceitos Aplicados**: Todos os conceitos anteriores, Custom App, e Custom Document.
- **Descrição**: Construa um dashboard administrativo para gerenciar conteúdo de um site, visualizar analytics e gerenciar usuários. Utilize "Custom App" para implementar autenticação persistente e intercepção de rotas para controle de acesso. Use "Custom Document" para adicionar scripts específicos do dashboard, como ferramentas de analytics ou widgets de terceiros, e para otimizar a estrutura do documento para carregamentos rápidos.
- **Desafio Adicional**: Integre um sistema de notificações em tempo real para alertar sobre novos conteúdos ou comentários, utilizando WebSockets.

# Incremental Static Regeneration (ISR)

## 1. Site de Notícias com Atualizações Frequentes
- **Conceitos Aplicados**: Todos os conceitos anteriores, Incremental Static Regeneration.
- **Descrição**: Crie um site de notícias que utiliza ISR para atualizar as páginas de notícias e a página inicial com novos conteúdos. Defina um intervalo de regeneração que faça sentido para o ritmo de atualização das notícias, permitindo que o site mostre conteúdo atualizado com frequência sem sacrificar a performance de carregamento das páginas.
- **Desafio Adicional**: Implemente um sistema de "artigos mais lidos" que se atualiza dinamicamente com base nas visualizações dos usuários, usando ISR para manter o desempenho otimizado.

## 2. Blog com Comentários Dinâmicos
- **Conceitos Aplicados**: Todos os conceitos anteriores, Incremental Static Regeneration.
- **Descrição**: Desenvolva um blog que utilize ISR para as páginas dos posts, permitindo que os comentários sejam atualizados periodicamente sem a necessidade de regenerar toda a página manualmente ou recorrer exclusivamente a client-side fetching. Isso pode melhorar significativamente a performance de SEO, mantendo a interatividade.
- **Desafio Adicional**: Adicione funcionalidades para que os usuários possam classificar os comentários por "mais novos" ou "mais curtidos", utilizando ISR para manter a página atualizada.

## 3. Catálogo de Produtos E-commerce
- **Conceitos Aplicados**: Todos os conceitos anteriores, Incremental Static Regeneration.
- **Descrição**: Construa um catálogo de produtos para um site de e-commerce que usa ISR para atualizar as informações do produto, como estoque e preços, sem necessidade de rebuild completo do site. Isso assegura que os usuários vejam informações precisas enquanto navegam pelo site, melhorando a experiência do usuário e a eficiência operacional.
- **Desafio Adicional**: Implemente páginas de categoria que também utilizem ISR para regenerar dinamicamente a lista de produtos com base em disponibilidade e promoções, garantindo que as listagens estejam sempre atualizadas.

# Performance Tuning

## 1. Aplicativo de Dashboard Analítico
- **Conceitos Aplicados**: Todos os conceitos anteriores, Performance Tuning.
- **Descrição**: Crie um dashboard analítico que consuma e exiba dados de várias fontes em tempo real. Utilize Lazy Loading para componentes de gráficos pesados e dados, implemente ISR para páginas de relatórios que precisam de atualização periódica, e use o middleware para otimizar respostas baseadas em cabeçalhos de cache. Ajuste a performance focando na redução do tempo de First Contentful Paint (FCP) e Largest Contentful Paint (LCP).
- **Desafio Adicional**: Integre um serviço de análise de performance como o Google Analytics ou o Next.js Analytics para monitorar a performance do aplicativo e identificar gargalos.

## 2. Site de Comércio Eletrônico com Carregamento Otimizado
- **Conceitos Aplicados**: Todos os conceitos anteriores, Performance Tuning.
- **Descrição**: Desenvolva um site de comércio eletrônico focado em performance, com páginas de produto, listagem de categorias, e carrinho de compras. Aplique técnicas como Code Splitting para carregar apenas o necessário, otimize imagens usando o componente `Image` do Next.js para carregamento preguiçoso e dimensionamento automático, e utilize ISR para atualizar as páginas de produtos sem reconstruir todo o site. Ajuste as meta tags para SEO e utilize o Custom App para gerenciar o estado global de forma eficiente.
- **Desafio Adicional**: Implemente um PWA (Progressive Web App) com Next.js para permitir que os usuários instalem o site como um aplicativo, melhorando a retenção e a experiência do usuário.

## 3. Blog Multilíngue com Pesquisa Otimizada
- **Conceitos Aplicados**: Todos os conceitos anteriores, Performance Tuning.
- **Descrição**: Construa um blog multilíngue que suporte SEO localizado e tenha uma função de pesquisa otimizada. Utilize o `next-i18next` para internacionalização, otimize o carregamento de imagens, e implemente uma função de pesquisa instantânea no lado do cliente com dados pré-carregados ou carregados dinamicamente com SWR (stale-while-revalidate) para uma experiência de usuário rápida. Use o Performance Tuning para minimizar o tempo de carregamento da página e otimize a renderização do lado do servidor para conteúdo dinâmico.
- **Desafio Adicional**: Adicione um modo de leitura noturna que seja fácil de ativar e que mantenha a performance otimizada ao carregar diferentes folhas de estilo ou componentes.

# Segurança

## 1. Aplicativo de Notas Seguras
- **Conceitos Aplicados**: Todos os conceitos anteriores, Segurança.
- **Descrição**: Construa um aplicativo de notas onde os usuários podem criar, editar e deletar suas notas. Implemente autenticação segura usando NextAuth para login com provedores populares como Google ou GitHub. Use HTTPS para todas as comunicações, aplique middleware para proteger as API Routes verificando tokens de autenticação, e armazene as notas de forma segura usando criptografia do lado do servidor.
- **Desafio Adicional**: Adicione a funcionalidade de compartilhamento de notas entre usuários, garantindo que apenas usuários autorizados possam ver as notas compartilhadas.

## 2. Blog com Comentários Moderados
- **Conceitos Aplicados**: Todos os conceitos anteriores, Segurança.
- **Descrição**: Desenvolva um blog que permita aos usuários postar comentários em artigos. Implemente autenticação e autorização para usuários postarem comentários, e use sanitização de input para prevenir ataques de injeção de SQL/XSS nos comentários. Proteja as rotas de API com middleware que verifica se o usuário tem permissão para postar ou moderar comentários.
- **Desafio Adicional**: Implemente uma fila de moderação onde comentários precisam ser aprovados por um administrador antes de serem publicados, utilizando Next.js API Routes com autenticação segura.

## 3. Sistema de Votação Online
- **Conceitos Aplicados**: Todos os conceitos anteriores, Segurança.
- **Descrição**: Crie um sistema de votação online para eventos, onde os participantes podem votar em diferentes categorias. Implemente autenticação segura e assegure que cada usuário só possa votar uma vez por categoria, utilizando JWT para sessões de usuários. Utilize CSRF tokens nas votações para prevenir ataques de solicitação de cross-site, e assegure a integridade dos dados de votação com verificações de integridade no servidor.
- **Desafio Adicional**: Adicione um dashboard em tempo real para mostrar os resultados das votações, garantindo que apenas usuários autenticados e autorizados possam acessá-lo.