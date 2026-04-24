const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      trim:true,
      match:[/^[A-Za-z\s]+$/,"Name should contain only letters"],
    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    phone:String,
    password:{
      type:String,
      required:true
    },
    avatar:{
      type:String,
      default:"",
    },
    role:{
      type:String,
      enum:["user","vendor","delivery-partner","admin"],
      default:"user"
    },
    resetOTP:{
      type:String
    },
    otpExpire:{
      type:Date
    },
    restaurantName:String,
    cuisine:String,
    address:String,
    logo:String,
    isOpen:{
      type:Boolean,
      default:true,
    },
    deliverySettings:{
      radius:Number,
      minOrder:Number,
      avgPrepTime:Number
    },
    bankDetails:{
      accountNumber:String,
      ifsc:String,
      bankName:String,
      accountHolderName:String
    },
    operatingHours: {
      monday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      tuesday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      wednesday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      thursday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      friday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      saturday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      },
      sunday: {
        open: String,
        close: String,
        isOpen: { type: Boolean, default: true }
      }
    },
    addresses:[
      {
      fullName:String,
      phone:String,
      street:String,
      city:String,
      state:String,
      pincode:String,
      country:String,
      isDefault:{
        type:Boolean,
        default:false,
      }
    },
  ],
  cart:{
    items:[
      {
        menuItem:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"MenuItem",
        },
        quantity:{
          type:Number,
          default:1,
        },
        customization:String,
      },
    ],
    totalAmount:{
      type:Number,
      default:0,
    },
    coupon:String,
  },
  paymentMethods:[
    {
      type:{
        type:String,
      },
      provider:String,
      accountNumber:String,
      isDefault:{
        type:Boolean,
        default:false,
      },
    },
  ],
  notificationPreferences:{
    email:{type:Boolean,default:true},
    push:{type:Boolean,default:true},
  },
  favourites:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"MenuItem",
    },
  ],
  },{timestamps:true}
);
module.exports=mongoose.model("User",userSchema);