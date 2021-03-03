import { useForm } from "react-hook-form";
import "./form.css";

const Form = (props) => {
  const inputs = props.inputs;
  const txtAreas = props.txtAreas;
  const selects = props.selects;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    props.getDataForm(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs &&
        inputs.map((item, i) => (
          <div className="form-group" key={"input" + i}>
            <label className="item-negrilla" htmlFor={item.id}>
              {item.label}{" "}
            </label>
            <span className="item-error">
              {errors[item.id] && " Campo requerido"}
            </span>
            <input
              type={item.type}
              className="form-control"
              id={item.id}
              name={item.id}
              placeholder={item.placeholder}
              maxLength={item.maxLength}
              disabled={item.disabled}
              readOnly={item.readOnly}
              defaultValue={item.defaultValue && item.defaultValue}
              ref={register({ required: item.required })}
            />
          </div>
        ))}
      <br />

      {selects &&
        selects.map((item, i) => (
          <div className="input-group mb-3" key={"sel" + i}>
            <div className="input-group-prepend">
              <label
                className={`input-group-text item-negrilla ${
                  errors[item.id] && "item-error"
                }`}
                htmlFor={item.id}
              >
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
        ))}

      <br />
      {txtAreas &&
        txtAreas.map((item, i) => (
          <div className="input-group mb-4" key={"txtArea" + i}>
            <div className="input-group-prepend">
              <span
                // se utilizan string tempale (plantilla de cadena para validar si se agrega la clase error a la etiqueta)
                className={`input-group-text item-negrilla ${
                  errors[item.id] && "item-error"
                }`}
              >
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
        ))}

      <br />
      <input className="btn btn-outline-info" type="submit" />
    </form>
  );
};

export default Form;
