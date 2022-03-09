import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";

const userStyle = makeStyles({
  myform: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: "'Montserrat', sans-serif!important",
  },
});

export const Summary = () => {
  const classes = userStyle();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="summary" style={{ padding: "10px", paddingTop: "30px" }}>
      <form onChange={handleSubmit(onSubmit)} className={classes.myform} >
        <div class="flex flex-wrap w-full">
          <div class="mb-3 w-full">
            <label for="exampleFormControlTextarea1" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Describe Yourself</label>
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="I am ...."
              {...register("summary")}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
