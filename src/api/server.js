const express= require('express');
const app = express();
 class Server{
       constructor(){

        }
        start(){
            this.app = express();
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: false }));
            this.app.use(express.static('public'));
            module.exports=app;
            this.app.listen(3000,()=>{
                console.log('Server is running on port 3000');
            });
        }

}
module.exports=Server;
