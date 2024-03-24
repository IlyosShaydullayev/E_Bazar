import React from 'react'

const selectData = [
    {
      name: 'Kulolchilik',
      subcategory: [
        {
            name: 'Haykallar'
        },
        {
            name: 'Idishlar'
        },
        {
            name: "Ko'zalar"
        },
      ]
    },
    {
        name: "To'qimachilik",
        subcategory: [
          {
              name: 'Gilamlar'
          },
          {
              name: 'Kiyimlar'
          },
          {
              name: 'Sharflar'
          },
        ]
      },
      {
        name: "Rasmlar",
        subcategory: [
          {
              name: 'Natyurmortlar',
          },
          {
              name: 'Portretlar'
          },
          {
              name: 'Manzaralar'
          },
        ]
      },
  ]


function Select({label}) {
  return (
    <div>
        <label className="block" htmlFor={label}>{label}
            <select id={label}>
                {selectData.map((item, index ) => (
                    <option key={index}>{item.name}</option>
                ))}
            </select>
        </label>
        <label>
            <select id={label}>
                {selectData.map((item, index ) => (
                    item.subcategory.map((item, index) => (
                        <option key={index}>{item.name}</option>
                    ))
                ))}
            </select>
        </label>
    </div>
  )
}

export default Select