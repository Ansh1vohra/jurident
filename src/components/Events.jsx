import { Link } from 'react-router-dom';
import './Events.css';

const eventsData = [
    {
        id: 1,
        title: 'Workshop A',
        date: '2023-09-15',
        time: '10:00 AM - 2:00 PM',
        description: 'A detailed description of Workshop A.',
        image: 'workshop-a.jpg'
    },
    {
        id: 2,
        title: 'Event B',
        date: '2023-10-20',
        time: '1:00 PM - 5:00 PM',
        description: 'A detailed description of Event B.',
        image: 'event-b.jpg'
    },
    {
        id: 3,
        title: 'Seminar C',
        date: '2023-11-05',
        time: '9:00 AM - 12:00 PM',
        description: 'A detailed description of Seminar C.',
        image: 'seminar-c.jpg'
    }
];

const Events = () => {
    return (
        <div className="events-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">Upcoming Events</h2>
                <div className="row">
                    {eventsData.map(event => (
                        <div className="col-md-4 mb-4" key={event.id}>
                            <div className="card event-card">
                                <img src='https://img.freepik.com/free-vector/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth_74855-14011.jpg?t=st=1722876469~exp=1722880069~hmac=ee5d8048dcac5277565fa359e9863242615a59ad3e26e35ade913a5cb28552aa&w=1060' className="card-img-top" alt={event.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text"><small className="text-muted">{event.date} | {event.time}</small></p>
                                    <Link to={`/events/${event.id}`} className="btn btn-outline-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;