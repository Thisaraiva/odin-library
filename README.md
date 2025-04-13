# odin-library
A small library application.

# Configuração Inicial do Projeto

Se você ainda não o fez, configure um repositório Git para o seu projeto com esqueletos de arquivos HTML/CSS e JS. A partir de agora, presumiremos que você já tenha feito isso.

## Estrutura de Dados e Construtor de Livros

Todos os seus objetos de livro serão armazenados em um array, então você precisará de um construtor para livros. Em seguida, adicione uma função separada ao script (não dentro do construtor) que possa receber alguns argumentos, criar um livro a partir desses argumentos e armazenar o novo objeto de livro em um array. Além disso, todos os seus objetos de livro devem ter um identificador único `id`, que pode ser gerado usando `crypto.randomUUID()`. Isso garante que cada livro tenha um identificador único e estável, evitando problemas quando os livros são removidos ou reorganizados. Seu código deve ser semelhante a este (estamos mostrando apenas um esqueleto básico sem parâmetros de função):

```javascript
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
} ```

## Exibição dos Livros

Escreva uma função que percorra o array e exiba cada livro na página. Você pode exibi-los em algum tipo de tabela ou cada um em seu próprio "cartão". Pode ser útil, por enquanto, adicionar manualmente alguns livros ao seu array para que você possa ver a exibição.

Embora possa parecer mais fácil manipular a exibição dos livros diretamente em vez de armazenar os dados em um array primeiro, daqui em diante, você deve pensar nessas responsabilidades separadamente. Abordaremos esse conceito mais profundamente posteriormente, mas, ao desenvolver aplicativos, queremos a flexibilidade de recriar elementos (como nossa biblioteca e seus livros) de várias maneiras usando os mesmos dados subjacentes. Portanto, considere a lógica de exibição dos livros para o usuário e as estruturas dos livros que contêm todas as informações como entidades distintas. Essa separação aumentará a manutenibilidade e a escalabilidade do seu código.

## Adição de Novos Livros

Adicione um botão "Novo Livro" que exiba um formulário permitindo que os usuários insiram os detalhes do novo livro e o adicionem à biblioteca: autor, título, número de páginas, se foi lido e qualquer outra coisa que você queira. A forma como você deseja exibir este formulário é com você. Por exemplo, você pode querer que um formulário seja exibido em uma barra lateral ou explorar `<dialog>` e modais usando a tag `<dialog>`. Seja como for, você provavelmente encontrará um problema em que o envio do seu formulário não fará o que você espera. Isso ocorre porque a `<input type="submit">` tenta enviar os dados para um servidor por padrão. É aqui que `event.preventDefault();` será útil. Confira a [documentação de event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) e veja como você pode resolver esse problema!

## Remoção de Livros

Adicione um botão na exibição de cada livro para removê-lo da biblioteca.
Você precisará associar seus elementos DOM aos objetos de livro de alguma forma. Uma solução fácil é atribuir a eles um `data-*` atributo que corresponda à exclusividade `id` do respectivo objeto de livro.

## Alteração do Status de Leitura

Adicione um botão na exibição de cada livro para alterar seu `read` status.
Para facilitar isso, você vai querer criar uma função de protótipo para o construtor `Book` que alterne o status de leitura de uma instância de livro (`read`).

## Persistência de Dados (Opcional)

Não é necessário adicionar nenhum tipo de armazenamento neste momento para salvar as informações entre as atualizações de página. Você terá a opção de retornar a este projeto mais tarde no curso.
