import React from 'react';
import "./AddForm.css"

interface Props {
  title: string;
  onItemAdd: () => void;
}


class AddForm extends React.Component<Props> {

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.target.value})
  }

  render() {
    return (
      <div className="addForm">
        <input
          placeholder="Enter the movie name"
          id="name"
          name="name"
          type="text"
          value={this.props.title}
          onChange={this.onValueChange}
        />
        <button type="button" onClick={() => this.props.onItemAdd()}>Add</button>
      </div>
    );
  }
}

export default AddForm;