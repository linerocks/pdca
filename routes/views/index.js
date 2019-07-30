const router = require('express').Router();
const path = require('path')

router.get('/', async (req, res) => {
    res.sendFile('i.html', {
        root: path.join(__dirname, '../../static')
    })
})

module.exports = router