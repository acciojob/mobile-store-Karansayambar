import React, { useEffect, useState } from 'react'
import { mobiles } from '../data'
import Header from './Header'
import { Link } from 'react-router-dom'

const Admin = () => {
    const [products, setProducts] = useState([])
    const fetchProduct = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(mobiles);
            })
        })
    }

    useEffect(() => {
        fetchProduct().then(result => setProducts(result))
    },[])
  return (
    <>
    <Header/>
    <div id='admin-products-container'>
            <button className='btn3'>Add prooduct</button>
            {
                products.map((mobile) => (
                    <Link key={mobile.id} to={`/admin/products/${mobile.id}`}>
                    <div key={mobile.id} className='admin-products'>
                        <img src={mobile.image}/>
                        <p>{mobile.title}</p>
                    </div>
                    </Link>
                ))
            }
    </div>
    </>
  )
}

export default Admin