const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService");

describe("Unit Tests for ExplorerService Class", () => {
    test("Test 1: Unit Tests for ExplorerService Class", () => {

        const explorers = Reader.readJsonFile("explorers.json"); 
        const explorerMission = ExplorerService.filterByMission(explorers, "node");
     
        expect(explorerMission).toStrictEqual(ExplorerService.filterByMission(explorers, "node"));
    });
    test("Test 2: Unit Tests for ExplorerService Class", () => {
  
        const explorers = Reader.readJsonFile("explorers.json"); 
        const explorerMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
       
        expect(explorerMission).toBe(10);
    });
    test("Test 3: Unit Tests for ExplorerService Class", () => {
  
        const explorers = Reader.readJsonFile("explorers.json"); 
        const explorerMission = ExplorerService.getExplorersUserNamesByMission(explorers, "node");
       
        expect(explorerMission).toStrictEqual(ExplorerService.getExplorersUserNamesByMission(explorers, "node"));
    });    
         

});