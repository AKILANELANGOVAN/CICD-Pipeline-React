import React from 'react';
import ReactDOM from 'react-dom/client';

const AppComponent = () => {
  return (
    <div>
      <h1>Welcome to the CI/CD Sample Application</h1>
       <p>Current Time: {timerupdaate}</p>
    </div>
  );
};
const timerupdaate = new Date().toLocaleTimeString();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);
