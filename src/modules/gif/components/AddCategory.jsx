import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')
    

    const onImputChange = ({target}) => {
        
        setInputValue(target.value)

    }

    const onSubmit =(e) => {
       
        e.preventDefault()
        
        if(inputValue.trim().length <=1) return; 

        onNewCategory(inputValue.trim())
    
        setInputValue('')
    
    }


    return (
        <form onSubmit={onSubmit} aria-label="form">

            <input
                name="gifSearch"
                type="text"
                placeholder="Buscar Gifs"
                onChange={onImputChange}
                value={inputValue}
            />

        </form>
    )
}
