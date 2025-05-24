import { asyncHandler } from "../utils/asyncHandler.js";   

const registerUser = asyncHandler(async (req,res) => {
    console.log('register user called');
    res.status(200).json({
        message: "ankit we know you, you are best",
    })
})

export {registerUser};//object export: cannot use other than 'registerUser' name during import
