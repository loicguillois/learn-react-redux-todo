import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';

export default React.createClass({
  handleChange: function(e) {
    counterpart.setLocale(e.target.value);
  },

  render: function() {
    return <p>
      <span><Translate content="trans.switch" />:</span>

      <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
        <Translate value="en" component="option" content="trans.lang.en" />
        <Translate value="fr" component="option" content="trans.lang.fr" />
      </select>
      </p>
  }
});