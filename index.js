let mongoose=require('mongoose')
let app=require('./route/route')

mongoose.connect('mongodb://localhost:27017/register',
{  useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>console.log('...........')).catch(()=>console.log('error'))

app.listen(3000,()=>{
    console.log('.runn')
})