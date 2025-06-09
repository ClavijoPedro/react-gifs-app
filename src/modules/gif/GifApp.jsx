import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifApp = () => {
  const [categories, setCategories] = useState(['ironman'])
  
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }
 
  return (
    <div className="app-container">

      <header>
        <img className="logo" src="logo.png" alt="logo" />
      </header>

      
      <main>

        <AddCategory onNewCategory={onAddCategory} />
        
      
        {categories.map((category, index ) => (

          <GifGrid category={category} key={index}/>

        ))}

      </main>


      <footer>
        <a href="https://github.com/ClavijoPedro" target="_blank">
          <img src="github.png" alt="github" style={{width:'40px'}} />
        </a>
      </footer>
    
    </div>
  );
};


