import React, {Component} from 'react';
import Card from "../../Components/Card/Card";
import {Post} from "../../types";
import AddForm from "../../Components/AddForm/AddForm";

interface State {
  posts: Post[]
}

class MovieList extends Component {

  state: State = {
    posts:[
      {name: 'Guardians of Galaxy pt.3', id: 'm1'},
      {name: 'Furiosa', id: 'm2'},
      {name: 'The Marvels', id: 'm3'}
    ],
  }

  onValueChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const postCopy = [...this.state.posts];
    const index = this.state.posts.findIndex((item) => item.id === id);
    const copyItem = {...this.state.posts[index]};
    copyItem.name = e.target.value;
    postCopy[index] = copyItem;

    this.setState({posts: postCopy})
  }

  removeItem = (id: string) =>{
    this.setState({posts: this.state.posts.filter((item) => item.id !== id)});
  }


  render() {
    return (
      <div>
        <AddForm/>
        <>
          {this.state.posts.map(post => (
            <Card
            key={post.id}
            title={post.name}
            onValueChange={(e) => this.onValueChange(post.id, e)}
            remove={() => this.removeItem(post.id)}
            />
          ))}
        </>
      </div>
    );
  }
}

export default MovieList;