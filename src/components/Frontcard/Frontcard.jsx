import './Frontcard.css'
import frontcard from '../../assets/bg-card-front.png'
import logo from '../../assets/card-logo.svg'

const Frontcard = ({ name, number, month, year }) => {
  return (
    <div className='card_front'>
      <img src={frontcard} alt="credit card" className='front_bg' />
      <img src={logo} alt="logo" className='logo' />
      <div className='card_number'>
        {number}
      </div>
      <h3>{name}</h3>
      <p>{month}/{year}</p>
    </div>
  )
}

export default Frontcard