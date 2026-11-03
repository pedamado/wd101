# Caderno de Avaliação Pedagógica & Guião de Referência
## Unidade Curricular: Web Design 101 (Design de Comunicação — FBAUP)
### Exercício 1: *Hello Wendy!* — Iniciação Holística a HTML5 & CSS (Mobile-First)

---

## 1. Enquadramento Pedagógico e Filosofia do Exercício

O **Exercício 1 (EX1)** constitui o primeiro contacto prático com o design e desenvolvimento para a Web no curso de Design de Comunicação. Afastando-se da abordagem meramente textual ou puramente teórica (frequentemente desmotivante em fases iniciais), este exercício assenta numa filosofia de **Mobile First**, **Progressive Enhancement** e **experimentação holística imediata**: o aluno escreve HTML semântico, estiliza com CSS e publica via FTP num servidor real desde o primeiro instante.

### Ajustes e Decisões Críticas de Avaliação (Fase 1):
1. **Regra Estrita de Ficheiro de Entrada (`index.html`):** O documento principal tem de ser estritamente nomeado `index.html`. Esta escolha é vital para o funcionamento automático dos servidores web (`DirectoryIndex`), permitindo URLs limpos e diretos (`.../ex1/`).
2. **Ambiente Isento de Multimédia / Imagens Externas:** O exercício concentra-se exclusivamente em tipografia, caixas estruturais e hierarquia semântica. O uso de ficheiros de imagem (`<img>`) não faz parte dos requisitos de avaliação desta fase para não desviar o foco da relação forma/conteúdo tipográfico.
3. **Restrição de Classes e IDs no CSS (Domínio de Seletores Descendentes):** O uso de seletores de classe (`.classe`) e identificadores (`#id`) não deve ser a muleta de estilização inicial. Pretende-se forçar o aluno a compreender a árvore DOM, a cascata e os **seletores descendentes** baseados em elementos nativos (`nav ul`, `section p`, `header h1`).
4. **Tolerância Zero ao Abuso de `<div>`:** Incentivar a utilização dos marcos estruturais do HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) em detrimento de divisões genéricas com classes cosméticas.
5. **Tipografia Relativa (`rem`, `em`, `%`) vs. `clamp()`:** O objetivo central de aprendizagem é abandonar de imediato medidas fixas em píxeis (`px`) no dimensionamento de texto e espaçamentos tipográficos, usando `rem` e `em`. Funções fluídas como `clamp()` são consideradas **técnicas avançadas / bónus** (reservadas para alunos com bagagem prévia em Responsive Web Design ou para semanas posteriores).
6. **Declaração Pedagógica de Propriedades Estruturais:** Forçar a declaração explícita de `display`, `position` e dimensões com limites elásticos (`width`, `min-width`, `max-width`) nos contentores principais para solidificar o modelo de caixa e o comportamento de herança.

---

## 2. Marco a Marco: Matriz de Análise e Critérios de Avaliação

```
Fluxo Sequencial de Avaliação Docente:
[Marco 1: URL & Nomenclatura] ➔ [Marco 2: Impressão Visual Mobile] ➔ [Marco 3: Código HTML & Semântica] ➔ [Marco 4: CSS & Modelo de Caixa] ➔ [Marco 5: Tipografia & Seletores Descendentes]
```

---

### Marco 1: Publicação, Infraestrutura e Higiene de Ficheiros
* **O que é verificado:**
  * Submissão correta do URL na folha de cálculo partilhada.
  * Presença obrigatória do ficheiro de entrada como `index.html` (em minúsculas).
  * Acesso HTTP/HTTPS público no servidor `pages.up.pt` sem erros de permissão (`403 Forbidden`) ou inexistência (`404 Not Found`).
  * Organização interna e caminhos relativos: ficheiros HTML na raiz da pasta do exercício e ficheiros CSS dentro do subdiretório `css/`.
  * Ausência de caracteres ilegais em nomes de ficheiros ou pastas (espaços, maiúsculas, cedilhas, acentos gráficos ou símbolos).
* **Padrões de Qualidade (Boas Práticas):**
  * URL perfeitamente navegável: `https://pages.up.pt/~up123456/ex1/`.
  * Ligação do CSS feita por caminho relativo limpo: `<link rel="stylesheet" href="css/style.css">`.
* **Anti-Padrões (A Penalizar):**
  * Submissão de caminhos locais do disco: `file:///Volumes/.../index.html` ou `localhost:5500`.
  * Nomes de ficheiro alternativos: `home.html`, `main.html`, `Wendy.html`, `inicio.html`.
  * Ficheiros fora da pasta `public_html/` ou aninhamentos redundantes (ex.: `.../ex1/o-meu-site/o-meu-site/index.html`).
  * Nomes com acentuação ou espaços (ex.: `estilo da página 1.css`).

---

### Marco 2: Primeira Impressão Visual (Simulação Mobile)
* **O que é verificado:**
  * Inspeção inicial da página num ecrã estreito / viewport móvel (~360px a 400px de largura nas DevTools).
  * Ausência de quebra de layout lateral (sem scroll horizontal parasita / *overflow blowout*).
  * Existência de margens laterais de segurança (*padding/gutters*) que impeçam o texto de tocar no limite físico do ecrã.
  * Contraste cromático confortável entre o texto e o fundo (mínimo WCAG AA $\ge 4.5:1$).
  * Leveza e legibilidade da mancha gráfica em ecrãs verticais.
* **Padrões de Qualidade (Boas Práticas):**
  * A página respira com margens laterais de pelo menos `1rem` ou `16px`.
  * Texto a rodapé e cabeçalho perfeitamente legível sem necessidade de zoom manual.
  * Ligações (`<a>`) visivelmente diferenciadas do texto corrente e com retorno tátil/visual claro ao foco e ao passar do rato.
* **Anti-Padrões (A Penalizar):**
  * Página desenhada para desktop em largura fixa (ex.: `width: 960px`), aparecendo microscópica ou cortada em ecrãs de telemóvel.
  * Texto colado aos bordos laterais do navegador.
  * Contraste deficiente (ex.: cinzento claro em fundo branco, ou azul escuro em fundo preto).

---

### Marco 3: Estrutura Técnica, Metadados e Semântica HTML5
* **O que é verificado:**
  * Validade de sintaxe HTML5 e fecho rigoroso de todas as tags de conteúdo.
  * Documentação no topo: comentário com Nome do Aluno, Número Mecanográfico e Data.
  * Comentários ao longo do código a explicar secções estruturais (humor/trocadilhos saudáveis valorizados pedagogicamente).
  * Configuração técnica do `<head>`:
    * `<!DOCTYPE html>` e atributo de linguagem `<html lang="pt-PT">`.
    * `<meta charset="UTF-8">` declarado no topo do `<head>`.
    * `<meta name="viewport" content="width=device-width, initial-scale=1.0">` obrigatório.
    * `<title>` descritivo e contextualizado.
    * `<meta name="description" content="...">`.
  * **Arquitetura de Marcos Estruturais (Landmarks HTML5):**
    * Utilização exclusiva de `<header>`, `<nav>`, `<main>`, `<section>` (mínimo 3 temáticas), `<article>` (quando justificável) e `<footer>`.
    * Ausência de `<div>` para estruturação de conteúdo que tem equivalente semântico nativo.
  * **Hierarquia e Variedade Semântica de Conteúdo:**
    * Apenas **um** título de topo `<h1>` por documento.
    * Subtítulos hierarquizados por nível sem saltos (`<h2>` para secções, `<h3>` para subsetores).
    * Parágrafos (`<p>`) consistentes.
    * Listas estruturadas (`<ul>`, `<ol>`, `<li>`) e listas aninhadas.
    * Enriquecimento de texto: `<strong>`, `<em>`, `<abbr title="...">`, `<time datetime="...">`, `<blockquote>`, `<q>`, `<del>`, `<ins>`.
    * Entidades de carateres HTML (ex.: `&copy;`, `&mdash;`, `&bull;`).
  * **Tipologias de Hiperligação (`<a>`):**
    1. Âncora interna para salto dentro da página (ex.: `href="#bio"`).
    2. Ligação externa absoluta com boa prática (ex.: `href="https://..." target="_blank" rel="noopener"`).
    3. Ligação de ação direta de correio (ex.: `href="mailto:..."`).
* **Padrões de Qualidade (Boas Práticas):**
  * Conteúdo rico e legível, perfeitamente estruturado mesmo se o CSS for totalmente desativado.
* **Anti-Padrões (A Penalizar):**
  * Proliferação de divisões genéricas com classes do tipo `<div class="seccao-1">`.
  * Saltos na ordem dos cabeçalhos (ex.: passar de `<h1>` diretamente para `<h4>`).
  * Omissão do `meta viewport`, tornando a página não responsiva em navegadores reais.

---

### Marco 4: Arquitetura CSS, Reset e Propriedades Estruturais Explícitas
* **O que é verificado:**
  * Ficheiro externo `css/style.css` limpo, bem indentado e iniciado por comentário de identificação e autoria.
  * **Reset Inicial Universal:** Presença de limpeza das margens e preenchimentos padrão através do seletor universal `*`.
  * **Declaração Pedagógica de Propriedades Estruturais:**
    * Garantir que o aluno declara deliberadamente para os contentores (`body`, `header`, `nav`, `main`, `section`, `footer`):
      * `display` (ex.: `block`).
      * `position` (ex.: `relative`).
      * Dimensões fluidas e restrições elásticas: `width: 100%`, `min-width` (ex.: `320px` para prevenir esmagamento), e `max-width` (ex.: `40rem` ou `640px`–`720px`) centrado com `margin: 0 auto`.
  * Exploração opcional de medidas elásticas de ecrã para alturas (ex.: `min-height: 40vh` ou `100dvh` com fallback `100vh`).
* **Padrões de Qualidade (Boas Práticas):**
  * Caixas com larguras elásticas em percentagem e limites máximos de conforto de leitura.
  * Aplicação de `box-sizing: border-box` no seletor universal para controlo rigoroso do modelo de caixa.
* **Anti-Padrões (A Penalizar):**
  * Larguras fixadas em pixels nos blocos estruturais (ex.: `section { width: 900px; }`).
  * Alturas fixas em blocos com texto (ex.: `height: 300px;`), que cortam o texto quando a janela é redimensionada.
  * Estilos escritos em linha no HTML (`<p style="...">`).

---

### Marco 5: Tipografia Relativa (`rem`/`em`), Escala e Seletores Descendentes
* **O que é verificado:**
  * **Abandono Definitivo do Pixel em Texto:**
    * Dimensão base definida na raiz ou corpo em unidade relativa (`font-size: 1rem;`).
    * Cabeçalhos escalados coerentemente com recurso a `rem` (ex.: escala *Major Third* 1.25: `h1` a `2.44rem`, `h2` a `1.95rem`, `h3` a `1.56rem`).
    * Margens e espaçamentos associados ao texto medidos em `em` ou `rem` (ex.: `margin-bottom: 0.75em`).
    * Entrelinha (`line-height`) explicitamente definida com valores unitless proporcionais (ex.: `1.2` a `1.25` para títulos, `1.6` para texto corrido).
  * **Font Stack com Fallbacks:**
    * Declaração de fontes nativas do sistema ou seguras, terminando obrigatoriamente na categoria genérica (`sans-serif` ou `serif`).
  * **Estatuto do `clamp()` e Funções Matemáticas:**
    * O requisito e padrão base é a escala fixa relativa em `rem`.
    * A utilização de `clamp()` ou `min()`/`max()` com unidades de viewport (`vw`) é valorizada como **bónus de proficiência / maturidade**, mas não é uma exigência obrigatória para a nota máxima no EX1.
  * **Domínio de Seletores Descendentes (Sem Dependência de Classes/IDs):**
    * O aluno deve saber estilizar elementos contextualizados pela sua posição hierárquica na árvore DOM:
      * Estilizar os links e listas do menu através de `nav ul`, `nav li`, `nav a` e `nav a:hover`.
      * Manter ou diferenciar as listas de conteúdo das secções via `section ul` e `section li`.
      * Formatação de citações ou elementos contextuais através de `section blockquote`, `article p`.
* **Padrões de Qualidade (Boas Práticas):**
  * Manter o documento HTML limpo de classes desnecessárias, confiando na cascata e na especificidade dos seletores descendentes.
* **Anti-Padrões (A Penalizar):**
  * Aplicação de tamanhos de texto rígidos em pixels (ex.: `font-size: 18px`).
  * Encher tags semânticas de classes redundantes (ex.: `<h1 class="titulo-h1">`, `<a class="link-menu">`).
  * Omissão da família genérica no final da declaração `font-family`.

---

## 3. Matriz de Classificação (Rubrica Quantitativa — 20 Pontos)

| Marco de Avaliação | Peso | Insuficiente (0–9) | Suficiente / Bom (10–14) | Notável / Excelente (15–20) |
| :--- | :---: | :--- | :--- | :--- |
| **1. Publicação, URL & Nomenclatura** | 15% | URL quebrado, erro 403/404, ficheiro principal sem se chamar `index.html`, pastas com acentos/espaços. | Acessível online, mas ficheiros com ligeiras irregularidades de organização ou caminhos. | URL impecável no `pages.up.pt/~up.../ex1/`, pasta limpa, raiz strictly `index.html`, caminhos relativos corretos. |
| **2. Impressão Visual Mobile** | 15% | Layout parte em ecrãs de telemóvel, scroll horizontal evidente, contraste ilegível, margens inexistentes. | Funcional no telemóvel; leitura legível; pequenos desajustes de respiração visual ou contraste mediano. | Equilíbrio visual apurado; excelentes margens de leitura; contraste WCAG robusto; sem qualquer overflow. |
| **3. Semântica & Estrutura HTML5** | 30% | Falta de Doctype/meta viewport; abuso sistemático de `<div>`; múltiplos `<h1>`; ausência de marcos essenciais. | Página cumpre a base dos marcos (`header`, `main`, etc.); boa hierarquia; variedade textual moderada. | Riqueza semântica exemplar (`article`, `nav`, `abbr`, `time`, `blockquote`), rigor na hierarquia e cabeçalho documental. |
| **4. CSS, Reset & Modelo de Caixa** | 20% | Folha de estilo ausente/desligada; medidas rígidas em pixels (`960px`); sem reset; elementos sobrepostos. | CSS externo a funcionar; reset universal presente; largura fluida com `max-width` e margens centradas. | Declaração deliberada de `display`, `position` e limites elásticos (`min`/`max`/`%`), demonstrando domínio da herança. |
| **5. Tipografia & Seletores Descendentes** | 20% | Uso generalizado de `px` no texto; poluição de classes cosméticas no HTML; ausência de fallbacks de fontes. | Texto medido em `rem`/`em`; fontes com fallbacks; distinção funcional entre `nav a` e links de conteúdo. | Escala tipográfica madura em `rem`; entrelinhas bem calibradas; domínio completo de seletores descendentes. *(Bónus: `clamp()`)* |

---

## 4. Código Boilerplate de Referência (Padrão de Ouro)

Este modelo serve de bitola para a avaliação do docente e pode ser disponibilizado aos estudantes como exemplo de boas práticas de documentação, semântica e estilização sem recurso a classes.

### Ficheiro: `index.html`
```html
<!DOCTYPE html>
<html lang="pt-PT">
  <!--
    ==========================================================================
    WD101 — Exercício 1: Hello Wendy!
    Nome do Aluno: Wendy Testaburger (up202600001)
    Data: Outubro 2026
    Docente: Pedro Amado
    Descrição: Página semântica mobile-first sobre a personagem Wendy.
    ==========================================================================
  -->
  <head>
    <!-- Codificação para suporte universal de carateres e acentuação -->
    <meta charset="UTF-8" />

    <!-- Configuração fundamental para renderização móvel (RWD) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Título descritivo no separador do navegador -->
    <title>Wendy — Alien Earth | Biografia e Exploração</title>

    <!-- Metadados de contexto e autoria -->
    <meta
      name="description"
      content="Exercício de introdução ao design web: perfil biográfico e explorações da personagem Wendy em Alien Earth."
    />
    <meta name="author" content="Wendy Testaburger" />

    <!-- Ligação à folha de estilos CSS externa por caminho relativo -->
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <!-- CABEÇALHO PRINCIPAL DO DOCUMENTO -->
    <header>
      <h1>Wendy &mdash; <em>Alien Earth</em></h1>
      <nav aria-label="Navegação da página">
        <ul>
          <li><a href="#biografia">Biografia</a></li>
          <li><a href="#missoes">Missões</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <!-- CONTEÚDO PRINCIPAL (EXCLUSIVO E NÃO REPETÍVEL) -->
    <main>
      <!-- SECÇÃO 1: BIOGRAFIA -->
      <section id="biografia">
        <h2>Quem é a Wendy?</h2>
        <p>
          Wendy é uma linguista interplanetária e exploradora pioneira na narrativa de
          <strong>Alien Earth</strong>. Destaca-se pelo estudo avançado de semiótica e comunicação não-verbal com ecossistemas desconhecidos.
        </p>

        <!-- Artigo contextual com citação e abreviação -->
        <article>
          <h3>Origens e Percurso Académico</h3>
          <p>
            Nascida em Lisboa, concluiu a sua especialização no
            <abbr title="Instituto Superior de Semiótica Espacial">ISSE</abbr> no
            ano de <time datetime="2042">2042</time>.
          </p>
          <blockquote>
            <p>&ldquo;A capacidade de escuta precede qualquer protocolo de contacto diplomático.&rdquo;</p>
          </blockquote>
        </article>
      </section>

      <!-- SECÇÃO 2: HISTÓRICO DE MISSÕES / APARIÇÕES -->
      <section id="missoes">
        <h2>Registo de Missões</h2>
        <p>
          Principais marcos operacionais no quadrante exterior:
        </p>
        <ul>
          <li>Kepler-186f (Primeiro Contacto Bio-Acústico)</li>
          <li>
            Fases de Exploração Planetária:
            <ol>
              <li>Mapeamento sensorial de atmosfera</li>
              <li>Sinalização ótica de baixa frequência</li>
            </ol>
          </li>
          <li>Expedição de Reconhecimento <del>Setor Ómega</del> <ins>Planeta Alfa</ins></li>
        </ul>
      </section>

      <!-- SECÇÃO 3: LIGAÇÕES E CONTACTO -->
      <section id="contacto">
        <h2>Documentação e Contacto</h2>
        <p>
          Consulte os arquivos históricos detalhados na
          <a href="https://pt.wikipedia.org" target="_blank" rel="noopener">Wikipedia</a>
          ou contacte a equipa da missão através do endereço
          <a href="mailto:wendy@alienearth.org">wendy@alienearth.org</a>.
        </p>
      </section>
    </main>

    <!-- RODAPÉ INSTITUCIONAL -->
    <footer>
      <p>
        &copy; 2026 Wendy Testaburger &bull; FBAUP Web Design 101. Exercício exclusivamente pedagógico e académico.
      </p>
    </footer>
  </body>
</html>
```

---

### Ficheiro: `css/style.css`
```css
/* ==========================================================================
   WD101 — Exercício 1: Hello Wendy! (Folha de Estilos de Referência)
   Nome do Aluno: Wendy Testaburger (up202600001)
   Data: Outubro 2026
   Abordagem: Mobile First, unidades relativas (REM/EM), sem dependência de classes.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. RESET UNIVERSAL & BOX MODELING PREVISÍVEL
   Elimina os espaçamentos padrão imprevisíveis dos navegadores.
   -------------------------------------------------------------------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Previne que o padding aumente o tamanho das caixas */
}

/* --------------------------------------------------------------------------
   2. BASE DO DOCUMENTO (HTML & BODY)
   -------------------------------------------------------------------------- */
html {
  -webkit-text-size-adjust: 100%;
}

body {
  /* Declaração explícita de display e posicionamento */
  display: block;
  position: relative;

  /* Restrições dimensionais do canvas */
  width: 100%;
  min-width: 20rem; /* ~320px: previne colapso total em ecrãs estreitos */
  min-height: 100vh;
  min-height: 100dvh; /* Viewport dinâmico moderno para navegadores móveis */

  /* Tipografia base escalável e paleta com elevado contraste */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;       /* 1rem = 16px por padrão, respeita a configuração do utilizador */
  line-height: 1.6;      /* Entrelinha confortável para leitura longa */
  color: #111111;        /* Texto neutro de elevado contraste */
  background-color: #fafafa; /* Fundo calmo e confortável */
}

/* --------------------------------------------------------------------------
   3. CONTENTORES ESTRUTURAIS (LANDMARKS HTML5)
   Centrados, fluidos e com resguardo lateral para mobile.
   -------------------------------------------------------------------------- */
header,
main,
footer {
  display: block;
  position: relative;
  width: 100%;
  max-width: 42rem;      /* ~672px: largura ótima para comprimento de linha de leitura */
  margin: 0 auto;        /* Centra o bloco na horizontal em ecrãs largos */
  padding: 1.25rem 1rem; /* Resguardo lateral de segurança para nunca colar ao ecrã */
}

header {
  border-bottom: 1px solid #e0e0e0;
}

footer {
  border-top: 1px solid #e0e0e0;
  margin-top: 2.5rem;
  font-size: 0.875rem;
  color: #555555;
}

/* --------------------------------------------------------------------------
   4. NAVEGAÇÃO VERTICAL (MOBILE-FIRST) COM SELETORES DESCENDENTES
   Estilização pura de elementos de navegação sem necessidade de classes.
   -------------------------------------------------------------------------- */
nav {
  display: block;
  position: relative;
  margin-top: 1rem;
}

nav ul {
  display: block;
  list-style: none; /* Remove os marcadores apenas na lista da navegação */
}

nav li {
  display: block;
  margin-bottom: 0.5rem;
}

nav a {
  display: inline-block;
  color: #0b57d0;
  text-decoration: none;
  font-weight: 500;
}

nav a:hover,
nav a:focus {
  text-decoration: underline;
}

/* --------------------------------------------------------------------------
   5. SECÇÕES & ARTIGOS
   -------------------------------------------------------------------------- */
section {
  display: block;
  position: relative;
  width: 100%;
  margin-top: 2rem;
}

article {
  display: block;
  position: relative;
  width: 100%;
  margin-top: 1.25rem;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
}

/* --------------------------------------------------------------------------
   6. HIERARQUIA TIPOGRÁFICA (ESCALA RELATIVA EM REM / EM)
   Abordagem Base do EX1: Escala proporcional tipo Major Third (1.25)
   -------------------------------------------------------------------------- */
h1 {
  /* Tamanho de base da escala: ~2.44rem (1.25^4) */
  font-size: 2.44rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  color: #000000;

  /* NOTA PEDAGÓGICA (Técnica avançada para fases posteriores ou alunos com RWD prévio):
     O clamp() permite fluidificar sem breakpoints. Mantido aqui como referência de futuro:
     font-size: clamp(1.75rem, 1.25rem + 2.5vw, 2.5rem); */
}

h2 {
  /* Tamanho de base: ~1.95rem (1.25^3) */
  font-size: 1.95rem;
  line-height: 1.25;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;

  /* Opção com clamp() (avançada):
     font-size: clamp(1.35rem, 1.1rem + 1.2vw, 1.95rem); */
}

h3 {
  /* Tamanho de base: ~1.56rem (1.25^2) */
  font-size: 1.56rem;
  line-height: 1.3;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #2b2b2b;
}

p {
  font-size: 1rem;
  margin-bottom: 1em; /* Margem proporcional à própria dimensão do texto */
}

/* --------------------------------------------------------------------------
   7. FORMATAÇÃO SEMÂNTICA DE TEXTO E CITAÇÕES
   -------------------------------------------------------------------------- */
blockquote {
  display: block;
  margin: 1.25rem 0;
  padding-left: 1rem;
  border-left: 3px solid #0b57d0;
  font-style: italic;
  color: #333333;
}

/* Listas dentro do conteúdo das secções mantêm marcadores legíveis */
section ul,
section ol {
  display: block;
  margin: 1rem 0 1rem 1.5rem;
}

section li {
  margin-bottom: 0.35rem;
}

/* Hiperligações dentro do texto corrido das secções */
section a {
  color: #0b57d0;
  text-decoration: underline;
}

section a:hover {
  color: #002d7a;
}
```

---

## 5. Checklist de Auto-Avaliação para os Estudantes

Esta folha de controlo deve ser fornecida aos alunos no Moodle ou no sumário da aula para ser verificada ponto por ponto antes do envio para o servidor e registo na folha de cálculo.

```markdown
### 📋 Checklist de Auto-Avaliação — Exercício 1 (*Hello Wendy!*)

#### 🌐 1. Publicação e Nomenclatura no Servidor
- [ ] O ficheiro principal da página chama-se rigorosamente `index.html` (em minúsculas)?
- [ ] O teu endereço abre no browser em `https://pages.up.pt/~o_teu_up/ex1/` sem dar erro 403, 404 e sem precisares de escrever o nome do ficheiro à frente?
- [ ] Todas as tuas pastas e ficheiros têm nomes apenas com letras minúsculas, sem espaços, acentos ou cedilhas?
- [ ] A folha de estilos está guardada dentro da pasta `css/` com o nome `style.css`?

#### 📱 2. Visualização Móvel (Mobile First)
- [ ] Abriste as Ferramentas de Programação do navegador (Inspect/DevTools) e testaste a página na largura de um telemóvel (~360px a 390px)?
- [ ] O conteúdo tem resguardo lateral (margens/padding) e o texto nunca toca nas bordas do ecrã?
- [ ] O layout não tem barra de deslocamento horizontal (não desliza para os lados)?
- [ ] O texto tem bom contraste cromático e lê-se com facilidade contra a cor de fundo?

#### 🧱 3. Estrutura e Semântica do Código HTML
- [ ] O documento começa com `<!DOCTYPE html>` e a tag `<html lang="pt-PT">`?
- [ ] Incluíste um comentário de autoria logo no início com o teu Nome, Número Mecanográfico e Data?
- [ ] A tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` está dentro do `<head>`?
- [ ] O `<title>` está personalizado e a `<meta name="description">` preenchida?
- [ ] O CSS está corretamente ligado através de `<link rel="stylesheet" href="css/style.css">`?
- [ ] Estruturaste o documento com os marcos semânticos do HTML5: `<header>`, `<nav>`, `<main>`, `<section>` (mínimo 3) e `<footer>`?
- [ ] Evitaste o recurso a tags genéricas `<div>` onde havia uma alternativa semântica?
- [ ] Tens apenas UM título de nível `<h1>` na página e organizaste os restantes como `<h2>` e `<h3>` sem saltar níveis?
- [ ] Exploraste elementos de texto variados: `<p>`, `<ul>`, `<ol>`, `<strong>`, `<em>`, `<abbr>`, `<time>`, `<blockquote>`?
- [ ] Os três tipos de hiperligação funcionam (âncora interna `#`, link externo `https://` e email `mailto:`)?

#### 🎨 4. Estilos e Tipografia Relativa em CSS
- [ ] O ficheiro `style.css` tem um comentário com o teu nome e data no topo?
- [ ] Fizeste o reset de margens inicial com o seletor universal `*`?
- [ ] Declaraste `display`, `position` e dimensões com limites elásticos (`width: 100%`, `min-width`, `max-width`, `margin: 0 auto`) nos blocos principais?
- [ ] **Medidas Tipográficas:** Definiste o tamanho do texto em medidas relativas (`rem` ou `em`) e **não usaste píxeis (`px`)** nas fontes?
  *(Nota: Se usaste a função `clamp()`, ótimo sinal de curiosidade! Mas lembra-te que a escala base pedida para esta primeira fase é baseada em `rem`).*
- [ ] Declaraste a entrelinha (`line-height`) de forma proporcional para o texto e para os títulos?
- [ ] Criaste uma lista de fontes com fallbacks (`font-family`) terminando sempre em `sans-serif` ou `serif`?
- [ ] Conseguiste estilizar o menu e os elementos de texto usando **seletores descendentes** (ex.: `nav a`, `section ul`, `header h1`) mantendo o teu HTML limpo e sem excesso de classes?
```