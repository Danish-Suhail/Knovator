const router = require('express').Router();
const { requireAuth } = require('../middlewares/auth');


const {
    dashboard,
    retrievePost
} = require('../controller/locationController');


router.get('/dashboard/post-count', dashboard)
router.post('/blog/nearby', retrievePost)



module.exports = router;