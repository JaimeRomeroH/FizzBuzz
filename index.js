const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerController = require("./lib/controllers/ExplorerController");
const explorers = Reader.readJsonFile("explorers.json");
//console.log(ExplorerService.filterByMission(explorers, "node"))
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
//console.log(ExplorerService.getExplorersUserNamesByMission(explorers, "node"))
//console.log(FizzbuzzService.applyValidationInExplorer(explorers, "node"));
//console.log(ExplorerController.getExplorersByMission("node"));
//console.log(ExplorerController.getExplorersUsernamesByMission("node"));
console.log(ExplorerController.getExplorersAmonutByMission("node"));