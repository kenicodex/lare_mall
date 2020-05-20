import React from 'react'
import { Container, Row, Col } from 'reactstrap'
/*
this is the landing page component
for  the main time no database till further, 
so will be using dummydata
*/
function Body(){
    // const style = {
    // }
    const dummyDataBoys = [
        // here is where the array of products
        {id: '1', name_of_item:'name' , img : 'logo192.png', about : 'decription',  },
        {id: '1', name_of_item:'name' , img : 'logo192.png', about : 'decription',  },
        {id: '1', name_of_item:'name' , img : 'logo192.png', about : 'decription',  },
        {id: '1', name_of_item:'name' , img : 'logo192.png', about : 'decription',  }
    ]
    return (
         <Container className=' d-flex p-lg-5'> 
           <Row className='pr-1'>
           {dummyDataBoys.map(({ name_of_item, img, about })=>{
                    return(
                        <Col xs='12' md='6'>boys
                        <div className='card m-1' style={{width:'auto'}}>
                        <img src={img} className="card-img-top" alt="..." height='200px' width='100%' /> <hr/>
                        <div className="card-body">
                        <h5 className="card-title">{name_of_item}</h5>
                        <p className="card-text">{about}</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        </Col>
                    )
                })}
           </Row>
           <div className='m-2 p-1'></div>
           <Row className='pl-2'>
           {dummyDataBoys.map(({ name_of_item, img, about })=>{
                    return(
                        <Col xs='12' md='6'>girl
                        <div className='card m-1' style={{width:'auto'}}>
                        <img src={img} className="card-img-top" alt="..." height='200px' width='100%' /> <hr/>
                        <div className="card-body">
                        <h5 className="card-title">{name_of_item}</h5>
                        <p className="card-text">{about}</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        </Col>
                    )
                })}
           </Row>
        </Container>
        )    
}

export default Body