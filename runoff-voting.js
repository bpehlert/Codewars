
// If first place has more than half of the votes = winner
// Else: remove the last place and run again
    // If tie for last place, remove all tying

// If 

// Example of list: 
const voters = [ 
    [ 'd', 'a', 'e', 'b', 'c' ],
    [ 'b', 'e', 'd', 'c', 'a' ],
    [ 'e', 'a', 'c', 'b', 'd' ],
    [ 'e', 'd', 'a', 'b', 'c' ],
    [ 'd', 'b', 'a', 'e', 'c' ] 
]

function runoff(voters){
    const candidates = ['a', 'b', 'c', 'd', 'e'];
    let votes = []
    voters.forEach(voter => votes.push(...voter));

    console.log(votes);
    
    const firstChoice = voters.map(voter => voter[0]);
    

    // Function that receives votes and elimnates votes due to logic
    function clearVote (votes, firstChoice) {
        
    }




    
}

runoff(voters);