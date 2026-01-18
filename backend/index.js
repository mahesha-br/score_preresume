const express = require('express');
const cors = require('cors')

require('dotenv').config();


const app = express();
const PORT =process.env.PORT || 4000;

const path = require('path')

require('./connection');
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:5173","http://localhost:4173"]
}))

const rootDir = path.resolve();

console.log("dir:",rootDir)


const UserRoutes = require('./Routes/user');
const ResumeRoutes = require('./Routes/resume');

app.use(express.static(path.join(rootDir, "frontend", "dist")));


app.use('/api/user',UserRoutes)
app.use('/api/resume',ResumeRoutes)


// // Serve static files from the build folder
// app.use(express.static(path.join(__dirname, "build")));

// // Catch-all route: send index.html for React Router
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });



// app.get("/.*/", (_, res) => {
//   res.sendFile(
//     path.join(rootDir, "frontend", "dist", "index.html")
//   );
// });

app.use((req, res) => {
  res.sendFile(
    path.join(rootDir, "frontend", "dist", "index.html")
  );
});


module.exports = app;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });