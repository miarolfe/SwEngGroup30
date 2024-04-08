import React from 'react';

interface ButtonProps {
  text: string;
  imageUrl: string;
  backgroundColor: string;
  onClick: () => void; // Adding onClick prop to handle clicks
}

const AcceptRejectButton: React.FC<ButtonProps> = ({ text, imageUrl, backgroundColor, onClick }) => {
  return (
    <button style={{
      width: '100px',
      height: '100px',
      backgroundColor: backgroundColor,
      position: 'relative',
      border: 'none',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }} onClick={onClick}> {/* Apply the onClick handler here */}
      <img src={imageUrl} alt="" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.5
      }} />
      <span style={{ position: 'relative', zIndex: 1 }}>
        {text}
      </span>
    </button>
  );
};

export default AcceptRejectButton;