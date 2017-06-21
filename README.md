## Wrapper for pdfmake
>pdfmake iframe wrapper for react on node and express

pdfmake is only loaded in iframe and only when you request `print`, `open` or `save` commands (because it's somewhat large library).

How to use pdfmake and create document definitions - http://pdfmake.org/

Install:

`npm install --save artursgirons/node-react-pdfmake#master`

Mount assets:
```javascript
import mountCreatePdfApp from 'node-react-pdfmake/node'
...
app.use('/createpdf', mountCreatePdfApp())
```

Create component:
```javascript
import CreatePDF from 'node-react-pdfmake/component'
...
<div>
  ...
  <CreatePDF path='/createpdf' ref='createpdf' definition={this.getPDFDefinition()} name='document' />
  ...
</div>
...
this.refs.createpdf.open()
this.refs.createpdf.print()
this.refs.createpdf.save()
...
getPDFDefinition() {
  return { content: 'PDF content' }
}
```
