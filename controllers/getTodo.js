const Todo =require("../models/todo");

//define route Handeler//here direct export this function by exports.function name
exports.getTodo = async(req,res)=>{

    try{
       //Fetch all todo items from database
       const todos=await Todo.find({});

       //response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire Data is Fetched"
       });

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

//Get single Todo
exports.getTodoById = async(req,res)=>{
    try{
        //Fetch Single todo item by ID
        const id =req.params.id;
        const todo=await Todo.findById({_id:id});
 

         //data for given id not found
         if(!todo){
            return res.status(404).json({
                success:false,
                mssage:"No Data found with Given Id",
            })
         }
         // If data found //response
         res.status(200).json({
             success:true,
             data:todo,
             message:`Todo ${id}data successfully fetched`,
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