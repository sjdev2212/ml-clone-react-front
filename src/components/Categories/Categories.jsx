import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit'

const Categories = () => {
  return (
    <section className="container-list">
      <ul className="categories-list">
        <li>
          <Link to="/sports">
          <p>Sports & Fitnes</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
          </Link>
        </li>
        <li>
          <Link to='/cars'>
          <p>Cars</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
          </Link>
         </li>
        <li>
          <Link to='/clothes'>
        <p>Clothing</p>
        { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link className='link' to='/gaming'>
          <p>Videogames</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='/instruments'>
          <p>Musical Istruments</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='/homegarden'>
          <p>Home & Garden</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='/cells'>
          <p>Cell phones</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='/electro'>
          <p>Electronics</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='/pets'>
          <p>Pets</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
    </Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories
