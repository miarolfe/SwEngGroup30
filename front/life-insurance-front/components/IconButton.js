import { useEffect, useState } from 'react';

const IconButton = ({ link, imgSrc }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsActive(currentPath === link);
  }, [link]);

  return (
    <a
      href={link}
      className={`flex px-2 pt-2 pb-5 border border-gray-200 shadow-md justify-center items-center ${
        isActive
          ? 'bg-gray-100'
          : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      }`}
      >
      <img src={imgSrc} width={200} height={100} />
    </a>
  );
};

export default IconButton;