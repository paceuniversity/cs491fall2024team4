import React, { useState } from 'react';
import '../theme.css';
import HeaderLogoDark from '../components/logos/HeaderLogoDark';
import SignUpButton from '../components/buttons/SignUpButton';
import SignupForm from '../components/forms/SignupForm';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    {
      if (!formData.name) {
        newErrors.name = "*Name is required!*";
      }
    }

    {
      if (!formData.email) {
        newErrors.email = "*Email is required!*";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "*Email is invalid*";
      }
    }

    {
      if (!formData.password) {
        newErrors.password = "*Password is required!*";
      } else if (formData.password.length < 6) {
        newErrors.password = "*Password must be at least 6 characters*";
      }
    }

    {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "*Password is required!*";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.password = "*Passwords DO NOT match!*";
    }
  }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('User signed up successfully with data:', formData);
      // Handle signup logic here
    }
  };

  return (
    <div className="signup-form flex-center-col dark-theme">
      <HeaderLogoDark size="10rem" />

      <form onSubmit={handleSubmit} className="form__container-grid">
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        <div
          style={{
            gridColumn: 'span 3',
            display: 'flex',
            alignItems: 'center',
            marginTop: '3rem',
          }}
          className="form__field sign-up-button-container"
        >
          <SignUpButton size="90%" buttonType="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
