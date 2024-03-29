import styles from '../styles/mainApp.module.css';

const Footer = () => {
    return (
        <div className='flex w-full h-30 bg-white'>
            <img src="/emblem.jpg" alt="emblem" width={50} className="flex-column justify-left my-5 mx-5 mb-5" />
            <div className='content-center'>
                <p>© SwEng Group 30, 2024. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

