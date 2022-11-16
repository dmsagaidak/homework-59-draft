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


  render() {
    return (
      <div>
        <AddForm/>
        <>
          {this.state.posts.map(post => (
            <Card
            key={post.id}
            title={post.name}
            />
          ))}
        </>
      </div>
    );
  }
}

export default MovieList;