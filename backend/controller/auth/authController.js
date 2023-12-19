//calling user for data modeling
const generateToken = require("../../config/token/generateToken");

//importing  express-async-handler
//used to handle exceptions 
const expressAsyncHandler=require("express-async-handler");
const User = require("../../modal/user/User");


//------------------------Register ctrl----------------------------------------------
//controller to register user
// expressAsyncHandler used to handle exceptions
const registerUser= expressAsyncHandler(
  async(req,res)=>{
     
      const userExist=await User.findOne({
          email:req?.body?.email,
      })
  if(userExist){
    res.status(201).json({message:"User Already exists with this email"})
      // throw new Error("User Already exists with this email");
  }
  try {
   // console.log(req.body);
   const user=await User.create({
     
      firstName:req?.body?.firstName,
      lastName:req?.body?.lastName,
      email:req?.body?.email,
      password:req?.body?.password,
     
  })
  // res.json({user:"User registerd successfully"}); 
  res.json({user,message:"User registerd successfully"});  
          
  } 
 
     
    catch (error) {
      res.json(error);
    }
  
  }
); 


//-------------------------------login ctrl--------------------------------------------------
//controller to login user
const login=expressAsyncHandler(
  async(req,res)=>{
    const{password}=req.body;
 
const userFound=await User.findOne({email:req?.body?.email});
if(!userFound) {
  res.status(201).json({message:"Invalid email"});
  throw new Error("Invalid email");

}
if(userFound && (await userFound.isPasswordMatched(password)) ){
  // throw new Error("Invalid credentilas");
  // generateToken(user?._id)
  res.json({
    id:userFound?._id,
    email:userFound?.email,
    firstName:userFound?.firstName,
    lastName:userFound?.lastName,
    profileImage:userFound?.profilePhoto,
    isAdmin:userFound?.isAdmin,
   
  });
}
    else{
      res.status(201).json({message:"Invalid password"});
      throw new Error("Invalid password")
    }

    
}
)

// ------------------------------------Update password controller--------------------
const updatePassword = expressAsyncHandler(async (req, res) => {
 
console.log("kell")

  try {
    const user = await User.findOne({email:req.body.email});
    console.log(user)
    if (!user) {
      return res.status(201).json({ message: 'Invalid Email' });
    }

    const { password } = req.body;
    if (password) {
      user.password = password;
     await user.save();
      return res.status(200).json({message:"Password updated Successfully"});
    }
    
   
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
},{now:true});





module.exports={
    registerUser,
    login,
    updatePassword,
}
