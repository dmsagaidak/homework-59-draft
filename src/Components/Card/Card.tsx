import React from 'react';
import "./Card.css";

interface Props {
title: string;
}

class Card extends React.Component<Props> {

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.target.value})
  }

  render() {
    return (
      <div className="card">
        <input
        type="text"
        value={this.props.title}
        onChange={this.onValueChange}
        ></input>
        <button>Remove</button>
      </div>
    );
  }
}

export default Card;