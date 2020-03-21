import React from 'react'
import { Helmet } from 'react-helmet'

export const Head = ({ title, children }) => (
  <Helmet>
    <title>{title}</title>
    {children}
  </Helmet>
)
