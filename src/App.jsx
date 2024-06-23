import React, { useState } from "react";
import './App.css'
import SurveyForm from "./pages/SurveyForm";
import SurveySummary from "./pages/SurveySummary";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  return (
    <div>
      <h1 className="text-5xl font-bold text-red-300 text-center w-full m-2">
        {!isSubmitted ? "Survey Form" : "Survey Summary"}
      </h1>
      {!isSubmitted ? (
        <SurveyForm setIsSubmitted={setIsSubmitted} setFormData={setFormData} />
      ) : (
        <SurveySummary formData={formData} />
      )}
    </div>
  );
}

export default App;
