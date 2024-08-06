import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const eventsData = [
    {
        id: 1,
        title: 'Workshop A',
        date: '2023-09-15',
        time: '10:00 AM - 2:00 PM',
        description: 'A detailed description of Workshop A.',
        image: 'workshop-a.jpg',
        registrationLink: 'https://example.com/register-workshop-a'
    },
    {
        id: 2,
        title: 'Event B',
        date: '2023-10-20',
        time: '1:00 PM - 5:00 PM',
        description: 'A detailed description of Event B.',
        image: 'event-b.jpg',
        registrationLink: 'https://example.com/register-event-b'
    },
    {
        id: 3,
        title: 'Seminar C',
        date: '2023-11-05',
        time: '9:00 AM - 12:00 PM',
        description: 'A detailed description of Seminar C.',
        image: 'seminar-c.jpg',
        registrationLink: 'https://example.com/register-seminar-c'
    }
];

const EventDetail = () => {
    const { id } = useParams();
    const event = eventsData.find(event => event.id === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="event-detail-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">{event.title}</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src='https://img.freepik.com/free-vector/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth_74855-14011.jpg?t=st=1722876469~exp=1722880069~hmac=ee5d8048dcac5277565fa359e9863242615a59ad3e26e35ade913a5cb28552aa&w=1060' className="img-fluid" alt={event.title} />
                    </div>
                    <div className="col-md-6">
                        <p>{event.description}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Time:</strong> {event.time}</p>
                        <a href={event.registrationLink} className="btn btn-outline-primary" rel="noreferrer" target="_blank" >Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
