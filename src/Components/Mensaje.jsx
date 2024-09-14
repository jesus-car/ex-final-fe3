import React from 'react'

const Mensaje = ( {error} ) => {
  return (
    <div>
      {error.name === '' ? '' : <p>{error.name}</p>}
      {error.email === '' ? '' : <p>{error.email}</p>}
      {error.name === '' || error.email === '' ? <p>Por favor verifique su información nuevamente</p> : ''}
    </div>
  )
}

export default Mensaje