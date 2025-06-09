import { fireEvent, render, screen } from "@testing-library/react"
import { GifApp } from "../../../modules/gif/GifApp"

describe('Pruebas en GifApp component', () => { 
    
    const inputValue = 'ironman'
    
    test('debe agregar una nueva categoria', () => { 

        render(<GifApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target:{value:inputValue}})
        fireEvent.submit(form)
        
        const categorie = screen.getByText(inputValue)
        
        expect(categorie).toBeTruthy()
        
    })
    
    test('No debe agregar la categoria si ya existe', () => { 
        
        render(<GifApp />)
    
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form)

        const categories = screen.getAllByText(inputValue)
        // screen.debug()
        expect(categories.length).toBe(1)

     })


})