class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    

    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {


   

        //create the name of game
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style("font-family",'cooper');
        this.title.style('font-size', '70px');
        this.title.style('color', 'yellow');
        

        //create box to enter name
        this.input.position(540,300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'grey');
       
        // create play button
        this.button.position(570,400);
        this.button.style("font-family",'algerian');
        this.button.style('font-size', '30px');
        this.button.style('width', '150px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
       
        //create reset button
        this.reset.position(1000,570);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name+ ", This is game of two players so you have to open this site in two tabs and if you want to play with your friend share this webiste link to your friend PLAY  and enjoy it!!");
            this.greeting.position(50,250);
            //  this.greeting.html( " ");
            //  this.greeting.position(200,300);
            // this.greeting.html( "");
            // this.greeting.position(200,350);
            // this.greeting.html( "")
            // this.greeting.position(200,400);
            

            this.greeting.style('color', 'skyblue');
            this.greeting.style('font-size', '50px');
        this.greeting.style("font-family",'algerian');

        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
      
              player.updateCount(0);
          game.update(0);
        
            var playerCountRef=database.ref('players');
            playerCountRef.remove();
        });

    }
}