const proclubsapi = require("proclubs-api");
class pcapi {
    constructor() {
    }
    async getClubMembers(platform,clubId){
        var clubMembers
        await proclubsapi.getClubMembers(platform, clubId).then((data) => {
            clubMembers= data.length;
            return clubMembers ;
        });
        return clubMembers ;
    }
    async  getClubInfo(plateform,clubId){

        var clubinfo
        await  proclubsapi.getClubInfo(plateform, clubId).then((data) => {
            clubinfo= data;
            return clubinfo ;
        });
        return clubinfo ;
    }
    async getClubIdByName(platform,clubName){
        var clubId
        await proclubsapi.getClubIdByName(platform, clubName).then((data) => {
            clubId= data;
            console.log("clubId: "+clubId)
            return clubId ;
        });
        console.log("clubId outside: "+clubId)
        return clubId ;
    }
    async getClubStats(platform,clubId){
        var clubStats
        await proclubsapi.getClubStats(platform, clubId).then((data) => {
            clubStats= data;
            return clubStats ;
        });
        return clubStats ;
    }
    async getPlayerStats(plateform,clubId,playerName){
        var playerStats
        await proclubsapi.getClubMemberStats(plateform, clubId).then((data) => {
            for(let i = 0;i<data.length;i++){
                console.log(data[i])
                if(data[i].name===playerName){
                    playerStats= data[i];
                    return playerStats ;
                }
            }
        });
        return playerStats ;
    }
}
module.exports = pcapi;
