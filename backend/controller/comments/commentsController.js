
const expressAsyncHandler = require("express-async-handler");
const Comment=require("../../modal/comment/comment");

const fetchCommentsCtrl=expressAsyncHandler(async(req,res)=>{
    try {
        const comments=await Comment.find({}).sort("-created");
        res.status(200).json({message:"fetched the comments successfully",comments})
    } catch (error) {
        res.status(201).json({message:"internal server error"})
        
    }
    })



    const createCommentsCtrl=expressAsyncHandler(async(req,res)=>{
       
        const {id,commentmsg,user}=req.body;
        try {
            const comment=await Comment.create({
                postId:id,
                user:user,
                description:commentmsg
            })
            res.status(200).json({message:"comment created successfully",comment})
        } catch (error) {
            res.status(201).json({message:"Something went wrong try again",error})
        }
        
    },{new:true})


    module.exports={
        createCommentsCtrl,
        fetchCommentsCtrl,
       
    }