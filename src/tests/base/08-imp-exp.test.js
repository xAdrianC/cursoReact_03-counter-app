import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('debe retornar un hero por id',() =>{
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefined si no existe el id',() =>{
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe retornar los heroes de DC con filter',() =>{
        const owner = 'DC';

        const heroes_own = getHeroesByOwner(owner)

        const heroeData = heroes.filter(ho => ho.owner === owner);

        expect(heroes_own).toEqual(heroeData);
    });

    test('debe retornar los heroes de Marvel con length',() =>{
        const owner = 'Marvel';

        const heroes_own = getHeroesByOwner(owner)

        const heroeData = heroes.filter(ho => ho.owner === owner);

        expect(heroes_own.length).toBe(heroeData.length);
    });


})