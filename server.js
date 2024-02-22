const express = require('express');
const app = express();

app.use(express.json());
const authRoutes = require('./Routes/auth-routes');
app.use('/', authRoutes);

// app.get('/', (req, res) => {
//     res.send('Line 5');
// });

const PORT = 5000;5
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})