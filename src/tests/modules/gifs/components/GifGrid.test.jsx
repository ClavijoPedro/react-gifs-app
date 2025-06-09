import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../../../modules/gif/components"
import { useFetchGifs } from "../../../../modules/gif/hooks/useFetchGifs"

//creao mock de hook
jest.mock('../../../../modules/gif/hooks/useFetchGifs')

describe('Pruebas en GifGrid component', () => { 


    const category = 'ironman'
    
    test('debe de mostrar el loader inicialmente', () => { 
        
        //simulo el objeto que retorna el hook
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        const {container} = render(<GifGrid category={category}/>)

        expect(container.querySelector('.spinner')).toBeTruthy()
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan la imagenes useFetchGifs', () => {
        
        //fake data
        const gifs = [
            {
                id:'ABC',
                title:'ironman',
                url:'https://localhost/ironman.jpg'
            },
            {
                id:'123',
                title:'batman',
                url:'https://localhost/batman.jpg'
            }
        ]

        //simulo el objeto que retorna el hook
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })

        render(<GifGrid category={category}/>)

        // evaluo que tenga tenga la cantidad de imagenes de gif que le pase en el mock
        expect(screen.getAllByRole('img').length).toBe(2)


        // screen.debug()
        

    })
 })