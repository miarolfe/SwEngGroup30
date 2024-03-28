import Head from "next/head";

const HeaderButton = ({ link, label }) => {
    return (
      <a className="header-button block p-1 bg-white border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" href={link}>
        <b>{label}</b>
      </a>
    );
  };
  
  export default HeaderButton;