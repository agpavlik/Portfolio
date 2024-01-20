import React from "react";
import { projects } from "../data";

const Modal = ({ activeID, setShowModal }) => {
  const project = projects.find((project) => project.id === activeID);

  return (
    <div>
      <img src={project.img} alt="" />
    </div>
  );
};

export default Modal;
