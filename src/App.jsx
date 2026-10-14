import { Header, HeroBanner } from '@stratify-commerce/component-library'

export default function App() {
  return (
    <>
      <Header
        brand={<strong>Stratify</strong>}
        brandLabel="Stratify home"
        navigation={[
          { label: 'Home', href: '/', active: true },
          { label: 'Services', href: '/services', active: false },
          { label: 'Portfolio', href: '/portfolio', active: false },
          { label: 'About Us', href: '/about', active: false },
          { label: 'Contact', href: '/contact', active: false },
        ]}
      />

      <main>
        <HeroBanner
          backgroundImage="/images/hero.jpeg"
          backgroundImageAlt=""
          ctaContent={
            <>
              <p>Web Design &amp; Development</p>
              <h1>Your Vision. Built for the Web.</h1>
              <p>
                Custom websites for individuals, entrepreneurs, and small
                businesses—clean, fast, and built to convert.
              </p>
              <div>
                <a href="/portfolio">See My Work →</a>
                <a href="/contact">Let&apos;s Talk</a>
              </div>
            </>
          }
        />
      </main>
    </>
  )
}
