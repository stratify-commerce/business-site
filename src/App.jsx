import { Header } from '@stratify-commerce/component-library'

export default function App() {
  return (
    <Header
      brand={<strong>Stratify</strong>}
      brandLabel="Stratify home"
      navigation={[
        { label: 'Home', href: '/', active: true },
        { label: 'Services', href: '/services', active: false},
        { label: 'Portfolio', href: 'portfolio', active: false},
        { label: 'About Us', href: '/about', active: false},
        { label: 'Contact', href: '/contact', active: false}
    ]}
    />
  )
}
