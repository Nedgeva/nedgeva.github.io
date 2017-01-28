function print(e) {
    
  if (e.target.className !== 'printButton')
    return
  
  var options = {

    simple: {
      target: '#first'
    },
    
    beforePrintCb: {
      target: '#first',
      beforePrintCb: function() {alert('Custom cb called before print')}
    },
    
    afterPrintCb: {
      target: '#first',
      afterPrintCb: function() {alert('Custom cb called after print')}
    },

    fireCallbacks: {
      target: '#first',
      beforePrintCb: function() {alert('Custom cb called before print')},
      afterPrintCb: function() {alert('Custom cb called after print')}
    },
    
    exposeAll: {
      target: '#first',
      exposeLinkUrls: 'all'
    },
    
    hideLinks: {
      target: '#first',
      excludeSelectorList: ['.links']
    },
    
    exposeExternal: {
      target: '#first',
      exposeLinkUrls: 'external'
    },
    
    customTpl: {
      target: '#first',
      exposeLinkUrls: 'all',
      linkTextTemplate: '{title} -> {url}'
    },
    
    keepCSS: {
      target: '#first',
      keepSourceCSS: true
    },
    
    watermark: {
      target: '#first',
      watermarkImageURL: 'https://nedgeva.github.io/frames/img/watermark.png'
    },

    topbottom: {
      target: '#first',
      headerText: 'Printed with ezPrintJS',
      footerText: 'CALL-ME-777-888-TEST'
    },

    reveal: {
      target: '#first',
      revealHiddenElements: true
    },

    noimages: {
      target: '#first',
      removeImages: true
    },

    noinline: {
      target: '#first',
      removeInlineStyles: true
    },

    canvas: {
      target: '#first',
      printCanvas: true
    },

    setsize: {
      target: '#first',
      setPrintSize: 'A4 landscape'
    },
    
    top: {
      target: '#first',
      headerText: 'Test header text'
    },
    
    bottom: {
      target: '#first',
      footerText: 'Test footer text'
    },

    expandall: {
      target: '#first',
      keepSourceCSS: true,
      extendScrollableAreas: true
    },

    expandallcut: {
      target: '#first',
      keepSourceCSS: true,
      extendScrollableAreas: true,
      scrollableAreasMaxHeight: 250
    },

    expandtable: {
      target: '#first',
      keepSourceCSS: true,
      extendScrollableAreas: 'table'
    },
    
    customstyle: {
      target: '#first',
      injectCustomStyle: '@page {margin-left: 0px; margin-right: 0px; margin-top: 0px; margin-bottom: 0px; margin: 0px;} a {text-decoration: line-through;} #first p:before {content: "This text was prepended via ezPrintJS option <---";} #first p:after {content: "---> This text was appended via ezPrintJS option";}'
    },
        
    handlers: {
      target: '#first',
      customMethodMap: {
        'a': [
          function(el) {
            el.textContent = el.textContent.split('')
              .reduce(function(str, char, i) {
                return i % 2
                  ? str + '*' + char + '*'
                  : str + char
              }, '')
            return el
          },
          function(el) {
            el.textContent = el.textContent.toUpperCase()
            return el
          }
        ]
      }
    },
        
    error: {
      target: null
    }
        
  }

  ezPrintJS(options[e.target.getAttribute('data-print')])
}

if (document.body.addEventListener)
  document.body.addEventListener('click', print)
else
  document.body.addEvent('onclick', print)