const Reader = require("../utils/Reader");
class ExplorerService{
    static filterByMission(explorers, mission){
        
        
        const explorersByMission = explorers.filter((explorer) => explorer.mission == `${mission}`);
        
        return explorersByMission;
        
    }

    static getAmountOfExplorersByMission(explorers , mission){
        
        const amount = explorers.filter((explorer) => explorer.mission == `${mission}`);
        return amount.length;
    }

    static getExplorersUserNamesByMission(explorers , mission){
        
        const explorersToGetUsernames = explorers.filter((explorer) => explorer.mission == `${mission}`);
        const usernames = explorersToGetUsernames.map((explorer) => explorer.githubUsername); 
        return usernames;  
    }


   
   
}

module.exports = ExplorerService;