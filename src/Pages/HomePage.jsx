import React from 'react'
import Banner from '../components/Banner/Banner.jsx'
import Categories from '../components/Categories/Categories.jsx'
import PopularItems from '../components/PopularItems/PopularItems.jsx'


const HomePage = () => {
  return (
   <main className="p-4 space-y-6">
      <Banner/>
      <Categories />
      <PopularItems />
    </main>
  )
}

export default HomePage
