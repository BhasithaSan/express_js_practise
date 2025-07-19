uerService=require('../Service/userService.js');



const getUserById = async (req, res,next) => {

    try{
        const userId =req.query.id;
        console.log(`Received request to get user with ID: ${userId}`);
        const user = await uerService.getUserById(userId);

        console.log(`User fetched: ${JSON.stringify(user)}`);
        return res.json(user)
    }
    catch(error){
        next(error);
    }

}


const createUser = async (req,res,next) => {
    
    try{

        const user = req.body;
        console.log(`Received request to create user: ${JSON.stringify(user)}`);
        await uerService.createUser(user);
        return res.status(201).json({ message: "User created successfully" });


    }catch(error){
        next(error);
    }


}


module.exports = { getUserById,createUser };