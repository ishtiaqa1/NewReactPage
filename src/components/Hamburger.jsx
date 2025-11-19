import listIcon from '../assets/list.svg'
import './Hamburger.css'

const Hamburger = ({onClick}) => {
  return (
    <button className='hamburger-btn' onClick={onClick}>
      <img src={listIcon} alt='menu' className='hamburger-icon' />
    </button>
  )
}

export default Hamburger