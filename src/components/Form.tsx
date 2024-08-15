"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PreviewBox from "./PreviewBox";
import { FormDataTypes } from "@/types/formTypes";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    data: {
      email: "",
      message: "",
      name: "",
      phoneNumber: "",
    },
    isEnabled: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormDataTypes>();
  const onSubmit = (data: FormDataTypes) => {
    setFormData({
      ...formData,
      data,
      isEnabled: true,
    });
    console.log(data);
  };
  const handleClose = () => {
    reset();
    setFormData({
      data: {
        email: "",
        message: "",
        name: "",
        phoneNumber: "",
      },
      isEnabled: false,
    });
  };
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-elements">
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", {
            required: "Name is required",
            maxLength: 20,
          })}
          onBlur={() => trigger("name")}
        />
        {errors.name && (
          <p className="alert">{errors.name?.message as string}</p>
        )}
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
              message: "Invalid email address",
            },
          })}
          onBlur={() => trigger("email")}
        />
        {errors.email && (
          <p className="alert">{errors.email?.message as string}</p>
        )}

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          {...register("phoneNumber", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits allowed",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Invalid phone number",
            },
          })}
          onBlur={() => trigger("phoneNumber")}
        />
        {errors.phoneNumber && (
          <p className="alert">{errors.phoneNumber?.message as string}</p>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Minimum 10 characters required",
            },
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          })}
          onBlur={() => trigger("message")}
        />
        {errors.message && (
          <p className="alert">{errors.message?.message as string}</p>
        )}
        <button type="submit">Submit</button>
      </form>
      {formData.isEnabled && (
        <PreviewBox data={formData.data} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Form;
