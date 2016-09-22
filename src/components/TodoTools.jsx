import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Translate from 'react-translate-component';

export default React.createClass({
  mixins: [PureRenderMixin],
  getNbItemsLeft: function () {
    return this.props.nbActiveItems || 0;
  },
  isSelected: function (filter) {
    return this.props.selectedFilter === filter || false;
  },
  setSelectedClass: function (filter) {
    return classNames({'selected': this.props.filter === filter});
  },
  render: function () {
    return <footer className="footer">
      <span className="todo-count">
        <strong>{this.getNbItemsLeft()}</strong> <Translate content="tools.itemLeft" />
      </span>
      <ul className="filters">
        <li>
          <Translate component="a" content="tools.all" href="#"
                     onClick={() => this.props.changeFilter('all')}
                     className={this.setSelectedClass('all')} />
        </li>
        <li>
          <Translate component="a" content="tools.active" href="#"
                     onClick={() => this.props.changeFilter('active')}
                     className={this.setSelectedClass('active')} />
        </li>
        <li>
          <Translate component="a" content="tools.completed" href="#"
                     onClick={() => this.props.changeFilter('completed')}
                     className={this.setSelectedClass('completed')} />
        </li>
      </ul>
      <Translate value="en" component="button" content="tools.clearCompleted" className="clear-completed" onClick={this.props.clearCompleted} />
    </footer>
  }
});