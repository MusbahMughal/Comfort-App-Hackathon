import React from 'react'

import HeroSection from '@/components/hero-section/HeroSection'
import Payment from '@/components/payment/Payment'
import TopCategories from '@/components/categories/TopCategories'
import FeaturedProduct from '@/components/featured-product/FeaturedProuct'
import HotCategories from '@/components/categories/HotCategories'
import OurProduct from '@/components/products/OurProducts'






export default function page() {
  return (
    <div>
      <HeroSection />
      <Payment />
      <FeaturedProduct />
      <TopCategories />
      <HotCategories />
      <OurProduct />

      
    </div>
  )
}