# Portfólio Pessoal — Nelson Lima da Costa Junior

> Página pessoal de apresentação profissional, desenvolvida com HTML5, CSS3 e JavaScript puro, sem frameworks.

---

## 📋 Descrição

Portfólio pessoal de página única, responsivo e com foco em acessibilidade, para apresentar trajetória profissional, experiência, projetos, tecnologias e formação. Os caminhos são relativos, o que o deixa pronto para ser servido por qualquer hospedagem estática (incluindo GitHub Pages — **ainda não publicado**).

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|-----------|-------------|
| **Estrutura** | HTML5 semântico |
| **Estilos** | CSS3 (Custom Properties, Flexbox, Grid, `clamp()`, abordagem mobile-first) |
| **Interatividade** | JavaScript ES6+ (Vanilla), sem bibliotecas |
| **Fontes** | Inter, carregada do Google Fonts (único recurso externo) com `font-display: swap` |
| **Ícones** | SVG inline |

---

## ✨ Funcionalidades Implementadas

- ✅ **HTML semântico** — `header`, `nav`, `main`, `section`, `article`, `footer`, `time`, títulos hierárquicos (um único `h1`)
- ✅ **Design responsivo mobile-first** — estilos base para telas pequenas e ajustes com `min-width` em 480px e 768px; tipografia fluida com `clamp()`
- ✅ **Menu de navegação recolhível em telas < 768px** — botão com `aria-expanded`/`aria-controls`; fecha com `Esc` (devolvendo o foco ao botão), ao escolher um link, ao clicar fora ou ao sair do foco; links em linha a partir de 768px. Sem JavaScript, os links permanecem visíveis e quebram de linha
- ✅ **Tema claro/escuro automático** — segue `prefers-color-scheme` do sistema (não há botão de alternância)
- ✅ **Acessibilidade**
  - Link "Pular para o conteúdo"
  - Foco visível (`:focus-visible`) e navegação por teclado
  - Alvos de toque de pelo menos 44px nos botões de menu/contato e nos links do menu mobile
  - `aria-current` no link da seção visível
  - `prefers-reduced-motion` respeitado (scroll suave só quando permitido)
  - Cores com contraste calculado ≥ 4,5:1 para texto e ≥ 3:1 para foco/bordas, nos dois temas (verificado por script — ver "Verificações realizadas")
- ✅ **Navegação suave** — `scroll-behavior` e `scroll-padding-top` em CSS, de modo que o título da seção não fica sob o header fixo
- ✅ **Header fixo** — com sombra ao rolar a página
- ✅ **Links externos seguros** — GitHub e LinkedIn com `target="_blank"` e `rel="noopener noreferrer"`
- ✅ **Favicon** — `assets/favicon.svg` (vetorial) e `assets/favicon.ico` válido (16, 32 e 48 px)
- ✅ **Impressão** — oculta navegação e rodapé e força tema claro

## 🔮 Funcionalidades Planejadas

- [ ] **Alternância manual de tema** — botão claro/escuro com persistência em `localStorage` (o CSS já aceita `data-theme`)
- [ ] **Animações de entrada** — `IntersectionObserver` para fade-in/slide-up nas seções
- [ ] **Meta tags Open Graph** — para compartilhamento em redes sociais
- [ ] **`sitemap.xml` / `robots.txt`** — SEO técnico
- [ ] **Validação W3C** — HTML e CSS
- [ ] **Publicação no GitHub Pages**
- [ ] **Licença** — escolher e adicionar um arquivo `LICENSE`

---

## 📁 Estrutura de Arquivos

```
sobre-mim/
├── index.html          # Página principal (HTML5 semântico)
├── style.css           # Estilos, temas claro/escuro e responsividade
├── script.js           # Menu mobile, link ativo na navegação, sombra do header
├── README.md           # Esta documentação
├── PROMPTS.md          # Registro cronológico dos prompts enviados aos agentes
└── assets/
    ├── favicon.ico     # Favicon tradicional (16, 32 e 48 px)
    └── favicon.svg     # Favicon vetorial
```

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente no navegador
```bash
cd sobre-mim

# Linux
xdg-open index.html
# macOS
open index.html
# Windows
start index.html
```

### Opção 2: Servidor local
```bash
# Com Python 3
python3 -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com PHP
php -S localhost:8000
```
Acesse `http://localhost:8000` no navegador.

---

## 🌐 Publicação (GitHub Pages) — não realizada

O projeto usa caminhos relativos e tem `index.html` na raiz, mas **ainda não foi publicado**. Quando for:

1. Faça push do repositório para o GitHub
2. Vá em **Settings > Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Branch: `main` / `root`, e clique em **Save**
5. O endereço esperado é `https://nelsonlima1989.github.io/sobre-mim/`

---

## ♿ Acessibilidade

- **Contraste**: pares texto/fundo calculados para os dois temas (≥ 4,5:1 para texto; ≥ 3:1 para foco e bordas de componentes)
- **Teclado**: todos os elementos interativos são focáveis; `Esc` fecha o menu mobile; link para pular ao conteúdo
- **Foco visível**: contorno em links e botões
- **Landmarks**: `header`, `nav`, `main`, `footer`; seções ligadas aos seus títulos via `aria-labelledby`
- **ARIA**: `aria-expanded`/`aria-controls` no menu, `aria-current` na seção ativa, rótulos em listas e em links externos ("abre em nova aba")
- **Movimento reduzido**: respeita `prefers-reduced-motion`

> Uma avaliação com leitor de tela e uma auditoria automatizada (Lighthouse/axe) ainda **não foram realizadas**.

---

## 🎨 Personalização

### Cores (CSS Custom Properties)
Edite as variáveis no início do `style.css`. Os valores do tema escuro aparecem duas vezes (no `@media (prefers-color-scheme: dark)` e em `[data-theme="dark"]`) e devem ser mantidos iguais.

```css
:root {
    --color-primary: #2563eb;      /* Cor principal */
    --color-bg: #fafafa;           /* Fundo principal */
    --color-text: #1f2937;         /* Texto principal */
    /* ... demais variáveis */
}
```

Ao trocar cores, confira o contraste (mínimo 4,5:1 para texto).

### Conteúdo
Edite o `index.html` para alterar nome, textos das seções, experiências, projetos, formação e links de contato.

### Favicon
Substitua os arquivos em `assets/` (`favicon.svg` e `favicon.ico` com 16/32/48 px).

---

## 📱 Responsividade

Abordagem mobile-first: os estilos base valem para telas pequenas e cada breakpoint só acrescenta ajustes.

| Largura | Comportamento |
|---------|---------------|
| base (< 480px) | Uma coluna, botões empilhados (largura total até 280px), menu recolhível |
| `≥ 480px` | Botões do hero lado a lado |
| `≥ 768px` | Navegação em linha, grades de cards em colunas automáticas, mais espaçamento |

---

## 🧪 Verificações realizadas

Executadas por scripts locais (sem instalar dependências):

- Sintaxe do `script.js` (`node --check`)
- Cálculo de contraste dos pares de cores nos temas claro e escuro
- Consistência do HTML: IDs únicos, âncoras internas com destino, `aria-controls`/`aria-labelledby` válidos, arquivos referenciados existentes
- CSS: chaves balanceadas e todas as variáveis `var()` definidas
- Lógica do menu mobile (abrir, fechar, `Esc`, clique fora, saída do foco, mudança de breakpoint) com DOM simulado
- Favicon `.ico` reconhecido como ícone válido de múltiplas resoluções

**Ainda não verificado:** renderização em navegador real (larguras 320–1440px, ausência de rolagem horizontal), navegação por teclado ponta a ponta, console do navegador, leitor de tela e validação W3C.

---

## 📄 Licença

Ainda não definida: o repositório não possui arquivo `LICENSE`.

---

## 👤 Autor

**Nelson Lima da Costa Junior**  
Desenvolvedor Full Stack | C#/.NET • Node.js • TypeScript • React • SQL

- GitHub: [@nelsonlima1989](https://github.com/nelsonlima1989)
- LinkedIn: [@nelsonlima1989](https://www.linkedin.com/in/nelsonlima1989/)

---

> **Última atualização:** Novembro 2026
