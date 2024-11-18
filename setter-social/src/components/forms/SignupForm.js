import '../../styles/forms.css';

const SignupForm = ({ formData, handleChange, errors }) => {
    return (
        <div className="form__wrapper">
            <div>
                <h1 className="text-center" style={{ color: '#FFE324' }}>Welcome to the Setter Family!</h1>
            </div>

            <h2>Sign Up</h2>

            <form className="form__container-grid">
                <div style={{ gridColumn: 'span 1' }}>
                    <div className="form__field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                    <div className="form__field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-input-field"
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
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

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            Remember Me Next Time
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;