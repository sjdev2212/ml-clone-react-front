import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'
import ReactLoading from 'react-loading'
import axios from 'axios'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit'

const Detail = () => {
  const { param, id } = useParams()
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const getItem = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/${param}/${id}`)
    setTimeout(() => {
      setItem(response.data)
      setLoading(false)
    }, 1000)
  }
  useEffect(() => {
    getItem()
  }, [])

  return (
    <div>
        <div className="loader">
        {loading && (<p>Loading...<ReactLoading type="spinningBubbles" color="green" /> </p>) }
        </div>
        <section>
            <div className="images ">
            <MDBCarousel showControls dark >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={item.image}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={item.image}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={item.image} alt='...'
      />
    </MDBCarousel>

            </div>
            <div>
            <MDBCard alignment='center'>
      <MDBCardHeader>Stock available: {item.stock}
      <br/>
     <br/>

        Price: US$ {item.price}.00

      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{item.name}</MDBCardTitle>
        <MDBCardText>{item.description}</MDBCardText>
        <MDBBtn color='success' href='#'>Add to cart</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
    </MDBCard>
            </div>
        </section>

    </div>
  )
}

export default Detail
