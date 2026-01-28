// ## string = cadeia de caracteres
// - Declarado com ‘’ ou “”
//     - ou template string ``
// ### Métodos para strings:
// - **charAt(index: number)**
//     - Retorna o caractere no índice passado
// - **charCodeAt(index: number)**
//     - Retorna o código ASCII para o valor que se encontra no índice passado
// - **indexOf(<valor>)**
//     - Retorna o índice que tem o valor passado
// - **substring(index: number, index: number)**
//     - Retorna uma sub-string delimitada pelos índices passados
//     - Tem 2 jeitos de usar:
//         - Passando somente 1 parâmetro(inclusivo). Retorna uma string a partir do índice passado até o final.
//         - Passando 2 parâmetros(o primeiro é inclusivo e o segundo exclusivo).  Vai do primeiro índice passado até o segundo(sem incluir este).
// - **replace(index: number, value: string)**
//     - Substitui o que se encontra no índice passado(primeiro parâmetro) pelo valor passado(segundo parâmetro)
// - **split(valor: string)**
//     - Transforma a string em um array cujos elementos são separados pelo valor passado no parâmetro!
//         - Quebra  a string em partes menores(cada parte sendo um elemento do array)