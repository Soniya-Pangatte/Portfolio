import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient.js'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </HashRouter>
)