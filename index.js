const express = require('express');
const app = express();
const port = 8081;

// ✅ Call express.json() properly
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Home Page"
    });
    app.all('*', (req, res)=>{
        res.status(500).json({
            massage: "Not built Yet"
        })
    })
});

app.listen(port, () => {
    console.log(`Express server is up and running on http://localhost:${port}`);
});