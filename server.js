const app=require('./app.js')
const PORT=process.env.PORT||5005;
app.listen(PORT,()=>{
    console.log(`Your server is up and ready to connect at http://localhost:${PORT}`)
})
