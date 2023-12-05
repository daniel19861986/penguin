// src/JS/Penguin.js

const Penguin = ({ styleType }) => {
    let style;
    switch (styleType) {
      case 'penguin-prime': 
        style = { backgroundColor: 'white' }; 
        break;
      case 'penguin-duo': 
        style = { backgroundColor: 'silver' }; 
        break;
      case 'penguin-ice': 
        style = { backgroundColor: 'lightblue' }; 
        break;
      case 'penguin-quad': 
        style = { backgroundColor: 'gold' }; 
        break;
      case 'penguin-quint': 
        style = { backgroundColor: 'coral' }; 
        break;
      default: 
        style = { backgroundColor: 'white' }; 
        break;
    }
    return <button style={style}>penguin-button</button>;
  };
  
  export default Penguin;
  
  