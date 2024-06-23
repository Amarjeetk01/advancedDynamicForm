const additionalQuestions = {
    Technology: [
        { "text": "What is your favorite tech blog?", "answer": "Techdfgf" },
        { "text": "How do you keep up with tech trends?", "answer": "xyz" },
    ],
    Health: [
        { "text": "What is your favorite health app?", "answer": "MyFitness" },
        { "text": "How do you manage stress?", "answer": "Meditation" },
    ],
    Education: [
        { "text": "What is your favorite educational resource?", "answer": "abc" },
        { "text": "How do you stay motivated to learn?", "answer": "Setting goals" },
    ],
  };
  
  export const fetchAdditionalQuestions = async (topic) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(additionalQuestions[topic] || []);
      }, 500);
    });
  };
  