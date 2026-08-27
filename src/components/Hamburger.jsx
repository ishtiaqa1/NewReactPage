import './Hamburger.css'

const Hamburger = ({onClick}) => {
  return (
    <button className='hamburger-btn' onClick={onClick} aria-label='menu'>
      <svg className='hamburger-icon' width='24' height='24' viewBox='0 0 16 16' fill='currentColor'>
        <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
      </svg>
    </button>
  )
}

export default Hamburger