import React from "react";

const ImageCard = ({ image, setImageModal, openModal }) => {
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
