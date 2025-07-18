import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';
import { Todo } from './pages/Todo';
import { FormValidation } from './pages/FormValidation';
import { FormV } from './pages/FormV';

function App() {
  return (
   <Fragment>
    {/* <Todo/> */}
    {/* <FormValidation/> */}

    <FormV/>
   </Fragment>
  );
}

export default App;
