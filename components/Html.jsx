'use strict';

// Require React
var React = require('react');

var Component = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/public/main.css" />
        </head>
        <body>
          <section id="todoapp" dangerouslySetInnerHTML={{__html: this.props.markup}}></section>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src="/public/js/client.js" defer></script>
        </body>
      </html>
    );
  }
});

module.exports = Component;