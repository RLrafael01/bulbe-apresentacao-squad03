# Bulbe · Apresentação do novo fluxo

Apresentação acadêmica do Squad 03. Roteiro com 6 etapas e 19 momentos, com demonstração HTML interativa do fluxo V2 dentro de uma moldura de iPhone SE (375 × 667 pixels CSS).

Ordem: Enzo (HU01), Rafael (HU02), Rhuan (HU03), Igor (HU04), Márcio (HU05), Caio (HU06).

## Apresentar

- Use Anterior/Próxima tela ou as setas do teclado. O roteiro muda a tela e rola até o trecho relevante automaticamente.
- Cada integrante tem botões de acesso direto às suas telas.
- Abra “Apoio para apresentar” para consultar uma fala sugerida e a história de referência.
- Ao passar do ponto de rolagem, a mesma logo desliza por completo para a direita enquanto menu e perfil dão lugar à seta de voltar, mesmo se a rolagem parar. Ao voltar perto do topo, o movimento se inverte. A preferência de movimento reduzido desativa a animação.
- A seta usa o percurso local do app; acessos diretos usam a tela da área ou abrem o menu quando já estão na raiz.
- O celular é navegável: clicar em outra tela atualiza automaticamente o integrante, a fala e o progresso. A rolagem acompanha os trechos de Economia, Contrato, Serviço, Duas contas e Atendimento.
- Os comandos do roteiro continuam guiando o app, sem a sincronização manual fechar diálogos ou reposicionar a rolagem.
- Indicações recebe uma explicação complementar, fora das seis user stories; “Voltar ao roteiro” retoma o último momento.
- Na etapa do Enzo, “Observação visual · menu e identidade” explica discretamente as escolhas de navegação e estilo.
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
