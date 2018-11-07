import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.append(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el); //clear memory after closing modal
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el); //ReactDOM.createPortal(child, container)
  }
}

export default Modal;
