const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService");
const ExplorerController = require("../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController Class", () => {
    test("Test 1: Unit Tests for ExplorerController Class", () => {

        const explorers = Reader.readJsonFile("explorers.json"); 
        const explorerMission = ExplorerService.filterByMission(explorers, "node");
     
        expect(explorerMission).toStrictEqual(ExplorerController.getExplorersByMission("node"));
    });

    test("Test 2: Unit Tests for ExplorerController Class", () => {

        const explorers = Reader.readJsonFile("explorers.json"); 
        const explorerMission = ExplorerService.getExplorersUserNamesByMission(explorers, "node");
     
        expect(explorerMission).toStrictEqual(ExplorerController.getExplorersUsernamesByMission("node"));
    });

});