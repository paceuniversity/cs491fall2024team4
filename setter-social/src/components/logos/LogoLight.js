import lightLogo from '../../assets/logo-light.svg';

const LogoLight = ({ size = ''}) => (
    <img src={lightLogo} alt='Sky blue and royal blue SetterSocial logo' style={{ width: size, height: 'auto'}} />
);

export default LogoLight;