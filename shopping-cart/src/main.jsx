import ReactDOM from 'react-dom/client'
import App from './App'
import {  FiltersProvider } from './context/filters.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
    <FiltersProvider>
        <App />
    </FiltersProvider>
)