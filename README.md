# Aurum Barbearia

Site estático em português, preto e dourado, em HTML, CSS e JavaScript puro. Marca, serviços, preços, horários, endereço e avaliações são fictícios e identificados na página. Galeria com imagens fotográficas conceituais geradas por IA, convertidas em WebP e armazenadas localmente. Elas não representam uma barbearia real. Não usa APIs, bibliotecas, fontes remotas, cookies ou ferramentas de rastreamento. Apenas o WhatsApp configurado acessa um serviço externo, após o clique.

## Arquivos

- `index.html`: conteúdo e estrutura semântica.
- `styles.css`: identidade visual, layouts responsivos, animações e movimento reduzido.
- `config.js`: número e mensagem pública do WhatsApp.
- `booking.js`: catálogo e criação validada da mensagem do serviço.
- `script.js`: menu mobile, galeria, escolha do serviço e parallax.
- `assets/`: fotografias conceituais WebP, versão mobile do hero, favicon e os antigos SVGs preservados.
- `.nojekyll`: permite servir os arquivos diretamente no GitHub Pages.
- `tests/check_site.py`: verificação estática de referências, IDs, SVGs e orçamento de tamanho.

Não há instalação de pacotes nem etapa de build.

## Testar localmente

**Para ver agora, abra `visualizar.html` no navegador.** Esse arquivo contém CSS, JavaScript e imagens embutidos e evita o bloqueio dos arquivos vizinhos ao abrir pelo portal `/run/user/.../doc/` no Linux.

O `index.html` usa os arquivos separados e deve ser aberto com acesso à pasta inteira ou por um servidor local. Para testar com Python 3:

```bash
cd aurum-barbearia
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse http://localhost:8000. Para testar no celular na mesma rede, execute `python3 -m http.server 8000 --bind 0.0.0.0` e abra `http://IP-LOCAL-DO-COMPUTADOR:8000` no aparelho. Encerre com Ctrl+C.

Verificação automática, sem instalar dependências:

```bash
python3 tests/check_site.py
```

Confira manualmente no navegador:

1. Larguras de 320, 375, 768, 1024 e 1440 pixels: leitura, navegação e ausência de rolagem horizontal.
2. No celular, abra o menu, selecione uma seção e confirme o fechamento. Teste também Escape.
3. Abra as três imagens conceituais da galeria e feche por botão, Escape e clique fora. Confira o retorno do foco.
4. Sem escolher serviço, tente continuar: o formulário deve pedir uma opção. Com número vazio, escolha um serviço e continue: um aviso aparece no próprio formulário, sem contatar ninguém.
5. Clique em cada card e confira a pré-seleção correspondente. Depois de configurar um número seu, confira destinatário, serviço, preço e duração na mensagem do WhatsApp. A mensagem só será enviada se você enviar no próprio WhatsApp.
6. Navegue por Tab e Enter. Ative a preferência por movimento reduzido no sistema.
7. Desative JavaScript: o conteúdo e a navegação permanecem disponíveis; os links de agendamento levam à seção explicativa.
8. Use Lighthouse nas ferramentas do navegador para medir desempenho e acessibilidade no ambiente publicado. Não há pontuação garantida sem medição.

## Configurar WhatsApp

Edite `config.js`, preenchendo `whatsappNumber` com o seu número real autorizado: código do país + DDD + número, apenas dígitos. Por exemplo, o formato brasileiro é `55` + DDD de dois dígitos + número de nove dígitos. Não use um número inventado: ele pode pertencer a alguém.

```js
window.AURUM_CONFIG = Object.freeze({
  whatsappNumber: "", // Substitua a string vazia pelo seu número real.
  whatsappMessage: "Olá! Gostaria de consultar os horários da Aurum Barbearia."
});
```

Vazio ou com formato inválido mantém o modo demonstração. A validação confere apenas o formato, não a existência da conta. O número configurado é público. Não coloque credenciais nesse arquivo. O link abre o WhatsApp com texto preenchido; não envia mensagens nem confirma reservas automaticamente.

## Publicar no GitHub Pages

1. Crie um repositório público, por exemplo `aurum-barbearia`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O `index.html` deve ficar na raiz, junto com `assets/`, e não dentro de uma segunda pasta `aurum-barbearia/`. Inclua `.nojekyll`.
3. Faça commit na branch `main`.
4. No repositório, vá a **Settings → Pages → Build and deployment**.
5. Em **Source**, selecione **Deploy from a branch**; em **Branch**, escolha **main** e **/(root)**. Clique em **Save**.
6. Aguarde a publicação. O endereço habitual é `https://SEU-USUARIO.github.io/aurum-barbearia/`. O endereço exato aparece em Settings → Pages.
7. Abra a URL e faça as verificações acima. Para atualizar, envie novos commits para a mesma branch.

Referência oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Os caminhos são relativos para funcionar também em subdiretórios do GitHub Pages. Não é necessário domínio pago, servidor próprio ou API paga. A publicação não foi realizada automaticamente.

## Personalizar

Altere a marca e os textos em `index.html`, as cores em `:root` no `styles.css` e o contato em `config.js`. Se substituir as imagens conceituais por fotos reais, use imagens próprias ou licenciadas, comprima em WebP/AVIF, declare dimensões e mantenha textos alternativos descritivos. Preserve os avisos demonstrativos enquanto o conteúdo não representar um negócio real. O mapa atual é uma ilustração sem geolocalização: não fornece rotas.

## Desempenho e acessibilidade

Arquivos locais pequenos, sem frameworks, hero priorizado e imagens abaixo da dobra com carregamento tardio. Fontes do sistema e SVGs evitam downloads externos. Inclui link para pular conteúdo, foco visível, rótulos de navegação, menu com estado expandido, diálogos nativos e suporte a `prefers-reduced-motion`.

Verificação disponível neste ambiente: estrutura estática, referências locais, âncoras, SVGs e tamanho. Testes visuais, execução JavaScript em navegador, aparelhos reais e Lighthouse precisam ser feitos em um navegador; não foram executados neste ambiente.

## Redesign e skills

As cinco skills solicitadas foram carregadas em `.agents/skills/` no projeto com instruções, referências e scripts de apoio. A instalação global em `.codex/skills` foi bloqueada porque essa pasta é somente para leitura. A instalação local é leve: não inclui as galerias de exemplos e todos os assets opcionais dos repositórios. O motor binário do Impeccable não pôde ser baixado pela rede deste ambiente. As instruções foram usadas diretamente; a busca Python do UI UX Pro Max e os verificadores Python de Diagram Design foram executados.

Veja `SKILLS-APLICADAS.md` para decisões e limites. `PRODUCT.md` e `DESIGN.md` registram o escopo e a identidade visual. `.agents/skills/` é ignorada no Git e excluída do ZIP do site; não é necessária para hospedar a página.

O guia visual de publicação está em [docs/publicacao.html](docs/publicacao.html), com SVG acessível e sem downloads externos. Ele documenta a arquitetura, sem introduzir um fluxo técnico para os clientes da barbearia.

### Reconstruir a prévia depois de editar

```bash
python3 build_preview.py
```

Isso atualiza `visualizar.html` e o arquivo ZIP na pasta acima. Edite o número em `config.js`, e depois execute esse comando para refletir a configuração também na prévia autocontida. Publique os arquivos separados pelo `index.html`; a prévia é uma conveniência offline.

### Orçamento atualizado

O site com fotografias tem aproximadamente 700 KB de arquivos locais sem compressão. O teste verifica um teto de 900 KB; o antigo teto de 100 KB era para a versão somente vetorial. O HTML autocontido é maior porque incorpora imagens em base64 e repete algumas referências. Ele serve para prévia; o `index.html` usa cache e lazy loading dos arquivos separados.

As fotos foram geradas com IA para este projeto. Não foram retiradas do Google nem de estabelecimentos reais. Os arquivos PNG de geração foram convertidos para WebP; não há edição do conteúdo visual.

## Revisão para celular e estilo tradicional

Paleta ampliada para carvão, creme, latão, vinho e verde do WhatsApp. Textos reduzidos e cards compactos. Parallax curto apenas na foto principal, desativado com movimento reduzido e fora da tela. O botão fixo de WhatsApp some quando o botão principal ou o de fechamento está visível.

No navegador, confira o parallax em rolagem normal e depois com movimento reduzido, as larguras de 320/375/390px e o aparecimento do botão fixo entre as seções. Sem JavaScript, a foto permanece estática e a navegação continua disponível.

## Identidade e agendamento final

O monograma da AURUM está em `assets/logo.svg` e no favicon. Os ícones de corte, barba e combo são SVGs locais. A entrada dos textos do hero usa CSS e respeita movimento reduzido.

Todos os botões de agendamento levam à escolha de serviço. Os cards pré-selecionam a opção; a pessoa pode trocá-la no formulário. O envio exige uma escolha válida e número configurado. A navegação para o WhatsApp acontece na mesma aba, para evitar bloqueadores de pop-up no celular. O modo demonstrativo mostra aviso inline e não abre contato. Sem JavaScript, o botão de envio fica desabilitado com uma explicação.

As informações do catálogo em `booking.js`, nos cards e nas opções HTML devem ser alteradas juntas. A verificação compara as opções com o catálogo.

Teste executável da lógica real de JavaScript, utilizando JavaScriptCore quando disponível no sistema:

```bash
python3 tests/test_booking.py
```

Inclui sintaxe dos três scripts, seleção obrigatória, rejeição de números/serviços inválidos, codificação da mensagem e consistência dos serviços na página. Não equivale a um navegador: layout, toque, menu, foco e abertura do aplicativo ainda devem ser testados visualmente, especialmente em Safari/iPhone e Chrome/Android.
