import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={() => {
            this.openModal();
          }}
          className={css.imageGalleryItemimage}
          src={this.props.webformatURL}
          alt=""
        />
        {this.state.isModalOpen && (
          <Modal
            imgUrl={this.props.largeImageURL}
            onClose={() => {
              this.closeModal();
            }}
          />
        )}
      </li>
    );
  }
}
