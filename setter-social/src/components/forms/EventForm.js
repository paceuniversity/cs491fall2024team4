import '../../styles/forms.css'
import CreateEventButton from '../buttons/CreateEventButton';

const EventForm = ({ formData, handleChange, errors, handleSubmit }) => {
    return (
        <div className="form__wrapper">

            <h2 className="text-center">Event Information</h2>

            <form className="form__container-grid" onSubmit={handleSubmit}>
                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="addEventName">Event Name</label>
                        <input
                            id="addEventName"
                            type="text"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                        />
                        {errors.eventName && <p className="error">{errors.eventName}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="addEventLocation">Event Location</label>
                        <input
                            id="addEventLocation"
                            type="text"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                        />
                        {errors.eventLocation && <p className="error">{errors.eventLocation}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <div className="form__field">
                        <label htmlFor="addEventTime">Event Time</label>
                        <input
                            id="addEventTime"
                            type="time"
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                        />
                        {errors.eventTime && <p className="error">{errors.eventTime}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                    <div className="form__field">
                        <label htmlFor="addEventDate">Event Date</label>
                        <input
                            id="addEventDate"
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                        />
                        {errors.eventDate && <p className="error">{errors.eventDate}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3' }}>
                    <div className="form__field">
                        <label htmlFor="addEventDescription">Event Description</label>
                        <input
                            id="addEventDescription"
                            name="eventDescription"
                            value={formData.eventDescription}
                            onChange={handleChange}
                        />
                        {errors.eventDescription && <p className="error">{errors.eventDescription}</p>}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'center' }} className="buttons__group">
                    <CreateEventButton size="90%" button type="submit">
                        Create Event
                    </CreateEventButton>
                </div>
            </form>
        </div>
    );
};

export default EventForm;