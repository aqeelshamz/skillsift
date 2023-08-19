import React from 'react'
interface ChipProps {
    text: string;
  }

function Chip({ text }: ChipProps) {
  return (
    <span
<<<<<<< HEAD
    className="text-base  px-3 my-1 font-medium  leading-none border border-zinc-600 text-black rounded-full py-1.5"
=======
    className="text-base mx-1 px-3 my-1 font-medium  leading-none border border-zinc-600 text-black rounded-full py-1.5"
>>>>>>> cb2e044709639433de5b8b40afb94a91363f140b
  >
    {text}
  </span>  )
}

export default Chip