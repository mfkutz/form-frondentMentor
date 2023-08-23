import bgDesktop from '../../assets/bg-main-desktop.png'
import bgMobile from '../../assets/bg-main-mobile.png'
import Frontcard from '../Frontcard/Frontcard'
import Backcard from '../Backcard/Backcard'
import Form from '../Form/Form'
import './Container.css'
import { useState } from 'react'

const Container = () => {

    const [cardholderName, setCardholderName] = useState('Jane Appleseed');
    const [cardholderNumber, setCardholderNumber] = useState('0000 0000 0000 0000');
    const [cardholderMonth, setCardholderMonth] = useState('00');
    const [cardholderYear, setCardholderYear] = useState('00');

    const [cardSecurity, setCardSecurity] = useState('000');

    const handleNameChange = (newName) => {
        setCardholderName(newName);
    };

    const handleNumberChange = (newNumber) => {
        setCardholderNumber(newNumber);
    };

    const handleMonthChange = (newMonth) => {
        setCardholderMonth(newMonth);
    };

    const handleYearChange = (newYear) => {
        setCardholderYear(newYear);
    };

    const handleSecure = (pin) => {
        setCardSecurity(pin)
    }


    return (
        <div className='max_container'>

            <div className='container_left'>
                <img src={bgDesktop} alt="desktop" className='bg_desktop' />
                <img src={bgMobile} alt="mobile" className='bg_mobile' />
                <div className='frontcard'>
                    <Frontcard
                        name={cardholderName}
                        number={cardholderNumber}
                        month={cardholderMonth}
                        year={cardholderYear}
                    />
                </div>
                <div className='backcard'>
                    <Backcard
                        pinSecure={cardSecurity}
                    />
                </div>
            </div>

            <div className='container_right'>

                <Form
                    onNameChange={handleNameChange}
                    onNumberChange={handleNumberChange}
                    onMonthChange={handleMonthChange}
                    onYearChange={handleYearChange}
                    onPinChange={handleSecure}
                />

            </div>
        </div>
    )
}

export default Container