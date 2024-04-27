const router = require('express').Router();
// const posts = require('../models/posts');
const { verifyToken } = require('../middlewares/auth'); 


const {
    createpost,allpost,postUpdate,postDelete

} = require('../controllers/Post');
///this is a post routes

router.post("/createpost", createpost)
router.get("/getpost", allpost)
router.post("/updatepost", postUpdate)
router.post("/deletepost", postDelete)



module.exports = router;