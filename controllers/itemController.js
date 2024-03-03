const ITEM = require('../Models/itemSchema');

// Create Item
const createItem = async (req, res) => {
    console.log('createItem - req.body: ', req.body)
    try{
        const newItem = new ITEM(req.body);
        console.log('createItem - newItem: ', newItem)
        await newItem.save();
        res.status(201).json({ message: 'New Item saved successfully.' });
    }catch(error){
        res.status(500).json({ error: error.message });
    };
};

// Get all items.
const getItems = async (req, res) => {
    try{
        const items = await ITEM.find();
        res.json(items);
    }catch(error){
        res.status(500).json({ error: error.message });
    };
};

// Get Item by Name.
const getItemByName = async (req, res) => {
    try{
        const item = await ITEM.findOne({ name: req.params.name });
        if(!item){
            res.status(404).json({ message: 'Item not found' });
        }else{
            res.json(item);
        };
    }catch(error){
        res.status(500).json({ error: error.message });
    };
};

// Get Item by Name and Update it.
const updateItemByName = async (req, res) => {
    try{
        const updatedItem = await ITEM.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        if(!updatedItem){
            res.status(404).json({ message: 'Item not found' });
        }else{
            res.json(updatedItem);
        };
    }catch(error){
        res.status(500).json({ error: error.message });
    };
};

// Delete Item by Name.
const deleteItemByName = async (req, res) => {
    try{
        const deletedItem = await ITEM.findOneAndDelete({ name: req.params.name });
        if(!deletedItem){
            res.status(404).json({ message: 'Item not found' });
        }else{
            res.json(deletedItem);
        };
    }catch(error){
        res.status(500).json({ error: error.message });
    };
};

module.exports = { createItem, getItems, getItemByName, updateItemByName, deleteItemByName };