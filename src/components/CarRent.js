import React from 'react'
import Button from './Button'
function CarRent() {
  return (
    <div className="container mx-auto bg-gradient-to-r from-orange-300 to-white drop-shadow-lg">
      <form className="flex flex-col gap-5 z-10 px-20 py-10">
        <div className="flex gap-10 justify-between">
            <div className="flex flex-col flex-wrap  w-1/3">
              <label className="font-bold m-2">Select Your Car Type *</label>
              <select className="pl-3 h-10 border">
                <option value="volvo">Volvo</option>
                <option value="audi">Audi</option>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes Benz</option>
              </select>
            </div>
            <div className="flex flex-col w-1/3">
              <label  className="font-bold m-2">Pick-up *</label>
              <select className="pl-3 h-10">
                <option value="spain">Spain</option>
                <option value="america">United States</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="romania">Romania</option>
              </select>
            </div>
            <div className="flex flex-col w-1/3">
              <label  className="font-bold   m-2">Drop-of *</label>
              <select className="h-10 border pl-3">
                <option value="spain">Spain</option>
                <option value="america">United States</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="romania">Romania</option>
              </select>
            </div>
          </div>
          <div>
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col  w-1/3">
              <label  className="font-bold  m-2">Pick-up *</label>
              <input type="date" className="bg-white h-10 p-3 border"/>
            </div>
            <div className="flex flex-col  w-1/3">
              <label  className="font-bold m-2">Pick-up *</label>
              <input type="date" className="h-10 p-3 border"/>
            </div>
            <div className="self-end w-1/3">
              <Button primary className="text-xl w-full" >Search</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarRent
