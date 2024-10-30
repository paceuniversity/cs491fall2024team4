import darkLogo from '../assets/logo-dark.svg';

const LogoDark = ({ altText = 'App Logo', size = ''}) => (
    <img src={darkLogo} alt={altText} style={{ width: size, height: 'auto'}} />
);

export default LogoDark;