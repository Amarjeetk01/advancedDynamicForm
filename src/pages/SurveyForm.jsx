import React, { useState, useEffect } from "react";
import useFormValidation from "../hooks/useFormValidation";
import { validate } from "../utils/validate";
import InputForm from "../components/InputForm";
import SelectForm from "../components/SelectForm";

const SurveyForm = ({ setIsSubmitted, setFormData }) => {
  const { formData, errors, handleChange, handleSectionChange, validateForm } =
    useFormValidation(
      {
        fullName: "",
        email: "",
        surveyTopic: "",
        technology: {
          language: "",
          experience: "",
        },
        health: {
          frequency: "",
          diet: "",
        },
        education: {
          qualification: "",
          fieldOfStudy: "",
        },
        feedback: "",
      },
      validate
    );


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      setFormData(formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-form shadow-md rounded-lg p-5 m-3">
      <form onSubmit={handleSubmit}>
        <InputForm
          formHeading="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          handleChange={handleChange}
          error={errors.fullName}
        />
        <InputForm
          formHeading="Email"
          type="email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          error={errors.email}
        />
        <SelectForm
          heading="Survey Topic"
          name="surveyTopic"
          value={formData.surveyTopic}
          handleChange={handleChange}
          optns={["Technology", "Health", "Education"]}
          error={errors.surveyTopic}
        />

        {formData.surveyTopic === "Technology" && (
          <div>
            <SelectForm
              heading="Favorite Programming Language"
              name="language"
              value={formData.technology.language}
              handleChange={(e) =>
                handleSectionChange("technology", "language", e.target.value)
              }
              optns={["JavaScript", "Python", "Java", "C#"]}
              error={errors.technologyLanguage}
            />
            <InputForm
              formHeading="Years of Experience"
              type="number"
              name="experience"
              value={formData.technology.experience}
              handleChange={(e) =>
                handleSectionChange("technology", "experience", e.target.value)
              }
              error={errors.technologyExperience}
            />
          </div>
        )}

        {formData.surveyTopic === "Health" && (
          <div>
            <SelectForm
              heading="Exercise Frequency"
              name="frequency"
              value={formData.health.frequency}
              handleChange={(e) =>
                handleSectionChange("health", "frequency", e.target.value)
              }
              optns={["Daily", "Weekly", "Monthly", "Rarely"]}
              error={errors.healthFrequency}
            />
            <SelectForm
              heading="Diet Preference"
              name="diet"
              value={formData.health.diet}
              handleChange={(e) =>
                handleSectionChange("health", "diet", e.target.value)
              }
              optns={["Vegetarian", "Vegan", "Non-Vegetarian"]}
              error={errors.healthDiet}
            />
          </div>
        )}

        {formData.surveyTopic === "Education" && (
          <div>
            <SelectForm
              heading="Highest Qualification"
              name="qualification"
              value={formData.education.qualification}
              handleChange={(e) =>
                handleSectionChange(
                  "education",
                  "qualification",
                  e.target.value
                )
              }
              optns={["High School", "Bachelor's", "Master's", "PhD"]}
              error={errors.educationQualification}
            />
            <InputForm
              formHeading="Field of Study"
              type="text"
              name="fieldOfStudy"
              value={formData.education.fieldOfStudy}
              handleChange={(e) =>
                handleSectionChange("education", "fieldOfStudy", e.target.value)
              }
              error={errors.educationFieldOfStudy}
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
          ></textarea>
          {errors.feedback && (
            <span className="text-red-500 text-sm">{errors.feedback}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
