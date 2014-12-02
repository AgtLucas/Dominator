'use strict';

var React = require('react/addons');

var Component = React.createClass({
  render: function () {
    var nowShowing = this.props.nowShowing;
    var onFilterChange = this.props.onFilterChange;
    var activeTodoLabel = 'item' + (this.props.count > 1 ? 's' : '');
    var cx = React.addons.classSet;
    var clearButton;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          id="clear-completed"
          onclick={this.props.completedCount}>
          Clear Completed ({this.props.completedCount})
        </button>
      );
    }

    return (
      <footer className="main-footer" id="main-footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> {activeTodoLabel} left
        </span>
        <ul id="filters">
          <li>
            <a
              href="#"
              onclick={onFilterChange.bind(null, 'ALL_TODOS')}
              className={cx({ selected: nowShowing === 'ALL_TODOS' })}>
              All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#"
              onclick={onFilterChange.bind(null, 'ACTIVE_TODOS')}
              className={cx({ selected: nowShowing === 'ACTIVE_TODOS' })}>
              Active
            </a>
          </li>
          <li>
            <a
              href="#"
              onclick={onFilterChange.bind(null, 'COMPLETED_TODOS')}
              className={cx({ selected: nowShowing === 'COMPLETED_TODOS' })}>
              Completed
            </a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
});

module.exports = Component;