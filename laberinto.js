let img;
let start;
let pared;
let tesoro;
let volver;
let ancho = 50;
let altura = 100;
let button;
let a = 0;
let b = 0;
let maze = crearLabe();
maze[b][a] = "S";


// INICIAR LABERINTO
function iniciar() {
    for (let j = 0; j < maze.length; j++) {
        for (let i = 0; i < maze.length; i++) {
            if (maze[j][i] == "S" || maze[j][i] == "+") {
                resol(maze, j, i);
                image(start, ancho, altura, 50, 50);
            } else if (maze[j][i] == ".") {
                resol(maze, j, i);
                image(img, ancho, altura, 50, 50);
            } else if (maze[j][i] == "#") {
                resol(maze, j, i);
                image(pared, ancho, altura, 50, 50);
            } else if (maze[j][i] == "G") {
                resol(maze, j, i);
                image(tesoro, ancho, altura, 50, 50);
            } else if (maze[j][i] == "X") {
                resol(maze, j, i);
                image(volver, ancho, altura, 50, 50);
            }
            ancho += 50;
        }
        ancho = 50;
        altura += 50;
    }
}

// CANVAS
function setup() {
    createCanvas(500, 500);
    img = loadImage("/img/wall_right.png");
    start = loadImage("/img/wall_banner_green.png");
    pared = loadImage("/img/floor_spikes_anim_f3.png");
    tesoro = loadImage("/img/chest_full_open_anim_f2.png");
    volver = loadImage("/img/wall_banner_red.png");
    BG();
    button = createButton('iniciar');
    button.position(10, 10);
    button.mousePressed(iniciar);
}

// CREAR BG
function BG() {
    background(199);
}

// CREAR LABERINTOimage(start, ancho, altura, 50, 50);
function crearLabe() {
    let maze = [
        ["S", ".", ".", ".", "."],
        ["#", "#", "#", "#", "."],
        [".", ".", ".", ".", "."],
        [".", "#", ".", "#", "."],
        [".", "#", ".", "#", "G"],
    ];
    return maze
}

// RESOLVER LABERINTO
function resol(maze, x, y) {
    if (x == -1 || y == -1 || x == maze.length || y == maze.length) {
        return false;
    }
    if (maze[y][x] == "G") {
        return true;
    }
    if (maze[y][x] == "#") {
        return false;
    }
    if (maze[y][x] == "X") {
        return false;
    }
    if (maze[y][x] == "+") {
        return false;
    }
    if (maze[y][x] !== "S") {
        maze[y][x] = "+";
    }
    //ESTE
    if (resol(maze, x + 1, y) == true) {
        return true;
    }
    //NORTE
    if (resol(maze, x, y - 1) == true) {
        return true;
    }
    //OESTE
    if (resol(maze, x - 1, y) == true) {
        return true;
    }
    //SUR
    if (resol(maze, x, y + 1) == true) {
        return true;
    }

    if (maze[y][x] !== "S") {
        maze[y][x] = "X";
    }
    return false;

}