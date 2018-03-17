var express=require('express');
var app=express();

//Встановлення шляху для статичного контенту
app.use(express.static(__dirname)) ;

app.get('/*',function(req,res)
{
	res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT || 8080);
console.log('Server is running on port...')