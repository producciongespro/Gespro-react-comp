import { useForm } from 'react-hook-form';
import './form.css';

const Form = (props) => {    
  const inputs = props.inputs;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      props.getDataForm(data)
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((item, i) => (
        <div className="form-group" key={"input"+i}>
          <label className="item-negrilla" htmlFor={ item.id } > {item.label} </label>
          <span className="item-error" >{errors[item.id] && " Campo requerido"}</span>
          <input
            type={item.type}
            className="form-control"
            id={item.id}
            name={item.id}
            placeholder={item.placeholder}
            maxLength={item.maxLength}
            disabled={item.disabled}
            ref={register({required: item.required })}
          />
          
        </div>
        
      ))}
      <br/>
      <input className="btn btn-outline-info" type="submit" />
    </form>
  );
};

export default Form;
