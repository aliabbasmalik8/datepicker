import React from 'react';
import { Provider } from 'react-redux';

import { buildStore } from '../redux'
import { appReducer } from './app.reducer';

import {
  CSSLibrary,
} from '../src.interfaces'

import AppDatepicker from './AppDatepicker/'
import AppDatepickerControls from './AppDatepickerControls/'

const store = buildStore(appReducer)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={styles.root}>
        <h1 style={styles.title}>
          Check Out This Cool Datepicker!
        </h1>
          <div style={styles.datepickerWrapper}>
            <div style={styles.datepicker}>
              <AppDatepicker />
            </div>
            <AppDatepickerControls />
          </div>
      </div>
    </Provider>
  );
}

const styles: CSSLibrary = {
  root: {
    width: '100vw',
    height: '100vh',
  },
  title: {
    textAlign: 'center',
  },
  datepickerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  datepicker: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
}

export default App;
