import React, { useState } from 'react';
import './booking.css'
import Bookingbck from '../../Resources/images/booking.jpg'
import DropDown from '../../Resources/icons/arrow_drop_down.svg'
import DropUp from '../../Resources/icons/arrow_drop_up.svg'

// import Navigation from './Navigation';
function Book() {

    var curdate = new Date;
    const [checkindat, setcheckindat] = useState(curdate.getFullYear()+"-"+(curdate.getMonth()+1)+"-"+curdate.getDate());
    const [checkoutdat, setcheckoutdat] = useState(curdate.getFullYear()+"-"+(curdate.getMonth()+1)+"-"+(curdate.getDate()+1));
    const [location, setlocation] = useState("select ");
    // alert(checkindat);

    function chgdroparrow(){

    }

    function chcheckin(event){
        
        
        if(event.target.value>checkoutdat){
            alert("Enter checkout date > checkin date");
        }
        else{
            setcheckindat(event.target.value);
        }
        // alert(event.target.value+1);
        
    }
    function chcheckout(event){
        
        if(event.target.value<checkindat){
            alert("Enter checkout date > checkin date");
        }
        else{
            setcheckoutdat(event.target.value);
        }
        
    }
    function handlesearch(){
        alert(checkindat+"\n"+checkoutdat+"\n"+location);

    }
    
    function lochandle(event){
        setlocation(event.target.className);

    }


  return (
    
<div className="page">

    
    <img src={Bookingbck} alt="" className="bckimg"/>
    <div className="header">
        <div className="logo">
            <img src="" alt="Hotel Logo"/>
        </div>
        <div className="login">
        <a href="/login">Login</a>
            /Signup
        </div>

        <hr className="breakerline"/>
    </div>
    <hr className="breakerline"/>
    <div className="content">

        <div className="bookingbox">
            
            <div className="locationselector">
                <h1 className="locheader">Location</h1>
                <div className='locbutton' >
                    <div className='display'>
                    {location} <img src={DropDown} alt="" className='dropdown'/>
                    <img src={DropUp} alt="" className='dropup'/>
                    </div>
                    <div className='loc_option'>
                        <div className='Tuticorin' onClick={lochandle}>
                        Tuticorin
                        </div>
                        <div className='Coimbatore' onClick={lochandle}>
                        Coimbatore
                        </div>
                        <div className='Chennai' onClick={lochandle}>
                        Chennai
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkin">
                <h1 className="checkinheader" >Check in</h1>
                <input type="date"  onChange={chcheckin} value={checkindat}/>
            </div>
            <div className="checkout">
                <h1 className="checkoutheader">Check out</h1>
                <input type="date" onChange={chcheckout} value={checkoutdat}/>
            </div>

            <div className='submit_button'>
                <input type="button" className='submit' onClick={handlesearch} value="Submit" />

            </div>
            
        </div>

    </div>

</div>


  );
}

export default Book;
