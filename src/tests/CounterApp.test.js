import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en primeraApp', () => {

    let wrapper = shallow(<CounterApp value={5}/>);

    beforeEach(() => {
        const value = 5;
        wrapper = shallow(<CounterApp value={value}/>);
    })

    test('debe mostrar <CounterApp /> correctamente ', () => {
        const value = 5;
        wrapper = shallow(<CounterApp value={value}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar como valor inicial 100 ', () => {
        const value = 100;
        wrapper = shallow(<CounterApp value={value}/>);

        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(100);
    });

    test('debe incrementar con el +1 ', () => {
        

        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');

        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(6);
    });

    test('debe decrementar con el -1 ', () => {

        const btn3 = wrapper.find('button').at(2);
        btn3.simulate('click');

        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(4);
    });

    test('debe colocar el valor por defecto con rst', () => {
        const value = 105;
        wrapper = shallow(<CounterApp value={value}/>);

        let btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');
        btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');
        let btnRst = wrapper.find('button').at(1);
        btnRst.simulate('click');


        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(value);
    })
    
    
    
});