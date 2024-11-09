import type { Unit } from '@/interfaces/unit'

export const units: Record<string, Unit> = {
	'banhado-grande': {
		name: 'Área de Proteção Ambiental do Banhado Grande',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Área de Proteção Ambiental do Banhado Grande cobre parte dos Biomas Pampa e Mata Atlântica, ocupando 2/3 da bacia do rio Gravataí. A vegetação original é formada por banhados e matas de restinga em solos arenosos da Coxilha das Lombas. Atualmente, a área abriga urbanizações e atividades agropastoris, com destaque para o cultivo de arroz. Criada para proteger os banhados que alimentam o rio Gravataí, a APA busca equilibrar o desenvolvimento socioeconômico com a conservação dos ecossistemas e a recuperação de áreas degradadas. O Plano de Manejo de 2021 foca na conservação da qualidade da água e espécies como o Cervo-do-pantanal e o Tuco-tuco.',
	},
	'apa-delta-do-jacui': {
		name: 'Área de Proteção Ambiental Estadual Delta do Jacuí',
		category: 'Unidade de Uso Sustentável',
		lng: -51.32737384973758,
		lat: -29.970693950602982,
		summary:
			'A Área de Proteção Ambiental Estadual Delta do Jacuí compartilha cerca de 62% de seu território com o Parque Estadual Delta do Jacuí. Ela abriga ecossistemas variados, como banhados, restingas e florestas estacionais deciduais, que suportam uma rica fauna e flora associadas aos ambientes aquáticos. Localizada na região metropolitana de Porto Alegre, a unidade busca equilibrar as atividades humanas com suas características ambientais, garantindo a conservação do paisagismo e da cultura local.',
	},
	'rota-do-sol': {
		name: 'Área de Proteção Ambiental Rota do Sol',
		category: 'Unidade de Uso Sustentável',
		lng: -50.27134906242669,
		lat: -29.72147284125042,
		summary:
			'A Área de Proteção Ambiental Rota do Sol (APARS), parte da Reserva da Biosfera da Mata Atlântica, tem 71% de sua área preservada. Ela serve como zona de amortecimento para a Estação Ecológica Estadual Aratinga e como corredor ecológico entre o Parque Nacional da Serra Geral e a Reserva Biológica da Serra Geral. Seus objetivos incluem a proteção dos recursos hídricos, especialmente as nascentes dos rios Tainhas e Três Forquilhas, a recuperação das florestas, a conservação dos campos, da fauna silvestre, do conjunto paisagístico e da cultura regional.',
	},
	aratinga: {
		name: 'Estação Ecológica Estadual Aratinga',
		category: 'Unidade de Proteção Integral',
		lng: -51.739376814006775,
		lat: -29.184579290481366,
		summary:
			'A Estação Ecológica Estadual Aratinga abrange o vale do arroio Carvalho, um importante afluente do rio Três Forquilhas, incluindo suas nascentes. Com altitudes de 160 a 930 metros, a área inclui Floresta Ombrófila Densa, Floresta Ombrófila Mista e Savana Gramíneo-Lenhosa. Seus objetivos são proteger as belezas e recursos naturais, especialmente a flora e fauna, realizar pesquisas ecológicas, preservar o ambiente natural e desenvolver a educação ambiental.',
	},
	'espigao-alto': {
		name: 'Parque Estadual de Espigão Alto',
		category: 'Unidade de Proteção Integral',
		lng: -51.52054767820944,
		lat: -27.618185200150204,
		summary:
			'Com mais de 60 anos de existência, o Parque Estadual de Espigão Alto está localizado na bacia do rio Uruguai, próximo ao limite com Santa Catarina. Preserva ambientes típicos da floresta com araucária, incluindo árvores centenárias como cedro, louro, angico e várias espécies de canela. A fauna destacada inclui aves como o papagaio-charão, macuco e uru, além de mamíferos como a paca, tamanduá-mirim e jaguatirica.',
	},
	itapeva: {
		name: 'Parque Estadual de Itapeva',
		category: 'Unidade de Proteção Integral',
		lng: -49.76032090372626,
		lat: -29.377175389673166,
		summary:
			'Contíguo à cidade de Torres, o Parque Estadual de Itapeva tem como objetivos proteger ecossistemas e espécies raras ou ameaçadas, além de promover pesquisa científica, educação ambiental e turismo ecológico. Abriga dunas, vegetação de restinga, campos secos e alagados, banhados, turfeiras e Mata Paludosa. O Parque conserva um dos últimos remanescentes da paisagem característica da planície litorânea do Estado.',
	},
	itapua: {
		name: 'Parque Estadual de Itapuã',
		category: 'Unidade de Proteção Integral',
		lng: -51.02579197855945,
		lat: -30.345418324926797,
		summary:
			'Localizado em Viamão, a 57 km de Porto Alegre, o Parque Estadual de Itapuã é uma Unidade de Conservação de Proteção Integral que preserva ambientes originais da Região Metropolitana. Reaberto em 2002 após uma década fechado, protege ecossistemas variados como morros, praias, dunas, lagoas e banhados. Destaca-se pela preservação de espécies ameaçadas, como o bugio-ruivo, lontra e gato-maracajá, além de aves migratórias. O Farol de Itapuã, concluído em 1860, e elementos históricos da Revolução Farroupilha são pontos de interesse.',
	},
	'pe-delta-do-jacui': {
		name: 'Parque Estadual Delta do Jacuí',
		category: 'Unidade de Proteção Integral',
		lng: -51.32757291347715,
		lat: -29.968311753457762,
		summary:
			'O Parque Estadual Delta do Jacuí (PEDJ), criado em 1976, abrange áreas de Porto Alegre, Canoas, Nova Santa Rita, Triunfo, Charqueadas e Eldorado do Sul. Ele preserva uma área verde próxima à capital e mantém a potabilidade das águas do Guaíba, além de sustentar a produtividade de pescado. Com 14.242 hectares, o parque faz parte da APA Estadual Delta do Jacuí, cobrindo um complexo hídrico importante para a conservação das áreas úmidas e a dinâmica hídrica da região. O PEDJ protege flora e fauna raras e ameaçadas, oferece lazer e educação ambiental, e promove o manejo sustentável dos recursos naturais.',
	},
	camaqua: {
		name: 'Parque Estadual do Camaquã',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Estadual do Camaquã, situado entre os Biomas Pampa e Mata Atlântica, protege áreas úmidas do delta lagunar do rio Camaquã, incluindo o Banhado do Caipira, o Rincão do Escuro e várias ilhas. Localizado às margens da Laguna dos Patos, o parque abrange desde o Banhado do Caipira até o pontal, incluindo áreas do Vale do Rio Camaquã até Pacheca.',
	},
	espinilho: {
		name: 'Parque Estadual do Espinilho',
		category: 'Unidade de Proteção Integral',
		lng: -57.504453501843045,
		lat: -30.200195376887145,
		summary:
			'Criado em 1975, o Parque Estadual do Espinilho foi ampliado em 2002 para incluir áreas importantes como o curso do arroio Quaraí-chico até sua foz no rio Uruguai. O parque conserva uma formação vegetal única (savane estepe e savana parque), com espécies características como o espinilho, algarrobo e inhanduvai. Além da flora, várias espécies da fauna dependem desse ecossistema para sua sobrevivência.',
	},
	ibitiria: {
		name: 'Parque Estadual do Ibitiriá',
		category: 'Unidade de Proteção Integral',
		lng: -50.74706200826311,
		lat: -28.3189449864247,
		summary:
			'O Parque Estadual do Ibitiriá abrange campos e matas com araucária, ecossistemas típicos da região dos Campos de Cima da Serra. Criado para proteger esses ecossistemas, inclui parte da mata ciliar do rio Ibitiriá e destaca-se pela ocorrência da palmeira Trithrinax brasiliensis (buriti). O parque está em fase inicial de implantação e não está aberto à visitação. Interessados em atividades educativas ou pesquisa científica devem contatar a gestão através dos contatos disponíveis.',
	},
	'papagaio-charao': {
		name: 'Parque Estadual do Papagaio Charão',
		category: 'Unidade de Proteção Integral',
		lng: -52.82651135295645,
		lat: -27.90479146535664,
		summary:
			'O Parque Estadual do Papagaio Charão, situado no planalto médio gaúcho, protege um importante fragmento do ecossistema que une campos e florestas com araucária. O parque visa preservar esse contato ecológico e abriga a rara palmeira Butia (paraguayensis), exclusiva da região. A fauna local inclui o anfíbio Proceratophrys brauni, a cobra-coral (Micrurus altirostris), aves como o papagaio-do-peito-roxo (Amazona vinacea) e mamíferos como o rato-de-espinho (Clyomys latticeps).',
	},
	podocarpus: {
		name: 'Parque Estadual do Podocarpus',
		category: 'Unidade de Proteção Integral',
		lng: -52.92772678832826,
		lat: -30.805865533425575,
		summary:
			'O Parque Estadual do Podocarpus foi criado para proteger áreas de mata onde cresce o pinheiro-bravo (Podocarpus lambertii), na Serra do Sudeste. Composto por dois polígonos distantes cerca de 18 km, o parque está em fase inicial de implantação. Neste momento, não estão disponíveis atividades como visitação, educação ambiental ou pesquisa científica. Para mais informações, é recomendado entrar em contato com a Divisão de Unidades de Conservação.',
	},
	tainhas: {
		name: 'Parque Estadual do Tainhas',
		category: 'Unidade de Proteção Integral',
		lng: -50.36436263558499,
		lat: -29.092359291922325,
		summary:
			'O Parque Estadual do Tainhas foi criado para proteger os campos e matas no vale do rio Tainhas, entre os arroios Taperinha e do Junco. O parque apresenta uma variedade de ecossistemas, incluindo matas com araucária, campos e banhados, com uma transição de terrenos planos no sul para vales mais profundos ao norte. Destacam-se espécies como a seriema (Cariama cristata), a perdiz (Nothura maculosa) e o tatu-mulita (Dasypus hybridus). O parque também abriga flora ameaçada, incluindo o pinheiro-brasileiro (Araucaria angustifolia) e a imbuia (Ocotea porosa), além de fauna significativa, como o papagaio-charão (Amazona pretrei) e a águia-cinzenta (Harpyaliaetus coronatus).',
	},
	turvo: {
		name: 'Parque Estadual do Turvo',
		category: 'Unidade de Proteção Integral',
		lng: -53.851176771260995,
		lat: -27.232517742683566,
		summary:
			"O Parque Estadual do Yucumã, originalmente criado como Reserva Florestal Estadual em 1947 e elevado à categoria de Parque em 1954, abriga um dos maiores fragmentos da Floresta Estacional Decidual no Estado. O destaque do parque é o Salto do Yucumã, uma impressionante queda d'água de 1.800 metros de extensão e até 12 metros de altura, resultado de uma falha geológica que atinge profundidades de 90 a 120 metros, sendo uma das maiores quedas longitudinais do mundo. O parque é habitat de várias espécies ameaçadas, incluindo a onça-pintada (Panthera onca), o puma (Puma concolor) e a harpia (Harpia harpyja). A vegetação é rica em árvores de grande porte, como o cedro (Cedrela fissilis) e a grápia (Apuleia leiocarpa), além de uma diversidade de peixes, répteis, anfíbios e insetos.",
	},
	'quarta-colonia': {
		name: 'Parque Estadual Quarta Colônia',
		category: 'Unidade de Proteção Integral',
		lng: -53.26634801334127,
		lat: -29.44860702472398,
		summary:
			'O Parque Estadual Quarta Colônia foi criado como uma compensação ambiental pela Usina Hidrelétrica de Dona Francisca, no rio Jacuí. Localizado na margem esquerda do reservatório da usina, o parque abriga remanescentes de Floresta Estacional Decidual. Seus principais objetivos incluem a proteção desses ecossistemas e a conservação de espécies ameaçadas, como o papagaio-charão (Amazona pretrei), a paca (Agouti paca), e diferentes espécies de veados (Mazama sp) e gatos do mato (Oncifelis geoffroyi e Leopardus tigrinus).',
	},
	'banhado-do-macarico': {
		name: 'Refúgio de Vida Silvestre Banhado do Maçarico',
		category: 'Unidade de Proteção Integral',
		lng: -52.35531612268151,
		lat: -32.16458104581653,
		summary:
			'O Refúgio de Vida Silvestre Banhado do Maçarico visa preservar a dinâmica hídrica das nascentes que sustentam o sistema hidrológico do Taim e as drenagens do estuário da Laguna dos Patos. O local busca conservar as fisionomias palustres do Banhado e seus ecossistemas associados, assegurando a integridade de habitats essenciais para espécies ameaçadas de extinção. É especialmente importante para a preservação do macuquinho-da-várzea (Scytalopus iraiensis) e áreas críticas para a reprodução do caboclinho-de-papo-branco (Sporophila palustris), uma espécie migratória.',
	},
	'banhado-dos-pachecos': {
		name: 'Refúgio de Vida Silvestre Banhado dos Pachecos',
		category: 'Unidade de Proteção Integral',
		lng: -50.84203297168136,
		lat: -30.09169506363128,
		summary:
			'O Refúgio de Vida Silvestre Banhado dos Pachecos integra o Sistema Banhado Grande, sendo crucial para a proteção das nascentes do rio Gravataí. Além de preservar espécies raras e ameaçadas, a área atua na conservação dos ecossistemas dos banhados, promovendo pesquisas e educação ambiental. Com uma vegetação palustre densa, é um dos últimos refúgios do cervo-do-pantanal (Blastocerus dichotomus) no Rio Grande do Sul. A avifauna local inclui espécies como o veste-amarela (Xanthopsar flavus) e o macuquinho-da-várzea (Scytalopus iraiensis), enquanto peixes endêmicos como Cynopoecilus notabilis também são importantes para a biodiversidade da Unidade.',
	},
	'rb-serra-geral': {
		name: 'Reserva Biológica da Serra Geral',
		category: 'Unidade de Proteção Integral',
		lng: -50.2799966883743,
		lat: -29.5806032834428,
		summary:
			'A Reserva Biológica da Serra Geral foi ampliada em 2002 pelo Decreto n° 41.661, visando a proteção das nascentes dos arroios Carvão, Forqueta, Três Pinheiros, Sanga Funda, Solidão, Encantado e Ligeiro. O local abrange topos de morros, vales e encostas, preservando a Mata Atlântica, incluindo Floresta de encosta e Mata com Araucária. Seu objetivo principal é a conservação da fauna associada a esses ecossistemas, especialmente das espécies ameaçadas de extinção. A reserva também desempenha um papel crucial na manutenção da qualidade do manancial hídrico da região.',
	},
	'ibicui-mirim': {
		name: 'Reserva Biológica do Ibicuí Mirim',
		category: 'Unidade de Uso Sustentável',
		lng: -53.80801005694902,
		lat: -29.549862577702704,
		summary:
			'A Reserva Biológica do Ibicuí Mirim foi criada pelo Decreto Estadual n° 30.930 em 12 de novembro de 1982, abrangendo aproximadamente 575 hectares, principalmente em Itaara, com uma pequena porção em São Martinho da Serra. A Companhia Riograndense de Saneamento (CORSAN) é a proprietária e administradora da Reserva, em cooperação com a Fundação Zoobotânica do Rio Grande do Sul (FZB). O objetivo principal da Reserva é proteger os mananciais da Barragem Saturnino de Brito, que possuem águas limpas e uma rica fauna límnica, além de preservar a paisagem e a biodiversidade da encosta do planalto central do Estado. A Reserva também atua como um banco genético de flora e fauna, contribuindo para programas de repovoamento e pesquisas de melhoramento de espécies adaptadas à região.',
	},
	ibirapuita: {
		name: 'Reserva Biológica do Ibirapuitã',
		category: 'Unidade de Proteção Integral',
		lng: -55.78221471719778,
		lat: -29.924683205396967,
		summary:
			'A Reserva Biológica do Ibirapuitã está localizada no sudoeste do Rio Grande do Sul, no município de Alegrete, ao longo do rio Ibirapuitã. A área inclui campos e afloramentos rochosos do Escudo Sul-Rio-Grandense, criando hábitats únicos que abrigam espécies vegetais raras, especialmente cactáceas, predominantes nas partes mais planas ao norte da reserva. Esses afloramentos também são habitat da lagartixa-das-pedras (Homonota uruguayensis), que é endêmica dessa região. Além disso, uma espécie de tuco-tuco (Ctenomys sp. n.) é mencionada como ocorrendo nas proximidades, com uma distribuição restrita à área.',
	},
	'mato-grande': {
		name: 'Reserva Biológica do Mato Grande',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Reserva Biológica do Mato Grande foi criada para proteger as áreas úmidas do Banhado do Mato Grande, incluindo banhados, campos arenosos e matas de restinga. A flora da unidade é rica em espécies ameaçadas, como Dyckia jonesiana (gravatá) e Ephedra tweediana (efedra). É crucial para a conservação da avifauna de ambientes alagados, abrigando aves endêmicas do bioma Pampa, além de espécies ameaçadas de extinção e aves migratórias. A reserva também é lar de mamíferos listados no Livro Vermelho da Fauna Ameaçada de Extinção do Rio Grande do Sul, como o gato-do-mato-grande (Oncifelis geoffroyi) e a lontra (Lontra longicaudis).',
	},
	'sao-donato': {
		name: 'Reserva Biológica do São Donato',
		category: 'Unidade de Proteção Integral',
		lng: -56.18444118654283,
		lat: -29.008292614968127,
		summary:
			'A Reserva Biológica do São Donato foi criada para proteger áreas úmidas na região oeste do Rio Grande do Sul, abrangendo o Banhado São Donato. Além dos banhados, a Reserva inclui porções de ambientes florestais e campestres, proporcionando um habitat diversificado para a fauna e flora locais. Essa diversidade ecológica é essencial para a conservação de várias espécies, muitas das quais são raras ou ameaçadas. A unidade também é importante para a preservação de recursos hídricos e para a manutenção da qualidade ambiental na região, funcionando como um refúgio para a vida selvagem e um espaço para pesquisas científicas e educação ambiental.',
	},
	'mata-paludosa': {
		name: 'Reserva Biológica Estadual Mata Paludosa',
		category: 'Unidade de Proteção Integral',
		lng: -50.10837094604959,
		lat: -29.49859223868096,
		summary:
			'A Reserva Biológica Estadual Mata Paludosa é a única Unidade de Conservação do Estado que protege áreas de transição entre ambientes de encosta e baixada, abrigando remanescentes de Mata Paludosa, uma floresta sobre solos úmidos. Essa formação é rica em epífitas, como bromélias e orquídeas, e possui palmeiras ameaçadas, como o palmito-juçara (Euterpe edulis) e a gamiova (Genoma gamiova). A REBIO é crucial para a conservação de espécies da fauna, especialmente anfíbios e aves que habitam esse tipo de ambiente.',
	},
	'lagoa-verde': {
		name: 'Área de Proteção Ambiental da Lagoa Verde',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Área de Proteção Ambiental da Lagoa Verde, situada em Rio Grande, foi estabelecida em 22 de abril de 2005 pela Lei Municipal nº 6084. Seu propósito é equilibrar a preservação ambiental com o uso sustentável, assegurando a manutenção dos recursos naturais locais. A área abrange a Lagoa Verde, os arroios Bolaxa, Senandes e o Canal São Simão, formando um conjunto ambiental diversificado. Esse mosaico ecológico fornece serviços essenciais, como a regulação hidrológica, a preservação da biodiversidade e espaços naturais que contribuem para a qualidade de vida da população.',
	},
	'corredores-de-biodiversidade-de-canela': {
		name: 'Área de Proteção Ambiental Corredores de Biodiversidade de Canela',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Área de Proteção Ambiental (APA) Corredores de Biodiversidade de Canela, criada em 2021, abrange cerca de 2.700 hectares e protege a biodiversidade nas encostas do Rio Caí e Arroio Caracol, em Canela, Rio Grande do Sul. O local preserva vegetação nativa, como áreas de araucárias, e até o momento foram identificadas 98 espécies, incluindo algumas ameaçadas de extinção, como bromélias, maracanã-verdadeiro e puma concolor. A APA é fundamental para a conservação da fauna, flora e recursos naturais locais, contribuindo para a qualidade de vida da população e a manutenção da diversidade genética regional.',
	},
	'lagoa-itapeva': {
		name: 'Área de Proteção Ambiental da Lagoa Itapeva',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Área de Proteção Ambiental Lagoa Itapeva foi criada em 1999 com o objetivo de preservar a margem nordeste da Lagoa de Itapeva e suas dunas lacustres. A APA promove a conservação de ambientes naturais e recursos genéticos, apoia pesquisas científicas e atividades de educação ambiental, e oferece recreação primitiva. Além disso, busca equilibrar o desenvolvimento socioeconômico com a proteção dos ecossistemas locais, compensa impactos ambientais do Aeroporto Regional do Litoral Norte e adota estratégias para conservar solo, água e fauna, com atenção especial a espécies raras, endêmicas e ameaçadas.',
	},
	'morro-de-osorio': {
		name: 'Área de Proteção Ambiental Morro de Osório',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Área de Proteção Ambiental Morro de Osório foi criada em 1994 para garantir a proteção ambiental e organizar atividades humanas de forma a preservar a Mata Atlântica, promovendo o desenvolvimento sustentável. Por ser uma Unidade de Conservação de uso sustentável, permite ocupação humana e uso dos recursos naturais, incluindo áreas públicas e privadas. Respeitando normas e limites, a APA controla a utilização e alteração dos recursos naturais, visando proteger o ecossistema e manter suas características biológicas, ecológicas e paisagísticas.',
	},
	'morro-ferrabraz': {
		name: 'Área de Relevante Interesse Ecológico do Morro Ferrabraz',
		category: 'Unidade de Uso Sustentável',
		summary:
			'O Morro Ferrabraz, localizado em Sapiranga, RS, abriga uma rica biodiversidade e é um importante divisor de águas na região metropolitana de Porto Alegre. Essa área, protegida como Área de Relevante Interesse Ecológico (ARIE), possui uma rica variedade de flora e fauna, além de ser um ponto turístico com opções de lazer como camping e voo livre. A ARIE Ferrabraz desempenha um papel crucial na preservação da Mata Atlântica e na regulação do clima local. Apesar de sua importância, a área enfrenta desafios como a pressão da urbanização e a necessidade de um plano de manejo mais detalhado para garantir sua conservação a longo prazo. Atualmente, a comunidade local está sendo envolvida na elaboração deste plano, visando conciliar a proteção ambiental com o desenvolvimento sustentável da região.',
	},
	'aracuri-esmeralda': {
		name: 'Estação Ecológica de Aracuri-Esmeralda',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Estação Ecológica Aracuri-Esmeralda foi estabelecida em 2 de junho de 1981, visando a preservação da natureza local e a condução de pesquisas científicas. Com uma área de 274,49 hectares, o bioma predominante na região é a Mata Atlântica.',
	},
	taim: {
		name: 'Estação Ecológica do Taim',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Estação Ecológica do Taim (ESEC Taim) é uma unidade de conservação que visa a proteção total da natureza, situada no sul do Rio Grande do Sul. Aproximadamente 30% de sua área está no município de Rio Grande, enquanto 70% se encontra em Santa Vitória do Palmar. A gestão da Estação é realizada pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio), que é uma autarquia vinculada ao Ministério do Meio Ambiente.',
	},
	canela: {
		name: 'Floresta Nacional de Canela',
		category: 'Unidade de Uso Sustentável',
		summary:
			"A Floresta Nacional de Canela recebe tanto visitantes individuais quanto grupos que realizam agendamentos. O Centro de Visitantes conta com um acervo diversificado, incluindo dioramas e atividades interativas. Uma das principais atrações é uma araucária em tamanho real, que permite aos visitantes explorar seu tronco e as raízes. Atualmente, há uma trilha ecológica aberta ao público, onde mais de 60 espécies arbóreas estão identificadas. Além dessa, existem outras três trilhas que exigem acompanhamento de um guia da Flona e agendamento prévio. Essas trilhas oferecem acesso a áreas de vegetação nativa, reflorestamentos e cursos d'água, entre outros ambientes.",
	},
	'passo-fundo': {
		name: 'Floresta Nacional de Passo Fundo',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Floresta Nacional de Passo Fundo é uma unidade de conservação federal situada no Rio Grande do Sul, Brasil. Criada pela Portaria nº 561 em 25 de outubro de 1968, abrange uma área de 1.333,61 hectares, voltada para o uso sustentável da natureza, turismo e pesquisas científicas. Localizada no município de Mato Castelhano, que foi desmembrado de Passo Fundo, a Floresta é gerida pelo Instituto Chico Mendes de Conservação da Biodiversidade. Ela protege uma área do bioma pampa, que apresenta uma transição entre os ecossistemas de savana e floresta ombrófila mista. Anteriormente, a área pertencia ao Instituto Nacional do Pinho e contém zonas de reflorestamento com espécies exóticas.',
	},
	'sao-francisco-de-paula': {
		name: 'Floresta Nacional de São Francisco de Paula',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Floresta Nacional (FLONA) de São Francisco de Paula, administrada pelo ICMBio, é uma Unidade de Conservação de Uso Sustentável no nordeste do Rio Grande do Sul. Com uma área de 1.606 hectares e altitudes superiores a 900 metros, a FLONA possui cobertura florestal predominantemente nativa, caracterizada pelas Matas com Araucária e Campos de Cima da Serra. A região, uma das mais úmidas do estado, abriga uma rica biodiversidade, incluindo mais de 260 espécies de aves e mamíferos ameaçados, como o leão-baio e o bugio-ruivo. Apesar de contar com áreas de reflorestamento de espécies exóticas, a floresta nativa ocupa mais de 900 hectares. A unidade é parte da Reserva da Biosfera da Mata Atlântica, considerada prioritária para a conservação.',
	},
	'capao-da-amizade': {
		name: 'Monumento Natural Municipal Capão da Amizade',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Monumento Natural Municipal Capão da Amizade, com uma área de 1,3 hectares, está situado na zona urbana e desempenha um papel crucial na conservação dos recursos naturais. Desde 2008, após a aquisição do antigo proprietário, o local foi transformado em uma Unidade de Conservação, contando com um plano de manejo que assegura sua preservação e a possibilidade de visitação. Além de sua importância ecológica, a área é valorizada por sua beleza cênica, caracterizada por árvores centenárias em risco de extinção e formações geológicas com valor ambiental e paisagístico. Sua relevância na conservação vai além dos recursos naturais, pois até a década de 2000, o local era utilizado para festividades populares desde 1962, contribuindo para a identidade social, política e cultural da comunidade cristalense, que se emancipou de Camaquã em 1988.',
	},
	'sanga-da-alemoa': {
		name: 'Monumento Natural Paleontológico Sanga da Alemoa',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Monumento Natural Paleontológico Sanga da Alemoa (MONAlemoa), situado em Santa Maria, foi criado pela Lei Municipal n° 6696 em 23 de novembro de 2022. Seus principais objetivos incluem a proteção dos depósitos fossilíferos do sítio, a conservação das características geológicas e da geodiversidade, além de promover a pesquisa e a divulgação do conhecimento científico. Este sítio é reconhecido internacionalmente, sendo um dos mais importantes afloramentos Triássicos do sul do Brasil. Os fósseis encontrados nele são fundamentais para a compreensão da geocronologia e da evolução do planeta, destacando sua relevância tanto científica quanto como patrimônio natural.',
	},
	'lagoa-do-peixe': {
		name: 'Parque Nacional da Lagoa do Peixe',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Nacional da Lagoa do Peixe está situado no litoral sul do Rio Grande do Sul, abrangendo os municípios de Tavares (80%), Mostardas (17%) e São José do Norte (3%). Criado pelo Decreto nº 93.546 em 6 de novembro de 1986, a unidade possui uma área de 36.722 hectares e um perímetro de 138,84 km, sendo administrada pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). O acesso ao parque é feito pelo norte a partir de Porto Alegre, utilizando a RS-040 até Capivari (90 km) ou pela RST-101 até Mostardas (120 km), onde se localiza a sede administrativa do parque. As cidades mais próximas, Tavares e Mostardas, estão a 230 e 200 km da capital, respectivamente.',
	},
	'pn-serra-geral': {
		name: 'Parque Nacional da Serra Geral',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Nacional da Serra Geral é uma unidade de conservação brasileira que protege a natureza e está localizado na divisa entre os estados do Rio Grande do Sul e Santa Catarina, abrangendo os municípios de Cambará do Sul, Jacinto Machado e Praia Grande. Criado pelo Decreto nº 531 em 20 de maio de 1992, o parque possui uma área de 17.301,96 hectares. Limita-se ao Parque Nacional de Aparados da Serra, formando um ecossistema de beleza singular e alta biodiversidade, voltado para fins científicos, culturais e recreativos. Atualmente, sua administração é responsabilidade do Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio).',
	},
	'aparados-da-serra': {
		name: 'Parque Nacional de Aparados da Serra',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Nacional de Aparados da Serra está localizado na Serra Geral, na divisa entre os estados do Rio Grande do Sul e Santa Catarina, no sul do Brasil, com coordenadas que vão de 29º07’ a 29º15’ S e 50º01’ a 50º10’ W. Estabelecido em 1959, é um dos primeiros parques nacionais do país e foi criado para proteger o canyon Itaimbezinho. O parque ocupa uma área de 10.250 hectares.',
	},
	'banhado-da-imperatriz': {
		name: 'Parque Natural Municipal Banhado da Imperatriz',
		category: 'Unidade de Proteção Integral',
		summary:
			'A unidade de conservação (UC) desempenha um papel crucial na diminuição dos impactos das cheias do Rio dos Sinos e na regulação do fluxo de água na bacia, fornecendo serviços ecossistêmicos essenciais para São Leopoldo e cidades vizinhas. A gestão da UC, situada em uma área urbana, foca em assegurar a continuidade desses serviços. Em 2018, o ICLEI - Governos Locais pela Sustentabilidade realizou um levantamento para sistematizar experiências de gestão de áreas protegidas em unidades de conservação municipais. A seleção das boas práticas considerou a disponibilidade de informações, a existência de experiências consolidadas, o tempo de implementação e a possibilidade de replicação dessas iniciativas.',
	},
	'cascata-do-salso': {
		name: 'Parque Natural Municipal da Cascata do Salso',
		category: 'Unidade de Proteção Integral',
		summary:
			'Trata-se de uma unidade de conservação de proteção integral situada no município de Caçapava do Sul, abrangendo uma área de 8,5905 hectares. Destinada à preservação de uma região que integra os Biomas Mata Atlântica e Pampa, a unidade permite a realização de pesquisas científicas, além de atividades de educação e interpretação ambiental, recreação em meio à natureza e turismo ecológico.',
	},
	ronda: {
		name: 'Parque Natural Municipal da Ronda',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal da Ronda, localizado no Rio Grande do Sul, é uma área de conservação que visa preservar a biodiversidade e promover o contato da população com a natureza. Com aproximadamente 300 hectares, o parque abriga diversas espécies de fauna e flora nativas, destacando-se pela riqueza de seu ecossistema. É um importante espaço para atividades de educação ambiental, lazer e recreação, oferecendo trilhas e áreas para piqueniques. Além disso, o parque desempenha um papel fundamental na conservação dos recursos hídricos da região. A gestão do local é focada em promover a sustentabilidade e a conscientização ambiental entre os visitantes.',
	},
	sertao: {
		name: 'Parque Natural Municipal de Sertão',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal de Sertão é uma unidade de conservação pública, reconhecida em níveis estadual e nacional, com uma área total de 590 hectares, composta por dois fragmentos de vegetação nativa de 513 e 77 hectares. Ele é considerado a segunda maior área de vegetação nativa do Alto Uruguai e uma das mais importantes para a conservação no Norte do Rio Grande do Sul. Localizado na comunidade Agrovila Incra, o parque fica a aproximadamente 1 km do trevo de acesso da RS 135 ao distrito de Engenheiro Luiz Englert. Uma das áreas do parque está situada perto da divisa entre os municípios de Sertão e Coxilha.',
	},
	apertado: {
		name: 'Parque Natural Municipal do Apertado',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal do Apertado é uma unidade de conservação de proteção integral situada no bioma Mata Atlântica, no município de Severiano de Almeida, Rio Grande do Sul. Com uma área total de 15,3 hectares, a UC tem como objetivo preservar a biodiversidade local e os ecossistemas nativos. A proteção desse espaço é crucial para a manutenção das características ambientais da região, contribuindo para a conservação da flora e fauna típicas da Mata Atlântica. Além disso, o parque pode servir como um espaço para pesquisas científicas e atividades educativas, promovendo a conscientização sobre a importância da preservação ambiental.',
	},
	pampa: {
		name: 'Parque Natural Municipal do Pampa',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal do Pampa é uma unidade de conservação de proteção integral situada no bioma Pampa, no Rio Grande do Sul. Com uma área de 152,0199 hectares, a UC tem como finalidade preservar a biodiversidade e os ecossistemas nativos dessa região. A proteção desse espaço é essencial para a conservação da flora e fauna características do Pampa, além de contribuir para a manutenção dos serviços ambientais. O parque também oferece oportunidades para a realização de pesquisas científicas e atividades educativas, promovendo a conscientização sobre a importância da preservação do meio ambiente e do patrimônio natural da região.',
	},
	morros: {
		name: 'Parque Natural Municipal dos Morros',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal dos Morros (PNMM) é uma unidade de conservação de proteção integral, estabelecida pelo Decreto Executivo n.º 74 em 2016, localizada ao norte de Santa Maria, no Rio Grande do Sul. A área abrange uma zona de transição geomorfológica entre os biomas Mata Atlântica e Pampa, resultando em rica biodiversidade devido à interpenetração de suas faunas e floras. O parque está inserido na Zona Núcleo da Reserva da Biosfera da Mata Atlântica, destacando-se como prioridade para a conservação desse bioma no estado. Os atributos bióticos e abióticos do local favorecem a realização de pesquisas científicas e atividades de educação ambiental, além de permitir práticas recreativas e turismo ecológico, sempre com foco na preservação dos recursos naturais.',
	},
	pinheiros: {
		name: 'Parque Natural Municipal dos Pinheiros',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal dos Pinheiros, localizado em Gramado, possui uma história marcada por transformações significativas. Com uma área total de 133 mil metros quadrados, dos quais 17 mil são reservatórios de água, o parque destaca-se pela rica biodiversidade, especialmente pelas araucárias. Originalmente, a área foi destinada à construção de uma barragem em 1985 para resolver problemas de abastecimento de água, mas o projeto foi paralisado devido a um escândalo de corrupção. A disputa judicial entre a Prefeitura de Gramado e a Corsan resultou na obrigação da companhia em construir uma rede de esgoto, deixando a barragem inacabada. Anos depois, essa história tumultuada culminou na transformação da área em um parque natural, que foi oficialmente designado como a primeira Unidade de Conservação de Gramado em 2020.',
	},
	logemann: {
		name: 'Parque Natural Municipal Logemann',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal Logemann, localizado em Horizontina, é uma Unidade de Conservação situada no Bioma Mata Atlântica, com uma área total de 14,7630 hectares. Criado pela Lei Municipal nº 4.036, de 14 de setembro de 2021, o parque tem como objetivo preservar a rica biodiversidade da região e proporcionar espaços para educação ambiental e atividades recreativas em contato com a natureza. O Logemann serve como um importante refúgio para a fauna e flora locais, contribuindo para a conservação dos recursos naturais e o desenvolvimento sustentável do município. Além disso, o parque é um ponto essencial para promover a conscientização ambiental entre os moradores e visitantes da área.',
	},
	'manuel-de-barros-pereira': {
		name: 'Parque Natural Municipal Manuel de Barros Pereira',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal Manuel de Barros Pereira é uma Unidade de Conservação de Proteção Integral situada em Santo Antônio da Patrulha, no Bioma Mata Atlântica. Com uma área de 24,61 hectares, o parque tem como principal objetivo preservar a biodiversidade local e os ecossistemas nativos. A unidade oferece um espaço propício para atividades de educação ambiental, pesquisa científica e recreação em contato com a natureza. Além de proteger a flora e fauna da região, o parque também desempenha um papel importante na conscientização sobre a importância da conservação ambiental entre os moradores e visitantes.',
	},
	'morro-jose-lutzenberger': {
		name: 'Parque Natural Municipal Morro José Lutzenberger',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Parque Natural Municipal Morro José Lutzenberger é uma Unidade de Conservação de Proteção Integral localizada em Guaíba, no Bioma Mata Atlântica. Com uma área de 20,6066 hectares, o parque tem como objetivo principal preservar a biodiversidade e os ecossistemas nativos da região. A unidade oferece oportunidades para atividades de educação ambiental, pesquisa e lazer em meio à natureza, promovendo a conscientização sobre a importância da conservação. Além de proteger a flora e fauna locais, o parque serve como um espaço de recreação e valorização do patrimônio ambiental, contribuindo para a qualidade de vida da comunidade.',
	},
	'saint-hilaire': {
		name: 'Parque Natural Municipal Saint Hilaire',
		category: 'Unidade de Proteção Integral',
		summary:
			"O Parque Natural Municipal Saint' Hilaire é uma Unidade de Conservação situada entre os municípios de Viamão e Porto Alegre, no Rio Grande do Sul, com acesso principal em Viamão. Com uma área de mais de mil hectares, divididos entre 240 hectares para lazer e 908,62 hectares para preservação, o parque é uma das maiores áreas verdes da região metropolitana de Porto Alegre e abriga rica biodiversidade. Recebe cerca de 125 mil visitantes anuais, mas enfrenta desafios como falta de financiamento, problemas de administração, poluição, ocupação ilegal e questões de saneamento e segurança.",
	},
	'ilha-dos-lobos': {
		name: 'Refúgio de Vida Silvestre Ilha dos Lobos',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Refúgio de Vida Silvestre da Ilha dos Lobos, localizado a 1,8 km da costa de Torres, RS, é uma unidade de conservação integral destinada à proteção dos ecossistemas e fauna marinha. É um dos dois únicos pontos de concentração de pinípedes na costa brasileira, recebendo espécies como leão-marinho e lobo-marinho-sul-americano, além de raros registros de lobo-marinho-subantártico, elefante-marinho-do-sul, foca-leopardo e foca-caranguejeira. O refúgio visa preservar os ecossistemas locais e fomentar pesquisas científicas, atividades de educação ambiental e turismo ecológico, especialmente em relação ao habitat desses mamíferos marinhos.',
	},
	'molhe-leste': {
		name: 'Refúgio de Vida Silvestre do Molhe Leste',
		category: 'Unidade de Proteção Integral',
		summary:
			'O Refúgio de Vida Silvestre do Molhe do Leste, em São José do Norte, RS, foi criado em maio de 1996 e ocupa cerca de 1.030 metros de comprimento e 296 metros de largura na ponta final do molhe. Sua principal finalidade é proteger leões e lobos marinhos, incentivando uma convivência harmoniosa entre visitantes e a natureza por meio de visitas orientadas. O leão-marinho, com machos de até 300 kg e uma característica juba avermelhada, e o lobo-marinho, menor e de focinho pontudo, são moradores típicos do refúgio, especialmente no inverno.',
	},
	biopampa: {
		name: 'Reserva Biológica Biopampa',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Reserva Biológica Biopampa, situada no bioma Pampa em áreas do município de Pedras Altas no Rio Grande do Sul, é uma Unidade de Conservação de Proteção Integral. Com o objetivo de proteger a biodiversidade local, a reserva promove a preservação de ecossistemas típicos do Pampa, uma região ameaçada e de rica biodiversidade. A gestão inclui o desenvolvimento de um Plano de Manejo que orienta suas ações de conservação, pesquisa científica e educação ambiental. Como bioma exclusivo do Brasil, o Pampa abriga diversas espécies endêmicas e é vital para a conservação da flora e fauna regionais.',
	},
	'darwin-joao-geremia': {
		name: 'Reserva Biológica Darwin João Geremia',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Reserva Biológica Dárvin João Geremia, localizada em Bento Gonçalves, foi estabelecida pelo decreto n° 1.339 em 1980, inicialmente sob o nome de Reserva Biológica do Planalto, e renomeada em 2005. Com uma área de 2,6 hectares, essa unidade de conservação urbana tem como objetivo a preservação integral dos ecossistemas locais, sem interferência humana direta, exceto para ações de manejo necessárias para manter o equilíbrio ambiental. Em 2011, foi incluída no Cadastro do Sistema Estadual de Unidades de Conservação, assegurando sua proteção contínua. Além da conservação, a reserva permite visitação educativa e pesquisa científica conforme previsto pela Lei Federal n° 9.985/2000.',
	},
	'lami-jose-lutzenberger': {
		name: 'Reserva Biológica do Lami José Lutzenberger',
		category: 'Unidade de Proteção Integral',
		summary:
			'A Reserva Biológica do Lami José Lutzenberger, situada no Rio Grande do Sul e abrangendo 204,4 hectares, é uma unidade de conservação de proteção integral criada em 1975 para preservar a efédra (Ephedra tweediana), uma planta rara e ameaçada. Nomeada em homenagem ao ambientalista José Lutzenberger, a reserva abriga uma diversidade significativa de fauna e flora, incluindo espécies em risco de extinção. Essa área preserva habitats variados, como matas ciliares e banhados, fundamentais para a conservação ambiental. As visitas públicas são restritas a atividades educacionais e científicas previamente autorizadas, com trilhas guiadas e palestras de educação ambiental disponíveis para grupos previamente agendados.',
	},
	'bosque-de-canela': {
		name: 'Reserva Particular do Patrimônio Natural Bosque de Canela',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Bosque de Canela, situada no Rio Grande do Sul, foi estabelecida em 1997 como uma área de conservação ambiental privada. Com cerca de 6 hectares, esta unidade de conservação visa preservar a biodiversidade local, incluindo espécies nativas da Mata Atlântica, como a Floresta Ombrófila Mista, também conhecida pela presença de Araucárias. Além da proteção ambiental, o Bosque de Canela é um espaço educativo, onde há atividades de educação ambiental em parceria com escolas locais. Sua criação está alinhada com a meta de proteger fragmentos de biomas ameaçados e fomentar a consciência ambiental na comunidade, sobretudo frente à ausência de suporte governamental adequado para estas áreas. O papel de áreas como essa é essencial para formar corredores ecológicos e preservar espécies endêmicas, contribuindo para a conservação da biodiversidade e a educação ambiental da região.',
	},
	'chacara-sananduva': {
		name: 'Reserva Particular do Patrimônio Natural Chácara Sananduva',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Chácara Sananduva está localizada em Viamão, no Rio Grande do Sul, e abrange uma área de 3 hectares dentro do bioma Mata Atlântica. Instituída oficialmente em 1999 pela Portaria nº 38 do IBAMA, essa reserva foi criada para preservar a biodiversidade local de forma perpétua, sendo uma propriedade privada com restrições de uso para atividades que interfiram na conservação ambiental. A RPPN Chácara Sananduva desempenha um papel fundamental na proteção de habitats naturais e espécies nativas, contribuindo para a conservação ambiental em uma região de alta diversidade biológica.',
	},
	'costa-do-serro': {
		name: 'Reserva Particular do Patrimônio Natural Costa do Serro',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Costa do Serro está localizada em Porto Alegre, Rio Grande do Sul, abrangendo 8 hectares de um total de 36,88 hectares da propriedade do seu fundador, Nairo Honorio Santurio Guerisoli. Criada em 2000, a RPPN visa a conservação integral dos recursos naturais e da biodiversidade local, promovendo a preservação de um importante trecho do ecossistema da região. Como RPPN, a Costa do Serro desempenha um papel relevante no Sistema Nacional de Unidades de Conservação (SNUC), permitindo atividades restritas de educação ambiental e pesquisa científica, conforme regulamentado pelo ICMBio.',
	},
	unisc: {
		name: 'Reserva Particular do Patrimônio Natural da UNISC',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) da Universidade de Santa Cruz do Sul (UNISC) foi oficialmente estabelecida em março de 2009, abrangendo uma área de 221,39 hectares destinada à preservação ambiental e educação ecológica. No local, existe o Centro de Visitantes, inaugurado em 2006, que realiza atividades de educação ambiental, como cursos e palestras. A RPPN é um espaço dedicado à preservação da fauna e flora local, promovendo também pesquisa científica e ecoturismo, especialmente para estudantes, professores e a comunidade em geral. Essas iniciativas buscam integrar os visitantes ao ambiente natural e destacar a importância da conservação.',
	},
	'estancia-santa-izabel-do-bitui': {
		name: 'Reserva Particular do Patrimônio Natural Estância Santa Izabel do Butuí',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Estância Santa Izabel do Butuí, localizada em São Borja, Rio Grande do Sul, foi reconhecida como uma unidade de conservação em 1996, abrangendo uma área de 135 hectares. Este espaço é destinado à proteção da biodiversidade local, promovendo ações voltadas à conservação ambiental. A reserva oferece oportunidades para pesquisas científicas e atividades educacionais, contribuindo para a conscientização sobre a importância da preservação da natureza. Além disso, a RPPN permite o ecoturismo, permitindo que visitantes conheçam a fauna e flora da região de forma sustentável.',
	},
	'estancia-santa-rita': {
		name: 'Reserva Particular do Patrimônio Natural Estância Santa Rita',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Estância Santa Rita, localizada no município de Santa Vitória do Palmar, no Rio Grande do Sul, abrange uma área de 340 hectares e faz parte do bioma Mata Atlântica. Criada pela Portaria nº 167, de 21 de dezembro de 1998, essa RPPN é gerida por proprietários particulares com o objetivo de conservar a biodiversidade local e proteger espécies ameaçadas. Além disso, a reserva contribui para a preservação dos recursos hídricos e serve como espaço de pesquisa científica e educação ambiental.',
	},
	farroupilha: {
		name: 'Reserva Particular do Patrimônio Natural Farroupilha',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Farroupilha, criada em 2005, é uma reserva natural privada localizada em Viamão, Rio Grande do Sul, cobrindo uma área de 10 hectares. Esta reserva visa proteger a biodiversidade da região e promover esforços de conservação. Os visitantes podem se envolver em atividades de ecoturismo, explorando sua rica flora e fauna. O local serve como um espaço ecológico essencial, ajudando a preservar o meio ambiente local enquanto oferece oportunidades educacionais para aqueles interessados ​​em natureza e conservação.',
	},
	'fazenda-branquilho': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda Branquilho',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Fazenda Branquilho, localizada no município de Dom Pedrito, no Rio Grande do Sul, abrange uma área de 13 hectares. Criada por iniciativa do proprietário Washington Luiz Martins, a RPPN foi estabelecida com o objetivo de proteger a biodiversidade local e conservar os recursos naturais. A reserva é uma importante área de preservação que abriga diversas espécies de fauna e flora, além de promover atividades de educação ambiental e pesquisa científica. As visitas à Fazenda Branquilho são permitidas, desde que previamente agendadas, oferecendo oportunidades para atividades recreativas e educativas que visam sensibilizar os visitantes sobre a importância da conservação ambiental.',
	},
	'fazenda-caneleira': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda Caneleira',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Fazenda Caneleira, localizada no Rio Grande do Sul, é uma unidade de conservação criada em 2009 com o objetivo de proteger a biodiversidade local e promover a educação ambiental. Com uma área de aproximadamente 260 hectares, a RPPN é caracterizada pela presença de vegetação nativa e ecossistemas variados, incluindo áreas de mata e campos. A reserva é dedicada à pesquisa científica, ecoturismo e atividades educativas, permitindo visitas controladas para grupos escolares e instituições. A iniciativa visa não apenas a conservação, mas também o engajamento da comunidade na preservação ambiental e na promoção de práticas sustentáveis.',
	},
	'fazenda-curupira': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda Curupira',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Fazenda Curupira, localizada em Pedro Osório, no Rio Grande do Sul, abrange uma área de 100,20 hectares. Criada para a conservação da biodiversidade, a reserva abriga uma rica variedade de flora e fauna, além de ser um espaço destinado à educação ambiental e à pesquisa científica. A Fazenda Curupira é um exemplo de gestão sustentável, promovendo práticas de ecoturismo e visitas educativas, o que permite à comunidade local e visitantes interagir com a natureza e aprender sobre a importância da conservação. O local contribui significativamente para a preservação de habitats naturais e a manutenção dos ecossistemas na região.',
	},
	'fazenda-das-palmas': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda das Palmas',
		category: 'Unidade de Uso Sustentável',
		summary:
			"A Reserva Particular do Patrimônio Natural (RPPN) Fazenda das Palmas está localizada em Tapes, no Rio Grande do Sul. Com uma área de aproximadamente 78 hectares, essa reserva tem como objetivo a preservação de remanescentes da vegetação nativa do bioma Pampa, incluindo campos, matas e cursos d'água. A RPPN é de iniciativa privada, o que significa que seu proprietário se comprometeu a proteger a área em caráter perpétuo. Além de ser um espaço voltado para a conservação, a fazenda oferece oportunidades para atividades de educação ambiental e ecoturismo, permitindo que visitantes conheçam a biodiversidade local e a importância da preservação ambiental​.",
	},
	'fazenda-espora-de-ouro': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda Espora de Ouro',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Fazenda Espora de Ouro está localizada no Rio Grande do Sul e abrange uma área de aproximadamente 193 hectares. Esta reserva é uma importante iniciativa de conservação que visa proteger a biodiversidade local, com foco na preservação de ecossistemas nativos e da fauna e flora características da região. A propriedade é administrada com práticas sustentáveis que promovem a educação ambiental e o ecoturismo. Além disso, a Fazenda Espora de Ouro participa de projetos voltados à pesquisa científica, oferecendo suporte para estudos sobre a conservação da natureza e manejo sustentável. Com essas iniciativas, a reserva contribui para a proteção do meio ambiente e para a sensibilização da comunidade local sobre a importância da conservação.',
	},
	'fazenda-morro-de-sapucaia': {
		name: 'Reserva Particular do Patrimônio Natural Fazenda Morro de Sapucaia',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Fazenda Morro de Sapucaia, localizada em Sapucaia do Sul, no Rio Grande do Sul, foi criada em 2002 e abrange uma área de 90,25 hectares. Este espaço é dedicado à preservação da biodiversidade da Mata Atlântica e à promoção de práticas de educação ambiental e ecoturismo. A RPPN não só protege a flora e fauna locais, mas também oferece oportunidades para atividades como escalada, com locais conhecidos como o Paredão das Aranhas, que atrai praticantes de esportes de montanha. A reserva tem como objetivo envolver a comunidade na conservação e conscientização sobre a importância da natureza.',
	},
	'granja-sao-roque': {
		name: 'Reserva Particular do Patrimônio Natural Granja São Roque - Reserva do Paredão',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Granja São Roque - Reserva do Paredão, localizada no Rio Grande do Sul, abrange uma área de aproximadamente 16 hectares e foi criada para proteger a biodiversidade local, especialmente em relação à vegetação nativa. O local possui uma rica fauna e flora, incluindo várias espécies ameaçadas, e promove atividades voltadas para a educação ambiental e a pesquisa científica. A reserva é um espaço importante para a realização de trilhas interpretativas e visitas guiadas, com o objetivo de conscientizar a comunidade sobre a preservação do meio ambiente. As ações realizadas na Granja São Roque buscam integrar a conservação da natureza com práticas sustentáveis, beneficiando tanto o ecossistema quanto os visitantes.',
	},
	'jardim-da-paz': {
		name: 'Reserva Particular do Patrimônio Natural Jardim da Paz',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Jardim da Paz, localizada no Rio Grande do Sul, é uma unidade de conservação voltada à preservação ambiental e à promoção de um ambiente protegido para espécies nativas. Criada com o propósito de conservar a biodiversidade local, essa área destaca-se por abrigar um ecossistema característico da região e por desempenhar um papel fundamental na proteção de recursos naturais, como nascentes de rios. Além disso, as RPPNs, como o Jardim da Paz, não permitem exploração de atividades que impactem negativamente o meio ambiente, mantendo um compromisso com o uso sustentável e a conservação ambiental de longo prazo.',
	},
	'mariana-pimentel': {
		name: 'Reserva Particular do Patrimônio Natural Mariana Pimentel',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Mariana Pimentel está localizada no município homônimo no Rio Grande do Sul, abrangendo uma área de 46 hectares. Esta unidade de conservação foi oficialmente criada pela Portaria nº 06, publicada em 1999, e é administrada por proprietários privados com o objetivo de proteger a biodiversidade local e manter ecossistemas preservados, típicos do bioma Mata Atlântica. Assim como outras RPPNs, ela contribui para a conservação ambiental e pode servir como área de pesquisa e educação ambiental, promovendo a sustentabilidade e a conscientização ecológica.',
	},
	'mata-do-professor-baptista': {
		name: 'Reserva Particular do Patrimônio Natural Mata do Professor Baptista',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Mata do Professor Baptista é uma área de conservação ambiental situada no município de Dom Pedro de Alcântara, no Rio Grande do Sul. Com 9,22 hectares, essa unidade de conservação faz parte do bioma Mata Atlântica e foi criada oficialmente em 2009 por meio da Portaria nº 52, em parceria com o proprietário, Luís Rios de Moura Baptista. A RPPN tem como objetivo preservar a biodiversidade local, contribuindo para a proteção de espécies e o equilíbrio do ecossistema. Por ser uma reserva particular, o local é mantido pelo proprietário, mas possui o reconhecimento oficial do governo como área de interesse ambiental, destacando-se na conservação do bioma ameaçado da Mata Atlântica.',
	},
	'minas-do-paredao': {
		name: 'Reserva Particular do Patrimônio Natural Minas do Paredão',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Minas do Paredão, localizada em Piratini, no Rio Grande do Sul, foi criada em 1999 com o objetivo de proteger o ecossistema local. Com uma área de aproximadamente 15 hectares, a reserva está sob gestão privada, mas com status de proteção federal, garantindo a preservação da biodiversidade regional. Ela se destaca como um destino de ecoturismo, permitindo visitas guiadas e promovendo a conscientização ambiental. Esta reserva é uma das diversas unidades de conservação no estado, voltadas à proteção de áreas naturais de alto valor ecológico.',
	},
	'o-bosque': {
		name: 'Reserva Particular do Patrimônio Natural O Bosque',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) O Bosque, localizada em Gramado, no Rio Grande do Sul, ocupa uma área de 6,85 hectares e é de propriedade do Condomínio O Bosque. Criada em 2013, essa unidade de conservação é dedicada à proteção da flora e fauna locais e contribui para a preservação da biodiversidade da região serrana. Além de servir como refúgio para espécies de plantas e animais, a RPPN também busca fomentar a conscientização ambiental e a valorização do ecossistema típico do Rio Grande do Sul.',
	},
	'pontal-da-barra': {
		name: 'Reserva Particular do Patrimônio Natural Pontal da Barra',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Pontal da Barra, localizada na planície costeira de Pelotas, no Rio Grande do Sul, é uma unidade de conservação de caráter privado e reconhecida nos níveis estadual e nacional. Esta área protege um ecossistema com características únicas, onde os biomas Mata Atlântica e Pampa se encontram, abrigando uma fauna rica e diversificada, incluindo espécies endêmicas e ameaçadas de extinção, como o peixe-anual e várias aves típicas de cada bioma. Além disso, a flora local conta com espécies típicas da planície costeira e outras raras para a região, como o cedro e figueiras. A RPPN Pontal da Barra é uma importante iniciativa para a conservação da biodiversidade local e para o equilíbrio ambiental, destacando-se como um dos poucos espaços naturais protegidos em Pelotas.',
	},
	'posse-dos-franciosi': {
		name: 'Reserva Particular do Patrimônio Natural Posse dos Franciosi',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Posse dos Franciosi, situada no Rio Grande do Sul, é uma unidade de conservação privada que protege áreas de grande importância ecológica. Criada para preservar a biodiversidade local, a reserva permite atividades de turismo ecológico e pesquisa científica sob diretrizes específicas. Esse tipo de RPPN busca contribuir para a conservação ambiental, incentivando práticas sustentáveis e a preservação dos recursos naturais de propriedade privada. As RPPNs, como a Posse dos Franciosi, são essenciais para aumentar as áreas protegidas no Brasil, alinhando-se aos objetivos de preservação de longo prazo e manejo ambiental responsável.',
	},
	'pro-mata': {
		name: 'Reserva Particular do Patrimônio Natural Pró-Mata',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Pró-Mata, localizada em São Francisco de Paula, na serra do Rio Grande do Sul, é uma área de conservação com cerca de 3.100 hectares administrada pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Criada em parceria com o Instituto do Meio Ambiente da PUCRS, Pró-Mata se dedica à preservação da biodiversidade e ao desenvolvimento de pesquisas científicas e programas de ensino e extensão. No local, são realizadas pesquisas que integram o Programa de Pesquisas Ecológicas de Longa Duração (PELD), focando na conservação de ecossistemas locais e na educação ambiental, atraindo pesquisadores e estudantes de diferentes instituições nacionais e internacionais.',
	},
	'rancho-mira-serra': {
		name: 'Reserva Particular do Patrimônio Natural Rancho Mira-Serra',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Rancho Mira-Serra está localizada em São Francisco de Paula, no Rio Grande do Sul, e abrange uma área de 17,68 hectares. Criada em 1997, essa unidade de conservação protege ecossistemas característicos da Mata Atlântica, que incluem várias espécies de flora e fauna ameaçadas de extinção. A reserva é gerida pela ONG Mira-Serra e se destina à preservação ambiental, educação e pesquisa científica, além de turismo acadêmico. Sua vegetação e relevo íngreme ajudam a manter a biodiversidade local e o clima montanhoso favorece chuvas orográficas, que mantêm a umidade essencial para a fauna e flora locais.',
	},
	'recanto-do-robalo': {
		name: 'Reserva Particular do Patrimônio Natural Recanto do Robalo',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Recanto do Robalo é uma unidade de conservação federal localizada em Torres, no Rio Grande do Sul, e foi oficializada em 2002. Com uma área de 9,95 hectares, esta RPPN faz parte do bioma Mata Atlântica e busca proteger a biodiversidade local, especialmente em ecossistemas costeiros. Criada a partir de uma iniciativa privada, esta área tem como proprietário João Carlos Harter, que a registrou para fins de conservação permanente. A reserva é utilizada para educação ambiental e ecoturismo, reforçando a importância de proteger habitats naturais na região.',
	},
	'reserva-do-capao-grande': {
		name: 'Reserva Particular do Patrimônio Natural Reserva do Capão Grande',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Reserva do Capão Grande está localizada em Barra do Ribeiro, no Rio Grande do Sul, e cobre uma área de 9 hectares. Criada em 1998, é uma iniciativa do proprietário Eli Roberto Lucena Braga e busca conservar permanentemente a vegetação e fauna locais da região, no bioma da Mata Atlântica. Esse tipo de unidade de conservação tem como principal objetivo a preservação dos recursos naturais e a promoção da biodiversidade, sendo protegida em caráter perpétuo por lei. A reserva também serve como um espaço educativo e ambiental, ajudando a conscientizar sobre a importância da proteção de áreas privadas no país.',
	},
	'reserva-dos-mananciais': {
		name: 'Reserva Particular do Patrimônio Natural Reserva dos Mananciais',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Reserva dos Mananciais, localizada em Dom Pedrito, no Rio Grande do Sul, protege uma área de 11,11 hectares de vegetação característica do bioma Pampa. Criada em 2000, esta RPPN tem como objetivo conservar a biodiversidade local e preservar os recursos hídricos. Por ser uma Unidade de Conservação de proteção integral, permite atividades como pesquisa científica e visitação com fins educativos, recreativos ou turísticos. É de propriedade privada e mantida por Gabriel Maurício de Miranda Munhoz, e sua conservação é assegurada em caráter perpétuo pela legislação ambiental brasileira, que protege as RPPNs contra qualquer alteração que possa prejudicar seu ecossistema único.',
	},
	'reserva-do-maragato': {
		name: 'Reserva Particular do Patrimônio Natural Reserva Maragato',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Reserva Maragato, localizada em Passo Fundo, no Rio Grande do Sul, cobre aproximadamente 41 hectares, com destaque para áreas de Florestas com Araucária, protegendo uma rica biodiversidade típica do bioma Pampa. Esta reserva funciona como refúgio para espécies de fauna e flora locais e oferece trilhas ecológicas para educação ambiental, além de espaços destinados a eventos e lazer. Fundada em 2007, a reserva é gerida pelos proprietários Theresinha e Enio Guedes, que promovem atividades de conservação e visitas agendadas, incentivando o contato com a natureza em um ambiente protegido.',
	},
	'reserva-particular-professor-delmar-harry-dos-reis': {
		name: 'Reserva Particular do Patrimônio Natural Reserva Particular Professor Delmar Harry dos Reis',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Professor Delmar Harry dos Reis, localizada em Viamão, Rio Grande do Sul, protege 10 hectares do bioma Mata Atlântica. Criada oficialmente em 1999 por meio da Portaria nº 47 do IBAMA, a reserva tem como objetivo a preservação de uma área significativa da vegetação nativa e dos recursos hídricos locais. A RPPN, por ser uma unidade de conservação privada, permite atividades de educação ambiental e pesquisa científica, desempenhando um papel essencial na manutenção da biodiversidade regional.',
	},
	'reserva-particular-schuster': {
		name: 'Reserva Particular do Patrimônio Natural Reserva Particular Schuster',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Schuster, localizada no município de Humaitá, no Rio Grande do Sul, ocupa uma área de 4 hectares e pertence a José Milton Schuster. Criada oficialmente em 1992, esta reserva integra o sistema de Unidades de Conservação do Brasil, comprometendo-se com a preservação ambiental e a proteção da biodiversidade local em caráter perpétuo. Por ser uma RPPN, atividades de pesquisa científica e de ecoturismo são permitidas dentro de normas específicas, promovendo a educação ambiental e incentivando a conservação da fauna e flora nativas.',
	},
	'rincao-das-flores': {
		name: 'Reserva Particular do Patrimônio Natural Rincão das Flores',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Rincão das Flores, localizada em Porto Alegre, Rio Grande do Sul, ocupa 15,46 hectares e foi oficialmente criada em 2010 por meio da Portaria nº 51. Esta área de conservação pertence ao bioma Pampa e foi estabelecida com o objetivo de proteger e preservar a biodiversidade local, que inclui espécies nativas e áreas de vegetação característica do Pampa. A propriedade é mantida pelo proprietário Carlos Alberto Zanella, que atua em parceria com o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) para assegurar a preservação e o desenvolvimento de atividades de pesquisa e educação ambiental na região.',
	},
	'ronco-do-bugio': {
		name: 'Reserva Particular do Patrimônio Natural Ronco do Bugio',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Ronco do Bugio está localizada em Venâncio Aires, no Rio Grande do Sul, e ocupa uma área de aproximadamente 23 hectares. Criada em 2009 por meio da Portaria nº 5, a reserva preserva um fragmento significativo do bioma Mata Atlântica, abrigando várias espécies de fauna e flora nativas. Seu nome faz referência ao bugio, primata característico da região, reforçando seu papel na conservação da biodiversidade local. A área é de propriedade privada e gerida por Ruy Augusto Hansel e Maria Ivone Hansel, que desenvolvem um plano de manejo aprovado pelo ICMBio, essencial para a proteção e o uso sustentável do local.',
	},
	'santa-barbara': {
		name: 'Reserva Particular do Patrimônio Natural Santa Bárbara',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Santa Bárbara, localizada na região de Ana Rech em Caxias do Sul (RS), ocupa uma área de 2 hectares e pertence à Associação de Moradores Ecovila Rainha da Floresta. Esta reserva foi estabelecida com o objetivo de conservar a biodiversidade da Mata Atlântica, incluindo espécies nativas como araucárias, além de fauna diversificada, com presença de animais como tatu, porco-espinho e gralha-azul. A área também possui trilhas ecológicas e uma cachoeira, o que contribui para o ecoturismo e a educação ambiental da região. Contudo, enfrenta desafios como loteamentos próximos e a poluição dos afluentes.',
	},
	'sitio-porto-da-capela': {
		name: 'Reserva Particular do Patrimônio Natural Sítio Porto da Capela',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Sítio Porto da Capela está localizada em Porto Alegre, no Rio Grande do Sul, e cobre uma área de 14 hectares, sendo protegida desde 1995. Esta unidade de conservação se encontra no bioma Mata Atlântica e é propriedade de Denise Laurinda Souza de Abreu. A RPPN tem como objetivo preservar a biodiversidade local e proteger o ambiente natural característico da região, contribuindo para a manutenção da vegetação nativa e dos recursos hídricos presentes na área.',
	},
	'solar-das-borboletas': {
		name: 'Reserva Particular do Patrimônio Natural Solar das Borboletas',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Solar das Borboletas é uma unidade de conservação localizada em Itaara, no Rio Grande do Sul, com 1,4 hectare dedicado à preservação ambiental. Criada em 2020, a reserva integra o Corredor Ecológico da Quarta Colônia e visa proteger a Mata Atlântica local, servindo como refúgio para várias espécies e contribuindo para a biodiversidade da região. No espaço, são oferecidas atividades de ecoturismo e educação ambiental, como trilhas e encontros com foco na natureza. Além disso, a reserva busca promover a conexão entre o público e a preservação ambiental.',
	},
	'universidade-de-passo-fundo': {
		name: 'Reserva Particular do Patrimônio Natural Universidade de Passo Fundo',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) da Universidade de Passo Fundo (UPF) foi criada oficialmente em 2016, cobrindo uma área de 32,21 hectares. Localizada no Centro de Extensão e Pesquisa Agropecuária da universidade, a reserva visa à proteção da biodiversidade e dos serviços ambientais. A área abrange trechos do Arroio Miranda e é composta principalmente de áreas de preservação permanente e reserva legal. Utilizada para atividades de ensino, pesquisa e educação ambiental, a RPPN também promove visitas guiadas e trilhas, oferecendo à comunidade oportunidades de interação com a natureza e conscientização ambiental',
	},
	'boa-vista': {
		name: 'Reserva Particular do Patrimônio Natural Boa Vista',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Boa Vista, no município de Santana da Boa Vista, no Rio Grande do Sul, ocupa uma área de 243,28 hectares e foi criada em 2018. Esta reserva, administrada pela CMPC Celulose Riograndense, protege áreas importantes de vegetação nativa do bioma Pampa, contribuindo para a preservação da biodiversidade e dos ecossistemas locais. As RPPNs são propriedades privadas voltadas para a conservação ambiental, assegurando a proteção de espécies e promovendo a sustentabilidade na região.',
	},
	'estadual-barba': {
		name: 'Reserva Particular do Patrimônio Natural Estadual Barba',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Barba Negra, localizada na Fazenda Barba Negra em Barra do Ribeiro, Rio Grande do Sul, abrange cerca de 2,4 mil hectares e foi estabelecida em 2010 com o objetivo de preservar a rica biodiversidade local. A reserva é conhecida por sua variedade de ecossistemas, como florestas de restinga, dunas e banhados, e conta com espécies ameaçadas, incluindo o tamanduá-mirim e a lontra. Com uma avifauna diversificada de 170 espécies, incluindo aves migratórias, a área se destaca também por suas paisagens exuberantes e relevância histórica, abrigando estruturas do século XVIII. Atualmente, a reserva aguarda a aprovação de seu plano de manejo para promover atividades de pesquisa, ecoturismo e educação ambiental.',
	},
	'estadual-moa': {
		name: 'Reserva Particular do Patrimônio Natural Estadual Moã',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural (RPPN) Estadual Moã, localizada no município de Itaara, Rio Grande do Sul, é uma área de 24 hectares preservada pela Fundação Moã, com cobertura remanescente da Mata Atlântica. A reserva faz parte do Corredor Ecológico da Quarta Colônia e conecta-se à Reserva Biológica do Ibicuí Mirim, contribuindo para a conservação de biodiversidade em uma região onde poucos fragmentos naturais ainda possuem extensão e qualidade ambiental significativas. O local atrai pesquisadores interessados em estudos sobre flora, fauna, solo, e qualidade da água, promovendo atividades de conservação e pesquisa científica em parceria com universidades locais.',
	},
	'estadual-passo-do-buraco': {
		name: 'Reserva Particular do Patrimônio Natural Estadual Passo do Buraco',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Estadual (RPPNE) Passo do Buraco, criada em 2023, está localizada em Vacaria, no Rio Grande do Sul, e cobre uma área de aproximadamente 2.846 m². Como parte de uma propriedade particular, esta unidade de conservação busca preservar a biodiversidade local, limitando as atividades a pesquisas científicas e visitas educativas e recreativas. Para garantir a proteção, o proprietário é responsável por implementar um plano de manejo, que deve ser aprovado pela Secretaria Estadual do Meio Ambiente. Este plano inclui medidas como a sinalização da área para impedir atividades que possam comprometer o ecossistema, como desmatamento e caça.',
	},
	'estadual-salto-forqueta': {
		name: 'Reserva Particular do Patrimônio Natural Estadual Salto Forqueta',
		category: 'Unidade de Uso Sustentável',
		summary:
			'A Reserva Particular do Patrimônio Natural Estadual Salto Forqueta, localizada em São José do Herval, RS, abrange cerca de 45 hectares no bioma da Mata Atlântica. Criada pela portaria SEMA nº 306/2019, a reserva pertence à CERTEL Energia e destina-se à preservação ambiental. Além de proteger uma área significativa de floresta nativa, a RPPN contribui para a manutenção da biodiversidade local, incluindo espécies endêmicas de flora e fauna. A localização próxima ao Salto Forqueta, uma cascata de grande beleza natural, torna o local um ponto de importância ecológica e paisagística para a região.',
	},
}
