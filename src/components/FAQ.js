import React from 'react'
import { FaAngleLeft, FaAngleDown} from "react-icons/fa"
import {useState} from "react"
function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const content = [
    {label: "1. What is special about comparing rental car deals?", content:"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."},
    {label: "2. How do I find the car rental deals?", content:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."},
    {label: "3. How do I find such low rental car prices?", content:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."}
  ]



  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex)=>{
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex
      }
    })
  }

  const renderItems = content.map((item, index)=>{
    const isExpanded = index === expandedIndex
    let icon = <span className="text-2xl">{isExpanded ? <FaAngleDown/>:<FaAngleLeft /> }</span>

    const classes = `flex hover:bg-orange-500 justify-between p-3 bg-gray-50 border-b items-center cursor-pointer ${isExpanded && "bg-orange-500"}`
    return (
      <div key={item.id}>
        <div className={classes} onClick={() => handleClick(index)}>{item.label}{icon}</div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>)
  })
  return (
    <div className="drop-shadow-xl">
      <div>
        <p className="text-center text-2xl font-bold">FAQ</p>
        <h2 className="text-center text-6xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="mt-10">
        {renderItems}
      </div>
    </div>
  )
}

export default FAQ
