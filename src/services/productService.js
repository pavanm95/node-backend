const AWS = require('aws-sdk');
const Product = require('../models/productModel');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();

const getAllProducts = async () => {
    return await Product.find();
};

const createProduct = async (data) => {
    const file = data.file;
    const {id, name, description} = data.body;
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    try {
        const data = await s3.upload(params).promise();
        const fileUrl = data.Location;

        return await Product.create({
            id: id,
            name: name,
            description: description,
            productImgName: file.originalname,
            productImgUrl: fileUrl
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send({ error: 'Error uploading file' });
    }
};

module.exports = { getAllProducts, createProduct };
