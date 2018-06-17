//Soon
const express = require('express');

const PORT = process.env.PORT || 3000;

express.listen(PORT, () => console.log(`Server running on port ${PORT}`));
