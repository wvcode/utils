## Classes

<dl>
<dt><a href="#files">files</a></dt>
<dd><p>Classe contendo métodos estáticos para tratamento de arquivos</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#sleep">sleep(milliseconds)</a></dt>
<dd><p>Pausa a execução do script</p>
</dd>
<dt><a href="#convertToArrayOfArrays">convertToArrayOfArrays(arrayOfObjects, includeHeaders)</a> ⇒</dt>
<dd><p>Converte objeto JSON em Array de Arrays</p>
</dd>
<dt><a href="#encode">encode(value)</a> ⇒</dt>
<dd><p>Codifica uma string para Base64</p>
</dd>
<dt><a href="#decode">decode(value)</a> ⇒</dt>
<dd><p>Decodifica uma string Base64 para UTF-8</p>
</dd>
</dl>

<a name="files"></a>

## files

Classe contendo métodos estáticos para tratamento de arquivos

**Kind**: global class

- [files](#files)
  - [.csvToJson(fileName)](#files.csvToJson)
  - [.xlsxToJson(fileName, sheetName)](#files.xlsxToJson)
  - [.xlsxToCsv(fileName, sheetName)](#files.xlsxToCsv)
  - [.writeJSONtoCSV(data, fileName)](#files.writeJSONtoCSV)

<a name="files.csvToJson"></a>

### files.csvToJson(fileName) ⇒

Le arquivo no formato CSV e transforma em objeto JSON

**Kind**: static method of [<code>files</code>](#files)
**Returns**: objeto JSON representando o arquivo CSV convertido

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| fileName | <code>String</code> | o nome do arquivo CSV |

<a name="files.xlsxToJson"></a>

### files.xlsxToJson(fileName, sheetName) ⇒

Converte de XLSX para JSON

**Kind**: static method of [<code>files</code>](#files)
**Returns**: Objeto JSON representando uma planilha

| Param     | Type                | Default           | Description            |
| --------- | ------------------- | ----------------- | ---------------------- |
| fileName  | <code>string</code> |                   | caminho para o arquivo |
| sheetName | <code>string</code> | <code>null</code> | nome da aba            |

<a name="files.xlsxToCsv"></a>

### files.xlsxToCsv(fileName, sheetName) ⇒

Converte de XLSX para CSV

**Kind**: static method of [<code>files</code>](#files)
**Returns**: Objeto CSV representando uma planilha

| Param     | Type                | Description            |
| --------- | ------------------- | ---------------------- |
| fileName  | <code>string</code> | caminho para o arquivo |
| sheetName | <code>string</code> | nome da aba            |

<a name="files.writeJSONtoCSV"></a>

### files.writeJSONtoCSV(data, fileName)

Escreve arquivo CSV com o conteúdo do objeto JSON

**Kind**: static method of [<code>files</code>](#files)

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| data     | <code>Object</code> | objeto JSON           |
| fileName | <code>String</code> | o nome do arquivo CSV |

<a name="sleep"></a>

## sleep(milliseconds)

Pausa a execução do script

**Kind**: global function

| Param        | Type                | Description                         |
| ------------ | ------------------- | ----------------------------------- |
| milliseconds | <code>Number</code> | quantidade de tempo em milisegundos |

<a name="convertToArrayOfArrays"></a>

## convertToArrayOfArrays(arrayOfObjects, includeHeaders) ⇒

Converte objeto JSON em Array de Arrays

**Kind**: global function
**Returns**: array de Arrays

| Param          | Type                 | Description                           |
| -------------- | -------------------- | ------------------------------------- |
| arrayOfObjects | <code>Object</code>  | objeto JSON                           |
| includeHeaders | <code>Boolean</code> | Se deve incluir o header na conversão |

<a name="encode"></a>

## encode(value) ⇒

Codifica uma string para Base64

**Kind**: global function
**Returns**: String em Base64

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| value | <code>String</code> | string a ser convertida |

<a name="decode"></a>

## decode(value) ⇒

Decodifica uma string Base64 para UTF-8

**Kind**: global function
**Returns**: String em UTF-8

| Param | Type                | Description               |
| ----- | ------------------- | ------------------------- |
| value | <code>String</code> | string a ser decodificada |
