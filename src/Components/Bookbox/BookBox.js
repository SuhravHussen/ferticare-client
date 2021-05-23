import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./Bookbox.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { userContext } from "../../App";

const BookBox = () => {
  const [startDate, setStartDate] = useState(null);
  const { control, handleSubmit, register } = useForm();
  const [treatments, setTreatments] = useState({});

  const [userInfo] = useContext(userContext);

  const onSubmit = (data) => {
    const newBooking = {
      name: userInfo.userName,
      email: userInfo.email,
      time: startDate.toString(),
      treatments: {
        IUI: data.IUI,
        IVF: data.IVF,
        infertility: data.Infertility,
      },
    };

    fetch("https://secure-forest-43490.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBooking),
    }).then((res) => {
      setTreatments([]);
      console.log(res);
      toast(`Successfully added your booking at ${startDate.toString()}`);
    });
  };

  return (
    <div className="booking-container">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Find Fertility treatmen best suited for you</h1>
      <h4>IUI . IVF . ICSI. Medication</h4>
      <h3>Start your treatment journey</h3>
      <div className="inputs-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div>
              <h6>What treatment are you looking for?</h6>
              <Controller
                name="IUI"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              IUI
              <Controller
                name="IVF"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              IVF
              <Controller
                name="Infertility"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              Infertility
            </div>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="When can you talk?"
            />

            <input
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
            />
          </div>
          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default BookBox;