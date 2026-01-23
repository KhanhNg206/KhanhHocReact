import React from "react";
function ContactComponent(){
    const  chidi = {
        firstName : "Chidi",
        lastName : "Anagonye",
        phone : "555-366-8987",
        address : "St. John's University , Sydney, Austrailia"
    }

    return(
        <>
        <h2>{chidi.firstName}</h2>
        <p>{chidi.lastName}</p>
        <hr />
        <p>{chidi.phone}</p>
        <hr />
        <p>{chidi.address}</p>
        </>

    )
}
export default ContactComponent;