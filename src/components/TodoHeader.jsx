import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Translate from 'react-translate-component';

export default React.createClass({
  mixins: [PureRenderMixin],
  _handleKeyPress: function(e) {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      return this.props.addItem(
        e.currentTarget.value
      );
    }
  },
  render: function () {
    return <header className="header">
      <h1>todos</h1>
      <Translate component="input"
                 type="text"
                 className="new-todo"
                 autoFocus={true}
                 autoComplete="off"
                 placeholder="{head.placeholder}"
                 onKeyPress = {this._handleKeyPress}
                 attributes={ { placeholder: 'head.placeholder'} } />
    </header>
  }
});