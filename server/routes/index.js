const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => [
    res.status(404).send('<h1>😝 404 Error!</h1>'),
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
]);

module.exports = router;
