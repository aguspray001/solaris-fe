import React from 'react'

const FeatureText = ({value, description}) => {
  return (
    <div className="flex flex-row h-8 py-12 px-4 gap-4 justify-around items-center sm:border-r-2 sm:justify-between">
        <h1 className="w-24 text-2xl font-bold text-white">
            {value}
        </h1>
        <p className="w-24 text-white text-left">{description}</p>
    </div>
  )
}

export default FeatureText