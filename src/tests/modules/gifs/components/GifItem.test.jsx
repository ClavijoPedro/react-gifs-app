import { render, screen } from "@testing-library/react"
import { GifItem } from "../../../../modules/gif/components"

describe('Pruebas en GifItem component', () => {

    const title = 'Ironman'
    const url = 'https://ironman.com/iron.jpg' 


    test('El snapshot deberia coincidir', () => {

        const {container} = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<GifItem title={title} url={url} />)

        // pruebo que el src y alt del tag img sean los correctos. (getByRole trae tags y atributos de los tags)

        // expect(screen.getByRole('img').src).toBe(url) // forma larga
        // expect(screen.getByRole('img').alt).toBe(title) // forma larga

        const {src, alt} = screen.getByRole('img') // forma corta desestructuro los attributos sin repetir linea

        expect(src).toBe(url)
        expect(alt).toBe(title)
     })

     test('debe de mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={title} url={url} />)

        // espero que imprima el title en algun tag del componente (no busca en los atributos alt o url)
        expect(screen.getByText(title)).toBeTruthy()
      
    })

})