import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/MedicalForm.css";
import stateJSON from "../data/StateList.json";

const MedicalForm = () => {
  const [users, setUsers] = useState([]);
  const [{ states }, setStateList] = useState(stateJSON);
  const [state, setState] = useState();
  return (
    <React.Fragment>
      <div className="title-container">
        <div className="title">Formik Form</div>
      </div>

      <div className="container">
        <Formik
          initialValues={{
            name: "",
            age: "",
            sex: "",
            mobile: "",
            id_type: "",
            govt_id: "",
            guardian: "",
            guardian_name: "",
            email: "",
            em_contact: "",
            address: "",
            state: "",
            city: "",
            pincode: "",
            occupation: "",
            religion: "",
            marital_status: "",
            blood_group: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Name must be 30 characters or less")
              .required("Name is Required"),
            age: Yup.string()
              .max(10, "Enter valid Age")
              .required("Age is Required"),
            sex: Yup.string().required("Select Gender"),
          })}
          onChange
          onSubmit={(values) => {
            setUsers([...users, { id: users.length + 1, ...values }]);
          }}
        >
          <Form className="bg-shadow">
            {console.log(states)}
            {/* ========== Personal Details ========== */}
            <div className="heading">Personal Details</div>
            <div className="grid-template-1">
              {/* Name */}
              <div className="name margin-bottom">
                <label htmlFor="name" className="form-label">
                  Name<span className="red">*</span>
                </label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  className="width-100 form-control"
                />
                <ErrorMessage name="name" className="form-text" />
              </div>

              {/* Date of Birth or Age */}
              <div className="age  margin-bottom">
                <label htmlFor="age" className="long form-label">
                  Date of Birth or Age<span className="red">*</span>
                </label>
                <Field
                  name="age"
                  id="age"
                  type="text"
                  placeholder="DD/MM/YYYY or Age in Years"
                  className="form-control"
                />
                <ErrorMessage name="age" className="form-text" />
              </div>

              {/* Sex */}
              <div className="sex  margin-bottom">
                <label htmlFor="sex" className="form-label">
                  Sex<span className="red">*</span>
                </label>
                <Field
                  name="sex"
                  id="sex"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="null">Enter Sex</option>
                  <option value="male">Male</option>
