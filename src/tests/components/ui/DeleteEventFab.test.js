import React from 'react';


import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { eventStartDelete } from '../../../actions/events';



jest.mock('../../../actions/events', () => ({

      eventStartDelete: jest.fn()
}));

 

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(

    <Provider store={ store }> 
      <DeleteEventFab/>
    </Provider>

); 

describe('Pruebas en <DeleteEventFab/>', () => {
    
    test('debe mostrarse correctamente', () => {

         expect( wrapper ).toMatchSnapshot();
        
    });


    test('debe llamar el eventStartDelete al hacer click', () => {
       
         wrapper.find('button').prop('onClick')();

         expect( eventStartDelete ).toHaveBeenCalled();

    });
    
     
});
 