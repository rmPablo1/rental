import React from 'react'
import appStore from "../assets/appstore.svg"
import playStore from "../assets/playstore.svg"
function Download() {
  return (
    <div className="container mx-auto p-6">
      <div className="w-1/3 flex flex-col gap-6">
        <h2 className="text-4xl font-bold">Download our app to get the most out of it</h2>
        <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div class="flex gap-4">
          <img src={appStore} alt="app store"/>
          <img src={playStore} alt="play store"/>
        </div>
      </div>
    </div>
  )
}

export default Download
