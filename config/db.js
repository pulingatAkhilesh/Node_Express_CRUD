const mongoose = require('mongoose');

const connectDatabase = async () => {
    try{
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/expressbackend', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if(connection){
            console.log('MongoDB database connected.');
        }else{
            console.error('Unexpected error!');
        };
    }catch(error){
        console.error('Error in connecting database: ', error);
    };
};

module.exports = connectDatabase;