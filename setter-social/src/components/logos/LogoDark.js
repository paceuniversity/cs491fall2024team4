import darkLogo from '../../assets/logo-dark.svg';

const LogoDark = ({ size = ''}) => (
    <img src={darkLogo} alt='Sky blue, royal blue, and yellow SetterSocial logo' style={{ width: size, height: 'auto'}} />
);

export default LogoDark;