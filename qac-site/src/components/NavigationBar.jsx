import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import About from './About';
import Classifications from './Classifications';
import Contact from './Contact';
import GettingThere from './GettingThere';
// import DiscussionBoard from '../components/DiscussionBoard';
import HomePage from './HomePage';
import ListingsGallery from './ListingsGallery';
import NewReleases from './NewReleases';
import OpeningTimes from './OpeningTimes';
import PlacesToGo from './PlacesToGo';
import Screens from './Screens';
import TicketBookings from './TicketBookings';


const NavigationBar = () => {
  return (
    <Router>
      
      <div className="App">
        <nav>
            <button type="button" className="btn btn-outline-dark">
              <Link to="/">Home</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/listingsgallery">Listings Gallery</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/OpeningTimes">Opening Times</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/GettingThere">Getting There</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/newreleases">New Releases</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/classifications">Classifications</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/screens">Screens</Link>
            </button>
            {/* <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/discussionboard">Discussion Board</Link>
            </button> */}
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/ticketbookings">Ticket Bookings</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/PlacesToGo">Places To Go</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/about">About</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/contact">Contact</Link>
            </button>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listingsgallery" element={<ListingsGallery />} />
        <Route path="/openingtimes" element={<OpeningTimes />} />
        <Route path="/location" element={<GettingThere />} />
        <Route path="/newreleasesgallery" element={<NewReleases />} />
        <Route path="/classifications" element={<Classifications />} />
        <Route path="/screens" element={<Screens />} />
        {/* <Route path="/discussionboard" element={<DiscussionBoard />} /> */}
        <Route path="/ticketbookings" element={<TicketBookings />} />
        <Route path="/placestogo" element={<PlacesToGo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  )
}

export default NavigationBar;