# AURUM | Barbearia Premium

**Website demonstrativo • Desenvolvimento Web • HTML, CSS & JavaScript**

Site institucional moderno, responsivo e elegante, desenvolvido para apresentar uma experiência digital premium para barbearias.

O projeto combina uma identidade visual sofisticada, navegação intuitiva, animações suaves e funcionalidades de agendamento pelo WhatsApp.

### Acesse o projeto

**[VISUALIZAR SITE ONLINE](https://joaquimsaila189-netizen.github.io/aurum-barbearia/)**

**Tecnologias:** HTML5 • CSS3 • JavaScript • SVG • WebP

---

## Sobre o projeto

A **AURUM Barbearia** é um projeto demonstrativo de desenvolvimento web, criado para representar uma barbearia premium com uma presença digital moderna e profissional.

O objetivo é oferecer uma experiência agradável em computadores, tablets e smartphones, priorizando desempenho, acessibilidade e facilidade de navegação.

O projeto utiliza tecnologias web nativas, sem necessidade de frameworks, APIs pagas ou instalação de dependências.

**Observação:** a AURUM é uma marca fictícia utilizada para demonstração. Informações comerciais, avaliações e imagens são ilustrativas.

## Funcionalidades

- **Design responsivo:** interface adaptada para diferentes tamanhos de tela.
- **Agendamento via WhatsApp:** seleção de serviços e preparação automática de mensagens.
- **Catálogo de serviços:** apresentação de opções, preços e duração dos atendimentos.
- **Galeria interativa:** visualização ampliada das imagens.
- **Menu mobile:** navegação adaptada para dispositivos móveis.
- **Animações suaves:** efeitos de entrada e parallax.
- **Identidade visual premium:** combinação de preto, dourado, creme e tons sofisticados.
- **Acessibilidade:** navegação por teclado, indicadores de foco e suporte a movimento reduzido.
- **Otimização:** imagens WebP, recursos locais e carregamento otimizado.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização, responsividade e animações |
| JavaScript | Interatividade e agendamento |
| SVG | Logotipo e ícones |
| WebP | Imagens otimizadas |
| GitHub Pages | Hospedagem gratuita |

## Estrutura do projeto

```text
aurum-barbearia/
│
├── index.html
├── styles.css
├── script.js
├── config.js
├── booking.js
├── visualizar.html
├── .nojekyll
│
├── assets/
│   ├── logo.svg
│   ├── salon.webp
│   ├── salon-mobile.webp
│   ├── tools.webp
│   └── lounge.webp
│
├── tests/
│   ├── check_site.py
│   └── test_booking.py
│
└── README.md
```

## Executar o projeto

O projeto não exige instalação de dependências ou compilação.

**Opção 1 — Visualização rápida**

Abra o arquivo `visualizar.html` diretamente no navegador. Essa versão possui os recursos incorporados e funciona como demonstração local.

**Opção 2 — Servidor de desenvolvimento**

No terminal, execute:

```bash
python3 -m http.server 8000
```

Depois, abra `http://localhost:8000` no navegador.

Esse endereço é utilizado apenas para desenvolvimento local. O site público está disponível pelo GitHub Pages.

## Configuração do WhatsApp

Para ativar o agendamento, edite o arquivo `config.js`:

```javascript
window.AURUM_CONFIG = Object.freeze({
  whatsappNumber: "",
  whatsappMessage:
    "Olá! Gostaria de consultar os horários da Aurum Barbearia."
});
```

Insira um número autorizado com código do país, DDD e número, utilizando apenas dígitos.

**Exemplo de formato:** `55` + DDD + número.

Enquanto o número estiver vazio, o sistema permanece em modo demonstrativo.

O site prepara a mensagem, mas não envia mensagens nem confirma reservas automaticamente.

## Publicação

O projeto está hospedado gratuitamente no **GitHub Pages**.

**Endereço público:**

https://joaquimsaila189-netizen.github.io/aurum-barbearia/

A publicação utiliza a branch `main` e a pasta raiz do repositório.

Novas alterações podem ser publicadas por meio de commits.

## Desempenho e acessibilidade

O projeto foi desenvolvido com foco em:

- Código leve, sem frameworks externos.
- Imagens otimizadas em WebP.
- Carregamento tardio de imagens secundárias.
- Navegação por teclado.
- Estrutura HTML semântica.
- Compatibilidade com dispositivos móveis.
- Suporte à preferência por movimento reduzido.
- Ausência de cookies e ferramentas de rastreamento incorporadas.

A compatibilidade visual e o desempenho devem ser verificados em navegadores e dispositivos reais.

## Testes

Para executar a verificação estática:

```bash
python3 tests/check_site.py
```

Para testar a lógica de agendamento, quando o ambiente tiver o mecanismo necessário:

```bash
python3 tests/test_booking.py
```

Os testes automatizados não substituem a verificação manual do layout, dos menus e da integração com o WhatsApp.

## Personalização

A estrutura foi preparada para facilitar adaptações a diferentes estabelecimentos.

É possível modificar:

- Nome e identidade visual da marca.
- Logotipo e cores.
- Fotografias e imagens.
- Serviços, preços e durações.
- Horários de funcionamento.
- Informações de contato.
- Número de WhatsApp.
- Textos e conteúdos institucionais.

Os arquivos `index.html`, `styles.css`, `booking.js` e `config.js` concentram as principais personalizações.

## Imagens e conteúdo

As imagens utilizadas são conceituais, geradas por inteligência artificial e convertidas para WebP.

Não representam um estabelecimento real.

O projeto não utiliza fotografias retiradas de outros negócios.

## Objetivo

Demonstrar habilidades em desenvolvimento web, design de interfaces, experiência do usuário e implementação de soluções digitais para pequenos negócios.

Este projeto integra um portfólio de desenvolvimento de sites, aplicações e experiências digitais.

---

**AURUM Barbearia — Projeto demonstrativo de desenvolvimento web.**

*Design, tecnologia e experiência digital.*
