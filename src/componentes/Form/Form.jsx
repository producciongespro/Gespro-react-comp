import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./form.css";
import "./pretty-checkbox.min.css";

let valoresCheck = [];

const handleGetCheck = (e) => {
  const item = e.target;
  /*
  console.log(item.id);
  console.log(item.checked);
  console.log(item.name);
  */
  const tmpObj = {
    nombre: item.name,
    llave: item.id,
    valor: item.checked,
  };
  valoresCheck.push(tmpObj);
  //console.log(valoresCheck);
};



const Form = (props) => {
  const [valInput, setValInput]= useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (valoresCheck) {
      data.valoresCheck = valoresCheck;
    }
    props.getDataForm(data);
  };
  console.log(errors);


  const handleGetValue=(e)=> {
    const val= e.target.value;
    console.log(val);
    setValInput(val);
  }

  const JsxInput = (item, key) => {
    return (
      <div className="form-group" key={key}>
        <label
          className={`item-negrilla ${errors[item.id] && "item-error"}`}
          htmlFor={item.id}
        >
          {item.required && <span className="item-required">*</span>}
          {item.label}
          {
            item.type === "range" && <span> {valInput} </span>
          }
        </label>
        <input
          onInput={handleGetValue}
          type={item.type}
          className="form-control"
          id={item.id}
          name={item.id}
          placeholder={item.placeholder}
          maxLength={item.maxLength}
          disabled={item.disabled}
          readOnly={item.readOnly}
          min={item.min}
          max={item.max}          
          defaultValue={item.defaultValue && item.defaultValue}
          ref={register({ required: item.required })}
        />
      </div>
    );
  };

  const JsxSelect = (item, key) => {
    return (
      <div className="input-group mb-3" key={key}>
        <div className="input-group-prepend">
          <label
            className={`input-group-text item-negrilla ${
              errors[item.id] && "item-error"
            }`}
            htmlFor={item.id}
          >
            {item.required && <span className="item-required">*</span>}
            {item.label}
          </label>
        </div>
        <select
          className="custom-select"
          name={item.id}
          id={item.id}
          ref={register({ required: item.required })}
        >
          <option value="">Seleccione una opción</option>
          {item.opts.map((opt) => (
            <option key={"opt" + opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const JsxTxtArea = (item, key) => {
    return (
      <div className="input-group mb-4" key={key}>
        <div className="input-group-prepend">
          <span
            // se utilizan string tempale (plantilla de cadena para validar si se agrega la clase error a la etiqueta)
            className={`input-group-text item-negrilla ${
              errors[item.id] && "item-error"
            }`}
          >
            {item.required && <span className="item-required">*</span>}
            {item.label}
          </span>
        </div>

        <textarea
          name={item.id}
          className="form-control"
          rows={item.rows}
          cols={item.cols}
          aria-label="With textarea"
          defaultValue={item.defaultValue}
          disabled={item.disabled}
          readOnly={item.readOnly}
          ref={register({ required: item.required })}
        />
      </div>
    );
  };

  const JsxCheckBox = (item, key) => {
    return (
      <div className="row" key={key}>
        <div className="col-sm-12 mb-2">
          <span className={`item-titulo ${errors[item.id] && "item-error"}`}>
            {item.required && <span className="item-required">*</span>}
            {item.title}
          </span>
        </div>

        <br />

        {item.labels.map((label, i) => (
          <div className="form-group form-check" key={item.name + i}>
            <div className="pretty p-switch p-fill">
              <input
                type="checkbox"
                id={label}
                name={item.name}
                onClick={handleGetCheck}
              />
              <div className="state">
                <label> {label} </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.array.map((item, i) => {
        if (item.control === "input") {
          return JsxInput(item, i);
        }
        if (item.control === "select") {
          return JsxSelect(item, i);
        }
        if (item.control === "textarea") {
          return JsxTxtArea(item, i);
        }
        if (item.control === "chekbox") {
          return JsxCheckBox(item, i);
        }
      })}

      <br />
      <input className="btn btn-outline-info" type="submit" />
    </form>
  );
};

export default Form;
