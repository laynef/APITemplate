/* eslint-disable */
module.exports = {

    validEmail: (email) => {
        let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    },

    veryStrongPassword: (password) => {
        let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})');
        return regex.test(password);
    },

    strongPassword: (password) => {
        let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
        return regex.test(password);
    },

};
