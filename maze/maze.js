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

function MazeSquare(a) {
    this.active = a ? true : false;

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

    this.html = function() {
        return "<div class='maze-square " + this.subclass()  + "'></div>";
    }
}

$('document').ready(function(){
    maze = new Maze(100, 50);

    maze.generate();
    maze.add($('#maze-container'));
});
