import React, { useState, useEffect } from 'react';
import EventForm from '../components/forms/EventForm';
import { eventWrite } from '../utils/eventWrite';
import { UserState } from '../utils/authUserState';

const EventCreator = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventLocation: '',
        eventTime: '',
        eventDate: '',
        eventDescription: ''
    });

    const [errors, setErrors] = useState({});

    const { user } = UserState();

    useEffect(() => {
        if (!user) {
            console.log('User is not logged in!');
        }
    }, [user]);

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

        if (Object.keys(formErrors).length === 0 && user) {
            //if no errors
            const eventData = {
                eventName: formData.eventName,
                eventLocation: formData.eventLocation,
                eventTime: formData.eventTime,
                eventDate: formData.eventDate,
                eventDescription: formData.eventDescription,
                userID: user.uid,
            };

            try {
                await eventWrite(eventData);
                console.log('Event Created: ', eventData);

                setFormData({
                    eventName: '',
                    eventLocation: '',
                    eventTime: '',
                    eventDate: '',
                    eventDescription: ''
                });
            } catch (error) {
                console.error("Error creating event: ", error);
            }
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