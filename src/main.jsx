import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={ router} />
      <Toaster></Toaster>
  </>,
)
