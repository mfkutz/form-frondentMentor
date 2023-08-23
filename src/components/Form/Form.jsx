import { useState } from 'react'
import './Form.css'
import Sent from '../Sent/Sent'

const Form = ({ onNameChange, onNumberChange, onMonthChange, onYearChange, onPinChange }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [secure, setSecure] = useState('')
    const [nameError, setNameError] = useState(false)
    const [numberCardError, setNumberCardError] = useState(false)
    const [numberCardError2, setNumberCardError2] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)
    const [securePin, setSecurePin] = useState(false)
    const [expiredCard, setExpiredCard] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const resetForm = () => {
        setName('')
        setNumber('')
        setMonth('')
        setYear('')
        setSecure('')
        setNameError(false)
        setNumberCardError(false)
        setNumberCardError2(false)
        setMonthError(false)
        setYearError(false)
        setSecurePin(false)
        setExpiredCard(false)
        setSubmitted(false)
    };

    const handleNameChange = (event) => {
        const newName = event.target.value
        setName(newName)
        onNameChange(newName)
        setNameError(false)
    }

    const handleNumberChange = (event) => {
        const newNumber = event.target.value
        const formattedNumber = newNumber.replace(/\s/g, '')

        if (formattedNumber !== '') {
            const result = formattedNumber.match(/.{1,4}/g).join(' ')
            setNumber(result)
            onNumberChange(result)
            setNumberCardError(false)
            setNumberCardError2(false)
        } else {
            setNumber('')
            onNumberChange('')
        }
    };

    const handleMonthChange = (event) => {
        const newMonth = event.target.value
        setMonth(newMonth)
        onMonthChange(newMonth)
        setMonthError(false)
        setExpiredCard(false)
    }

    const handleYearChange = (event) => {
        const newYear = event.target.value
        setYear(newYear)
        onYearChange(newYear)
        setYearError(false)
        setExpiredCard(false)
    }

    const handlePinSecure = (event) => {
        const newPin = event.target.value
        setSecure(newPin)
        onPinChange(newPin)
        setSecurePin(false)
    }

    function sendFunction(event) {
        event.preventDefault()
        setExpiredCard(false)
        let isFormValid = true

        // Validate Name
        if (!/^\s*[A-Za-z\s]{6,}\s*$/.test(name)) {
            setNameError(true)
            isFormValid = false
        } else {
            setNameError(false)
        }

        // Validate Number
        if (!/^[\d\s]+$/.test(number)) {
            setNumberCardError(true)
            isFormValid = false
        } else {
            setNumberCardError(false)
        }

        if (number.length !== 19) {
            setNumberCardError2(true)
            isFormValid = false;
        } else {
            setNumberCardError2(false)
        }

        // Validate Month
        if (!(month >= 1 && month <= 12)) {
            setMonthError(true)
            isFormValid = false
        } else {
            setMonthError(false)
        }

        // Validate Year
        const currentYear = new Date().getFullYear() % 100
        if (!(year >= currentYear && year <= 99)) {
            setYearError(true)
            isFormValid = false
        } else {
            setYearError(false)
        }

        // Validate Card Expiry
        const parsedYear = parseInt(year, 10)
        const parsedMonth = parseInt(month, 10)
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth() + 1
        if (!(parsedYear >= currentYear || (parsedYear === currentYear && parsedMonth >= currentMonth))) {
            setExpiredCard(true)
            isFormValid = false
        } else {
            setExpiredCard(false)
        }

        // Validate Pin
        if (!/^[0-9]{3}$/.test(secure)) {
            setSecurePin(true)
            isFormValid = false
        } else {
            setSecurePin(false)
        }

        if (isFormValid) {
            console.log('puede continuar')
            setSubmitted(true)
        } else {
            console.log('no puede continuar')
            setSubmitted(false)
        }
    }

    return (
        <>
            {submitted ?
                <Sent resetForm={resetForm} />
                :
                <form className={`${nameError ? 'with_error' : ''}`}>
                    <div className='name_container'>
                        <div className='title_style'>
                            Cardholder Name
                        </div>
                        <input
                            type="text"
                            placeholder='e.g. Jane Appleseed'
                            name=""
                            id=""
                            className={`input_name input_style ${nameError ? 'error_style' : ''} `}
                            value={name}
                            onChange={handleNameChange}
                            maxLength={27}
                        />
                        <div className={`incorrect_date ${nameError ? '' : 'disabled'}`}>
                            Incorrect data
                        </div>
                    </div>
                    <div className='card_number_container'>
                        <div className='title_style'>
                            Card number
                        </div>
                        <input
                            type="text"
                            placeholder='e.g. 1234 5678 9123 0000 '
                            name=""
                            id=""
                            className={`input_number input_style ${numberCardError ? 'error_style' : ''}  ${numberCardError2 ? 'error_style' : ''} `}
                            value={number}
                            onChange={handleNumberChange}
                            maxLength={19}
                        />
                        <div className={`incorrect_date ${numberCardError ? '' : 'disabled'}`}>
                            Wrong format, numbers only
                        </div>
                        <div className={`incorrect_date ${numberCardError2 ? '' : 'disabled'}`}>
                            XXXX XXXX XXXX XXXX is needed
                        </div>
                    </div>

                    <div className='exp_sec_container'>
                        <div className='date_container'>
                            <div className='title_style'>
                                Exp. Date (MM/YY)
                            </div>
                            <div className='day_year'>
                                <div>
                                    <input
                                        type="text"
                                        placeholder='MM'
                                        className={`input_month input_style ${monthError ? 'error_style' : ''}`}
                                        value={month}
                                        onChange={handleMonthChange}
                                        maxLength={2}
                                    />
                                    <div className={`incorrect_date ${monthError ? '' : 'disabled'}`}>
                                        Incorrect Month
                                    </div>
                                    <div className={`incorrect_date ${expiredCard ? '' : 'disabled'}`}>
                                        Expired Card
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder='YY'
                                        className={`input_year input_style ${yearError ? 'error_style' : ''} `}
                                        value={year}
                                        onChange={handleYearChange}
                                        maxLength={2}
                                    />
                                    <div className={`incorrect_date ${yearError ? '' : 'disabled'}`}>
                                        Incorrect Year
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='title_style'>
                                CVC
                            </div>
                            <input
                                type="text"
                                placeholder='e.g. 123'
                                className={`security input_style ${securePin ? 'error_style' : ''} `}
                                value={secure}
                                onChange={handlePinSecure}
                                maxLength={3}
                            />
                            <div className={`incorrect_date ${securePin ? '' : 'disabled'}`}>
                                Wrong data, 3 numbers are needed
                            </div>
                        </div>
                    </div>
                    <button onClick={(event) => sendFunction(event)}>Confirm</button>
                </form>
            }
        </>
    )
}

export default Form