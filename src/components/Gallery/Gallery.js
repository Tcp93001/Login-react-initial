import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import GalleryPicture from "./GalleryPicture";
import Button from "../UI/Button/Button";
import styles from "./Gallery.module.css"

const pictureIds = [
  { id: 1001 },
  { id: 1002 },
  { id: 1003 },
  { id: 1004 },
  { id: 1005 },
]

function Gallery() {
  // Debido a que no usamos searchParams en este componente, sino que se usa
  // por el componente GalleryPicture, podemos usar ES6 para eliminar el mensaje
  // de la consola, dejando el espacio vacio y poniendo una coma.
  // Antes era asi: const [searchParams, setSearchParams] = useSearchParams();
  // Con ES6, queda así:
  const [, setSearchParams] = useSearchParams();

  return (
    <div className={styles.container}>
      <Card className={styles.gallery}>
        <h1>Galería</h1>
        <ul>
          {pictureIds.map(({ id }) => (
            <li key={id}>
              <Link to={`${id}`}>Imagen #{id}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
            <Button onClick={() => setSearchParams({ grayscale: true})}>
              B & N
            </Button>

            <Button onClick={() => setSearchParams({ grayscale: false})}>
              Color
            </Button>
        </div>
      </Card>
      <Routes>
        <Route path=":imageId" element={<GalleryPicture />} />
      </Routes>

    </div>
  )
}

export default Gallery;
