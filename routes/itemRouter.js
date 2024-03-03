const express = require('express');
const { createItem, getItems, getItemByName, updateItemByName, deleteItemByName } = require('../controllers/itemController');
const router = express.Router();

router.post('/createItem', createItem);

router.get('/getItems', getItems);
router.get('/getItemByName', getItemByName);

router.put('/updateItemByName', updateItemByName);

router.delete('/deleteItemByName', deleteItemByName);

module.exports = router;