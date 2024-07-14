import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mobiles } from '../data';
import Header from './Header';

const ProductDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        const result = mobiles.find((item) => item.id === parseInt(id));
        setData([result]);
    },[id]);


  return (
    <div>
        <Header/>
        {
            data.map((mobile) => (
                <div key={mobile.id} id='product-details'>
                    <img src={mobile.image} className='image'/>
                    <div>
                        <h2>{mobile.title}</h2>
                    {mobile.details.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                    <p>{mobile.description}</p>
                    <span className='price-cart'>
                        <h4>${mobile.price}</h4>
                        <button className='btn2'>order Products</button>
                    </span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductDetails