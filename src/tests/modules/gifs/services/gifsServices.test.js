import { getGifs } from "../../../../modules/gif/services/gifsServices"

describe('Pruebas en gifServices', () => { 
    
    test('deberia de retornar un array de gifs',async () => { 
        
        const gifs = await getGifs('ironman')

        // espero que me llegue una arrya con algun elemento (no puedo evaluar que la respuesta sea la mimsa porque la api puede mandar gif distintos o respuestas distintas con mas o menos gifs)
        expect(gifs.length).toBeGreaterThan(0)
        
        // si la prueba anterior no fallo  testeo que la estructura de los gif que llegaron sea la correcta
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)

        })
     })
 })