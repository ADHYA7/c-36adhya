class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Multiple Player Game")
        title.position(130,0)
        var input = createInput("NAME")
        input.position(130,160)
        var button = createButton("join")
        button.position(200,200)
        var greetings = createElement("h3")

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount+1;
            player.update(name)
            player.updateCount(playerCount)
            greetings.html("HI WELCOME TO THE GAME"+ name)
            greetings.position(130,200)
        })
    }
}