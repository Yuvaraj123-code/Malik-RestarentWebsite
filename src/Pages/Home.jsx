import React, { useState, useEffect } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Hero from '../Assets/../Assets/images/Fast (2).png'
import '../Styles/hero-section.css'
import { Link } from 'react-router-dom'
import Category from '../Components/Ui/Category/Category'
import './../Style/Home.css'

import featuerimg01 from '../Assets/images/service-01.png';
import featuerimg02 from '../Assets/images/service-02.png';
import featuerimg03 from '../Assets/images/service-03.png';


import products from '../Assets/fake-data/product.js'
import foodCategoryImg01 from '../Assets/images/hamburger.png'
import foodCategoryImg02 from '../Assets/images/pizza.png'
import foodCategoryImg03 from '../Assets/images/bread.png'


import whyImg from '../Assets/images/location01.png'

import networkImg from '../Assets/images/network01.png'

import ProductCard from '../Components/Ui/Category/product-card/ProductCard.jsx'
// import { useEffect, useState } from 'react'

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featuerimg01, // Use the variable without quotes
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident dolor ex aperiam eligendi, incidunt soluta cum atque facere optio, possimus ea omnis obcaecati alias ad explicabo, quos expedita amet!',
  },
  {
    title: 'Super Dine In',
    imgUrl: featuerimg02, // Use the variable without quotes
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident dolor ex aperiam eligendi, incidunt soluta cum atque facere optio, possimus ea omnis obcaecati alias ad explicabo, quos expedita amet!',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featuerimg03, // Use the variable without quotes
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident dolor ex aperiam eligendi, incidunt soluta cum atque facere optio, possimus ea omnis obcaecati alias ad explicabo, quos expedita amet!',
  },
];


const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filterdPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filterdPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])


  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }

    if (category === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger')

      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza')

      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread')

      setAllProducts(filteredProducts);
    }
  }, [category])





  return <Helmet>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h5 className='mb-3'>Easy Way to make an Order</h5>
              <h1 className='mb-4 hero__title'><span>HUNGRY?</span>Just Wait <br></br>food at<span> your door ...</span></h1>
              <p>At Savory Bites & Delights, every dish is a masterpiece crafted with passion and precision. Our chefs blend the finest ingredients from around the world to create flavors that are both familiar and innovative!</p>
              <div className='hero__btns d-flex align-items-center gap-5 mt-4 '>
                <button className='order__btn d-flex align-items-center justify-content-between '>Ordre Now
                  <i class="ri-arrow-right-s-line"></i>

                </button>

                <button className='all__food-btn01'><Link to='/foods'>See all foods</Link></button>
              </div>


              <div className=' hero__service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-car-line"></i></span>
                  {" "}
                  No shipping charge</p>

                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-shield-check-line"></i></span>100% Secure check out</p>

              </div>


            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={Hero} alt="hero=img" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Category />
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h5 className='feature__subtitle mb-4'>What we Serve</h5>
            <h2 className='feature__title'>Just sit back at home</h2>
            <h2 className='feature__title'>we will <span>Take care</span></h2>
            <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint, error aut dolor illo dolorum, earum, sit praesentium aspernatur commodi mollitia eum itaque necessitatibus ducimus atque incidunt neque vel expedita.</p>
            <p className='feature__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatum voluptatem at sequi reiciendis repellendus dolore! Rerum tempore voluptatibus sed eum aliquam! Tempora nesciunt nemo provident facilis. Vel, laboriosam dolorum!</p>
          </Col>
          {
            featureData.map((item, index) => (
              <Col lg='4' md='4' key={index} className='mt-5'>
                <div className='feature__item text-center px-5 py-3 '>
                  <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3' />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))
          }




        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2>popular Foods</h2></Col>
          <Col lg='12'>
            <div className="food__category d-flex align-items-center justify-content-center gap-5 ">
              <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''} `}
                onClick={() =>
                  setCategory('ALL')
                }>All</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01} alt='' />Burger</button>

              <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg02} alt=' ' />Pizza</button>

              <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg03} alt=' ' />Bread</button>


            </div>
          </Col>

          {
            allProducts.map((item) => (
              <Col lg='3' md='4' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))
          }


        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' >
            <img src={whyImg} alt='' className='w-100' />
          </Col>

          <Col lg='6' md='6' >
            <div className="why__tasty-treat">
              <h2 className='tasty__treat-title mb-1'>why <span>tasty treat?</span></h2>
              <p className='tasty__treat-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum quidem impedit sint? Necessitatibus officia tenetur nemo explicabo quos libero, corrupti eum beatae voluptate porro accusantium unde autem eveniet ipsam?</p>

              <ListGroup className=''>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                    Fresh and tasty foods</p>
                  <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem</p>
                </ListGroupItem>

                <ListGroupItem className='border-0 ps-0'>
                  <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                    Quality Support </p>
                  <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nemo.</p>
                </ListGroupItem>

                <ListGroupItem className='border-0 ps-0'>
                  <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                    Order From Any Location</p>
                  <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nemo.</p>
                </ListGroupItem>



              </ListGroup>


            </div>
          </Col>
        </Row>
      </Container>
    </section>


    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2>Hot Pizza</h2>
          </Col>

          {
            hotPizza.map(item=>(
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item}/>
              </Col>
            ))
          }

        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
         

          <Col lg='6' md='6'>
         <div className='testmonial'>
         <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
         <h2 className='testimonial__title mb-4'>What our <span> customers</span> are saying</h2>
         <p className='testimonail__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis porro nesciunt veritatis alias, nihil ex vitae ducimus consequuntur delectus velit!</p>
         </div>
          </Col>

          <Col lg='6' md='6'>
          <img src={networkImg} alt='testmonial-image' className='w-100'/>
          </Col>

        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home 