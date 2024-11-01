import '../../styles/forms.css';

const BasicProfileForm = () => {
    return(
        <div className='basic__profile'>
            <h2>Basic Profile</h2>
            <form className='basic__profile__form'>
                <label for="name">Display Name</label>
                <input id="addDisplayName" type="text" name="name"></input>
                
                <label for="major">Major</label>
                <input id="addMajor" type="text" name="major" className='major__input'></input>

                <label for="class">Class Year</label>
                <input id="addClass" type="text" name="class" className='class__input'></input>

                <label for="bio">Bio</label>
                <input id="addBio" type="text" name="bio"></input>
            </form>
        </div>
    );
}

export default BasicProfileForm;