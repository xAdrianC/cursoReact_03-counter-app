
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe devolver hola adri',() =>{

        const nombre = 'Adri';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    test('getSaludo debe devolver hola Carlos',() =>{

        const nombre = 'Adri';

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

    })
})