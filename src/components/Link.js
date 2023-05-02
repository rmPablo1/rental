import React from 'react'
import className from "classnames"

function Link({
  children,
  background,
  ...rest
}){
  let hasBackground;
  if (background){
    hasBackground = true
  }
  let classes = className('text-dark-900 mx-3 font-semibold hover:text-orange-500', hasBackground && 'px-4 py-2 text-white hover:text-white bg-orange-500 shadow-orange-500', rest.className)
  return (
    <a href="#" className={classes}>{children}</a>
  )
}

export default Link
