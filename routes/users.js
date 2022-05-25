const {User} = require('../models/user');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const userList = await User.find();

    if(!userList){
        res.status(500).json({success: false});

    }
    res.send(userList);
})

module.exports = router;