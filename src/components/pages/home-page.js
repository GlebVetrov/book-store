import React from 'react';
import BookList from '../book-list';
import SearchPanel from '../search-panel';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import './home-page.css';

const HomePage = (props) => {
    
    return ( 
        <div className='home-page'>
          <Navbar bg="dark" variant="dark" className="justify-content-center" style={{padding: '20px'}}>
                <SearchPanel/>
          </Navbar>

          <Navbar className="justify-content-center" bg="dark" as="ul">
            <Nav.Item as="li">

              <NavLink to="/book-store/1" className="PageLink" activeClassName="ActivePageLink">1-10</NavLink>

            </Nav.Item>
            <Nav.Item as="li">

              <NavLink to="/book-store/2" className="PageLink" activeClassName="ActivePageLink">10-20</NavLink>

            </Nav.Item>
            <Nav.Item as="li">

              <NavLink to="/book-store/3" className="PageLink" activeClassName="ActivePageLink">20-30</NavLink>

            </Nav.Item>
            <Nav.Item as="li">

              <NavLink to="/book-store/4" className="PageLink" activeClassName="ActivePageLink">30-40</NavLink>

            </Nav.Item>
            <Nav.Item as="li">

              <NavLink to="/book-store/5" className="PageLink" activeClassName="ActivePageLink">40-50</NavLink>

            </Nav.Item>
            <Nav.Item as="li">

              <NavLink to="/book-store/" exact className="PageLink" activeClassName="ActivePageLink">All</NavLink>

            </Nav.Item>
          </Navbar>

          <BookList pageNum = { props.match.params.clid } />

            

            
            
        </div>       
        
    )
};

export default HomePage;