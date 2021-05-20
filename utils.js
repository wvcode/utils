const fs = require('fs')
const neatCsv = require('neat-csv')
const objectsToCsv = require('objects-to-csv')

/**
 * Classe contendo métodos estáticos para tratamento de arquivos
 */
class files {
  /**
   * Le arquivo no formato CSV e transforma em objeto JSON
   * @param {String} fileName - o nome do arquivo CSV
   * @returns objeto JSON representando o arquivo CSV convertido
   */
  static async readCSVtoJSON(fileName) {
    const content = fs.readFileSync(fileName, 'utf8')
    const data = await neatCsv(content)
    return data
  }

  /**
   * Escreve arquivo CSV com o conteúdo do objeto JSON
   * @param {Object} data - objeto JSON
   * @param {String} fileName  - o nome do arquivo CSV
   */
  static async writeJSONtoCSV(data, fileName) {
    const csv = new objectsToCsv(data)
    await csv.toDisk(fileName)
  }
}

exports.files = files

/**
 * Pausa a execução do script
 * @param {Number} milliseconds - quantidade de tempo em milisegundos
 */
exports.sleep = function (milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

/**
 * Converte objeto JSON em Array de Arrays
 * @param {Object} arrayOfObjects  - objeto JSON
 * @param {Boolean} includeHeaders - Se deve incluir o header na conversão
 * @returns array de Arrays
 */
exports.convertToArrayOfArrays = function (
  arrayOfObjects,
  includeHeaders = false
) {
  let headers = []
  let result = arrayOfObjects.map(item => {
    let response = []
    if (headers.length == 0) {
      headers = Object.keys(item)
    }
    Object.keys(item).forEach(key => response.push(item[key]))
    return response
  })
  if (includeHeaders) {
    if (headers.length > 0 && result.length > 0) return [headers].concat(result)
    else return []
  } else {
    if (result.length > 0) return result
    else return []
  }
}
