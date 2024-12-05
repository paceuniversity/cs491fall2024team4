import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/forms.css';

import { useState } from 'react';

import { eventWrite } from '../../utils/eventWrite';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const CreateEventForm = () => {
    const [ name, setEventName ] = useState("");
    const [ location, setEventLoc ] = useState("");
    const [ time, setEventTime ] = useState("");
    const [ date, setEventDate ] = useState("");
    const [ description, setEventDesc ] = useState("");

    const eventData = {
        name: name,
        location: location,
        time: time,
        date: date,
        description: description,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await eventWrite(eventData);
    };

    return(
        <div className='form__wrapper'>
            <form className='form__container-grid' onSubmit={handleSubmit}>
                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label htmlFor='eventName'>Event Name</label>
                        <input id='eName' type='text' name='eventName' value={name} onChange={(e) => setEventName(e.target.value)}></input>
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label htmlFor='eventLoc'>Location</label>
                        <input id='eLocation' type='text' name='eventLoc' value={location} onChange={(e) => setEventLoc(e.target.value)}></input>
                    </div>
                </div>

                <div style={{ gridColumn: '1' }}>
                    <div className='form__field'>
                        <label htmlFor='eventTime'>Time</label>
                        <input id='eTime' type='time' name='eventTime' value={time} onChange={(e) => setEventTime(e.target.value)}></input>
                    </div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                    <div className='form__field'>
                        <label htmlFor='eventDate'>Date</label>
                        <input id='eDate' type='date' name='eventDate' value={date} onChange={(e) => setEventDate(e.target.value)}></input>
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label htmlFor='eventDesc'>Description</label>
                        <textarea id='eDesc' type='text' name='eventDesc' value={description} onChange={(e) => setEventDesc(e.target.value)}></textarea>
                    </div>
                </div>
{/*                 doesn't appear on mobile as expected                    */}                
                <button type='submit' className='icon-button' style={{gridColumn: '2', marginTop: '4rem'}}>
                    <FontAwesomeIcon icon={faCirclePlus} /> Create Event
                </button>
            </form>
        </div>
    );
}

export default CreateEventForm;