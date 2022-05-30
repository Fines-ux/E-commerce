const { User } = require("../models/user");
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.post(`/`, async (req, res) => {
  let user = new User({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
    passwordHash: req.body.passwordHash,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });

  category = await category.save();

  if (!user) {
    return res.status(404).send("the category cannot be registered");
  }
});
module.exports = router;
