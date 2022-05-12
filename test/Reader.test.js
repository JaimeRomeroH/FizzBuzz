const Reader = require('../lib/utils/Reader');

describe("Unit Tests for Reader Class", () => {
    test('Test 1: Unit Tests for Reader Class', () => {
     
      const file = 'explorers.json'
      
      const reading = Reader.readJsonFile(file) 
      const data = require('./../explorers.json')
      expect(reading).toStrictEqual(data)
    });
  })