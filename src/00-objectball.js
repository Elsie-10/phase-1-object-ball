function gameObect(){
    let obj= {
        home :{
            teamName:"Brooklyn Nets",
            colors:['Black, White'],
            players :{
                "Alan Anderson": {
                    number: 0,
                    shoe : 16,
                    points : 22,
                    rebounds: 12,
                    assists :12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1
                },
                    "Reggie Evans" : {
                        number: 30,
                        shoe : 14,
                        points : 12,
                        rebounds: 12,
                        assists :12,
                        steals : 12,
                        blocks : 12,
                        slamDunks :7
                    },
                    "Brook Lopez"	: {
                        number: 11,
                        shoe : 17,
                        points : 17,
                        rebounds: 19,
                        assists :10,
                        steals : 3,
                        blocks : 1,
                        slamDunks : 15
                    },
                    "Mason Plumlee":{
                        number: 1,
                        shoe : 19,
                        points : 26,
                        rebounds: 12,
                        assists :6,
                        steals : 3,
                        blocks : 8,
                        slamDunks : 5
                    },
                        "Jason Terry":{
                            number: 31,
                            shoe : 15,
                            points : 19,
                            rebounds: 2,
                            assists :2,
                            steals : 4,
                            blocks : 11,
                            slamDunks : 1
                        }
    
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien" : {
                    number:4 ,
                    shoe : 18,
                    points :10,
                    rebounds: 1,
                    assists :1,
                    steals : 2,
                    blocks : 7,
                    slamDunks:2
                },
                    "Bismak Biyombo":{
                        number: 0,
                        shoe :16,
                        points :12,
                        rebounds: 4,
                        assists :7,
                        steals : 7,
                        blocks : 15,
                        slamDunks:10
                    },
                    "DeSagna Diop":{
                        number: 2,
                        shoe : 14,
                        points :24,
                        rebounds: 12,
                        assists :12,
                        steals : 4,
                        blocks : 5,
                        slamDunks:5
                    },
                     "Ben Gordon": {
                        number: 8,
                        shoe : 15,
                        points :33,
                        rebounds: 3,
                        assists :2,
                        steals : 1,
                        blocks : 1,
                        slamDunks:0
                    },
                    "Brendan Haywood":{
                        number: 33,
                        shoe : 15,
                        points :6,
                        rebounds: 12,
                        assists :12,
                        steals : 22,
                        blocks : 5,
                        slamDunks:12
                    }
                }
            }
        }
            return obj 
    };

    console.log(gameObect());

    let object = gameObect();

    function numPointScored(name){
       if (object.home.players[name]){
    return object.home.players[name].points
}
else if (object.away.players[name]){
    return object.away.players[name].points
}
else {
    return 'This name is not found'
}
    }
    console.log ('points:', numPointScored('Alan Anderson'));
    
    function shoeSize (name){
if (object.home.players[name]){
    return object.home.players[name].shoe
}
else if (object.away.players[name]){
    return object.away.players[name].shoe
}
else {
    return 'This name is not found'
}
    }
    console.log('shoesize:' , shoeSize('Reggie Evans'));

    function teamColors(){
        if(object.home){
            return object.home.colors
        }
        else  {
            return object.away.colors
        }
    }
    console.log('teamColors:', teamColors('Brooklyn Nets'));

    function teamNames(){
        return [object.home.teamName, object.away.teamName];
    }
    console.log( teamNames());

    function playerNumbers(name){
 if (object.home.players[name]){
     return object.home.players[name].number
 }
 else if (object.away.players[name]){
     return object.away.players[name].number
 }
 else {
     return 'This name is not found'
 }
     }
     console.log ('number:', playerNumbers('Alan Anderson')); 

     function playerStats(playerName) {
        
        for (let player in object.home.players) {
          if (player === playerName) {
            return object.home.players[player];
          }
        }
        
        
        for (let player in object.away.players) {
          if (player === playerName) {
            return object.away.players[player];
          }
        }
        
        return `Player ${playerName} not found.`;
      }
      
      console.log("playerstats:", playerStats("Alan Anderson"));

      function winningTeam() {
        
        let homePoints = 0;
        let awayPoints = 0;
        
        
        for (let player in object.home.players) {
          homePoints += parseInt(object.home.players[player].points);
        }
      
       
        for (let player in object.away.players) {
          awayPoints += parseInt(object.away.players[player].points);
        }
      
        
        if (homePoints > awayPoints) {
          return object.home.teamName;
        } else if (awayPoints > homePoints) {
          return object.away.teamName;
        } else {
          return "It's a tie!";
        }
      }
      
      console.log('winning team:', winningTeam());
      function mostPointsScored() {
        
        let maxPoints = 0;
        let topPlayer = "";
    
        // Iterate over home team's players
        for (let player in object.home.players) {
            if (object.home.players[player].points > maxPoints) {
                maxPoints = object.home.players[player].points;
                topPlayer = player;
            }
        }
    
        // Iterate over away team's players
        for (let player in object.away.players) {
            if (object.away.players[player].points > maxPoints) {
                maxPoints = object.away.players[player].points;
                topPlayer = player;
            }
        }
    
        return `${topPlayer} with ${maxPoints} points.`;
      
    }
    // note as it iterates through each player it updates the value of the maximum points. 
    console.log(mostPointsScored());  // Output will be the player with the most points

    function playerWithLongestName (){

    let longestname=""

    for(let player in object.home.players){
        if(player.length>longestname.length){
            longestname=player
        }
    }

    for(let player in object.away.players){
        if(player.length> longestname.length){
            longestname=player
        }
    }
    return `player with the longest name ${longestname}`
    }
    console.log(playerWithLongestName());
   
    function doesLongNameStealATon(){
        let longestname=""
        let moststeals= 0;
        for(let player in object.home.players){
            if(player.length>longestname.length && object.home.players[player].steals > moststeals){
                longestname=player
                moststeals= object.home.players[player].steals
            }
        }
    
        for(let player in object.away.players){
            if(player.length> longestname.length && object.away.players[player].steals > moststeals){
                longestname=player
                moststeals=object.away.players[player].steals
            }
        }
        return `player with the longest name ${longestname} with ${moststeals} steals`
        }
        console.log(doesLongNameStealATon());
    