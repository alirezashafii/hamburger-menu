import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  margin: 20px 50px;
  display: flex;
  justify-content: right;
  z-index: 3;
  transition: all 150ms linear;

  li {
    padding: 18px 30px;
  }

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    background: #1565df;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")}; 

    li {
      color: #f8fafc;
    }
  }
`;

const Navbar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Docs</li>
      <li>Buy me a coffee</li>
      <li>Github</li>
    </Ul>
  );
};

export default Navbar;
