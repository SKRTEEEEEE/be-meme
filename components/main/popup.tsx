"use client"

import Image from 'next/image';
import React, { useState } from 'react';

interface PopupProps {
  imageUrl: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ imageUrl, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <Image
        src={imageUrl}
        alt="Popup"
        width={600}
        height={600}
      />
    </div>
  );
};

interface PopupImageProps {
  imageUrl: string;
  children?: React.ReactNode;
}

const PopupImage: React.FC<PopupImageProps> = ({ imageUrl, children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div  className="border-4 rounded-md border-secondary/20 hover:bg-white/20 hover:border-secondary/40 p-4" onClick={openPopup}>{children}</div>
      {isPopupOpen && <Popup imageUrl={imageUrl} onClose={closePopup} />}
    </div>
  );
};

export default PopupImage;

