var createpdf = (function () {

  var definition = null
  var name = null
  var pdf = null

  return {
    initialize: function(_definition, _name) {
      definition = JSON.parse(JSON.stringify(_definition));
      name = _name;
      pdf = pdfMake.createPdf(definition);
    },
    print: function() {
      pdf.print()
    },
    open: function() {
      pdf.open()
    },
    save: function() {
      pdf.download(name + '.pdf')
    }
  }

})();
