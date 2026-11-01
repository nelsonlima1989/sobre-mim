# Portfólio Pessoal — Nelson Lima da Costa Junior

> Página pessoal de apresentação profissional, desenvolvida com HTML5, CSS3 e JavaScript puro, sem frameworks.

---

## 📋 Descrição

Este projeto é um portfólio pessoal responsivo e acessível, criado para apresentar minha trajetória profissional, experiências, projetos, tecnologias e formação. O design é moderno, limpo e compatível com GitHub Pages.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|-----------|-------------|
| **Estrutura** | HTML5 semântico |
| **Estilos** | CSS3 (Custom Properties, Flexbox, Grid, Mobile-First) |
| **Interatividade** | JavaScript ES6+ (Vanilla) |
| **Fontes** | Inter (Google Fonts) |
| **Ícones** | SVG inline |
| **Deploy** | GitHub Pages |

---

## ✨ Funcionalidades Implementadas

- ✅ **HTML Semântico** — Estrutura acessível com landmarks ARIA (`header`, `main`, `nav`, `section`, `article`, `footer`, `time`)
- ✅ **Design Responsivo** — Mobile-first, breakpoints em 360px, 480px e 768px
- ✅ **Tema Claro/Escuro** — Suporte nativo a `prefers-color-scheme` (detecção automática do sistema)
- ✅ **Acessibilidade** — Contraste WCAG AA, foco visível, navegação por teclado, `prefers-reduced-motion`, labels ARIA
- ✅ **Navegação Suave** — Scroll suave nativo com fallback JS para links internos
- ✅ **Header Fixo** — Com efeito de sombra ao rolar a página
- ✅ **Performance** — Sem dependências externas, CSS/JS mínimos, fonte com `preconnect`
- ✅ **Print Friendly** — Estilos otimizados para impressão

## 🔮 Funcionalidades Planejadas (Próximas Etapas)

- [ ] **Alternância manual de tema** — Botão light/dark no header com persistência em `localStorage`
- [ ] **Menu mobile (hambúrguer)** — Navegação colapsável para telas ≤ 768px
- [ ] **Animações de entrada** — `IntersectionObserver` para fade-in/slide-up nas seções
- [ ] **Favicon real** — Gerar favicons a partir de identidade visual própria
- [ ] **Meta tags Open Graph** — Para compartilhamento em redes sociais
- [ ] **Sitemap.xml / robots.txt** — SEO técnico
- [ ] **Validação W3C** — HTML e CSS válidos

---

## 📁 Estrutura de Arquivos

```
sobre-mim/
├── index.html          # Página principal (HTML5 semântico)
├── style.css           # Estilos completos + responsividade + temas
├── script.js           # Interações (scroll suave, header scroll, base para próximas etapas)
├── README.md           # Esta documentação
├── PROMPTS.md          # Registro cronológico dos prompts enviados ao agente
├── assets/
│   ├── favicon.ico     # Favicon tradicional (placeholder)
│   └── favicon.svg     # Favicon vetorial moderno (placeholder)
└── .gitignore          # Arquivos ignorados pelo Git (opcional)
```

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente no navegador
```bash
# Navegue até o diretório do projeto
cd sobre-mim

# Abra o index.html no navegador padrão
# Linux:
xdg-open index.html

# macOS:
open index.html

# Windows:
start index.html
```

### Opção 2: Servidor local (recomendado para desenvolvimento)
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

## 🌐 Publicação no GitHub Pages (Não Implementado)

O projeto está preparado para deploy no GitHub Pages (caminhos relativos, `index.html` na raiz), mas **ainda não foi publicado**.

Quando publicado, o processo será:
1. Faça push do repositório para o GitHub
2. Vá em **Settings > Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Branch: `main` / `root`
5. Clique em **Save**
6. O site estará disponível em `https://nelsonlima1989.github.io/sobre-mim/`

---

## ♿ Acessibilidade

- **Contraste**: Cores testadas para WCAG AA (4.5:1 texto normal, 3:1 texto grande)
- **Navegação por teclado**: Todos os elementos interativos são focáveis
- **Foco visível**: Outline claro em links, botões e elementos interativos
- **Landmarks ARIA**: `header`, `main`, `nav`, `section`, `footer`, `article`
- **Labels**: `aria-label` em navegação, links externos, listas
- **Redução de movimento**: Respeita `prefers-reduced-motion`
- **Semântica**: Tags HTML5 apropriadas (`time`, `address`, `article`, etc.)

---

## 🎨 Personalização

### Cores (CSS Custom Properties)
Edite as variáveis em `:root` no `style.css`:

```css
:root {
    --color-primary: #2563eb;      /* Cor principal */
    --color-bg: #fafafa;           /* Fundo principal */
    --color-text: #1f2937;         /* Texto principal */
    /* ... demais variáveis */
}
```

### Conteúdo
Edite o `index.html` para alterar:
- Nome e título (hero)
- Textos das seções
- Experiências, projetos, formação
- Links de contato (GitHub, LinkedIn)

### Favicon
Substitua os arquivos em `assets/`:
- `favicon.ico` (32x32, 16x16)
- `favicon.svg` (vetorial, qualquer tamanho)

---

## 📱 Responsividade

| Breakpoint | Dispositivo | Ajustes Principais |
|------------|-------------|-------------------|
| `> 768px` | Desktop | Layout completo, grid de 2 colunas |
| `≤ 768px` | Tablet | Grid de 1 coluna, espaçamentos reduzidos |
| `≤ 480px` | Mobile | Tipografia menor, botões full-width, padding reduzido |

---

## 🔧 Próximas Etapas (Roadmap)

- [ ] **Alternância de tema** — Botão light/dark com persistência em `localStorage`
- [ ] **Menu mobile** — Hamburger menu para navegação em telas pequenas
- [ ] **Animações de entrada** — `IntersectionObserver` para fade-in/slide-up
- [ ] **Favicon real** — Gerar favicons a partir de logo/identidade visual
- [ ] **Meta tags Open Graph** — Para compartilhamento em redes sociais
- [ ] **Sitemap.xml / robots.txt** — SEO técnico
- [ ] **Validação W3C** — HTML e CSS válidos

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio.

---

## 👤 Autor

**Nelson Lima da Costa Junior**  
Desenvolvedor Full Stack | C#/.NET • Node.js • TypeScript • React • SQL

- GitHub: [@nelsonlima1989](https://github.com/nelsonlima1989)
- LinkedIn: [@nelsonlima1989](https://www.linkedin.com/in/nelsonlima1989/)

---

> **Última atualização:** Novembro 2026