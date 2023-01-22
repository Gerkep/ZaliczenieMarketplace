const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CustomerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

CustomerSchema.pre('save', function(next){
    const customer = this;

    if(!customer.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {

        if (err){
            return next(err);
        }

        bcrypt.hash(customer.password, salt, (err, hash) => {

            if (err){
                return next(err);
            }

            customer.password = hash;
            next();
        })
    })
})

CustomerSchema.methods.comparePassword = function(candidatePassword) {
    const customer = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, customer.password, (err, isMatch) => {

            if (err){
                return reject(err);
            }
            if (!isMatch){
                return reject(false);
            }

            resolve(true);
        });
    })
}

CustomerSchema.methods.compareApiKey = function(candidateKey) {
    const customer = this;
    return new Promise((resolve, reject) => {
        if (candidateKey === customer.key) {
            resolve(true);
        } else {
            return reject('Key does not match');
        }
    })
}

mongoose.model('Customer', CustomerSchema);