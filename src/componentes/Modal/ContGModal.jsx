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
        title="Título Modal"
        footer="Pie del modal"
      >
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus temporibus, enim iure nostrum quasi atque. Minima asperiores, impedit explicabo repellendus suscipit excepturi cumque unde iure accusamus pariatur dolore officia neque.
      </GModal>
    </>
  );
};

export default ContGModal;
