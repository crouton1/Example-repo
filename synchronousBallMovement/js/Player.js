class Player{
    constructor(){
    }
    getCount(){
        var i = database.ref('playerCount');
        i.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }
    update(name){
        //var playerIndex="Player"+playerCount;
        database.ref("Player"+playerCount).set({
            Name:name
        });
    }
}