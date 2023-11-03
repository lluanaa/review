let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

// ADICIONAR NO FINAL DO PUSH = EMPURRE
produtos.push('Açúcar')
codigos.push(40, 50, 60)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER DO FINAL POP = ESTOURAR
produtos.pop()
codigos.pop()
meses.pop()

//ADICIONAR NO INICIO UNSHFIT
produtos.unshift('Uva', 'Maça')

// REMOVER DO INICIO SHIFT
produtos.shift()

// REMOVER DO INICIO SHIFT
// SPLICE = EMENDAR

// POSIÇÃO INICIAL, QUANTOS REMOVER
// codigos.splice(1,3)

// COPIAR ARRAY SLICE = FATIAR PORCAO
// POSIÇÃO INICIAL, QUANTOS COPIAR
// let meses1 = meses.slice()
// let meses2 = meses.slice(0,3)

// VER TAMANHO DO ARRAY length comprimento
// meses.length
// meses1.lenght
// meses2.length

// spreed operator ...
