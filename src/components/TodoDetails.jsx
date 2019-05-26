import React from 'react'

const TodoDetails = ({match}) => {
  return (
    <div>
      Détails de {match.params.id}
    </div>
  )
}

export default TodoDetails
