const votes = ["Laura", "Emily", "Louise", "Natasha", "Emily", "Lilly", "Louise", "Laura", "Mary", "Mary"];

const getWinner = countedVotes => {
    const queenOfSchoolVotesArray = Object.keys(countedVotes).map(key => countedVotes[key]);
    const highestVoteValue = Math.max(...queenOfSchoolVotesArray);

    const queenOfSchoolFinalists = Object.keys(countedVotes).map(key => {
        if(countedVotes[key] === highestVoteValue) {
            return key;
        }
    }).filter(element => element !== undefined);
    return queenOfSchoolFinalists.sort().pop();
}

const queenOfSchool = votes => {
    const countedVotes = {};
    votes.forEach(vote => {
        if (!countedVotes[vote]) {
            countedVotes[vote] = 0;
        }
        countedVotes[vote] += 1;      
    });

    const queen = getWinner(countedVotes);

    return queen;
};

console.log(queenOfSchool(votes));
