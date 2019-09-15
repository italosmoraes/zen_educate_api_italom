const router = require('express').Router();

const getSortedNamesList = require('../handlers/getSortedNamesList')

router.post(
    '/sort-names',
    getSortedNamesList,
);

module.exports = router;
