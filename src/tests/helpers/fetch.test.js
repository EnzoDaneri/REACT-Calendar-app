const { fetchSinToken, fetchConToken } = require("../../helpers/fetch");

describe('Pruebas en el helper Fetch', () => {

    let token = '';
   
     test('fetch sin token debe funcionar', async () => {
        
            const resp = await fetchSinToken( 'auth', { email: 'enzo@gmail.com', password: '123456' }, 'POST' );

            expect( resp instanceof Response ).toBe( true );

            const body = await resp.json();
            expect( body.ok ).toBe( true );


             token = body.token;
     });

     test('fetch con token debe funcionar', async () => {
        
      localStorage.setItem('token', token);
      
      const resp = await fetchConToken( 'events/5f234b88dc99614efbc5ee4d', {}, 'DELETE' );
     
      const body = await resp.json();

     expect( body.msg ).toBe('Evento no existe por ese id')
      

 });
     
});

