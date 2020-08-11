const { uiReducer } = require("../../reducers/uiReducer");
const { uiOpenModal, uiCloseModal } = require("../../actions/ui");



const initstate = {
    modalOpen: false
};


describe('Pruebas en uiReducer', () => {
   
     test('debe retornar el estado por defecto', () => {
        
          const state = uiReducer( initstate, {} );

          expect( state ).toEqual( initstate );

     });


    test('debe abrir y cerrar el modal', () => {
       
        const modalOpen= uiOpenModal();
        const state = uiReducer( initstate, modalOpen );

        expect( state ).toEqual( { modalOpen: true } );


       const modalClose = uiCloseModal();
       const stateClose = uiReducer( state, modalClose );
       
       expect( stateClose ).toEqual({ modalOpen: false });

        

    });
    

});
