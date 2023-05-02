import React from 'react'
import className from "classnames"
function Button({
  children,
  primary,
  secondary,
  icon,
  ...rest
}) {

  const classname = className('text-black px-3 py-2',
    primary && 'bg-orange-500 text-white',
    secondary && 'bg-zinc-950 text-white',
    icon && ' flex gap-1 items-center',
    rest.className
  )
  return (
    <button {...rest} className={classname}>{children}</button>
  )
}

export default Button
