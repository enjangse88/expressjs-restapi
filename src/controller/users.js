const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {const [data] = await UsersModel.getAllUsers();
        res.status(200).json({
            message: 'Get all users success dari Controller',
            data: data
        })}
    catch (error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
}

/*const createNewUsers =  async (req, res) => {
    //console.log(req.body);
    const { body } = req;
    //const bodyPayload = req.body;
    try {
        await UsersModel.createNewUsers(body);
        res.json({
           message: 'create new users success',
           data: req.body
       })
    }
    catch (error){
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    } 
}*/
const createNewUsers = async (req, res) => {
    const {body} = req;
    if (!body.name || !body.address){ 
        return res.status(400).json({
            message: "Body request tidak lengkap",
            data: null
        })
    }
    
    try {
        await UsersModel.createNewUsers(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message || 'Internal Server Error',
        })
    }
}

const updateUsers = async (req, res) => {
    const {idUser} =  req.params;
    const {body} = req;

    try{
        await UsersModel.updateUsers(body,idUser);
        res.status(201).json({
            message: 'User update',
            data: {
                id: idUser,
                ...body
            },
        })
    }
    catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
     
    try{
        await UsersModel.deleteUsers(idUser);
        res.status(200).json({
            message: 'Delete user success',
        })
    }catch(error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
    
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUser,
}