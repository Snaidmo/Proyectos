import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
//const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'



function App() {
  const { fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  
  //para recuperar la cita al renderizar la pagina


  // para recuperar la imagen
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three word for ${fact}`}
        />
      )}
    </main>
  )
}

export default App
