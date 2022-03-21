import React from 'react'

export const Check = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-2 mx-7 md:mx-7">
     <div  className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
         <p className='text-md font-medium mb-1 text-gray-900'> Transportation</p>
         <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
        <input className="form-check-input appearance-none h-4 w-4 border px-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="Transportation" id="Transportation"/>
        <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="Transportation">
            Provide transportation to your Client
        </label>
      </div>
     </div>
      <div  className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
          <p className='text-md font-medium mb-1 text-gray-900'>House hold tasks</p>
          <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
            <input className="form-check-input appearance-none h-4 w-4 border px-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="HouseHoldTasks" id="HouseHoldTasks"/>
            <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="HouseHoldTasks">
                Perpare meal, take care of the house
            </label>
        </div>
      </div>
        <div className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
            <p className='text-md font-medium mb-1 text-gray-900'>Personal care</p>
            <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
                <input className="form-check-input appearance-none h-4 w-4 px-2 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="PersonalCare" id="PersonalCare"/>
                <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="PersonalCare">
                Provide personal help to your client  like shower, clothings ext.
                </label>
            </div>
        </div>
      <div className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
        <p className='text-md font-medium mb-1 text-gray-900'>Specialized care</p>
        <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
            <input className="form-check-input appearance-none h-4 w-4 px-2 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="SpecializedCare" id="SpecializedCare"/>
            <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="SpecializedCare">
            Experience with different types of diseases
            </label>
        </div>
      </div>
    <div className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
        <p className='text-md font-medium mb-1 text-gray-900'>Mobility assisstance</p>
        <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
            <input className="form-check-input appearance-none h-4 w-4 px-2 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="MobilityAssistance" id="MobilityAssistance"/>
            <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="MobilityAssistance">
            provide physical help to your client
            </label>
        </div>
    </div>
    <div className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-3">
        <p className='text-md font-medium mb-1 text-gray-900'>Companionship</p>
        <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
            <input className="form-check-input appearance-none h-4 w-4 px-2 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="Companionship" id="Companionship"/>
            <label className="form-check-label px-2 text-sm text-gray-800" htmlFor="Companionship">
            Provide company and be able to talk and enjoy time with your client
            </label>
        </div>
    </div>
    </div>

    )
}
