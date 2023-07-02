import React from 'react'
import producImgMobile from '../assets/image-product-mobile.jpg'
import producImgDesktop from '../assets/image-product-desktop.jpg'
import Cart from '../assets/icon-cart.svg'

function ProductPreview() {
  return (
    <div className='bg-white w-[90%] h-[60%] m-auto rounded-2xl'>
       <div>
        <img className='md:hidden rounded-t-2xl' src={producImgMobile} alt="" />
        <img className='hidden md:block' src={producImgDesktop} alt="" />
       </div>
       <div className='p-4'>
        <p className='product-category'>PERFUME</p>
        <p className='product-name'>Gabriel Essence Eau De Parfum</p>
        <p className='product-description'>
            A floral, solar and voluptuous interpretations composed by Olivier Polge, Herfume-Creator for the House of CHANEL.
        </p>
        <div className='flex items-center gap-2'>
            <p className='product-price'>$149.99</p>
            <s className='opacity-50 text-xs'>$169.99</s>
        </div>
        <button className='btn'>
            <img className='w-3' src={Cart} alt="" />
            Add to Cart
        </button>
       </div>
    </div>
  )
}

export default ProductPreview