import { useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'
import useBreedList from './useBreedList'
import fetchSearch from './fetchSearch'
import Results from './Results'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: '',
    breed: '',
    location: '',
  })
  const [location, setLocation] = useState('')
  const [animal, updateAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const [adoptedPet] = useContext(AdoptedPetContext)

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <div className='search-params'>
      <form
        onSubmit={e => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          }
          setRequestParams(obj)
        }}
      >
        {adoptedPet ? (
          <div className='pet image-container'>
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor='location'>
          Location
          <input
            name='location'
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
            name='animal'
            value={animal}
            onChange={e => {
              updateAnimal(e.target.value)
            }}
            onBlur={e => {
              updateAnimal(e.target.value)
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
          <select id='breed' disabled={!breeds.length} name='breed'>
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
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
