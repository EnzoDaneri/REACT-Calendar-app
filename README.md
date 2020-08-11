
########------------REACT----------###################

https://mern-app-enzo.herokuapp.com/ (App completa realizada)

React de cero a experto. Fernando Herrera(Udemy)
28 de junio de 2020.

*En el curso vemos React basado en Functional Components, que es la manera nueva de trabajar con React Hooks ( antes eran stateless functional components). Ya no se usa React basado en clases.

*El contenido de jsx se debe colocar dentro de un contenedor, por ej: un div. Pero es mejor evitar llenar de divs la aplicación. Para eso se usa <Fragment><Fragment/>(También tiene la forma corta que es: <></>.
--------------------------------------------------------------------
SNIPETS:

rafcp : Crea un functional component con proptypes.

rafce : crea functional component con exportación por defecto.

impt : importar proptypes.

--------------------------------------------------------------------

TESTING
PRUEBAS UNITARIAS: de un componente aislado.
PRUEBAS DE INTEGRACIÓN: de componentes en iteracción con otros en conjunto.

Preparación del ambiente:
1-ARRANGE (arreglar) Inicializamos variables, hacemos importaciones.
2-ACT (Actuar): Aplicar acciones o estímulos al sujeto de prueba. Ej: llamar métodos, simular clicks, realizar acciones sobre el paso anterior.

3-ASSERT (Afirmar): Observar el comportamiento resultante.

Consejo: Si hay poco tiempo, probar solamente la ruta crítica de la aplicación, es decir lo más importante que necesita para funcionar, y luego el resto.

*Cada archivo de prueba se llama 'Test suite'
*La función describe() es para mantener ordenadas mis pruebas.
##############################################################
PRUEBAS:
CONFIGURAR ENZYME:
*ENZYME: Creada por Airbnb y es mantenida por Facebook
  1-Instalación:  npm i --save-dev enzyme enzyme-adapter-react-16

  https://enzymejs.github.io/enzyme/

  2-Configurar Enzyme en el setupTests.js
  import Enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  Enzyme.configure({ adapter: new Adapter() });
 

  3-Instalación de librería adicional: npm install --save-dev enzyme-to-json



(https://www.npmjs.com/package/enzyme-to-json)
 
  4-Configuración de esa librería adicional (también en el mismo setupTests.js):

  import {createSerializer} from 'enzyme-to-json';
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
 
  5-npm run test
  6-Crear carpeta test en src
  7-Dentro de test crear carpeta components
  8-Dentro de carpeta components crear archivos con el mismo nombre que el original, pero agregando .test.js
  
*Para probar 'hooks' se usa una librería: https://react-hooks-testing-library.com/

npm install --save-dev @testing-library/react-hooks


*Para 'Redux' se usa redux-mock-store (permite crear un store)

  ' npm i redux-mock-store --save-dev '

import configureStore from 'redux-mock-store' //ES6 modules
const { configureStore } = require('redux-mock-store') //CommonJS
 
const middlewares = []
const mockStore = configureStore(middlewares)


https://www.npmjs.com/package/redux-mock-store

--------------------------------------------------------------------
* HELPERS: son funciones que hacen un cierto trabajo en específico(por ejemplo un fetch a API)
--------------------------------------------------------------------
DEPLOY EN GITHUB-PAGES
   
 1- En el index agregar un . antes de cada / para que luego encuentre ese recurso.
 2- Hacer el build. 
 3- Renombrar la carpeta build por docs.
 4- git add .
    git commit -m 'docs agregado'

 5- En github, en el repositorio, voy a settings, y el github-pages selecciono '/docs'
(cuando la url que da github se pone en verde es porque ya está desplegado, puede tardar algunos minutos)

--------------------------------------------------------------------
* ROUTER:

npm install react-router-dom

https://reactrouter.com/web/api/NavLink


-- history.replace('/'); navega a otra página, sin conservar la anterior en el historial de navegaciones.

--------------------------------------------------------------------

*** REDUX ***
Es un contenedor predecible del estado de nuestra aplicación.
Es independiente del framework que se utilice.

-Store: 'La fuente única de la verdad'
Es donde se almacena la información que mis componentes consumirán.

-REACT REDUX: Es la implementación de redux para React.

-1  'sudo npm install react-redux redux' 
-2  Configurar en el store :

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


*THUNK: Es un middleware para hacer acciones asíncronas en redux.

' npm install --save redux-thunk '
Configuración en Store: 
' const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
 '
Quedaría así el store: 
export const store = createStore( 
     reducers,
     composeEnhancers(
     applyMiddleware(thunk)
     )
     );

-----------------------------------------------------------------
*VALIDATOR: Librería para validar formularios (sino hay que usar expresiones regulares )

 ' npm install validator '

 import validator from 'validator';


------------------------------------------------------------------
* Sweet Alert2: Librería para manejar mensajes de error.
 ' npm install sweetalert2 '


En acciones Auth:

  import Swal from 'sweetalert2'

https://sweetalert2.github.io/
------------------------------------------------------------------

#################################################################
#################################################################

--------------------------------------------------------------
'BACKEND'
NODE jS

1- ' npm init -y '

2- ' npm i nodemon -g '  (para escuchar cambios)

3- "scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
  },

4- ' npm i express '

5- ' npm i dotenv ' (para variables de entorno) 

6- ' npm i express-validator ' (para validar formularios)Tiene el middelware check para eso.

7- ' npm i mongoose '

8- ' npm i bcryptjs ' (encriptar contraseña) 

9- ' npm i jsonwebtoken ' ( tokens de usuario )

10- ' npm i cors ' (para restringir el acceso a las rutas)


-----------------------------------------------------------
VER LOGS DE HEROKU
' heroku logs -n 1000 --tail ' (para ver mensajes en consola)





------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
