import '../../styles/forms.css';

const AddSocial = () => {
    return(
        <div className='form__wrapper'>
            <h2>Add Social Media Accounts</h2>
            <form className='form__container-flex'>
                <div className='form__field'>
                    <label htmlFor="insta">Instagram</label>
                    <input id="addInstagram" type="text" name="insta"></input>
                </div>
                <div className='form__field'>
                   <label htmlFor="discord">Discord</label>
                    <input id="addDiscord" type="text" name="discord"></input> 
                </div>
                <div className='form__field'>
                   <label htmlFor="twitter">Twitter/X</label>
                    <input id="addTwitter" type="text" name="twitter"></input> 
                </div>        
            </form>
        </div>
    );
}

export default AddSocial;