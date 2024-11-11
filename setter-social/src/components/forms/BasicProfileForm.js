import '../../styles/forms.css';

const BasicProfileForm = () => {
    return(
        <div className='form__wrapper'>
            <h2>Basic Profile</h2>
            <form className='form__container-grid'>
                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label htmlFor="name">Display Name</label>
                        <input id="addDisplayName" type="text" name="name"></input>
                    </div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                <div className='form__field'>
                    <label htmlFor="major">Major</label>
                    <input id="addMajor" type="text" name="major" className='major__input'></input>
                </div>
                </div>
                <div style={{ gridColumn: 'span 1' }}>
                <div className='form__field'>
                    <label htmlFor="class">Class Year</label>
                    <input id="addClass" type="text" name="class" className='class__input'></input>
                </div>
                </div>
                <div style={{ gridColumn: 'span 3' }}>
                <div className='form__field'>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="addBio" type="text" name="bio"></textarea>
                </div>
                </div>
            </form>
        </div>
    );
}

export default BasicProfileForm;