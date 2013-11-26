$('document').ready(function(){
    mazeData = new Array(
        new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
        new Array(2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0),
        new Array(0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0),
        new Array(0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0),
        new Array(0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0),
        new Array(0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0),
        new Array(0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0),
        new Array(0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0),
        new Array(0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0),
        new Array(0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0),
        new Array(0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0),
        new Array(0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0),
        new Array(0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0),
        new Array(0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0),
        new Array(0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0),
        new Array(0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0),
        new Array(0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0),
        new Array(0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0),
        new Array(0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0),
        new Array(0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0),
        new Array(0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0),
        new Array(0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0),
        new Array(0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0),
        new Array(0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0),
        new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0),
        new Array(0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0),
        new Array(0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0),
        new Array(0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0),
        new Array(0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3),
        new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
        );

    game = new MazeGame('maze-container', 40, 30, mazeData);
    $(document).keydown(function (e){
        game.processInput(e);
    });
});

function MazeGame(id, x, y, m) {
    this.maze = new Maze(x, y);

    this.maze.generate(m);
    this.maze.add($('#' + id));

    this.location = this.maze.getEntrance();
    this.goal = this.maze.getExit();

    this.moveRight = function() {
        y = this.location.getY();
        x = this.location.getX();

        dest = this.maze.get(y, x + 1);
        this.move(dest);
    }

    this.moveLeft = function() {
        y = this.location.getY();
        x = this.location.getX();

        dest = this.maze.get(y, x - 1);
        this.move(dest);
    }

    this.moveUp = function() {
        y = this.location.getY();
        x = this.location.getX();

        dest = this.maze.get(y + 1, x);
        this.move(dest);
    }

    this.moveDown = function() {
        y = this.location.getY();
        x = this.location.getX();

        dest = this.maze.get(y - 1, x);
        this.move(dest);
    }

    this.processInput = function(e) {
        switch(e.keyCode) {
          case 37: this.moveLeft();
             break;
          case 38: this.moveDown();
             break;
          case 39: this.moveRight();
             break;
          case 40: this.moveUp();
             break;
        }
    }

    this.person = function() { 
        return "<div id='person'></div>";
    }

    this.exit = function() {
        return "<div id='exit'></div>";
    }

    this.makeStart = function(place) {
        if(!(place instanceof MazeSquare))
            return false;
        place.append(this.person());
    }

    this.makeEnd = function(place) {
        if(!(place instanceof MazeSquare))
            return false;
        //place.append(this.exit());
        place.css('background', '#bbb');
    }

    this.win = function() {
        alert("You win");
    }

    this.move = function(dest) {
        if(!(dest instanceof MazeSquare) || !dest.isActive()) {
            return false;
        }
        dest.append(this.location.clear());
        this.location = dest;
        if(dest.isExit()) {
            this.win();
        }
        return true;
    }
    this.makeStart(this.location);
    this.makeEnd(this.goal);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Maze(x, y) {

    this.x = x;
    this.y = y;

    this.entrance = null;
    this.exit = null;
    

    this.grid = new Array();

    for (i = 0; i < this.x; i++) {
        this.grid[i] = new Array(y);
    }

    //Gets a square in the maze
    this.get = function(r, c) {
        if(r >= y || c >= x || r < 0 || c < 0)
            return null;
        return this.grid[r][c];
    }

    this.canMove = function(r, c) {
        square = this.get(r, c);
        if(square == null || !(square instanceof MazeSquare))
            return false;
        if(square.isActive() == true)
            return true;
        return false;
    }

    this.getEntrance = function() {
        return this.get(this.entrance[0], this.entrance[1]);
    }

    this.getExit = function() {
        return this.get(this.exit[0], this.exit[1]);
    }

    this.generate = function(data) {
        for (i = 0; i < this.y; i++) {
            for (j = 0; j < this.x; j++) {
                this.grid[i][j] = new MazeSquare(this, j, i);
                if(i < data.length && j < data[i].length) {
                    this.grid[i][j].changeActive(data[i][j]);
                    if(data[i][j] == 2) {
                        this.setEntrance(i, j);
                    } else if(data[i][j] == 3) {
                        this.setExit(i, j);
                    }
                } else {
                    this.grid[i][j].randomize();
                }
            }
        }

        //this.makeRandomExit();

        //this.makeRandomEntrance();
    }

    this.makeRandomEntrance = function() {
        endPieces = new Array();
        for (j = 0; j < this.y; j++) {
            if(this.grid[0][j].isActive()) {
                //Creates an array of the endpiece indices
                endPieces[endPieces.length] = j;
            }
        }
        i = endPieces[getRandomInt(0, endPieces.length - 1)];
        this.entrance = [0, i];

        //this.grid[0][i].setEntrance();
    }

    this.setExit = function(y, x) {
        this.exit = [y, x];
        this.get(y, x).setExit();
    }

    this.setEntrance = function(y, x) {
        this.entrance = [y, x];
        this.get(y, x).setEntrance();
    }


    this.makeRandomExit = function() {
        endPieces = new Array();
        for (j = 0; j < this.x; j++) {
            if(this.grid[this.y - 1][j].isActive()) {
                //Creates an array of the endpiece indices
                endPieces[endPieces.length] = j;
            }
        }

        i = endPieces[getRandomInt(0, endPieces.length - 1)];

        this.exit = [i, this.x - 1];

        //this.grid[i][this.x - 1].setExit();
    }

    this.add = function(parent) {
        for (i = 0; i < this.y; i++) {
            for (j = 0; j < this.x; j++) {
                parent.append(this.grid[i][j].html());
            }
        }
    }
}

function MazeSquare(maze, x, y, a) {
    this.active = a ? true : false;
    this.exit = false;
    this.entrance = false; 

    //Coordinates of the MazeSquare
    this.x = x;
    this.y = y;

    this.id = "ms" + this.y + "-" + this.x;

    this.inside = "";
    
    this.isExit = function() {
        return this.exit;
    }

    this.getX = function() {
        return this.x;
    }

    this.getY = function() {
        return this.y;
    }

    this.randomize = function() {
        if(Math.random() > 0.5)
            this.active = true;
    }

    this.isActive = function() {
        return this.active;
    }

    this.subclass = function() {
        return this.active ? 'path' : 'wall';
    }

    this.setExit = function() {
        this.exit = true;
    }

    this.setEntrance = function() {
        this.entrance = true;
    }

    this.changeActive = function(a) {
        if(a != null)
            this.active = a ? true : false;

    }

    this.css = function(s, a) {
        $('#' + this.getId()).css(s, a);
    }

    this.html = function() {
        return "<div class='maze-square " + this.subclass()  + "' id='" + this.getId() + "'>" + this.inside + "</div>";
    }

    this.getId = function() {
        return this.id;
    }

    this.append = function(s) {
        this.inside = s;
        $('#' + this.getId()).append(s);
    }

    this.clear = function() {
        this.inside = "";
        old = $('#' + this.getId()).html();
        $('#' + this.getId()).html("");
        return old;
    }
}


