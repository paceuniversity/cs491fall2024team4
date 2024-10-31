import wmDark from '../../assets/wordmark-dark.svg';

const WordmarkDark = ({ size = ''}) => (
    <img src={wmDark} alt='Sky blue and yellow SetterSocial wordmark' style={{ width: size, height: 'auto'}} />
);

export default WordmarkDark;