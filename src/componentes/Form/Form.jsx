import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { eliminar } from "gespro-utils/crud_array";
import "./css/form.css";
import "./css/pretty-checkbox.min.css";

let valoresCheck = [];

const handleGetCheck = (e) => {
  const item = e.target;
  /*
  console.log(item.id);
  console.log(item.checked);
  console.log(item.name);
  */

  if (item.checked) {
    //si es vardadero simplemente lo agrega en el array:
    const tmpObj = {
      nombre: item.name,
      id: item.id,
      valor: item.checked,
    };
    valoresCheck.push(tmpObj);
    //console.log(valoresCheck);
  } else {
    //Si es falso lo busca del array para eliminarlo
    const itemEliminado = eliminar(item.id, valoresCheck);
    //console.log("Objeto eliminado", itemEliminado);
  }

  //console.log(valoresCheck);
};

const Form = (props) => {
  const [valInput, setValInput] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //const { register, handleSubmit, errors } = useForm();
  const msjError = "Item requerido";

  const onSubmit = (data) => {
    if (valoresCheck) {
      if (valoresCheck.length > 0) {
        data.valoresCheck = valoresCheck;
      }
    }
    props.getDataForm(data);
  };
  console.log(errors);
  console.log(errors.correo);

  const handleGetValue = (e) => {
    const val = e.target.value;
    //console.log(val);
    setValInput(val);
  };

  const JsxInput = (item, key) => {
    return (
      <div className="form-group" key={key}>
        <label
          className={`item-negrilla ${errors[item.id] && "item-error"}`}
          htmlFor={item.id}
        >
          {item.required && <span className="item-required">*</span>}
          {item.label}
          {item.type === "range" && <span> {valInput} </span>}
        </label>
        <input
          onInput={item.type === "range" ? handleGetValue : undefined}
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
          step={item.step}
          defaultValue={item.defaultValue && item.defaultValue}
          {...register(item.id, {
            required: item.required,
            maxLength: item.max,
          })}
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
          //ref={register({ required: item.required })}
          {...register(item.id, {
            required: item.required,
          })}
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
          {...register(item.id, {
            required: item.required,
          })}
        />
      </div>
    );
  };

  const JsxCheckBox = (item, key) => {
    //VAlidación clase color bostrap:
    let colorClass = "state";
    if (item.colorClass) {
      colorClass = colorClass + " " + item.colorClass;
    }
    // Validación para tipo de clase prety
    let classPretty = "pretty";
    if (item.style) {
      classPretty = classPretty + " " + item.style;
    }

    //Validacion de clase animacion
    if (item.animation) {
      classPretty = classPretty + " " + item.animation;
    }

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
            <div className={classPretty}>
              <input
                type="checkbox"
                id={label}
                name={item.name}
                onClick={handleGetCheck}
              />
              <div className={colorClass}>
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
