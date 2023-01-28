import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit'

const Categories = () => {
  return (
    <section className="container-list">
      <ul className="categories-list">
        <li>
          <Link to="categorie/sports">
          <p>Sports & Fitnes</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
          </Link>
        </li>
        <li>
          <Link to='categorie/cars'>
          <p>Cars</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
          </Link>
         </li>
        <li>
          <Link to='categorie/clothes'>
        <p>Clothing</p>
        { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link className='link' to='categorie/gamings'>
          <p>Videogames</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='categorie/instruments'>
          <p>Musical Istruments</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='categorie/homegarden'>
          <p>Home & Garden</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='categorie/cellphones'>
          <p>Cell phones</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='categorie/electro'>
          <p>Electronics</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
        </Link>
        </li>
        <li>
          <Link to='categorie/pets'>
          <p>Pets</p>
          { <MDBIcon className='inside ms-1' icon='camera' size='lg' />}
    </Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories
