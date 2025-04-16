import React from "react";
import { useGallery } from "../../GalleryContext";

const ImageCard = ({ image }) => {
  console.log(image);
  const [, setImageModal, openModal] = useGallery();
  const handleClick = () => {
    setImageModal(image);
    openModal();
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageCard;
