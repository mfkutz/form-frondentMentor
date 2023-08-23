import './Sent.css'
import iconSent from '../../assets/icon-complete.svg'

const Sent = ({ resetForm }) => {
    const handleContinueClick = () => {
        resetForm()
    }

    return (
        <div className='sent_container'>
            <img src={iconSent} alt="data sent" />
            <h2>thank you!</h2>
            <p>We've added your card details</p>
            <a href=""><button className='btn_complete' onClick={handleContinueClick}>Continue</button></a>
        </div>
    )
}

export default Sent