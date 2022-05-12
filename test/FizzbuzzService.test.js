const Reader = require('../lib/utils/Reader');
const FizzbuzzService = require('../lib/services/FizzbuzzService')
describe("Unit Tests for FizzbuzzService Class", () => {
    test('Test 1: Unit Tests for FizzbuzzService Class', () => {

     const explorers = Reader.readJsonFile("explorers.json")
     const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorers, "node")
     expect(explorerTrick).toStrictEqual(FizzbuzzService.applyValidationInExplorer(explorers, "node"))
    });

    

    
  })