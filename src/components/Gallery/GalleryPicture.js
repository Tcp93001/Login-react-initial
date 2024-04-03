import { useParams, useSearchParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import styles from "./GalleryPicture.module.css";

function GalleryPicture() {
  const { imageId } = useParams();
  const [ searchParams ] = useSearchParams();

  //El error estaba en que el valor que retorna setSearchParams es un string,
  // no un boolean. Por eso la linea 11 siempre regresa un estado false, porque
  // true booleano NO es igual a true string
  const useGrayScale = searchParams.get('grayscale') === "true";

  const url = `https://picsum.photos/id/${imageId}/200/300${
    useGrayScale ? '?grayscale' : ''
  }`;

  return (
    <Card className={styles.picture}>
      <img src={url} alt={`imagen-${imageId}`} />
    </Card>
  )
}

export default GalleryPicture;