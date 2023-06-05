import React from 'react'

const Flipkart = () => {
    const obj=[
        {
            id:'1',
            image:"data:image/jpeg;base64,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",
            price:'47,500'
        }

    ]
  return (
    <div>
      
    </div>
  )
}

export default Flipkart