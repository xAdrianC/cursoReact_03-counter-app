import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

// el arg done hace que espera

describe('Pruebas con promesas', () =>{
    test('getHeroeByIdAsync debe retornar heroe async',(done) => {

        const id = 1;
        
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });

    });

    test('debe retornar error si el hero por id no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});