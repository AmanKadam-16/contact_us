const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Validation middleware
const validateContactForm = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('website_url').optional().isURL().withMessage('Invalid URL'),
  body('project_details').isLength({ min: 20 }).withMessage('Project details must be at least 20 characters'),
];

app.post('/api/v1/contact-us', validateContactForm, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, website_url, project_details } = req.body;

  // Here you would typically save the data to a database
  // For this example, we'll just log it and send a success response
  console.log('Received contact form submission:', { name, email, website_url, project_details });

  // Simulate processing delay
  setTimeout(() => {
    res.status(200).json({ message: 'Form submitted successfully' });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});