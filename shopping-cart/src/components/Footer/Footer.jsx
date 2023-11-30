import '../Footer/footer.css'
import { useFilters } from '../../hooks/useFilters' 
import { useCart } from '../../hooks/useCart'

export const Footer = () => {
  const { filters } = useFilters()

  const { cart } = useCart()

  return (
    <footer className='footer'>
    </footer>
  )
}