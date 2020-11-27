const cloudinary = require("../configuraions/cloudinary");
const User = require("../models/upload.model"); 

exports.uploadFile = async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
           // Create new user
          let user = new User({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
          });
          // Save user
          await user.save();
          res.json(user);
        } catch (err) {
          console.log(err);
    }}