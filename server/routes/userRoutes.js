const express = require('express');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete)

module.exports = router;
