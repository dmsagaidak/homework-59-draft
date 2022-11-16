import React from 'react';
import "./AddForm.css"

interface State  {
  title: string;

}

class AddForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: ''
    }
  }

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
          value={this.state.title}
          onChange={this.onValueChange}
        />
        <button type="button">Add</button>
      </div>
    );
  }
}

export default AddForm;