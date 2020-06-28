import React from 'react';
import routes from './routes';
import Header from './components/Header/Header'

function App() {    
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
}

export default App;
