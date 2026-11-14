# Aurum — revisão para celular

Direção solicitada: barbearia premium tradicional, menos aparência de marca conceitual e prioridade para celular. Preservados os serviços, seus valores demonstrativos, localização fictícia e avaliações claramente demonstrativas.

Paleta: carvão, creme, madeira/latão, vinho e WhatsApp verde. Textos diretos, títulos menores, sem slogans em sequência, sem banda de palavras decorativas e sem bloco gigante dourado. Corpo de 16px, cartões compactos, toque de pelo menos 44px e foco visível.

CSS mobile-first: uma coluna como padrão; três serviços em grade apenas a partir de 640px. Cards mobile com preço e ação na mesma linha. Fotos em uma composição simples. Botão de contato fixo inferior em celular, oculto quando a ação principal do hero ou do fechamento estiver visível.

Parallax explicitamente solicitado: somente a foto principal, até 42px, com sobra de imagem de 56px em cada extremo. requestAnimationFrame, listener passivo, pausa fora da tela e desativação sob prefers-reduced-motion. Nenhum scroll-jacking, biblioteca de animação ou efeito de fundo.

A versão visualizar.html incorpora todos os recursos. Validadores estáticos executados; sem alegação de teste visual em navegador.

Refinamento final: monograma A em arco (espelho/navalha), repetido no cabeçalho, rodapé e favicon; ícones lineares locais nos três serviços. Hero com entrada única em menos de um segundo, sem esconder conteúdo sem JS e desativada sob movimento reduzido. Formulário de serviço com controles radio nativos, resumo de preço/duração e ação WhatsApp única após escolha. Desktop com duas colunas; celular com opções empilhadas e envio largo. Nenhum campo de data inventa disponibilidade.
