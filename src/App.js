import React, { Component } from "react";
import Slide from "./components/Slide";
import Arrow from "./components/Arrow";
import "./App.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      intervalTimeout: 2000,
      currentSlideIndex: 0,
      slides: this.props.data.Feed.slider
    };
    this.moveSlide = this.moveSlide.bind(this);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);
    this.stopRotation = this.stopRotation.bind(this);
    this.startRotation = this.startRotation.bind(this);
  }

  stopRotation() {
    this.setState(prevState => {
      interval: clearInterval(prevState.interval);
    });
  }

  startRotation() {
    this.setState({
      interval: setInterval(this.moveSlide, this.state.intervalTimeout)
    });
  }

  componentDidMount() {
    this.startRotation();
  }

  renderSlide() {
    return (
      <Slide
        slide={this.state.slides[this.state.currentSlideIndex]}
        pause={this.stopRotation}
        start={this.startRotation}
      />
    );
  }

  render() {
    return (
      <div className="slideshow-container">
        <div className="slider">
          <Arrow
            direction="left"
            clickFunction={this.moveSlide}
            glyph="&#9664;"
          />

          {this.renderSlide()}

          <Arrow
            direction="right"
            clickFunction={this.moveSlide}
            glyph="&#9654;"
          />
          
          <div className="dots">
            {this.state.slides.map((slide, index) => (
              <span
                className="dot"
                data-key={index}
                onClick={this.setCurrentSlide}
              />
            ))}
          </div>
        </div>

        <div className="tails">
          {this.state.slides.map((slide, index) => (
            <img
              alt=""
              key={slide.image}
              src={slide.image}
              className="tail-image"
              data-key={index}
              onClick={this.setCurrentSlide}
            />
          ))}
        </div>
      </div>
    );
  }

  setCurrentSlide(ev) {
    const moveIndex = ev.target.getAttribute("data-key");
    this.setState({ currentSlideIndex: +moveIndex });
    this.stopRotation();
    this.startRotation();
  }

  moveSlide(ev) {
    const moveDirection = ev
      ? ev.target.getAttribute("data-direction")
      : "right";
    const lastSlideIndex = this.state.slides.length - 1;
    const { currentSlideIndex } = this.state;
    if (moveDirection === "right") {
      const shouldResetIndex = currentSlideIndex === lastSlideIndex;
      const index = shouldResetIndex ? 0 : currentSlideIndex + 1;
      this.setState({ currentSlideIndex: index });
    }
    if (moveDirection === "left") {
      const shouldResetIndex = currentSlideIndex === 0;
      const index = shouldResetIndex ? lastSlideIndex : currentSlideIndex - 1;
      this.setState({ currentSlideIndex: index });
    }
    this.stopRotation();
    this.startRotation();
  }
}
