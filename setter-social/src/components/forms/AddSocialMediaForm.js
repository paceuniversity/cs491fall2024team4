import '../../styles/forms.css';

const AddSocial = () => {
    return(
        <div>
            <h2>Add Social Media Accounts</h2>
            <form>
                <label for="insta">Instagram</label>
                <input id="addInstagram" type="text" name="insta"></input>

                <label for="discord">Discord</label>
                <input id="addDiscord" type="text" name="discord"></input>

                <label for="twitter">Twitter/X</label>
                <input id="addTwitter" type="text" name="twitter"></input>
            </form>
        </div>
    );
}

export default AddSocial;