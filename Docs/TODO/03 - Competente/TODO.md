# Internacionalização (i18n)

## 1. Site Multilíngue de Portfólio Pessoal
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, e i18n.
- **Descrição**: Crie um site de portfólio pessoal que suporte múltiplos idiomas, permitindo aos visitantes alternar entre eles. Use a funcionalidade de internacionalização do Next.js para servir diferentes versões do seu conteúdo em inglês, português e qualquer outro idioma que desejar. O site pode incluir sua biografia, habilidades, projetos e contato.
- **Desafio Adicional**: Adicione um blog ao seu site de portfólio e aplique i18n nos posts do blog também.

## 2. Loja Virtual Internacional
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, e i18n.
- **Descrição**: Desenvolva uma pequena loja virtual que suporte múltiplos idiomas e mostre preços na moeda local do usuário. Utilize a internacionalização para traduzir descrições de produtos, menus e mensagens de interface. Use API Routes para lidar com a lógica de negócios, como adicionar itens ao carrinho e checkout, e aplique fetch de dados para atualizar dinamicamente as informações com base na seleção de idioma/moeda do usuário.
- **Desafio Adicional**: Implemente a funcionalidade de detecção automática do idioma do usuário com base na localização ou preferências do navegador.

## 3. Aplicativo de Eventos Multilíngue
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, e i18n.
- **Descrição**: Crie um aplicativo para listar e gerenciar eventos que suporte vários idiomas. O aplicativo deve permitir aos usuários visualizar detalhes do evento, registrar-se e obter informações em seu idioma preferido. Implemente i18n para traduzir o conteúdo do evento, informações de registro e navegação. Use API Routes para gerenciar registros e detalhes dos eventos.
- **Desafio Adicional**: Adicione funcionalidades de pesquisa e filtro, permitindo aos usuários encontrar eventos com base na localização, data e categoria, tudo isso mantendo o suporte multilíngue.

# Otimização de Imagens

## 1. Galeria de Arte Virtual
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), e Otimização de Imagens.
- **Descrição**: Desenvolva uma galeria de arte virtual que exiba obras de arte e informações sobre elas. Utilize o componente `Image` do Next.js para otimizar as imagens da galeria, garantindo carregamentos rápidos e eficientes. Implemente categorias de arte e permita que os usuários filtrem obras por categorias. Adicione suporte multilíngue para tornar a galeria acessível globalmente.
- **Desafio Adicional**: Integre uma funcionalidade de zoom para permitir que os usuários vejam detalhes finos das obras de arte.

## 2. Site de Receitas com Fotos Otimizadas
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), e Otimização de Imagens.
- **Descrição**: Crie um site de receitas que apresente receitas de várias cozinhas do mundo. Para cada receita, use imagens otimizadas das refeições prontas, utilizando o componente `Image` para carregamento eficiente. Ofereça a opção de visualizar as receitas em diferentes idiomas e implemente rotas dinâmicas para cada receita individual.
- **Desafio Adicional**: Adicione funcionalidades como classificação de receitas, comentários dos usuários, e a opção de enviar novas receitas.

## 3. Plataforma de E-commerce com Catálogo Otimizado
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), e Otimização de Imagens.
- **Descrição**: Construa uma plataforma de e-commerce simples com um catálogo de produtos. Use o componente `Image` para otimizar as fotos dos produtos, assegurando carregamentos rápidos e uma experiência de usuário suave. Implemente páginas de produtos com rotas dinâmicas e ofereça opções de idioma para a internacionalização do site.
- **Desafio Adicional**: Implemente um sistema de carrinho de compras que permita aos usuários adicionar produtos ao carrinho e fazer checkout.

# Middleware

## 1. Plataforma de Conteúdo Premium
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, e Middleware.
- **Descrição**: Crie uma plataforma de conteúdo onde alguns artigos são exclusivos para usuários autenticados. Utilize Middleware para verificar se o usuário está logado e tem permissão para acessar o conteúdo premium. Caso contrário, redirecione-os para a página de login ou para uma página que mostra um resumo do artigo com opção para se inscrever ou entrar.
- **Desafio Adicional**: Implemente diferentes níveis de acesso, onde conteúdos premium e super-premium requerem diferentes tipos de assinatura.

## 2. Sistema de Redirecionamento de URL
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, e Middleware.
- **Descrição**: Construa um sistema simples de redirecionamento de URL, onde o Middleware verifica a URL de entrada e redireciona o usuário para diferentes partes do seu site ou para sites externos, baseado em regras definidas. Por exemplo, você pode criar URLs curtas personalizadas que redirecionam para URLs longas automaticamente.
- **Desafio Adicional**: Adicione um painel de administração onde os usuários podem criar e gerenciar suas URLs curtas, incluindo estatísticas de quantas vezes cada uma foi acessada.

## 3. Aplicação de Notícias com Filtragem Geográfica
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, e Middleware.
- **Descrição**: Desenvolva uma aplicação de notícias que exibe notícias relevantes com base na localização geográfica do usuário. Use Middleware para detectar a localização do usuário (por exemplo, usando o cabeçalho `Accept-Language` ou o IP) e personalizar o conteúdo da notícia que é servido. Isso pode incluir não apenas a filtragem de notícias por região, mas também a apresentação do site no idioma local do usuário.
- **Desafio Adicional**: Permita que os usuários selecionem manualmente sua região preferida e idioma, substituindo a detecção automática.

# Head e Meta Tags

## 1. Site de Portfólio Profissional
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, Middleware, `<Head>` e Meta Tags.
- **Descrição**: Crie um site de portfólio profissional que apresente seus projetos, habilidades e experiência. Para cada página, use o componente `<Head>` para definir títulos de página únicos, descrições meta, e meta tags Open Graph para compartilhamento social. Isso garantirá que cada página tenha uma boa SEO e aparência quando compartilhada em redes sociais.
- **Desafio Adicional**: Adicione um blog ao seu site de portfólio. Garanta que cada post do blog tenha meta tags dinâmicas para SEO e compartilhamento social.

## 2. Aplicativo de Receitas com SEO Otimizado
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, Middleware, `<Head>` e Meta Tags.
- **Descrição**: Construa um aplicativo de receitas onde cada receita tem sua própria página com detalhes. Utilize o componente `<Head>` para inserir meta tags específicas de cada receita, como título, descrição, e imagens otimizadas para compartilhamento nas redes sociais. Isso ajudará cada página a ser melhor indexada pelos motores de busca e atraente quando compartilhada.
- **Desafio Adicional**: Implemente funcionalidades como avaliação das receitas pelos usuários e comentários, certificando-se de que essas interações sejam consideradas nas meta tags para engajamento social.

## 3. Plataforma de Eventos Online
- **Conceitos Aplicados**: Páginas e componentes, CSS e Styling, Rotas, Rotas Dinâmicas, Pre-renderização, Fetch de Dados, API Routes, Internacionalização (i18n), Otimização de Imagens, Middleware, `<Head>` e Meta Tags.
- **Descrição**: Desenvolva uma plataforma para eventos online, onde cada evento tem sua própria página detalhada. Use o componente `<Head>` para definir meta tags específicas, como o nome do evento, descrição breve, e uma imagem destacada para cada evento. Essas informações ajudarão a melhorar a visibilidade do evento nos motores de busca e quando compartilhado em mídias sociais.
- **Desafio Adicional**: Adicione funcionalidades como registro no evento, programação dinâmica baseada na localização do usuário, e ajustes de idioma. Certifique-se de que as meta tags reflitam as informações atualizadas e relevantes.