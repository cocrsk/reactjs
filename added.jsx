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
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="sex" className="form-text" />
              </div>
            </div>
            <div className="grid-template-2">
              {/* Mobile */}
              <div className="mobile  margin-bottom">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <Field
                  name="mobile"
                  id="mobile"
                  type="number"
                  placeholder="Enter Mobile"
                  className="form-control"
                />
                <ErrorMessage name="mobile" className="form-text" />
              </div>
              {/* Govt Issued Id */}
              <div className="id-type  margin-bottom">
                <label htmlFor="id_type" className="form-label">
                  Govt Issued ID
                </label>
                <Field
                  name="id_type"
                  id="id_type"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">ID Type</option>
                  <option value="AAdhar Card">Aadhar Card</option>
                  <option value="Voter Card">Voter ID Card</option>
                  <option value="Ration Card">Ration Card</option>
                </Field>
              </div>
              <div className="govt-id  margin-bottom">
                <Field
                  name="govt_id"
                  type="text"
                  placeholder="Enter Govt ID"
                  className="form-control"
                />
                <ErrorMessage name="govt_id" className="form-text" />
              </div>
            </div>

            {/* ========== Contact Details ========== */}
            <div className="heading">Contact Details</div>
            <div className="grid-template-2">
              {/* Guardian Details */}
              <div className="guardian  margin-bottom">
                <label htmlFor="guardian" className="form-label">
                  Guardian Details
                </label>
                <Field
                  name="guardian"
                  id="guardian"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Select Guardian</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="legal_guardian">Legal Guardian</option>
                </Field>
                <Field
                  name="guardian_name"
                  id="guardian_name"
                  type="text"
                  placeholder="Enter Guardian Name"
                  className="form-control"
                />
                <ErrorMessage name="guardian_name" className="form-text" />
              </div>

              {/* Email */}
              <div className="email  margin-bottom">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
                <ErrorMessage name="email" className="form-text" />
              </div>

              {/* Emergency Contact Number */}
              <div className="em-contact  margin-bottom">
                <label htmlFor="em_contact" className="long form-label">
                  Emergency Contact No
                </label>
                <Field
                  name="em_contact"
