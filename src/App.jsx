import { useState } from 'react'
import './App.css'
import Avatar from './images/Moon ☁️🌙☁️ (1).jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faChessQueen } from '@fortawesome/free-regular-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'





const BtnLink = ({name, icon}) => {

  return (
    <a className='btn-link'>
      {icon}
      <span>{name}</span>
    </a>
  )
}

const BtnLinkSmall = ({icon}) => {
  return (
    <a className='btn-link-small'>
      {icon}
    </a>
  )
}

const Info = () => {


  return (
    <section className='info'>
      <h1>Katamimo</h1>
      <p className='title'>Dimension Traveler</p>
      <a className="link-small" href='https://www.youtube.com/'>youtube.com</a>

      <section className='flex-row'>
        <BtnLink
          name="Email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
        />

        <BtnLink 
          name="GitHub"
          icon={<FontAwesomeIcon icon={faAddressCard} />}
        />
      </section>
      
    </section>
  )
}

const About = () => {

  return (
      <>
        <h3>About</h3>
        <p>Hi. I know I look like a cat, but Im actually a magical
            creature from another dimension. Ive never seen earth.
            Ive only heard about it. Hey, we should be freinds!</p>
      </>
  )
}


const Interests = () => {

  return (
      <>
        <h3>Interests</h3>
        <p>Hi. I know I look like a cat, but Im actually a magical
            creature from another dimension. Ive never seen earth.
            Ive only heard about it. Hey, we should be freinds!</p>
      </>
  )
}

const CardFooter = () => {

  return (
    <footer>

      {/* <BtnLink name="Name" icon={faCalendar} />
      <BtnLink name="Name" icon={faAddressCard} />
      <BtnLink name="Name" icon={faChessQueen} />
      <BtnLink name="Name" icon={faGem} /> */}

      <div className='footer-btns'>
        <BtnLinkSmall 
            icon={<FontAwesomeIcon icon={faCalendar} />}
          />
        <BtnLinkSmall 
          icon={<FontAwesomeIcon icon={faChessQueen} />}
        />
        <BtnLinkSmall 
          icon={<FontAwesomeIcon icon={faGem} />}
        />
        <BtnLinkSmall 
          icon={<FontAwesomeIcon icon={faCompass} />}
        />
      </div>
    </footer>
  )
}

const Card = () => {

  return (
    <main className='card'>

      <img 
        src={Avatar}
        className="img-avatar"
      />

      <section className="card-details">
        <Info />

        <section className='card-text'>
          <About />
          <Interests />
        </section>

      </section>
      
      <CardFooter />

    </main>

  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
