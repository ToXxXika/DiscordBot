const express= require('express');
const app = express();
const proclubsapi = require('proclubs-api');
 class Server{
       constructor(){
            this.app = express();
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: false }));
            this.app.use(express.static('public'));
            module.exports=app;
            this.app.listen(3000,()=>{
                console.log('Server is running on port 3000');
            });
        }
        async  getClubInfo(plateform,clubId){

            var clubinfo
              await  proclubsapi.getClubInfo(plateform, clubId).then((data) => {
                 console.log(data);
                 clubinfo= data;
                 return clubinfo ;
              });
            return clubinfo ;
        }
        async getClubIdByName(platform,clubName){
            var clubId
            await proclubsapi.getClubIdByName(platform, clubName).then((data) => {
                console.log(data);
                clubId= data;
                return clubId ;
            });
            return clubId ;
        }

}
module.exports=Server;
