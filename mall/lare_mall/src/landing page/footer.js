import React from 'react'
import { Input, Button, Row } from 'reactstrap'

function Footer(){
    const style = {
        positon : 'absolute',
        // bottom : '100%',
        height : '200px'
    }
    return (
        <footer className='bg-dark text-white fixed-bottom' style={style}>
            Join our mailing list <br/>

            {/* <Row className='text-center'>
                <input type='email' className='w-25 border form-control-sm'  />
                <button className='w-25 bg-dark border' >Suscribe</button>
            </Row> */}

        </footer>
    )    
}

export default Footer