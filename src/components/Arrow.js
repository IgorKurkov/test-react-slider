import React, { Component } from "react";

export default class Arrow extends Component {
  render() {
    return (
      <div
        className={`slide-arrow ${this.props.direction}`}
        data-direction={this.props.direction}
        onClick={this.props.clickFunction}
      >
        {this.props.glyph}
      </div>
    );
  }
}
