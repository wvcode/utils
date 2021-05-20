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
</dl>

<a name="files"></a>

## files
Classe contendo métodos estáticos para tratamento de arquivos

**Kind**: global class  

* [files](#files)
    * [.readCSVtoJSON(fileName)](#files.readCSVtoJSON) ⇒
    * [.writeJSONtoCSV(data, fileName)](#files.writeJSONtoCSV)

<a name="files.readCSVtoJSON"></a>

### files.readCSVtoJSON(fileName) ⇒
Le arquivo no formato CSV e transforma em objeto JSON

**Kind**: static method of [<code>files</code>](#files)  
**Returns**: objeto JSON representando o arquivo CSV convertido  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>String</code> | o nome do arquivo CSV |

<a name="files.writeJSONtoCSV"></a>

### files.writeJSONtoCSV(data, fileName)
Escreve arquivo CSV com o conteúdo do objeto JSON

**Kind**: static method of [<code>files</code>](#files)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | objeto JSON |
| fileName | <code>String</code> | o nome do arquivo CSV |

<a name="sleep"></a>

## sleep(milliseconds)
Pausa a execução do script

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| milliseconds | <code>Number</code> | quantidade de tempo em milisegundos |

<a name="convertToArrayOfArrays"></a>

## convertToArrayOfArrays(arrayOfObjects, includeHeaders) ⇒
Converte objeto JSON em Array de Arrays

**Kind**: global function  
**Returns**: array de Arrays  

| Param | Type | Description |
| --- | --- | --- |
| arrayOfObjects | <code>Object</code> | objeto JSON |
| includeHeaders | <code>Boolean</code> | Se deve incluir o header na conversão |

