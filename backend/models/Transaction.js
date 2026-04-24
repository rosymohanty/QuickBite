const mongoose=require("mongoose");
const transactionSchema=new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    order:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Order",
    },
    amount:Number,
    status:{
      type:String,
      enum:["success","failed"],
    },
    paymentMethod:Object,
  },
  {timestamps:true}
);
module.exports=mongoose.model("Transaction",transactionSchema);