const express = require('express');
const path = require('path');

const app = express();
const srcDir = '/opt/render/project/src';

// Serve static files from the srcDir directory
app.use(express.static(srcDir));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
