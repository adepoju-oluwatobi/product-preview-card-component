import React from 'react'
import producImgMobile from '../assets/image-product-mobile.jpg'
import producImgDesktop from '../assets/image-product-desktop.jpg'
import Cart from '../assets/icon-cart.svg'

function ProductPreview() {
  return (
    <div className='bg-white w-[90%] md:w-[800px] h-[70%] md:h-[600px] m-auto rounded-2xl md:flex '>
       <div className='md:w-[50%]'>
        <img className='md:hidden rounded-t-2xl' src={producImgMobile} alt="" />
        <img className='hidden rounded-l-2xl md:block' src={producImgDesktop} alt="" />
       </div>

       {/** --------------------------------------------------------------------------- */}
      <div className='md:w-[50%] p-4'>
         <div className='p-4'>
        <p className='product-category'>PERFUME</p>
        <p className='product-name md:desktop-line-height'>Gabriel Essence Eau De Parfum</p>
        <p className='product-description'>
            A floral, solar and voluptuous interpretations composed by Olivier Polge, Herfume-Creator for the House of CHANEL.
        </p>
        <div className='flex items-center gap-2'>
            <p className='product-price'>$149.99</p>
            <p><s className='opacity-50 text-black md:text-sm'>$169.99</s></p>
        </div>
        <button className='btn'>
            <img className='w-3 md:w-5' src={Cart} alt="" />
            Add to Cart
        </button>
       </div>
      </div>
    </div>
  )
}

export default ProductPreview