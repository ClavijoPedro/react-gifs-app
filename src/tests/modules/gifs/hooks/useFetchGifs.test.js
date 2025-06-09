import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../../modules/gif/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('debe regresar el estado inicial', () => { 

        //renderizo el hook en su estado inicial (aún no hace el fetch)
        const {result} = renderHook(() => useFetchGifs('ironman'))
        const {images, isLoading} = result.current
        
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
        
    })
    
    test('debe retornar un array de imagenes y isLoading en false ', async () => { 
        
        const {result} = renderHook(() => useFetchGifs('ironman'))
        
        // espero a que el hook devuelva el resultado del fetch 
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        
        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
     })
 })