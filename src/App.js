import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CarRent from './components/CarRent'
import Explanation from './components/Explanation'
import CarList from './components/CarList'
import car1 from "./assets/car1.jpg"
import car2 from "./assets/car2.jpg"
import car3 from "./assets/car3.jpg"
import car4 from "./assets/car4.jpg"
import car5 from "./assets/car5.jpg"
import car6 from "./assets/car6.jpg"
import Aboutus from './components/Aboutus'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
function App() {
  const cars = [
    {img: car1, price: 45, name: "Audi A1 S-Line", model: "Audi", mark: "A1", year:2012, doors: "4/5", ac: "Yes", transmission: "Manual", fuel:"Gasoline" },
    {img: car2, price: 37, name: "VW Golf 6", model: "VW", mark: "Golf", year:2006, doors: "4/5", ac: "Yes", transmission: "Manual", fuel:"Diesel" },
    {img: car3, price: 30, name: "Toyota Camry", model: "Toyota", mark: "Camry", year:2012, doors: "4/5", ac: "Yes", transmission: "Automatic", fuel:"Hybrid" },
    {img: car4, price: 35, name: "BMW 320 Modernline", model: "BMW", mark: "320", year:2012, doors: "4/5", ac: "Yes", transmission: "Manual", fuel:"Diesel" },
    {img: car5, price: 50, name: "Mercedes-Benz GLK", model: "Mercedes", mark: "GLK", year:2006, doors: "4/5", ac: "Yes", transmission: "Manual", fuel:"Diesel" },
    {img: car6, price: 25, name: "VW Passat CC", model: "VW", mark: "Passat", year:2008, doors: "4/5", ac: "Yes", transmission: "Automatic", fuel:"Gasoline" },
  ]
  return (
    <>
      <Navbar />
      <HeroBanner />
      <CarRent/>
      <Explanation/>
      <CarList cars={cars}/>
      <div className="w-full bg-stone-900 p-20 flex flex-col items-center justify-center mt-60">
        <h1 className="text-white text-7xl font-bold">Save big with our cheap car rental!</h1>
        <p className="text-white text-4xl font-bold mt-10">Top Airports. Local Suppliers.<span className="text-orange-500"> 24/7</span> Support</p>
      </div>
      <div className="container-custom">
        <Aboutus />
      </div>
      <div className="bg-stone-200">
        <div className="container-custom p-20">
          <Reviews />
        </div>
      </div>
      <div className="container-custom2">
        <FAQ/>
      </div>
      <div className="bg-stone-200 py-5 mt-10">
        <Download/>
      </div>
      <div class="container mx-auto mt-20 mb-20">
        <Footer/>
      </div>
    </>
  )
}

export default App
