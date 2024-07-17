const express = require('express');
const cloudinary=require("cloudinary")
const authentication=require("../middleware/authentication");
const router=express.Router()

cloudinary.config({
    cloud_name: "day8hsahb",
    api_key: '363248123965793',
    api_secret: 'X1S5ZueppKFB2W-OPNZEVzWCEdg',
  });
  
  router.post('/deleteImage',authentication, async (req, res) => {
    const { publicId } = req.body;
  
    try {
      await cloudinary.uploader.destroy(publicId);
      res.status(200).send({ message: 'Image deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting image', error });
    }
  });
  module.exports = router;