import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

import './index.css'


import {
 
  RouterProvider,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>,
  // </section>
  
)
//