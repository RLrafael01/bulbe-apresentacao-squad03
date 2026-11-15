# Tipografia — referência Bulbe

Conferência feita em 15/11/2026 no arquivo original **Bulbe :: IBMEC**, pelas propriedades das camadas de texto (não por semelhança visual).

Fonte: [Figma original — Faturas](https://www.figma.com/design/j70T2O7tkWCyMWkHKcAK7R/Bulbe----IBMEC?node-id=15598-3954).

| Papel observado | Estilo original | Tamanho / entrelinha | Peso |
| --- | --- | --- | --- |
| Valor monetário em destaque | Bulbe :: Poppins/Display/Display md/Semibold | 36 / 44 px | 600 |
| Botão Pagar com PIX | Bulbe :: Poppins/Texto/Text md/Semibold | 16 / 24 px | 600 |
| Mês da fatura | Bulbe :: Poppins/Texto/Text sm/Semibold | 14 / 20 px | 600 |
| Data de vencimento | Bulbe :: Poppins/Texto/Text xs/Semibold | 12 / 18 px | 600 |
| Menu inferior | Bulbe :: Poppins/Texto/Text xs/Medium | 12 / 18 px | 500 |

Camadas verificadas: valor `15598:49308`, botão `15598:4037`, menu `15598:49823`. As amostras de mês e vencimento pertencem ao card da tela `15598:3954`.

## Aplicação

- O app utiliza Poppins local, com pesos reais 400, 500, 600 e 700, sem simular negrito.
- Valores principais: 36/44 semibold, tracking -2%, como no original.
- Botões: 16/24 semibold; textos comuns: 14/20; rótulos e auxiliares: 12/18.
- Menu inferior: 12/18 medium. Removidos textos de navegação de 9–11 px.
- Os títulos novos do fluxo mantêm sua composição de cabeçalho em 28/34, com quebra de linha para títulos longos. São uma adaptação do projeto, não uma cópia de um cabeçalho que exista no original.
- A apresentação externa também utiliza Poppins; títulos maiores e escaláveis são uma adaptação para projeção. O CSS do app permanece separado, sem herdar esses tamanhos.
- A moldura do telefone reduz toda a tela proporcionalmente, mantendo a relação entre os elementos dentro do viewport de 375 × 667 px.
