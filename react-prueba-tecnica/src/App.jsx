import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()


const getRandomFact = () =>{
  fetch(CAT_ENDPOINT_RANDOM_FACT)
  .then(res => res.json())
  .then(data =>{
    const {fact} = data
    setFact(fact)
  })
}

  //para recuperar la cita al renderizar la pagina
  useEffect(() => {
    getRandomFact()
  }, [])

 // para recuperar la imagen

  useEffect(()=>{

if(!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three word for ${fact}`}
        />
      )}
      <button onClick={getRandomFact}>Otro hecho radom</button>
    </main>
  )
}

export default App
