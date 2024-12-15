import { useState } from "react";
import { storage } from '../../firebase';
import { ref, uploadBytes } from "firebase/storage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faUpload } from '@fortawesome/free-solid-svg-icons';

function ImageUploadButton() {
    const [ image, setImage ] = useState("");

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (image) {
            const storageRef = ref(storage, `images/${image.name}`);
            uploadBytes(storageRef, image).then((snapshot) => {
                console.log("Image Upload successful.");
                alert("Image Upload successful.")
            });
        }
    };

    return(
        <div>
            <span className="file__upload">
                <input className="form__field-upload" type='file' onChange={handleImageChange} />
                <button className="icon-button file__upload-button">
                    <FontAwesomeIcon icon={faFileImage} />
                    Choose File
                </button>  
            </span>
            
            <button className='icon-button' onClick={handleUpload}>
                <FontAwesomeIcon icon={faUpload} />
                Upload Image
            </button>
        </div>
    );
}

export default ImageUploadButton;