import React from 'react';
import "./Card.css";

interface Props {
title: string;
onValueChange: React.ChangeEventHandler<HTMLInputElement>;
remove: React.MouseEventHandler;
}

class Card extends React.Component<Props> {

shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
  return !(this.props.title === nextProps.title);
}

  render() {
    return (
      <div className="card">
        <input
        type="text"
        value={this.props.title}
        onChange={this.props.onValueChange}
        ></input>
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Card;