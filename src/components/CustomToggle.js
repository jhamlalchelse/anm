import React from 'react'
import { useAccordionButton } from 'react-bootstrap';

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
  return (
    <>
    <button
      type="button"
      onClick={decoratedOnClick}
      style={{border:"none",width:"100%",backgroundColor:"rgba(93, 167, 202, 0.1)"}}
    >
      {children}
    </button>
    </>
  )
}

export default CustomToggle