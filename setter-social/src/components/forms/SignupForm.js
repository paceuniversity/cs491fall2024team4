import '../../styles/forms.css';

const SignupForm = ({ formData, handleChange, errors }) => {
    return (
        <div className="form__wrapper">
            <div>
                <h1 className="text-center" style={{ color: '#FFE324' }}>Welcome to the Setter Family!</h1>
            </div>

            <h2>Sign Up</h2>

            <form className="form__container-grid">
                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="addName"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="addEmail"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="addPassword"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="addConfirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;