const { types } = require("../../types/types");


describe('Pruebas en types', () => {
   
     test('los types deben ser iguales', () => {
            
         expect( types ).toEqual({

  uiOpenModal: '[ui] Open modal',
  uiCloseModal: '[ui] Close modal',


  eventSetActive: '[event] Set Active',
  eventLogout: '[event] Logout event',
  eventStartAddNew: '[event] Start add new',
  eventAddNew: '[event] Set acctive',
  eventClearActiveEvent: '[event] clear active event',
  eventUpdated: '[event] Event updated',
  eventDeleted: '[event] Event deleted',
  eventLoaded: '[event] Events loaded',

  authCheckingFinish: '[auth] Finish checking login state',
  authStartLogin: '[auth] Start login',
  authLogin: '[auth] Login',
  authStartRegister: '[auth] Start Register',
  authStartTokenRenew: '[auth] Starttoken renew',
  authLogout: '[auth] Logout',
         });
        
     });
     
});
