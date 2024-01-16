import React from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Store(props) {
  const navigate = useNavigate();

  return (
    <div className="store-wrapper">
      <div className="store-name">{props.name}</div>
      <div className="buttons">
        <Button>Gallery</Button>
        <Button>Location</Button>
      </div>
    </div>
  );
}

export default Store;
