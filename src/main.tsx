import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>

)
