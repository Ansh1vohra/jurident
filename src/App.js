import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/LandingPage';
import About from './components/About';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetails';
import Volunteer from './components/Volunteer';
import Contact from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
