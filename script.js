
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const filterContainer = document.getElementById('filterContainer');
    const clearSearchButton = document.getElementById('clearSearchButton');

    // Dados do site, agora incorporados diretamente no script
    const sites = [
      {
        "name": "Freepik",
        "description": "Encontre vetores, fotos, mockups e arquivos PSD de alta qualidade.",
        "url": "https://www.freepik.com",
        "pricing": "Misto",
        "category": ["vetor", "foto", "mockup", "ícone"]
      },
      {
        "name": "Envato Elements",
        "description": "Downloads ilimitados de milhões de recursos criativos para seus projetos.",
        "url": "https://elements.envato.com",
        "pricing": "Pago",
        "category": ["vetor", "foto", "mockup", "vídeo", "font", "preset"]
      },
      {
        "name": "Unsplash",
        "description": "O site de imagens da internet, com fotos de alta resolução e uso livre.",
        "url": "https://www.unsplash.com",
        "pricing": "Gratuito",
        "category": ["foto"]
      },
      {
        "name": "Pexels",
        "description": "Fotos e vídeos de alta qualidade e totalmente gratuitos, compartilhados por criadores.",
        "url": "https://www.pexels.com",
        "pricing": "Gratuito",
        "category": ["foto", "vídeo"]
      },
      {
        "name": "Icons8",
        "description": "Ícones, ilustrações, fotos e até música gratuita para seus projetos criativos.",
        "url": "https://www.icons8.com",
        "pricing": "Misto",
        "category": ["ícone", "vetor", "foto", "música"]
      },
      {
        "name": "Vecteezy",
        "description": "Explore milhões de vetores, cliparts e ilustrações de artistas do mundo todo.",
        "url": "https://www.vecteezy.com",
        "pricing": "Misto",
        "category": ["vetor", "vídeo", "foto"]
      },
      {
        "name": "Behance",
        "description": "Rede social para criativos. Ótimo para inspiração e para encontrar portfólios.",
        "url": "https://www.behance.net",
        "pricing": "Gratuito",
        "category": ["inspiração", "portfólio"]
      },
      {
        "name": "Dribbble",
        "description": "Comunidade para designers mostrarem seu trabalho, processos e projetos atuais.",
        "url": "https://dribbble.com",
        "pricing": "Misto",
        "category": ["inspiração", "portfólio", "job"]
      },
      {
        "name": "Google Fonts",
        "description": "Uma biblioteca de fontes licenciadas gratuitamente para uso em seus projetos.",
        "url": "https://fonts.google.com",
        "pricing": "Gratuito",
        "category": ["font"]
      },
      {
        "name": "Adobe Fonts",
        "description": "Milhares de fontes de alta qualidade inclusas na sua assinatura Creative Cloud.",
        "url": "https://fonts.adobe.com",
        "pricing": "Pago",
        "category": ["font"]
      },
      {
        "name": "Mixkit",
        "description": "Vídeos, músicas e efeitos sonoros gratuitos para seus projetos de vídeo.",
        "url": "https://mixkit.co",
        "pricing": "Gratuito",
        "category": ["vídeo", "música", "preset"]
      },
      {
        "name": "LottieFiles",
        "description": "A maior coleção de animações Lottie gratuitas para sites e aplicativos.",
        "url": "https://lottiefiles.com",
        "pricing": "Misto",
        "category": ["animação", "ícone"]
      },
      {
        "name": "Mockup World",
        "description": "Toneladas de mockups fotorrealistas e gratuitos para seus projetos de design.",
        "url": "https://www.mockupworld.co",
        "pricing": "Gratuito",
        "category": ["mockup"]
      },
      {
        "name": "Artlist",
        "description": "Música e efeitos sonoros de alta qualidade para cineastas e criadores de vídeo.",
        "url": "https://artlist.io",
        "pricing": "Pago",
        "category": ["música", "vídeo"]
      },
      {
        "name": "The Noun Project",
        "description": "Mais de 3 milhões de ícones de alta qualidade de designers de todo o mundo.",
        "url": "https://thenounproject.com",
        "pricing": "Misto",
        "category": ["ícone", "vetor"]
      },
      {
        "name": "Figma Community",
        "description": "Milhares de arquivos, plugins e widgets gratuitos para acelerar seu design no Figma.",
        "url": "https://www.figma.com/community",
        "pricing": "Misto",
        "category": ["ui kit", "plugin", "inspiração"]
      },
      {
        "name": "Siteinspire",
        "description": "Uma vitrine seletiva de ótimos designs de sites.",
        "url": "https://www.siteinspire.com",
        "pricing": "Gratuito",
        "category": ["inspiração", "portfólio"]
      },
      {
        "name": "Awwwards",
        "description": "Reconhece o talento e o esforço dos melhores designers, desenvolvedores e agências da web.",
        "url": "https://www.awwwards.com",
        "pricing": "Misto",
        "category": ["inspiração", "portfólio"]
      },
      {
        "name": "Land-book",
        "description": "Galeria de sites bem projetados para inspiração.",
        "url": "https://land-book.com",
        "pricing": "Gratuito",
        "category": ["inspiração", "portfólio"]
      },
      {
        "name": "Lapa Ninja",
        "description": "A melhor galeria de páginas de destino de designers para inspiração.",
        "url": "https://lapa.ninja",
        "pricing": "Gratuito",
        "category": ["inspiração", "portfólio"]
      },
      {
        "name": "Mobbin",
        "description": "A maior biblioteca de designs de aplicativos para inspiração.",
        "url": "https://mobbin.com",
        "pricing": "Misto",
        "category": ["inspiração", "ui kit"]
      },
      {
        "name": "UI Garage",
        "description": "Coleção de padrões e componentes de interface do usuário.",
        "url": "https://uigarage.net",
        "pricing": "Gratuito",
        "category": ["inspiração", "ui kit"]
      },
      {
        "name": "Collect UI",
        "description": "Inspiração diária de UI, com mais de mil padrões de design.",
        "url": "https://collectui.com",
        "pricing": "Gratuito",
        "category": ["inspiração", "ui kit"]
      },
      {
        "name": "Inspiration Grid",
        "description": "Uma revista online de arte, ilustração, design, fotografia e moda.",
        "url": "https://inspirationgrid.com",
        "pricing": "Gratuito",
        "category": ["inspiração"]
      },
      {
        "name": "Kittl",
        "description": "Crie designs incríveis com facilidade. Editor de design online.",
        "url": "https://www.kittl.com",
        "pricing": "Misto",
        "category": ["ferramenta", "edição"]
      },
      {
        "name": "Canva",
        "description": "Ferramenta de design gráfico online para criar apresentações, mídias sociais, etc.",
        "url": "https://www.canva.com",
        "pricing": "Misto",
        "category": ["ferramenta", "edição"]
      },
      {
        "name": "Gravit Designer",
        "description": "Software de design vetorial completo e gratuito.",
        "url": "https://www.gravit.io",
        "pricing": "Gratuito",
        "category": ["ferramenta", "edição", "vetor"]
      },
      {
        "name": "Photopea",
        "description": "Editor de fotos online gratuito, compatível com PSD, AI, XD e Sketch.",
        "url": "https://www.photopea.com",
        "pricing": "Gratuito",
        "category": ["ferramenta", "edição", "foto"]
      },
      {
        "name": "Vectornator",
        "description": "Software de ilustração vetorial intuitivo para desktop e iPad.",
        "url": "https://www.vectornator.io",
        "pricing": "Gratuito",
        "category": ["ferramenta", "edição", "vetor"]
      },
      {
        "name": "Blender",
        "description": "Conjunto de criação 3D gratuito e de código aberto.",
        "url": "https://www.blender.org",
        "pricing": "Gratuito",
        "category": ["ferramenta", "edição", "3d"]
      },
      {
        "name": "UI8",
        "description": "Recursos de UI de alta qualidade para designers e desenvolvedores.",
        "url": "https://ui8.net",
        "pricing": "Pago",
        "category": ["ui kit", "template", "componente"]
      },
      {
        "name": "LS Graphics",
        "description": "Recursos de design gráficos premium, incluindo mockups, UI kits e ilustrações.",
        "url": "https://ls.graphics",
        "pricing": "Misto",
        "category": ["ui kit", "template", "mockup", "ilustração"]
      },
      {
        "name": "Craftwork Design",
        "description": "Recursos de design gratuitos e premium para seus projetos.",
        "url": "https://craftwork.design",
        "pricing": "Misto",
        "category": ["ui kit", "template", "ilustração"]
      },
      {
        "name": "UI Store Design",
        "description": "Recursos de design de UI gratuitos e premium.",
        "url": "https://uistore.design",
        "pricing": "Misto",
        "category": ["ui kit", "template"]
      },
      {
        "name": "Freebiesbug",
        "description": "Os melhores freebies para designers, incluindo UI Kits, fontes e mockups.",
        "url": "https://freebiesbug.com",
        "pricing": "Gratuito",
        "category": ["ui kit", "template", "recursos"]
      },
      {
        "name": "Design Resources Party",
        "description": "Uma coleção selecionada de recursos de design.",
        "url": "https://designresources.party",
        "pricing": "Gratuito",
        "category": ["recursos"]
      },
      {
        "name": "Figma Freebies",
        "description": "Recursos gratuitos para Figma, incluindo UI Kits, ícones e templates.",
        "url": "https://figmafreebies.com",
        "pricing": "Gratuito",
        "category": ["ui kit", "template", "plugin", "figma"]
      },
      {
        "name": "Material Design",
        "description": "Sistema de design de código aberto do Google para criar interfaces digitais.",
        "url": "https://material.io",
        "pricing": "Gratuito",
        "category": ["ui kit", "componente", "google"]
      },
      {
        "name": "Phosphor Icons",
        "description": "Uma família flexível de ícones para interfaces, diagramas e apresentações.",
        "url": "https://phosphoricons.com",
        "pricing": "Gratuito",
        "category": ["ícone"]
      },
      {
        "name": "Tabler Icons",
        "description": "Mais de 3000 ícones SVG personalizáveis e de código aberto.",
        "url": "https://tabler-icons.io",
        "pricing": "Gratuito",
        "category": ["ícone"]
      },
      {
        "name": "Heroicons",
        "description": "Ícones SVG feitos à mão da equipe Tailwind CSS.",
        "url": "https://heroicons.com",
        "pricing": "Gratuito",
        "category": ["ícone"]
      },
      {
        "name": "Font Awesome",
        "description": "A biblioteca de ícones e toolkits mais popular do mundo.",
        "url": "https://fontawesome.com",
        "pricing": "Misto",
        "category": ["ícone", "font"]
      },
      {
        "name": "Pixabay",
        "description": "Mais de 2.6 milhões de imagens e vídeos de alta qualidade gratuitos.",
        "url": "https://pixabay.com",
        "pricing": "Gratuito",
        "category": ["foto", "vídeo"]
      },
      {
        "name": "StockSnap.io",
        "description": "Centenas de belas fotos de banco de imagens gratuitas de alta resolução.",
        "url": "https://stocksnap.io",
        "pricing": "Gratuito",
        "category": ["foto"]
      },
      {
        "name": "Burst (by Shopify)",
        "description": "Fotos de banco de imagens gratuitas para seu site e projetos comerciais.",
        "url": "https://burst.shopify.com",
        "pricing": "Gratuito",
        "category": ["foto"]
      },
      {
        "name": "Original Mockups",
        "description": "Mockups de alta qualidade para suas apresentações de design.",
        "url": "https://originalmockups.com",
        "pricing": "Misto",
        "category": ["mockup"]
      },
      {
        "name": "Mockupbro",
        "description": "Crie mockups em segundos, diretamente no seu navegador.",
        "url": "https://mockupbro.com",
        "pricing": "Misto",
        "category": ["mockup"]
      },
      {
        "name": "Mockup Free",
        "description": "Grande coleção de mockups PSD gratuitos para download.",
        "url": "https://mockupfree.co",
        "pricing": "Gratuito",
        "category": ["mockup"]
      },
      {
        "name": "Pixelbuddha",
        "description": "Recursos de design gratuitos e premium, incluindo mockups e UI Kits.",
        "url": "https://pixelbuddha.net",
        "pricing": "Misto",
        "category": ["mockup", "recursos"]
      },
      {
        "name": "Font Squirrel",
        "description": "Fontes gratuitas de qualidade comercial para download.",
        "url": "https://www.fontsquirrel.com",
        "pricing": "Gratuito",
        "category": ["font"]
      },
      {
        "name": "DaFont",
        "description": "Arquivo de fontes para download gratuito.",
        "url": "https://www.dafont.com",
        "pricing": "Gratuito",
        "category": ["font"]
      },
      {
        "name": "MyFonts",
        "description": "As melhores fontes do mundo para designers.",
        "url": "https://www.myfonts.com",
        "pricing": "Pago",
        "category": ["font"]
      },
      {
        "name": "Variable Fonts",
        "description": "Explore as possibilidades das fontes variáveis.",
        "url": "https://variablefonts.dev",
        "pricing": "Gratuito",
        "category": ["font"]
      },
      {
        "name": "Storyset (by Freepik)",
        "description": "Ilustrações gratuitas personalizáveis para seus projetos.",
        "url": "https://storyset.com",
        "pricing": "Gratuito",
        "category": ["ilustração", "vetor"]
      },
      {
        "name": "unDraw",
        "description": "Ilustrações de código aberto para qualquer ideia.",
        "url": "https://undraw.co",
        "pricing": "Gratuito",
        "category": ["ilustração", "vetor"]
      }
    ];

    // Função para renderizar os cards na tela
    function renderizarCards(dadosParaRenderizar) {
        cardContainer.innerHTML = ""; // Limpa os cards existentes

        if (dadosParaRenderizar.length === 0) {
            // Não renderiza nenhuma mensagem, apenas deixa em branco.
        } else {
            dadosParaRenderizar.forEach(site => {
                const card = document.createElement('a');
                card.href = site.url;
                card.target = '_blank';
                card.classList.add('card');
                card.innerHTML = `
                    <h2>${site.name}</h2>
                    <p class="card-description">${site.description}</p>
                    <div class="card-footer">
                        <span class="pricing-tag ${site.pricing.toLowerCase()}">${site.pricing}</span>
                        <span class="card-link">Visitar</span>
                    </div>
                `;
                cardContainer.appendChild(card);
            });
        }
    }

    // Função principal para atualizar os cards com base nos filtros e na busca
    function atualizarCards() {
        const activeFilterBtns = document.querySelectorAll('.filter-btn.active');
        const termoBusca = searchInput.value.toLowerCase().trim();
        const hasActiveFilters = activeFilterBtns.length > 0;
        const hasSearchTerm = termoBusca.length > 0;

        // Se não houver filtros ativos E nenhum termo de busca, não mostra nada.
        if (!hasActiveFilters && !hasSearchTerm) {
            renderizarCards([]);
            return;
        }

        let dadosParaFiltrar = sites;
        
        // Se houver filtros de categoria, pré-filtra os dados.
        // Se não, a busca será feita em todos os sites.
        if (hasActiveFilters) {
            const activeCategories = [...activeFilterBtns].map(btn => btn.dataset.category);
            dadosParaFiltrar = sites.filter(site => 
                activeCategories.some(cat => site.category.includes(cat))
            );
        }
        
        let dadosFiltrados = dadosParaFiltrar;
        
        // Aplica o filtro de busca de texto sobre os dados (já filtrados por categoria ou não)
        if (hasSearchTerm) {
            dadosFiltrados = dadosParaFiltrar.filter(site =>
                site.name.toLowerCase().includes(termoBusca) ||
                site.description.toLowerCase().includes(termoBusca)
            );
        }
        
        renderizarCards(dadosFiltrados);
    }

    // Função para criar e configurar os botões de filtro
    function criarFiltros() {
        const allCategories = [...new Set(sites.flatMap(site => site.category))];
        allCategories.sort();

        allCategories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.dataset.category = category;
            button.textContent = category;
            filterContainer.appendChild(button);
        });
    }

    // --- Event Listeners ---
    
    filterContainer.addEventListener('click', (e) => {
        const clickedButton = e.target;
        if (!clickedButton.matches('.filter-btn')) return;

        clickedButton.classList.toggle('active');
        
        atualizarCards();
    });

    searchButton.addEventListener('click', atualizarCards);

    searchInput.addEventListener('input', () => {
        clearSearchButton.style.display = searchInput.value ? 'block' : 'none';
        atualizarCards();
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            atualizarCards();
        }
    });

    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchButton.style.display = 'none';
        atualizarCards();
    });


    // --- Carga Inicial ---
    criarFiltros();
    atualizarCards(); // Chama para renderizar o estado inicial (vazio)
});
