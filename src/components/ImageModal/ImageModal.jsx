import React, { Children, useEffect } from "react";
import Modal from "react-modal";
import { useGallery } from "../../GalleryContext";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen }) => {
  const [imageModal, setImageModal, , closeModal] = useGallery();

  useEffect(() => {
    return () => {
      setImageModal(undefined);
    };
  }, []);
  if (!imageModal) return;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <img src={imageModal.urls.regular} alt={imageModal.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
