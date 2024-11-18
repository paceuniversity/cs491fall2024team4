import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/forms.css';

import { useState } from 'react';

    const ProfileEditForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            major: '',
            classYear: '',
            bio: '',
            instagram: '',
            discord: '',
            twitter: '',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((profile) => ({
          ...profile,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <div className="profile-edit-form flex-center-col dark-theme">
          <h2 className="text-center">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-input">
              <label className="form-label">Major</label>
              <input
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </div>
    
            <div className="form-input">
              <label className="form-label">ClassYear</label>
              <input
                type="text"
                id="classYear"
                name="classYear"
                value={formData.classYear}
                onChange={handleChange}
              />
            </div>

            <div className="form-input">
              <label className="form-label">Bio</label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            <div className="form-input">
              <label className="form-label">Instagram</label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-input">
              <label className="form-label">Discord</label>
              <input
                type="text"
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
              />
            </div>

            <div className="form-input">
              <label className="form-label">Twitter</label>
              <input
                type="text"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
    
            <SaveProfileButton size="100%" buttonType="submit" />
          </form>
        </div>
      );
    
    export default ProfileEditForm;