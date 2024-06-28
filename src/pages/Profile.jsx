import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={profile}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field name="name" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                <Field name="bio" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <Field name="location" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
              </div>
              <Button type="submit">Save</Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;