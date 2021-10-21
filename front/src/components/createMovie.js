import React from "react";
import { useForm } from "react-hook-form";

function CreateMovie(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => props.agregar(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("name", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

export default CreateMovie;