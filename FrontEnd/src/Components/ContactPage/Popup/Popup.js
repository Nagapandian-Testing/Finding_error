import "../Popup/Popup.css";

import React from "react";

export default function Popup({ msg,resetForm }) {
  return (
    <>

      <div className="popup">
      <div className="popup-content">
        <span className="popup-msg">{msg} </span>
 
        <div>
          <button
            type="button"
            onClick={resetForm}
            class="btn btn-light"
            id="btn_close_form"
          >
            Ok
          </button>
        </div>
        </div>
    </div>
 
  



    
      </>
  );
}
