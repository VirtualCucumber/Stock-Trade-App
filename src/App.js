import React from 'react';
import Main from './components/Main/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee , faBars, faChartArea, faChartPie} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faBars, faChartArea, faChartPie);

function App() {
  return (
      <Main />
  );
}

export default App;
