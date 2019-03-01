import React, { Component } from "react";
import ReacDOM from "react-dom";
import "./modal.css";

class Modal extends Component {
  showModal = () => {
    this.modalElm.style.display = "initial";
  };

  hideModal = () => {
    this.modalElm.style.display = "none";
  };

  updateDimension() {
    this.imageElm.style.height = `${this.imageElm.offsetWidth /
      this.ratioWH}px`;
  }

  componentDidMount() {
    this.rootElm = ReacDOM.findDOMNode(this);
    this.modalElm = this.rootElm.querySelector(".modal");
    this.imageElm = this.rootElm.querySelector(".image");
  }

  render() {
    const { src, caption } = this.props;
    return (
      <div>
        <div className="modal-image">
          <img
            className="image"
            src={src}
            alt={caption}
            onClick={this.showModal}
          />

          <div className="modal">
            <span className="modal__close" onClick={this.hideModal}>
              x
            </span>
            <img className="modal__content" src={src} alt={caption} />
            <div className="modal__caption">{caption}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
