import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Translate from 'react-translate-component';

export default React.createClass({
  mixins: [PureRenderMixin],
  _handleKeyPress: function(e) {
    if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
      return this.props.addItem(
        this.refs.addTodoInput.value
      );
    }
  },
  render: function () {
    var props = { component: 'input', type: 'search', name: 'q', scope: 'search_input', attributes: { placeholder: 'placeholder', title: 'tooltip' } };

    return <header className="header">
      <h1>todos</h1>
      <Translate component="input"
                 className="new-todo"
                 ref="addTodoInput"
                 autoFocus={true}
                 autoComplete="off"
                 placeholder="{head.placeholder}"
                 onKeyPress = {this._handleKeyPress}
                 attributes={ { placeholder: 'head.placeholder'} } />
    </header>
  }
});