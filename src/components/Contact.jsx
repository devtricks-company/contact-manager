import React,{useState} from 'react';
import {IoIosArrowDropdownCircle} from 'react-icons/io'
const Contact = ({name}) => {
    const [showDetails,setShowDetails] = useState(false); 
    const changeShowHandler = () =>{
        setShowDetails(!showDetails)
    }
  return <div>
      <h1 >{name} <IoIosArrowDropdownCircle onClick={changeShowHandler} /></h1>
      {showDetails ? <div>
          <h4>Emain: amirm.azarbashi@gmail.com</h4>
          <h4>Phone: 09364483233</h4>
          <h4>Address: shiraz khiyaban baharan </h4>

      </div> : null}
      
  </div>;
};

export default Contact;
