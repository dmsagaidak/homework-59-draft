import React, {Component} from 'react';

interface State {
title: string;
delete: React.MouseEventHandler;
}

class Card extends Component<{}, State> {
  render() {
    return (
      <div className="card">
        <span>{this.state.title}</span>
        <button onClick={this.state.delete}>Remove</button>
      </div>
    );
  }
}

export default Card;