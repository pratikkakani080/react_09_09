import React from 'react'

function Products() {
    const products = [
        {
            id: 1,
            title: 'iphone 18 pro max',
            price: '1,75,000',
            discountedPrice: '1,74,999',
            img: 'https://th.bing.com/th?id=OIF.KuBDBUOihK3ohd6LHH%2b%2fTw&r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            id: 2,
            title: 'iphone 18 pro',
            price: '1,50,000'
        },
        {
            id: 3,
            title: 'samsung galaxy s25',
            price: '60,000'
        },
        {
            id: 3,
            title: 'samsung galaxy s25',
            price: '60,000'
        },
    ]
  return (
    <div>
      {products.map((el, i, ar) => {
        return (
            <div>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <span><del>{el.price}</del></span>
                <span>{el.discountedPrice}</span>
                <img src={el.img} alt='image' height={100} width={100} />
            </div>
        )
      })}
    </div>
  )
}

export default Products
