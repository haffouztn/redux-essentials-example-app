import React from 'react'

export const ShowStatus = ({status}) => {
    let content= ''

    if (status === 'loading') {
      content = <div className="loader">Loading...</div>
    } else if (status === 'failed') {
      content = <div>error</div>
    }

    return content
}