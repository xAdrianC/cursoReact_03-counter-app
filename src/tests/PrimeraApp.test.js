import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en primeraApp', () => {
    // test('Debe devolver "hola, soy Adri"', () =>{
    //     const saludo = 'Hola, soy Adri';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     expect( getByText(saludo)).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Hola, soy Adri';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el subtitulo enviado pro props ', () => {
        const saludo = 'Hola, soy Adri';
        const subtitulo = 'Hola, soy el subtitulo de adri';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
    
    
});