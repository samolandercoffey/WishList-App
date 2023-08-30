//const Todo = require('../models/Todo')
const Wish = require('../models/Wish')

module.exports = {
getWishes: async (req,res)=>{
    console.log(req.user)
    try{
        const wishItems = await Wish.find({userId:req.user.id})
        const itemsLeft = await Wish.countDocuments({userId:req.user.id,completed: false})
        res.render('wishes.ejs', {wishes: wishItems, left: itemsLeft, user: req.user})
    }catch(err){
        console.log(err)
    }
},
createWish: async (req, res)=>{
    try{
        await Wish.create({wish: req.body.wishItem, completed: false, userId: req.user.id})
        console.log('Wish has been added!')
        res.redirect('/wishes') 
    }catch(err){
        console.log(err)
    }
},
markComplete: async (req, res)=>{
    try{
        await Wish.findOneAndUpdate({_id:req.body.wishIdFromJSFile},{
            completed: true
        })
        console.log('Marked Complete')
        res.json('Marked Complete')
    }catch(err){
        console.log(err)
    }
},
markIncomplete: async (req, res)=>{
    try{
        await Wish.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
            completed: false
        })
        console.log('Marked Incomplete')
        res.json('Marked Incomplete')
    }catch(err){
        console.log(err)
    }
},
deleteWish: async (req, res)=>{
    console.log(req.body.wishIdFromJSFile)
    try{
        await Wish.findOneAndDelete({_id:req.body.wishIdFromJSFile})
        console.log('Deleted Wish')
        res.json('Deleted It')
    }catch(err){
        console.log(err)
    }
}
}
