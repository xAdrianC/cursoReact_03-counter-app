

import {getUsuarioActivo, getUser} from '../../base/05-funciones';

describe('Pruebas en 02-template-string.js', () => {
    test('getUser debe devolver un objeto',() =>{

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toEqual( userTest )

    })

    test('getUsuarioActivo debe devolver un objeto',() =>{

        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const user = getUsuarioActivo('El_Papi1502')

        expect(user).toEqual( userTest )

    })

})