import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"





const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer titulo={"HOLA!"} mensaje={"¡Bienvenido a nuestra tienda de mangas! Sumérgete en un mundo de historias cautivadoras, personajes increíbles y aventuras inolvidables. Encuentra tus mangas favoritos y descubre nuevas emociones en cada página. ¡Explora nuestra selección y deja que comience la aventura!"} />
    </>
  )
}

export default App
