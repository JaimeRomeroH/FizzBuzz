const Reader = require("../utils/Reader");
const FizzbuzzService = require("../services/FizzbuzzService");
const ExplorerService = require("../services/ExplorerService");


class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.filterByMission(explorers, mission); 
        return filter;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.getExplorersUserNamesByMission(explorers, mission);  
        return filter;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return filter;
    }
}

module.exports = ExplorerController;