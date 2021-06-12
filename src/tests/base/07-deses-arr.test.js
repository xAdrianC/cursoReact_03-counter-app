import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas desestructuracion', () => {
    test('debe retornar un str y un num',() =>{
        // const arr = retornaArreglo();

        // expect(arr).toEqual(['ABC', 123]);

        // forma 2

        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })


})