import React from 'react'

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=UA-190884334-1`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-414919591');
            gtag('config', 'UA-190884334-1', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics