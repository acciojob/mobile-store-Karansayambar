
import React, { useEffect, useState } from 'react'
import { mobiles } from '../data';
import "../styles/App.css";
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mobiles), 1000)
        })
    }


    useEffect(() => {
        fetchData().then(result => {
            setData(result);
        });
    }, [])
  return (
    <div className='list'>
        {
            data.map((mobile) => (
                <div key={mobile.id} className='product'>
                    <img src={mobile.image}/>
                    <div className='clip1'>
                        <p><p>{mobile.title}</p></p>
                        <p>{mobile.description}</p>
                        <span className='clip2'>
                            <p>${mobile.price}</p>
                            <button className='btn'><Link to={`/products/${mobile.id}`}>Buy</Link></button>
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products