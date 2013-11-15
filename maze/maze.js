function Maze(x, y) {
    this.x = x;
    this.y = y;
    this.grid = new Array();
    for (i = 0; i < this.x; i++) {
        this.grid[i] = new Array(y);
    }



    this.generate = function() {
        for (i = 0; i < x; i++) {
            for (j = 0; j < y; j++) {
                square = new MazeSquare();
                square.randomize();
                this.grid[i][j] = square;
            }
        }
    }

    this.add = function(parent) {
        for (i = 0; i < x; i++) {
            for (j = 0; j < y; j++) {
                parent.append(this.grid[i][j].html());
            }
        }
    }
}

function MazeSquare(n, s, e, w) {
    this.north = n;
    this.south = s;
    this.east = e;
    this.west = w;

    this.randomize = function() {
        this.north = false;
        this.south = false;
        this.east = false;
        this.west = false;

        if(Math.random() > 0.5)
            this.north = true;
        if(Math.random() > 0.5)
            this.south = true;
        if(Math.random() > 0.5)
            this.east = true;
        if(Math.random() > 0.5)
            this.west = true;
    }

    this.html = function() {
        return "<div class='maze-square' style='border-left-color: " 
            + (this.west ? "#222" : "#fff") + 
            "; border-right-color: " + (this.east ? "#222" : "#fff") + 
            "; border-top-color: " + (this.north ? "#222" : "#fff") + 
            "; border-bottom-color: " + (this.south ? "#222" : "#fff") + ";'></div>";
    }
}

$('document').ready(function(){
    maze = new Maze(20, 10);

    maze.generate();
    maze.add($('#maze-container'));
});