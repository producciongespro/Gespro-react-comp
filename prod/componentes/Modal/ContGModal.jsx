import React, { useState } from "react";
import GModal from "./GModal";

const ContGModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <input
            className="btn btn-outline-success"
            type="button"
            onClick={handleShow}
            value="Mostrar"
          />
        </div>
      </div>

          <GModal  
          show={show}
        handleClose={handleClose}
        title="Ayuda del recurso"
        footer="pie de página" >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quis rem est suscipit pariatur, obcaecati debitis eligendi voluptatibus corrupti expedita in culpa nihil sapiente excepturi. Commodi aliquam unde adipisci quae?</p>
            <p>Tempora, quia sed voluptas debitis eos dolorem velit distinctio ducimus aliquid assumenda ea culpa error eligendi nisi optio tenetur consequuntur qui! Pariatur maxime repellat ut accusantium veniam distinctio consequuntur labore.</p>
        </GModal>
     
    </>
  );
};

export default ContGModal;