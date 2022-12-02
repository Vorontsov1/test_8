import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactForm from 'components/ContactForm';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleKeyEsc = e => {
    if (e.code === 'Escape') {
      //   console.log('Нажали ESC');
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    // console.log('Где ловим/обрабатываем  клик currentTarget: ', event.currentTarget);
    // console.log('куда кликаем target: ', event.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          <ContactForm onClose={() => this.props.onClose()} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
