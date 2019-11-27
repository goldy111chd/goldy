import React, { Component } from 'react';
import "./CRUDSystem.css";
class Removeitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [42, 33, 68],
    };
  }
  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list,
      };
    });
  };
  render() {
    return (
      <div>
        <ul class="names-ul">
          {this.state.list.map((item, index) => (
            <li key={item}>
              The person is {item} years old.
              <button
                type="button"
                onClick={() => this.onRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Removeitem;