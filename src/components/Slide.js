import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    const { slide } = this.props;
    return (
      // <div className="image-slide">
        <img
          alt=""
          src={slide.hero}
          onMouseOver={this.props.pause}
          onMouseOut={this.props.start}
        />
      // </div>
    );
  }
}
