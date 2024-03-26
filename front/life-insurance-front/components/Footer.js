import styles from '../styles/mainApp.module.css';

const Footer = () => {
    return (
        <div className=' relative min-h-screen w-full inline-block'>
            <div className='flex bg-white bottom-0 w-full absolute'>
                <img src="/emblem.jpg" alt="emblem" width={100} height={100} className="flex-column justify-left my-5 mx-5 mb-5"/>
                <div className='content-center'>
                <p>blah blah blah blah legal disclaimers and other fancy stuff</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

