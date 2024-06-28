import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    location: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    bio: Yup.string().required("Bio is required"),
    location: Yup.string().required("Location is required"),
  });

  const handleSubmit = (values) => {
    setProfile(values);
    console.log("Profile updated:", values);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Edit Profile</h1>
      <Formik
        initialValues={profile}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <Field name="bio" type="text" />
            <ErrorMessage name="bio" component="div" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <Field name="location" type="text" />
            <ErrorMessage name="location" component="div" />
          </div>
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;