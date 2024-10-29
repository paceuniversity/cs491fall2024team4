import '../theme.css';
import {} from 'react-icons/fa6';

const PrimaryButton = ({ buttonLabel = '', icon = '' }) => (
    <button style={{ backgroundColor: 'var(--golden__yellow)', border: 'none', borderRadius: '8rem' }}>
        
        {buttonLabel}
    </button>
);

export default PrimaryButton;