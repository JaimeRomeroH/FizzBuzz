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
};

const assignTrickInNumber = function(score){
    if(score%5 === 0 && score%3 === 0){
        trick = "FIZZBUZZ";
        return {"score":`${score}`, "trick":`${trick}`};
    }
    else if(score%3 === 0){
        trick = "FIZZ";
        return {"score":`${score}`, "trick":`${trick}`};
    }
    else if(score%5 === 0){
        trick = "BUZZ";
        return {"score":`${score}`, "trick":`${trick}`};
    }
    else{
        trick = score;
        return {"score":`${score}`, "trick":`${trick}`}; 
    }
};
class FizzbuzzService{
    static applyValidationInExplorer(explorer, mission){
        const explorersInMission = explorer.filter((explorer) => explorer.mission == `${mission}`);
        const explorersTrick = explorersInMission.map((explorer) => assignTrick(explorer));
        return explorersTrick;
        
    }

    static applyValidationInNumber(number){
        const validation = assignTrickInNumber(number);
        return validation;
    }
}

module.exports = FizzbuzzService;