import React from 'react'
import Categoryimg01 from '../../../Assets/images/category-1.png'
import Categoryimg02 from '../../../Assets/images/category-2.png'
import Categoryimg03 from '../../../Assets/images/category-3.png'
import Categoryimg04 from '../../../Assets/images/category-04.png'
import './Category.css'

import {Container,Row,Col} from "reactstrap"


const CategoryDate = [
    {
        display:'fastfood',
        imgUrl: Categoryimg01
    },
    {
        display:'Pizza',
        imgUrl: Categoryimg02
    },
    {
        display:'Asian Food',
        imgUrl: Categoryimg03
    },
    {
        display:'Meat',
        imgUrl: Categoryimg04
    },
]
const Category = () => {
  return  <Container>
    <Row>
        {
            CategoryDate.map((item,index)=>(
                <Col lg='3' md='4'>
               <div className="category__item d-flex align-items-center
             gap-3">
                 <div className="category__img">
                    <img src={item.imgUrl} alt='category__item'/>
                 </div>
                 <h6>{item.display}</h6>
               </div>
            </Col>
            ))
        }
      
    </Row>
  </Container>

}

export default Category