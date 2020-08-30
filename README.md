########------------REACT----------###################

https://mern-app-enzo.herokuapp.com/ (App completa realizada)

React de cero a experto. Fernando Herrera(Udemy)
28 de junio de 2020.

*En el curso vemos React basado en Functional Components, que es la manera nueva de trabajar con React Hooks ( antes eran stateless functional components). Ya no se usa React basado en clases.

*El contenido de jsx se debe colocar dentro de un contenedor, por ej: un div. Pero es mejor evitar llenar de divs la aplicación. Para eso se usa <Fragment><Fragment/>(También tiene la forma corta que es: <></>.
--------------------------------------------------------------------
export const Home = ({ isAuthenticated,
                       component, 
                       ...rest   }) => {}
Cuando los 3 puntos se usan en los argumentos de una función, se llama operador rest. Y cuando se usan en otra parte se llaman spread.

--------------------------------------------------------------------
SNIPETS:

rafcp : Crea un functional component con proptypes.

rafce : crea functional component con exportación por defecto.

impt : importar proptypes.

imr : importar React
--------------------------------------------------------------------

####### 'HOOKS': Son funciones que vienen incorporadas en React, aunque pueden también crearse custom hooks.

 -' useState ' const [ value, setValue ] = useState(defaultValue);
   Retorna un arreglo.

 -' useEffect ' ejecuta una instrucción cada vez que se monta el componente, y cada vez que cambie la dependencia que indique en el arreglo de dependencias para escuchar. 
Opcionalmente, en el medio puede llevar una función que limpia alguna otra acción.

 -' useMemo '
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);
 Memoriza ese resultado y la dependencia le dice cuando tiene que volver a memorizar ese resultado

- ' useCallback ' Tiene 2 casos principales de uso: 1- para mandar una función a un componente hijo. Memoriza una función y solamente la crea nuevamente cuando renderiza si la dependencia especificada cambia.

(También uso el React.Memo en el hijo)
const increment = useCallback(
      () => {
        setCounter( c => c + 1 );

      },
      [setCounter],
  )

2- El otro caso  de uso es cuando tengo un useEffect que tiene una dependencia y esa dependencia es una función.


- ' useReducer ' Hace lo mismo que el useState, pero el useReducer se utiliza cuando hay muchas acciones que pueden modificar el state de la aplicación. Para un estado simple conviene useState, pero para algo más complejo se debería usar useReducer.

'const [state, dispatch] = useReducer(reducer, initialState, init) '
El tercer argumento, que es la función init, es opcional y me puede servir para ayudar a computar el estado inicial de una manera más rápida, y que no se tenga que estar redibujando. Por ejemplo, puede usarse para grabar también en local storage mediante un useEffect.(CLASE 128)

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, [], init);

   const [{ description }, handleInputChange, reset ] = useForm({
       description: '',
   });


   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify( todos ));
   }, [todos]);


La idea de un reducer es tener controladas en un solo lugar todas las acciones que pueden modificar el estado de la aplicación.
*REDUCER: Un reducer es una función común y corriente.
-No puede ser asíncrona.
-Debe ser una función pura(todo lo que realice debe resolverse de manera interna).
Función Pura:
.No debe tener efectos secundarios(no llamar a otras funciones y resolver todo internamente)
.No debe realizar tareas asíncronas.
.Debe retornar siempre un nuevo estado.
.No debe llamar localStorage o sessionStorage.
.No debe requerir más que una acción que puede tener un argumento.

-Debe retornar un nuevo estado(no muta el estado anterior, sino que regresa uno nuevo).
-Usualmente recibe sólo dos argumentos: el valor inicial y la acción a ejecutar.

La acción es un objeto. El estándar es que se use la palabra type para indicar qué tipo de acción es (para agregar, borrar, etc)
También por convención se usa la palabra payload para indicar el estado que quiero modificar.

const action = {
    type: 'agregar',
    payload: newTodo
}


*El state se muestra en la vista, la vista dispara la acción, la acción es recibida por el reducer, y el reducer devuelve un nuevo state que será mostrado por la vista nuevamente.
Toda la información fluye en una sola vía y de manera controlada.


' useContext ' Permite manejar información entre componentes sin pasar props entre padres, hijos etc. Centraliza la información en un lugar que sea accesible para que pueda usarla cualquier componente.
Ese lugar es el Context, el cuál es un contenedor de información que se encuentra en un nivel superior de la app y que permite a los hijos acceder a sus métodos y poder ejecutarlos.

*CreateContext() Crea un high order component
Ej: export const UserContext = createContext(null);
Luego lo puedo usar así:   
             import { UserContext } from './UserContext'

export const MainApp = () => {

   const user = {
       id: 1234,
       name: 'Fernando',
       email: 'fernando@gmail.com'
   }


    return (
            <UserContext.Provider value={ user } >
              <AppRouter/>
            </UserContext.Provider>
        
            
    )
}

Entonces todos los hijos del AppRouter van a tener acceso a esa información del context.
--------------------------------------------------------------------

TESTING
PRUEBAS UNITARIAS: de un componente o una funcionalidad aislada.
PRUEBAS DE INTEGRACIÓN: de componentes o funcionalidades en interacción con otros en conjunto.

'test suite': cada uno de los archivos de prueba.

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

' npm install --save-dev @testing-library/react-hooks '


*Para 'Redux' se usa redux-mock-store (permite crear un store)

  ' npm i redux-mock-store --save-dev '

import configureStore from 'redux-mock-store' //ES6 modules
const { configureStore } = require('redux-mock-store') //CommonJS
 
const middlewares = []
const mockStore = configureStore(middlewares)


https://www.npmjs.com/package/redux-mock-store


'shalow ': Prueba el componente aislado y de manera más superficial.
' mount ': Prueba el componente en su contexto general, con sus hijos, etc. Es para higher order components.



*  ' MemoryRouter ' Sirve para probar mis rutas. Se envuelven en ese componente y funciona como un Router.(Clase N° 199). 
    const wrapper = mount(
            <MemoryRouter>
             <PrivateRoute 
                isAuthenticated={ true }
                component={ () => <span>Listo!</span> }
                { ...props }
             />
             </MemoryRouter> 
             );


    });

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

 Link
*NavLink: Permite saber en qué ruta me encuentro.(La diferencia entre Link y NavLink es solamente que en NavLink se puede activar una clase de manera condicional si ese link está activo)

            <NavLink exact activeClassName="active" to="/login" className="nav-link" >Login</NavLink>



-- history.replace('/'); navega a otra página, sin conservar la anterior en el historial de navegaciones.

--history.push('/') navega a otra página pero conservando la anterior en el historial de navegaciones.

--  history.goBack(); regresa a la página anterior.
    Además, con esta validación, no me saca de mi sitio en caso de que no tenga páginas para retroceder, sino que me redirecciona al home.
 const handleReturn = () => {
        if( history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
     
    }


*' useParams ' Es un hook que tiene React-Router para extraer los parámetros que vienen por el url.

const params = useParams();

*' useLocation ' Es un hook de react-router para obtener la locación
  const location = useLocation(); (Clase N° 181).

# ' npm install query-string ' Librería para trabajar con query string, porque react no lo trae todavía.
https://www.npmjs.com/package/query-string.

*' useHIstory ' Es un hook que viene en React-Router-Dom para acceder al history que ya viene en el context.( Clase N° 190 ).
const history = useHistory()


*En PrivateRoute: localStorage.setItem('lastPath', rest.location.pathname); Para grabar la última ruta en la que estuvo el usuario y que pueda entrar ahí directamente cuando haga login de nuevo.(Clase N°193).
Luego en Login:  const handleLogin = () => {

      const lastPath = localStorage.getItem('lastPath') || '/';
 
     dispatch({
       type: types.login,
       payload: {
         name: 'Fernando'
       }
     });

     history.replace( lastPath );
        
    }


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

