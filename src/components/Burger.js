import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 4;
  cursor: pointer;
  display: none;

  div {
    width: 100%;
    height: 0.25rem;
    background: ${(props) => (props.open ? "#f8fafc" : "#1565df")};
    border-radius: 10px;

    transform-origin: 1px;
    transition: all 150ms linear;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

class Burger extends Component {
  // state = {  }
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <Div onClick={this.clickHandler} open={this.state.open}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}

export default Burger;
