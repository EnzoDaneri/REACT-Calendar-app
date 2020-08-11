const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");


const initState = {
    checking: true
}



describe('Pruebas en el authReducer', () => {
   
    test('debe retornar el estado por defecto', () => {
        
        const action = {};
        const state = authReducer(initState, action);

        expect( state ).toEqual( initState );
         
    });


    test('debe autenticar el usuario', () => {
       
        const action = {

            type: types.authLogin,
            payload: {
                uid: '123', 
                name: 'Fernando'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({  checking: false, uid: '123', name: 'Fernando' });
        

    });
    
    


});
