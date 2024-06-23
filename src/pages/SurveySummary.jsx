import React from "react";
import useFetch from "../hooks/useFetchAdditionalQues";

const SurveySummary = ({ formData }) => {
  const { data: additionalQuestions, loading, error } = useFetch({ topic: formData.surveyTopic });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-75 shadow-md rounded-lg p-5 m-3">
      <h2 className="text-3xl font-bold text-center mb-4">Survey Summary</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <p>
          <strong>Full Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Survey Topic: {formData.surveyTopic}</h3>
        {formData.surveyTopic === "Technology" && (
          <>
            <p>
              <strong>Favorite Programming Language:</strong> {formData.technology.language}
            </p>
            <p>
              <strong>Years of Experience:</strong> {formData.technology.experience}
            </p>
          </>
        )}
        {formData.surveyTopic === "Health" && (
          <>
            <p>
              <strong>Exercise Frequency:</strong> {formData.health.frequency}
            </p>
            <p>
              <strong>Diet Preference:</strong> {formData.health.diet}
            </p>
          </>
        )}
        {formData.surveyTopic === "Education" && (
          <>
            <p>
              <strong>Highest Qualification:</strong> {formData.education.qualification}
            </p>
            <p>
              <strong>Field of Study:</strong> {formData.education.fieldOfStudy}
            </p>
          </>
        )}
      </div>

      {additionalQuestions && additionalQuestions.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <p key={index}>
              <strong>{question.text}:</strong> {question.answer}
            </p>
          ))}
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Feedback</h3>
        <p className="text-justify">{formData.feedback}</p>
      </div>
    </div>
  );
};

export default SurveySummary;
