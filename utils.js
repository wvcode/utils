const fs = require('fs')
const neatCsv = require('neat-csv')
const objectsToCsv = require('objects-to-csv')
const XLSX = require('xlsx')

/**
 * Classe contendo métodos estáticos para tratamento de arquivos
 */
class files {
  /**
   * Le arquivo no formato CSV e transforma em objeto JSON
   * @param {String} fileName - o nome do arquivo CSV
   * @returns objeto JSON representando o arquivo CSV convertido
   */
  static async csvToJson(fileName) {
    const content = fs.readFileSync(fileName, 'utf8')
    const data = await neatCsv(content)
    return data
  }

  /**
   * Converte de XLSX para JSON
   * @param {string} fileName - caminho para o arquivo
   * @param {string} sheetName - nome da aba
   * @returns Objeto JSON representando uma planilha
   */
  static xlsxToJson(fileName, sheetName = null) {
    const wb = XLSX.readFile(fileName)
    let data = null
    let localSheetName = sheetName
    if (!sheetName) {
      if (wb.SheetNames.length > 0) localSheetName = wb.SheetNames[0]
    }
    if (wb.SheetNames.includes(localSheetName))
      data = XLSX.utils.sheet_to_json(wb.Sheets[localSheetName])
    else console.log(`A aba ${localSheetName} não existe na planilha`)
    return data
  }

  /**
   * Converte de XLSX para CSV
   * @param {string} fileName - caminho para o arquivo
   * @param {string} sheetName - nome da aba
   * @returns Objeto CSV representando uma planilha
   */
  static xlsxToCsv(fileName, sheetName) {
    const wb = XLSX.readFile(fileName)
    let data = null
    let localSheetName = sheetName
    if (!sheetName) {
      if (wb.SheetNames.length > 0) localSheetName = wb.SheetNames[0]
    }
    if (wb.SheetNames.includes(localSheetName))
      data = XLSX.utils.sheet_to_csv(wb.Sheets[localSheetName])
    else console.log(`A aba ${localSheetName} não existe na planilha`)
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

/**
 * Codifica uma string para Base64
 * @param {String} value  - string a ser convertida
 * @returns String em Base64
 */
exports.encode = function (value) {
  let buff = new Buffer.from(value)
  let base64data = buff.toString('base64')
  let result =
    base64data.slice(2, base64data.length - 1) +
    base64data.slice(0, 2) +
    base64data.slice(base64data.length - 1)
  return result
}

/**
 * Decodifica uma string Base64 para UTF-8
 * @param {String} value  - string a ser decodificada
 * @returns String em UTF-8
 */
exports.decode = function (value) {
  let result =
    value.slice(value.length - 3, value.length - 1) +
    value.slice(0, value.length - 3) +
    value.slice(value.length - 1)
  let buff = new Buffer.from(result, 'base64')
  let base64data = buff.toString('utf-8')
  return base64data
}
