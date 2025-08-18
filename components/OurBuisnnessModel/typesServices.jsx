import React from 'react'

const TypesServices = ({serviceTypes}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
          {serviceTypes.map(({ icon, title, description }) => (
              <div key={title} className="p-6 rounded-xl bg-[var(--rv-primary)] hover:scale-110 cursor-pointer transition-all">
                <div  className="text-white mb-4">{icon}</div>
                <h3 className="text-white text-2xl mb-4">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default TypesServices
