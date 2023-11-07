// Function to ask GPT
async function askGPT(prompt) {
  try {
    // Fetch data from the Flask backend
    const response = await fetch('/your-backend-api/askGPT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt })
    });
  
    // Convert response to JSON
    const data = await response.json();
  
    // Handle the OpenAI GPT response here
    // For example, you could insert it into an HTML element
    document.getElementById('gpt-response').innerHTML = data.message;
  } catch (error) {
    console.error('Error:', error);
  }
}
