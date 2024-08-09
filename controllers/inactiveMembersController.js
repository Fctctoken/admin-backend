const inactiveMembersModel = require('../models/inactiveMembersModel');

const getInactiveMembers = (req, res) => {
    inactiveMembersModel.getInactiveMembers((err, members) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ members });
        }
    });
};

module.exports = {
    getInactiveMembers,
};
