import React from 'react';
import {Post} from "../../types";
import "./AddForm.css"

interface State  {
  title: string;
  posts: Post[]
}


class AddForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: '',
      posts: [{name: 'Guardians of Galaxy pt.3', id: 'm1'},
        {name: 'Furiosa', id: 'm2'},
        {name: 'The Marvels', id: 'm3'}]
    }
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.target.value})
  }

  onItemAdd = () => {
    const randomId = Math.floor(Math.random());
    let newItem = {name: this.state.title, id: randomId.toString()};
    const postCopy = [...this.state.posts, newItem];
    this.setState({posts: postCopy})
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
        <button type="button" onClick={this.onItemAdd}>Add</button>
      </div>
    );
  }
}

export default AddForm;