const Reader = require("../utils/Reader");
const FizzbuzzService = require("../services/FizzbuzzService");
const ExplorerService = require("../services/ExplorerService");


class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.filterByMission(explorers, mission); 
        return filter;
    }
}

module.exports = ExplorerController;