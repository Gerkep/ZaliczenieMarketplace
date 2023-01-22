const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const Customer = mongoose.model('Customer');
require('dotenv').config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const customer = new Customer({email, password});

        const token = jsonwebtoken.sign({customerId: customer._id}, process.env.JWT_SECRET);
        await customer.save();
        res.send({customer, token})
        
    } catch (e) {
        res.status(422).send(e.message);
    }
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const customer = await Customer.findOne({ email });

    if(!email || !password) {
        return  res.status(422).send({error: "Must provide error and password"});
    }

    if(!customer) {
        return  res.status(404).send({error: "Invalid password or email."});
    }

    try{
        await customer.comparePassword(password);
        const token = jsonwebtoken.sign({customerId: customer._id}, process.env.JWT_SECRET);
        res.send({customer, token});
    } catch (e) {
        return  res.status(404).send({error: "Invalid password or email."});
    }

});

module.exports = router;