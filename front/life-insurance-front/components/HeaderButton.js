import { useEffect, useState } from 'react';

const HeaderButton = ({ link, label }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsActive(currentPath === link);
  }, [link]);

  return (
    <a
      href={link}
      className={`text-4xl header-button block text-center px-2 py-3 border border-gray-200 shadow-md ${
        isActive
          ? 'bg-gray-100'
          : 'bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      }`}
    >
      <b>{label}</b>
    </a>
  );
};

export default HeaderButton;
