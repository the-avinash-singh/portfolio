const router = require("express").Router();
const User = require("../models/User");
const authentication = require("../middleware/authentication");
const Message = require("../models/Message");

router.get("/data", authentication, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
});
router.get("/data/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
});

router.post("/data", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(422).json({ message: "Please fill all feilds" });
  }
  try {
    const data = new Message({ name: name, email: email, message: message });
    const result = await data.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "server error" });
  }
});
module.exports = router;
