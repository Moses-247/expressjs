const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  
  if (day >= 1 && day <= 5 && hours >= 9 && hours <= 17) {
    next();
  } else {
    res.send('<h1>Our office is closed. Please visit us during working hours (Monday to Friday, from 9 to 17).</h1>');
  }
});


app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
