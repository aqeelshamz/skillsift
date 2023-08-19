import React from 'react'
interface ChipProps {
    text: string;
  }

function Chip({ text }: ChipProps) {
  return (
    <span
    className="text-base font-semibold px-3 my-1 font-medium  leading-none border border-zinc-600 text-black rounded-full py-1.5"
  >
    {text}
  </span>  )
}

export default Chip