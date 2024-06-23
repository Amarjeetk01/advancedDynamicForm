export const validate = (formData) => {
  let errors = {};
  if (!formData.fullName) errors.fullName = "Full Name is required";
  if (!formData.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email))
    errors.email = "Email is invalid";
  if (!formData.surveyTopic) errors.surveyTopic = "Survey Topic is required";
  if (formData.surveyTopic === "Technology") {
    if (!formData.technology.language)
      errors.technologyLanguage = "Favorite Programming Language is required";
    if (!formData.technology.experience)
      errors.technologyExperience = "Years of Experience is required";
  }
  if (formData.surveyTopic === "Health") {
    if (!formData.health.frequency)
      errors.healthFrequency = "Exercise Frequency is required";
    if (!formData.health.diet)
      errors.healthDiet = "Diet Preference is required";
  }
  if (formData.surveyTopic === "Education") {
    if (!formData.education.qualification)
      errors.educationQualification = "Highest Qualification is required";
    if (!formData.education.fieldOfStudy)
      errors.educationFieldOfStudy = "Field of Study is required";
  }
  if (!formData.feedback || formData.feedback.length < 50)
    errors.feedback = "Feedback must be at least 50 characters";
  return errors;
};
