import { useState } from 'react'
import './Explore.css'

function Explore() {
  const [dogImage, setDogImage] = useState(null)
  const [dogError, setDogError] = useState('')
  const [dogLoading, setDogLoading] = useState(false)

  const fetchDog = async () => {
    setDogLoading(true)
    setDogError('')
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogImage(data.message)
    } catch (error) {
      console.error('Error fetching dog image:', error)
      setDogError('Failed to fetch dog image. Try again!')
    }
    setDogLoading(false)
  }

  return (
    <div className="explore">
      <h1>Explore APIs</h1>
      <p className="explore-subtitle">Click the button to fetch live data from the internet!</p>

      <div className="api-card">
        <h2>Random Dog</h2>
        <p className="api-desc">Fetches a random dog image from the Dog API</p>
        <button onClick={fetchDog} disabled={dogLoading}>
          {dogLoading ? 'Loading...' : 'Get a Dog!'}
        </button>
        {dogError && <p className="error">{dogError}</p>}
        {dogImage && (
          <div className="api-result">
            <img src={dogImage} alt="Random Dog" className="dog-img" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore