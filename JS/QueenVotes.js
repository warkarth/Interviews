/*
You are helping out with your school's "Queen of School" contest. You have the list of votes, where votes[i] is the name of the girl the ith person voted for. Your task is to find out who the winner is. If there are several girls who got the maximal number of votes, choose the winner by sorting the list of potential winners lexicographically and then choosing the last one.
Example
For votes = ["Laura", "Emily", "Louise", "Natasha", "Emily", "Lilly", "Louise", "Laura", "Mary", "Mary"], the output should be
queenOfSchool(votes) = "Mary".
Emily, Louise, Laura, and Mary have 2 votes each, which is the maximal number of votes, but Mary is the last one in the sorted list.
Input/Output
[execution time limit] 4 seconds (js)
[input] array.string votes
An array containing the names of the girls participating in the Queen of School contest.
Guaranteed constraints:
1 ≤ votes.length ≤ 100,
1 ≤ votes[i].length ≤ 10.
[output] string
The name of the girl who won the Queen of School contest.
*/

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
