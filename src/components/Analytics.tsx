import React from 'react'

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=AW-414919591`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-414919591');`
      }}
    />
  </>
)

export default Analytics