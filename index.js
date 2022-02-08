const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use(require("./hireme"));

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
});