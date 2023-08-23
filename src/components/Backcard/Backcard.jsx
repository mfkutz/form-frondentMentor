import backcard from '../../assets/bg-card-back.png'
import './Backcard.css'

const Backcard = ({ pinSecure }) => {
    return (
        <div className='back_card'>
            <img src={backcard} alt="back credit" className='bg_back_card'/>
            <div className='secure'>{pinSecure}</div>
        </div>
    )
}

export default Backcard