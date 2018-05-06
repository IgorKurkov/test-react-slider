import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    const { slide } = this.props;
    return (
      <figure className={`${this.props.className} fade`}>
        <img
          alt=""
          src={slide.hero}
          onMouseOver={this.props.pause}
          onMouseOut={this.props.start}
        />
        <figcaption className="text">{slide.text}</figcaption>
      </figure>
    );
  }
}
