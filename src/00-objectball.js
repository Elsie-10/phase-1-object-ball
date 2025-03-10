function gameObect(){
    let obj= {
        home :{
            teamName:"Brooklyn Nets",
            colors:['Black, White'],
            players :{
                "Alan Anderson": {
                    number: '0',
                    shoe : '16',
                    points : '22',
                    rebounds: '12',
                    assists :'12',
                    steals : '3',
                    blocks : '1',
                    slamDunks : '1'
                },
                    "Reggie Evans" : {
                        number: '30',
                        shoe : '14',
                        points : '12',
                        rebounds: '12',
                        assists :'12',
                        steals : '12',
                        blocks : '12',
                        slamDunks : '7'
                    },
                    "Brook Lopez"	: {
                        number: '11',
                        shoe : '17',
                        points : '17',
                        rebounds: '19',
                        assists :'10',
                        steals : '3',
                        blocks : '1',
                        slamDunks : '15'
                    },
                    "Mason Plumlee":{
                        number: '1',
                        shoe : '19',
                        points : '26',
                        rebounds: '12',
                        assists :'6',
                        steals : '3',
                        blocks : '8',
                        slamDunks : '5'
                    },
                        "Jason Terry":{
                            number: '31',
                            shoe : '15',
                            points : '19',
                            rebounds: '2',
                            assists :'2',
                            steals : '4',
                            blocks : '11',
                            slamDunks : '1'
                        }
    
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:" Turquoise, Purple",
            players: {
                "Jeff Adrien" : {
                    number:'4' ,
                    shoe : '18',
                    points :'10',
                    rebounds: '1',
                    assists :'1',
                    steals : '2',
                    blocks : '7',
                    slamDunks:'2'
                },
                    "Bismak Biyombo":{
                        number: '0',
                        shoe : '16',
                        points :'12',
                        rebounds: '4',
                        assists :'7',
                        steals : '7',
                        blocks : '15',
                        slamDunks:'10'
                    },
                    "DeSagna Diop":{
                        number: '2',
                        shoe : '14',
                        points :'24',
                        rebounds: '12',
                        assists :'12',
                        steals : '4',
                        blocks : '5',
                        slamDunks:'5'
                    },
                     "Ben Gordon": {
                        number: '8',
                        shoe : '15',
                        points :'33',
                        rebounds: '3',
                        assists :'2',
                        steals : '1',
                        blocks : '1',
                        slamDunks:'0'
                    },
                    "Brendan Haywood":{
                        number: '33',
                        shoe : '15',
                        points :'6',
                        rebounds: '12',
                        assists :'12',
                        steals : '22',
                        blocks : '5',
                        slamDunks:'12'
                    }
                }
            }
        }
            return obj 
    };

    console.log(gameObect());
    
    function numPointScored(name){
       let object = gameObect();
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
        let object = gameObect();
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
        let object = gameObect()
        if(object.home){
            return object.home.colors
        }
        else  {
            return object.away.colors
        }
    }
    console.log('teamColors:', teamColors('Brooklyn Nets'));

    function teamName(){
        let obj= gameObect()
        return [obj.home.teamName, obj.away.teamName];
    }
    console.log( teamName());

    function playerNumbers(name){
        let object = gameObect();
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
        let obj =  gameObect();
        
        for (let player in obj.home.players) {
          if (player === playerName) {
            return obj.home.players[player];
          }
        }
        
        
        for (let player in obj.away.players) {
          if (player === playerName) {
            return obj.away.players[player];
          }
        }
        
        return `Player ${playerName} not found.`;
      }
      
      console.log(playerStats("Alan Anderson"));

      function winningTeam() {
        let obj = gameObect();
        
        let homePoints = 0;
        let awayPoints = 0;
        
        
        for (let player in obj.home.players) {
          homePoints += parseInt(obj.home.players[player].points);
        }
      
       
        for (let player in obj.away.players) {
          awayPoints += parseInt(obj.away.players[player].points);
        }
      
        
        if (homePoints > awayPoints) {
          return obj.home.teamName;
        } else if (awayPoints > homePoints) {
          return obj.away.teamName;
        } else {
          return "It's a tie!";
        }
      }
      
      console.log('winning team:', winningTeam());