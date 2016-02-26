var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
      print:  false,
      open:   false,
      save:   false
    }
  },

  requestPDF: function() {
    return this.state.print || this.state.oepn || this.state.save || this.state.loaded
  },

  render: function() {
    if (!this.requestPDF())
      return null

    return (
      React.DOM.div({
        style: {
          border: 'none',
          height: '0px'
        }
      },
        React.DOM.iframe({
          ref: 'iframe',
          onLoad: this.onLoadHandler.bind(this),
          src: this.props.path,
          style: {
            border: 'none',
            height: '1px'
          }
        })
      )
    )
  },

  onLoadHandler: function() {
    this.setState({loaded: true}, function() {
      const context = this.refs.iframe.getDOMNode().contentWindow.createpdf
      context.initialize(JSON.stringify(this.props.definition), this.props.name)
      this.executeCommands()
    }.bind(this))
  },

  executeCommands: function() {
    if (this.state.loaded) {
      const context = this.refs.iframe.getDOMNode().contentWindow.createpdf

      if (this.state.print)
        context.print()
      if (this.state.open)
        context.open()
      if (this.state.save)
        context.save()

      this.setState({
        print: false,
        open:  false,
        save:  false
      })
    }
  },

  print: function() {
    this.setState({print: true}, function() {
      this.executeCommands()
    }.bind(this))
  },

  open: function() {
    this.setState({open: true}, function() {
      this.executeCommands()
    }.bind(this))
  },

  save: function() {
    this.setState({save: true}, function() {
      this.executeCommands()
    }.bind(this))
  }
})
