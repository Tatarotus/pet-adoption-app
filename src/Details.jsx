import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  return (
    <div>
      <h3>Details {id}</h3>
    </div>
  )
}

export default Details
