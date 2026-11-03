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