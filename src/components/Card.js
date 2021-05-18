import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'
//create the component
const Card = ({img, title, text, url}) => { 
        return ( 
                <div className="card" style={{width:'18rem'}}> 
                <CardImage img={img} /> 
                <CardBody title={title} 
                text={text} url={url} />
                </div> 
                ) }

//export the component 
export default Card

