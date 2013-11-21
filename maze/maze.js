$('document').ready(function(){
    game = new MazeGame('maze-container', 100, 50);
});

function MazeGame(id, x, y) {
    maze = new Maze(x, y);

    maze.generate();
    maze.add($('#' + id));

    this.location = maze.getEntrance();
    this.goal = maze.getExit();

    this.start(this.location);

    this.person = function() { 
        return "<div class='person'></div>";
    }

    this.start = function(place) {
        if(!place instanceof MazeSquare)
            return false;
        place.append(this.person());
    }

    this.move = function(dest) {
        if(!(dest instanceof MazeSquare) || !dest.isActive())
            return false;
        dest.append(this.location.clear());
        this.location = dest;
        return true;
    }
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
        if(r >= x || c >= y || r < 0 || c < 0)
            return null;
        return this.grid[r, c];
    }

    this.getEntrance = function() {
        return this.get(this.entrance[0], this.entrance[1]);
    }

    this.getExit = function() {
        return this.get(this.exit[0], this.exit[1]);
    }

    this.generate = function() {
        for (i = 0; i < this.x; i++) {
            for (j = 0; j < this.y; j++) {
                square = new MazeSquare(this, i, j);
                square.randomize();
                this.grid[i][j] = square;
            }
        }

        this.makeRandomExit();

        this.makeRandomEntrance();
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

        this.grid[0][i].setEntrance();
    }


    this.makeRandomExit = function() {
        endPieces = new Array();
        for (j = 0; j < this.y; j++) {
            if(this.grid[this.x - 1][j].isActive()) {
                //Creates an array of the endpiece indices
                endPieces[endPieces.length] = j;
            }
        }

        i = endPieces[getRandomInt(0, endPieces.length - 1)];

        this.exit = [this.x - 1, i];

        this.grid[this.x - 1][i].setExit();
    }

    this.add = function(parent) {
        for (i = 0; i < this.x; i++) {
            for (j = 0; j < this.y; j++) {
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

    this.id = "ms" + this.x + "-" + this.y;

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

    this.html = function() {
        return "<div class='maze-square " + this.subclass()  + "' id='" + this.getId() + "'></div>";
    }

    this.getId = function() {
        return this.id;
    }

    this.append = function(s) {
        $('#' + this.getId()).append(s);
    }

    this.clear = function() {
        old = $('#' + this.getId()).html();
        $('#' + this.getId()).html("");
        return old;
    }
}


