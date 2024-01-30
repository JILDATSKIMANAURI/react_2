import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

class App extends React.Component{
  render(){
    return(
      <> 
        <Home />
      </>      
    );
  }
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);