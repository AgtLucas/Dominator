'use strict';

var React = require('react/addons');

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var Component = React.createClass({
  getInitialState: function () {
    return { editText: this.props.todo.text }
  },
  handleSubmit: function (event) {
    var completed = this.props.todo.completed;
    var text = this.state.editText.trim();

    if (text) {
      this.props.onSave(completed, text);
      this.setState({ editText: text });
    } else {
      this.props.onDestroy();
    }
  },
  handleEdit: function () {
    this.props.onEdit(function () {
      var node = this.refs.editField.getDOMNode();
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }.bind(this));

    this.setState({ editText: this.props.todo.text });
  },
  handleKeyDown: function () {
    if (event.which === ESCAPE_KEY) {
      this.setState({ editText: this.props.todo.next });
      this.props.onCancel(event);
    } else {
      this.handleSubmit(event);
    }
  },
  handleChange: function (event) {
    this.setState({ editText: event.target.value });
  },
  render: function () {
    var classSet = React.addons.classSet({
      completed: this.props.todo.completed,
      editing: this.props.editing,
      pending: this.props.todo.pending,
      failure: this.props.todo.failure
    });

    return (
      <li className={classSet}>
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
            disabled={this.props.disabled}
          />
          <label onDoubleClick={this.handleEdit}></label>
        </div>
      </li>
    );
  }
});

module.exports = Component;