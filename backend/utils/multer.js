const multer = require("multer");

// ✅ Vercel-safe storage (NO filesystem usage)
const storage = multer.memoryStorage();

// ✅ Allow only PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

// ✅ Multer upload instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 4 * 1024 * 1024, // 4MB (Vercel safe limit)
  },
});

module.exports = { upload };
