# Bulbe · Apresentação do novo fluxo

Apresentação acadêmica do Squad 03. Roteiro com 6 etapas e 19 momentos, com demonstração HTML interativa do fluxo V2 dentro de uma moldura de iPhone SE (375 × 667 pixels CSS).

Ordem: Enzo (HU01), Rafael (HU02), Rhuan (HU03), Igor (HU04), Márcio (HU05), Caio (HU06).

## Apresentar

- Use Anterior/Próxima tela ou as setas do teclado. O roteiro muda a tela e rola até o trecho relevante automaticamente.
- Cada integrante tem botões de acesso direto às suas telas.
- Abra “Apoio para apresentar” para consultar uma fala sugerida e a história de referência.
- O celular é navegável. Após explorar outra tela, use “Retomar a tela do roteiro”.
- A tecla F ou o botão superior ativa tela cheia quando o navegador permite.
- Links com hash preservam a etapa e o momento ao atualizar a página.

## Executar localmente

```sh
python3 -m http.server 8773
```

Abra `http://localhost:8773`. Servir por HTTP é necessário para a comunicação segura entre a apresentação e o app.

## Origem e limites

Recriação HTML do fluxo V2 revisado no [Figma](https://www.figma.com/design/2zvEvnBGN11Wklv6yLXfpg), com textos baseados nas [histórias do projeto](https://github.com/enzokhalil/202602-projeto1-turmaB-squad03/tree/main/historias). Mantém a logo fornecida, tipografia Poppins no app, cores, cabeçalhos e ilustrações vetoriais do fluxo.

Todos os dados são fictícios. Pagamentos, documentos e canais de contato são demonstrações: não realizam transações ou enviam mensagens. A apresentação descreve hipóteses de melhoria, não resultados medidos. Estados alternativos são cenários demonstrativos independentes, não dados simultâneos do mesmo cliente.

Sem dependências de execução, fontes e logo locais. Fontes locais com licenças em `assets/fonts/`. A publicação usa GitHub Pages na branch `main`, pasta raiz. O projeto original do grupo permanece separado.

## Arquivos

- `index.html`, `presentation.css`, `presentation.js`: apresentação, roteiro e controles.
- `app/`: aplicativo demonstrativo com navegação, estados, diálogos e rolagem.
- `assets/`: logo original e fontes locais.

## Referência tipográfica

A família, os pesos e a escala do app foram conferidos nas camadas do Figma original Bulbe. Veja [medidas e fontes verificadas](TYPOGRAPHY.md).
