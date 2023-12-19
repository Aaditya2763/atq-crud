
const expressAsyncHandler = require("express-async-handler");
const Comment=require("../../modal/comment/comment");
const Post = require("../../modal/post/Post");

const fetchCommentsCtrl=expressAsyncHandler(async(req,res)=>{
    const {id}=req.body;
    console.log(id)
    try {
        const response=await Post.findById(id);
        
        res.status(200).json({message:"fetched the comments successfully",response})
    } catch (error) {
        res.status(201).json({message:"internal server error"})
        
    }
    })



    const createCommentsCtrl=expressAsyncHandler(async(req,res)=>{
       
        const {id,commentmsg,user}=req.body;
        try {
            const comment=await Post.findById(id);
            const updatedComments=  comment.comments.push({postId:id,
                user:user,
                description:commentmsg})
            res.status(200).json({message:"comment created successfully",updatedComments})
        } catch (error) {
            res.status(201).json({message:"Something went wrong try again",error})
        }
        
    },{new:true})


    module.exports={
        createCommentsCtrl,
        fetchCommentsCtrl,
       
    }