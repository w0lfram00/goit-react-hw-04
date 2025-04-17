import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ photos, setImageModal, openModal }) => {
  console.dir(photos);
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            image={photo}
            setImageModal={setImageModal}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
