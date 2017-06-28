import React from 'react';

import { ToolHeader } from './tool-header.component';
import { UnorderedList } from './unordered-list.component';




export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: props.colorList.concat(),
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick() {
    this.setState({
      colorList: this.state.colorList.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <UnorderedList itemList={this.state.colorList} />
      <form>
        <div>
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }

}