import React from 'react'
import Annoucement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import NewsLetter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const  Home = () => {
  return (
    <div>
        <Annoucement />
        <NavBar/>
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home