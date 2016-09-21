import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoTools from '../../src/components/TodoTools';
import {expect} from 'chai';

const {renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate} = TestUtils;

describe('TodoTools', () => {
  it('displays the number of items left', () => {
    const nbActiveItems = 3;
    const component = renderIntoDocument(
      <TodoTools nbActiveItems={nbActiveItems} />
    );
    const tools = scryRenderedDOMComponentsWithTag(component, 'footer');

    expect(tools[0].textContent).to.contain('3');
  });

  it('Highlights the active filter', () => {
    const filter = 'active';
    const component = renderIntoDocument(
      <TodoTools filter={filter} />
    );
    const filters = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(filters[0].classList.contains('selected')).to.equal(false);
    expect(filters[1].classList.contains('selected')).to.equal(true);
    expect(filters[2].classList.contains('selected')).to.equal(false);
  });

  it('calls a callback when the user clicks on Clear Completed buttons', () => {
    var cleared = false
    const clearCompleted = () => cleared = true;
    const component = renderIntoDocument(
      <TodoTools clearCompleted={clearCompleted} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(cleared).to.equal(true);
  });

  it('handles CLEAR_COMPLETED by removing all the completed items', () => {
    const initialState = fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
        {id: 2, text: 'Redux', status: 'completed'},
      ]
    });
    const action = {
      type: 'CLEAR_COMPLETED'
    }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
      ]
    }));
  });

  it('handles ADD_ITEM by adding the item', () => {
    const initialState = fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'}
      ]
    });
    const action = {
      type: 'ADD_ITEM',
      text: 'Redux'
    }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
        {id: 2, text: 'Redux', status: 'active'},
      ]
    }));
  });

  it('handles DELETE_ITEM by removing the item', () => {
    const initialState = fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
        {id: 2, text: 'Redux', status: 'completed'},
      ]
    });
    const action = {
      type: 'DELETE_ITEM',
      itemId: 2
    }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
      ]
    }));
  });
});