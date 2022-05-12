const assignTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        
        return explorer;
    }
    else if(explorer.score%3 === 0){
        
        explorer.trick = "FIZZ";
        
        return explorer;
    }
    else if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
       
        return explorer;
    }
    
    else{
        explorer.trick = explorer.score;
        
        return explorer;
    }
}
class FizzbuzzService{
    static applyValidationInExplorer(explorer, mission){
        const explorersInMission = explorer.filter((explorer) => explorer.mission == `${mission}`);
        const explorersTrick = explorersInMission.map((explorer) => assignTrick(explorer));
        return explorersTrick
        
    }
}

module.exports = FizzbuzzService;