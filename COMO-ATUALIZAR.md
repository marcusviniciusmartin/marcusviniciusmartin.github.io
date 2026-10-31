# Como atualizar o portfólio

Guia rápido para manter o site sem precisar lembrar como ele foi montado. Tudo fica em `index.html` e na pasta `assets/`. Use qualquer editor de texto (o VS Code é gratuito) e procure os trechos pelo nome indicado aqui com Ctrl+F.

> Regra de conteúdo: só entra no site o que já foi publicado em algum lugar (blog da empresa, premiações, artigo). Projetos não publicados aparecem com resultados qualitativos, sem números internos, volumes, clientes ou valores em R$.

---

## Trocas rápidas

| O que mudar | Onde procurar (Ctrl+F) | Observação |
|---|---|---|
| Frase de status ("Aberto a conversas…") | `STATUS PROFISSIONAL` e `STATUS:` | Aparece duas vezes: executivo e gamificado. |
| Foto do topo | `assets/img/marcus-retrato.webp` | Troque o arquivo mantendo o nome. |
| Currículo em PDF | `assets/marcus-martin-curriculo.pdf` | Troque o arquivo mantendo o nome. Falta confirmar a data de início do estágio. |
| Últimas edições da newsletter | `Últimas edições` e `ÚLTIMOS EPISÓDIOS` | Três links em cada modo. |
| Recomendação | `RECOMENDAÇÃO` | Aparece duas vezes: executivo e gamificado. |
| E-mail de contato | `E-MAIL: descomente` | Tire os sinais `<!--` e `-->` e troque `SEU-EMAIL`. |
| Endereço do site (se mudar) | `marcusviniciusmartin.github.io` | Aparece nas tags de compartilhamento do topo do arquivo. |

---

## Novo projeto na Apetit

O mapa da Apetit tem uma região reservada: a **11, "Território desconhecido"** (a área central escura). É ela que recebe o próximo projeto.

1. **Registre a região.** Em `atlas-config`, na linha do `"slot": 11`, troque `id`, `nome`, `projeto` e `cor`, e apague `"secreto": true`.
2. **Crie a lâmina.** Copie uma lâmina inteira de um projeto parecido, do comentário `INÍCIO LÂMINA` até `FIM LÂMINA`, e cole antes da lâmina 98. Troque:
   - o `id` da `<section>`, igual ao `id` do passo 1;
   - os atributos `data-card-titulo`, `data-card-resumo`, `data-card-destaque` e `data-competencias`;
   - as cores em `style` (`--t-accent`, `--t-region` etc.) e o tema da moldura em `data-moldura`;
   - os textos das duas views: `view-exec` (STAR) e `view-game` (desafio, missões, loot).
3. **Cena em pixel art (opcional).** Uma imagem 384×160 em `assets/cenas/<id>.png`. Sem ela, o projeto funciona normalmente; só fica sem a cena no topo.
4. **Destaque (opcional).** Para virar card grande no executivo, inclua o `id` em `"destaques"` (máximo de 4, o layout foi desenhado para 4).

O executivo, o mapa, o relatório e a navegação se atualizam sozinhos a partir desses dados.

## Nova empresa (expansão do mapa)

Uma nova empresa vira um novo continente, e isso pede arte nova do mapa e o desenho das áreas clicáveis de cada região. É o único tipo de atualização que vale fazer com ajuda (de um desenvolvedor ou do Claude), porque as áreas do mapa são polígonos ligados à imagem.

## Novo prêmio

1. Coloque o logo em `assets/badges/` (PNG, de preferência quadrado).
2. Em `LÂMINA 04`, copie um bloco `class="badge"` e troque o logo, o título (`b-title`) e o case (`b-sub`).
3. Se o prêmio for de um projeto, copie também o selo dentro da lâmina do projeto (procure `class="badge"` dentro dela).
4. Atualize a contagem "5 prêmios" no topo do executivo, se mudar.
5. A Sala de Troféus do modo gamificado é uma imagem com quadros posicionados: um troféu novo nela também pede ajuda.

**Pendente:** o resultado do ECO Amcham 2026 ainda não saiu. Quando sair, ele entra como novo prêmio.

---

## Estilos (Tailwind)

O visual usa classes do Tailwind já compiladas em `assets/css/tailwind.css`. Trocar textos, imagens e links não exige nada. Só se você usar uma classe do Tailwind que ainda não exista no site (por exemplo, um `mt-7` novo), recompile com o Node instalado, a partir da pasta do projeto:

```
npx tailwindcss@3.4.16 -c _build/tailwind.config.js -i _build/in.css -o assets/css/tailwind.css --minify
```

## Antes de publicar uma atualização

- Abra o `index.html` no navegador e teste os dois modos (botão no topo).
- Teste no celular, ou com a janela estreita.
- Releia a regra de conteúdo do início deste guia.

## Créditos que precisam continuar no rodapé

Pixel art do personagem, da Sala de Troféus, dos ícones e das cenas: adaptada do pack **Modern Interiors**, de LimeZu. A licença permite usar com crédito, mas não permite redistribuir nem revender os arquivos do pack.
