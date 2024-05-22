import { useState, useEffect } from 'react'
import useBreedList from './useBreedList'
import Pet from './Pet'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, updateAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [breeds, status] = useBreedList(animal)
  const [pets, setPets] = useState([])
  // const [breedList, status] = useBreedList(animal)
  // const breeds = []

  useEffect(() => {
    requestPets()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    )
    const json = await res.json()
    setPets(json.pets)
  }

  return (
    <div className='search-params'>
      <pre>
        {JSON.stringify(status, null, 2)}
      </pre>
      <form
        onSubmit={e => {
          e.preventDefault()
          requestPets()
        }}
      >
        <label htmlFor='location'>
          Location
          <input
            id='location'
            onChange={e => setLocation(e.target.value)}
            value={location}
            placeholder='Location'
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={e => {
              updateAnimal(e.target.value)
              setBreed('')
            }}
            onBlur={e => {
              updateAnimal(e.target.value)
              setBreed('')
            }}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            id='breed'
            disabled={!breeds.length}
            value={breed}
            onChange={e => {
              setBreed(e.target.value)
            }}
            onBlur={e => {
              setBreed(e.target.value)
            }}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
      {pets.map(pet => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  )
}

export default SearchParams