const router = require("express").Router();
const upload = require("../configuraions/multer");
const { uploadFile } = require('../controllers/upload.controller')

router.post("/", upload.single("image"), uploadFile); //image is the name from the form


module.exports = router;