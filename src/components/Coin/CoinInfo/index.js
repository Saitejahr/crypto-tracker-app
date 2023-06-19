import React from 'react'
import './styles.css'
import { useState } from 'react'

const Coininfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 350) + "<span style='color:var(--grey)'> Read More...</span>"
  const longDesc = desc + "<span style='color:var(--grey)'> Read Less...</span>"

  const [flag, setFlag] = useState(false)

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 350 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  )
}

export default Coininfo
