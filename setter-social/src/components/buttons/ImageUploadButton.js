import '../../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ImageUploadButton = ({ size = '', buttonType = '' }) => (
    <button className='icon-button' type={buttonType} style={{ width: size }}>
        <FontAwesomeIcon icon={faUpload} />
        Upload an Image
    </button>
);

export default ImageUploadButton;