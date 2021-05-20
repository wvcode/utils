# utils

O utils é um módulo de funções utilitárias para scripts escrito em javascript.

## Para que ele serve?

Sabe aquelas funções que são uma mão na roda, mas nunca temos prontas? Pois é, pensando nessa situação, criamos esse módulo, que irá crescendo conforme criamos mais funções dessas.

## Como instalar?

```bash
npm install @wvcode/utils
```

or

```bash
yarn add @wvcode/utils
```

## Como utilizar?

Segue um exemplo básico de utilização:

```javascript
const SurveyAPI = require('@wvcode/sm-wrapper')
const { files, sleep, convertToArrayOfArrays } = require('@wvcode/utils')
const fs = require('fs')

// le arquivo no formato CSV e carrega em um objeto JSON
var jsonData = await files.readCSVtoJSON('file1.csv')

// converte objeto JSON e array de arrays
var arrayOfArrays = convertToArrayOfArrays(jsonData, true)

// salva arquivos
fs.writeFileSync('file1.json', JSON.stringify(jsonData))
fs.writeFileSync('file2.json', JSON.stringify(arrayOfArrays))

// salva objeto JSON em arquivo no formato CSV
await files.writeJSONtoCSV(jsonData, 'file2.csv')

// pausa execução do script em milisegundos
sleep(2000)
```

## Mais Informações?

Era só isso mesmo. Por enquanto, este módulo está pequeno, e os exemplos acima cobrem todas as funcionalidades disponíveis.

Mas temos a documentação [aqui](documentation.md).

**Bom código!!!**

### Autoria:

- Vanessa Stangherlin
- Walter Ritzel
