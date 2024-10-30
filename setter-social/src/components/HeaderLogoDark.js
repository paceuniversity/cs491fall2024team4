import darkLogo from '../assets/logo-dark.svg';

const HeaderLogoDark = ({ altText = 'App Logo', size = ''}) => (
    <img src={darkLogo} alt={altText} style={{ display: 'flex', width: '20rem', height: 'auto', paddingTop: '4rem'}} />
);

export default HeaderLogoDark;