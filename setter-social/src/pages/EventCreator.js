import React, { useState } from 'react';
import EventForm from '../components/forms/EventForm';
//import { db } from '../../firebase'; (?)
//import { collection, addDoc } from 'firebase/firestore'; (?)

const EventCreator = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventLocation: '',
        eventTime: '',
        eventDate: '',
        eventDescription: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = {};

        if (!formData.eventName) {
            formErrors.eventName = '*Event name is required!*';
        } else if (formData.eventName.length < 3) {
            formErrors.eventName = '*Event name must be at least 3 characters long*';
        }


        if (!formData.eventLocation) {
            formErrors.eventLocation = '*Event location is required!*';
        } else if (formData.eventLocation.length < 3) {
            formErrors.eventLocation = '*Event location must be at least 3 characters long*';
        }



        if (!formData.eventTime) {
            formErrors.eventTime = '*Event time is required!*';
        }


        if (!formData.eventDate) {
            formErrors.eventDate = '*Event date is required!*';
        }


        if (!formData.eventDescription) {
            formErrors.eventDescription = '*Event description is required!*';
        }


        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            //if no errors
            console.log('Event Created:', formData)

            setFormData({
                eventName: '',
                eventLocation: '',
                eventTime: '',
                eventDate: '',
                eventDescription: ''
            });
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '20px'
        }}>
            <div style={{
                width: '125%',
                maxWidth: '800px',
                padding: '20px',
                backgroundColor: '#F9FAFB',
                borderRadius: '10px',
            }}>
                <h1 style={{ color: '#124191', textAlign: 'center' }}>Event Creator</h1>
                <EventForm
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default EventCreator;