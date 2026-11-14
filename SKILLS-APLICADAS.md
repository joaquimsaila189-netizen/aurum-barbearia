# Aplicação das cinco skills solicitadas

Instalação local de projeto em `.agents/skills/`. A pasta global `.codex/skills` está somente para leitura neste ambiente. O instalador padrão falhou por indisponibilidade de DNS; o conteúdo foi obtido pelo conector GitHub. As skills ficam descobríveis na próxima interação em contextos que reconhecem `.agents/skills`.

- Hallmark (`Nutlope/hallmark`): hierarquia fotográfica, ausência de eyebrows/itálicos isolados, tokens de cor e fonte, foco visível e conteúdo sem JS.
- Taste (`Leonxlnx/taste-skill`): página classificada como place, fotografias coerentes com a atividade, hero priorizado, imagens WebP e animação de entrada com fallback. O preto e dourado explícito do usuário prevalece sobre a preferência da skill por páginas claras de comércio local.
- Impeccable (`pbakaus/impeccable`): PRODUCT.md e DESIGN.md, revisão de contraste, legibilidade mobile, estados e eliminação de elementos decorativos repetitivos.
- UI UX Pro Max (`nextlevelbuilder/ui-ux-pro-max-skill`): alvos de toque, prioridade mobile, foco de teclado, contraste e decisões registradas de espaçamento.
- Diagram Design (`cathrynlavery/diagram-design`): o ritual será apresentado como sequência simples, com contraste e marca do projeto. Sem inventar métricas, equipes ou arquitetura.

Os avisos de dados fictícios solicitados pelo usuário prevalecem sobre regras genéricas contra inventar depoimentos. Os depoimentos existentes permanecem claramente demonstrativos.

Limite de ferramentas: Node/Chrome não estão disponíveis no terminal. O launcher Impeccable e verificações visuais automatizadas não foram executados com sucesso; não há alegação de aprovação por esses validadores.

A busca `--design-system` foi executada, mas sugeriu azul e verde de calendários; esses valores foram rejeitados por conflitarem com a paleta explícita. A busca focada em UX retornou recomendações de foco, reduced motion e alvos de toque, aplicadas à interface.

Diagram Design: `docs/publicacao.html` explica a relação entre arquivos, hospedagem e navegador com SVG acessível, conectores ortogonais e um foco dourado. Paleta adaptada da marca; sem fontes remotas. A sequência de agendamento no site é uma lista HTML, pois um desenho seria desnecessário para três instruções simples.

Revisão posterior solicitada pelo usuário: layout mobile-first tradicional, verde de WhatsApp, creme/vinho e parallax curto. O parallax solicitado prevalece sobre a restrição genérica de Taste contra parallax em comércio local; sua execução é limitada à fotografia principal e respeita movimento reduzido. Impeccable/adapt orientou compactação mobile, alvos de toque e redução de conteúdo.
