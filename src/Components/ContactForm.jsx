import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bg from "../../src/assets/contactFormBg.png";
import axios from "axios";

// form validation
const formvalidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  comment: Yup.string().required("Message is required"),
});

// form submission endpoint
const onSumbit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await axios.post(
      "https://sheet.best/api/sheets/7563c4fd-88b0-471b-af25-28e7cc6c0f95",
      values
    );
    resetForm();
    alert("Form submitted successfully");
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Network Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    alert("Failed to submit form");
  }
  setSubmitting(false);
};

const ContactForm = () => {
  return (
    <>
      {/* main container  */}
      <div className=" flex md:flex-row xs:flex-col justify-center items-center mx-auto w-auto h-auto gap-9 p-20">
        {/* form container with text and image */}
        <div className="flex flex-col gap-5 h-auto">
          {/* text container with heading and paragraph and form*/}
          <div className="items-start flex flex-col gap-7">
            <h1 className=" text-3xl font-bold xl:text-4xl xs2:text-2xl">
              <span className="text-black">Get in</span>{" "}
              <span className="text-blue-800">Touch</span>
            </h1>
            <p className="xl:text-1xl xs2:text-sm xs:text-base font-medium md:font-semibold">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          {/* form container */}
          <div>
            <Formik
              initialValues={{ name: "", email: "", phone: "", comment: "" }}
              validationSchema={formvalidation}
              onSubmit={onSumbit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col w-full gap-3  ">
                  <div className="w-full border border-gray-300 rounded">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Name *"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                  <div className="w-full border border-gray-300 rounded">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Email *"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  <div className="w-full border border-gray-300 rounded">
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Phone Number *"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                  <div className="w-full border border-gray-300 rounded">
                    <Field
                      type="text"
                      name="comment"
                      id="comment"
                      className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Comment *"
                    />
                  </div>
                  <ErrorMessage
                    name="comment"
                    component="div"
                    className="text-red-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 text-white text-sm w-full"
                  >
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* container with the image */}
        <div className="w-auto">
          <img src={bg} alt="contact form image" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
