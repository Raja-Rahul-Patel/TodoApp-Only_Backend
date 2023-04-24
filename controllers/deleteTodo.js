//import  todo Model

const Todo =require("../models/todo");

//define route Handeler//here direct export this function by /exports.function/ name
exports.deleteTodo = async(req,res)=>{

    try{
        //Fetch Single todo item by ID
        const {id }=req.params;
        const todo=await Todo.findByIdAndDelete({_id:id});

      //response
         res.status(200).json({
             success:true,
             data:todo,
             message:`Todo Deleted`,
         })
    }

   catch(err){
    console.error(err);
     res.status(500).json({
         
         success:false,
         error:err.message,
         message:'Server Error',
 
     })
}
}