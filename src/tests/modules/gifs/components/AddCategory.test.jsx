import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../../../modules/gif/components"

describe('Pruebas en el componente AddCategory', () => {
    
    const inputValue = 'ironman'


    
    test('deberia de cambiar el valor de la caja de texto', () => { 

        // le paso una función vacia como parámetro al componente 
        render(<AddCategory onNewCategory={ () => {} }/>)

        // seleciono el input
        const input = screen.getByRole('textbox')

        // disparo el evento en el input que simulando la escritura del Texto (le tengo que pasar el valor al target del input)
        // al asignarle el valor al input se dispara la funcion onChange  que setea el valor en el state.
        fireEvent.input(input, {target:{value:inputValue}})

        expect(input.value).toBe(inputValue)

        // screen.debug()
     })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')


        fireEvent.input(input, {target:{value:inputValue}})

        // disparo le evento submit que utiliza la funcion onSubmit la cual ejecuta onNewCategory (funcion pasada por props desde el padre)
        fireEvent.submit(form)

        //chequeo que la funcion onSubmit haya seteado como vacio el input value.
        expect(input.value).toBe('')

        //evaluo que la funcion pasado por props haya sido llamada
        expect(onNewCategory).toHaveBeenCalled()

        //evaluo que la funcion pasada por props haya sido llamada una sola vez
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        
        //evaluo que la funcion pasado por props haya sido llamada con el valor del input como parametro
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        
        // screen.debug()
    })
    
    
    test('No debe llamar el onNewCategory si el input esta vacio', () => { 

        const emptyInput = ''
        
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input,{target:{value:emptyInput}})
        fireEvent.submit(form)
        
        // screen.debug()

        // evaluo que la funcion no haya sido llamada si el input esta vacio (return temprano en onSubmit)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()
    })


    
 })