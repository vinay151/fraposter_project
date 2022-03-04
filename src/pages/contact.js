import React,{useState} from "react";
import Breadcrumb from "../component/breadcrumb/Breadcrumb";
import { useFormik } from "formik";
import * as Yup from "yup";
// import tick from '../warranty.png';
const Contact = () => {
  const [result, setResult] = useState([]);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        id:1,
        firstName: "",
        lastName: "",
        email:"",
        number: "",
        message:"",
      },
      onSubmit: (values) => {
        setResult([...result, values]);
        // reset();
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("First Name Is required"),
        lastName: Yup.string().required("Last Name Is required"),
        number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone Number is required"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is Required"),
      }),
    });
  return (
    <>
      <Breadcrumb heading="Contact" />
      <div className="container py-20 lg:px-32 px-8">
      <div className="text-center">
          <h1 className="text-7xl font-bold">Contact Us</h1>
          <p className="text-3xl mt-5">You can contact us on our email id: support@frameo.store</p>
        <p className="text-3xl mt-3">Our helpline/ Whatsapp number: 9022574928</p>
        </div>
      <div className="flex mt-20 flex-wrap">
       
        
        <div className="lg:w-1/2  w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
        <form className="w-full text-white max-w-6xl mx-auto mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-2xl font-bold mb-2"
                for="firstName"
              >
              First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              
            </div>
            {touched.firstName && errors.firstName ? (
          <div className="text-red-800 text-2xl ml-4">{errors.firstName}</div>
        ) : null}
          </div>
         

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-2xl font-bold mb-2"
                for="lastName"
              >
              Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              
            </div>
            {touched.lastName && errors.lastName ? (
          <div className="text-red-800 text-2xl ml-4">{errors.lastName}</div>
        ) : null}
          </div>
        

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-2xl font-bold mb-2"
                for="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              
            </div>
            {touched.number && errors.number ? (
          <div className="text-red-800 text-2xl ml-4">{errors.number}</div>
        ) : null}
          </div>
      
         <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-2xl font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              
            </div>
            {touched.email && errors.email ? (
          <div className="text-red-800 text-2xl ml-4">{errors.email}</div>
        ) : null}
          </div>
          
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-2xl font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                cols="8"
                rows="8"
                className="appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder="Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              
            </div>
            {touched.message && errors.message ? (
          <div className="text-red-800 text-2xl ml-4">{errors.message}</div>
        ) : null}
          </div>
        
          <div className="flex">
            <button className="px-16 py-5 text-2xl bg-orange-500 cursor-pointer rounded-md hover:bg-transparent hover:text-black border-2 border-orange-500 text-white">
              {" "}
              SEND{" "}
            </button>
          </div>
        </form>
        </div>
        <div className="lg:w-1/2 w-full pl-3 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="725" frameborder="0" style={{border:"0px"}} title="map"/>
        </div>
      </div>
      </div>
    </>
  );
};
export default Contact;
