import React from 'react'

export const TextArea = () => {
  return (
    <div className="flex justify-center lg:justify-start lg:mx-10">
    <div className="mb-3 w-full mx-10 lg:mx-0 text-left">
      <label htmlFor="exampleFormControlTextarea1" className="form-label m-auto text-left block text-md opacity-100 font-medium mt-2">
        About me
    </label>
      <textarea
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-thin
          text-dark
          opacity-75
          bg-white bg-clip-padding
          border border-solid border-lightgray
          rounded
          transition
          ease-in-out
          m-0
        focus:text-dark focus:opacity-100 focus:bg-white focus:border-dark focus:outline-none
        "
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder="Describe yourself for your clients... ."
      ></textarea>
    </div>
  </div>
  )
}