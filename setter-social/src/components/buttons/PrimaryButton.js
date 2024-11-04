import '../../theme.css';

const PrimaryButton = ({ buttonLabel = '', size = '' }) => (
    <button style={{ backgroundColor: 'var(--golden__yellow)', border: 'none', borderRadius: '8rem', color: 'var(--vintage__black)', padding: '20px', width: size }}>
        {buttonLabel}
    </button>
);

export default PrimaryButton;