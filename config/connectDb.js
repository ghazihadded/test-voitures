const mongoose =require('mongoose')



const connect =()=> {
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).then(()=>console.log('connect on db'))
}


module.exports= connect