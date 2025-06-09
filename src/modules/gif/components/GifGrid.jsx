import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGifs(category)
    
    return (
        <>
          <h3 className="category-name">{category}</h3>
          
          {isLoading && <p className="spinner"></p>}

          <div className="card-grid">

            {images.map((img => (

                <GifItem key={img.id} {...img} />  

            )))}

          </div>

  
        </>
    );
};
