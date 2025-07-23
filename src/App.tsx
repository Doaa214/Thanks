// import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          <OrderForm />
        </>
      )}
      
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          text-align: right;
          background: linear-gradient(135deg, #fefefe 0%, #f9f4f4 100%);
          margin: 0;
          padding: 0;
        }
        
        .app {
          min-height: 100vh;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d4a574;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #b8956a;
        }
        
        /* Bootstrap RTL adjustments */
        .form-check-input:checked {
          background-color: #d4a574;
          border-color: #d4a574;
        }
        
        .btn-primary {
          background-color: #d4a574;
          border-color: #d4a574;
        }
        
        .btn-primary:hover {
          background-color: #b8956a;
          border-color: #b8956a;
        }
      `}</style>
    </div>
  );
}

export default App;
