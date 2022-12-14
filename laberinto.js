let img;
let start;
let pared;
let tesoro;
let tesoro2;
let volver;
let ancho = 0;
let altura = 70;
let button;
let maze = crearLabe();
maze[b][a] = "S";

// CREAR LABERINTO(start, ancho, altura);
function crearLabe() {
    let maze = [
        ["S", "#", ".", "#", ".", "#", ".", ".", "#", "."],
        [".", ".", ".", "#", ".", ".", ".", "#", "#", "."],
        [".", "#", ".", "#", ".", "#", ".", ".", "#", "."],
        [".", "#", ".", ".", ".", "#", "#", ".", "#", "."],
        [".", "#", ".", "#", ".", "#", ".", ".", ".", "."],
        [".", "#", ".", "#", ".", "#", "#", ".", "#", "."],
        [".", "#", ".", ".", ".", "#", "#", ".", "#", "."],
        [".", "#", "#", "#", ".", "#", "#", ".", "#", "."],
        [".", "#", ".", "#", ".", "#", "#", ".", "#", "."],
        [".", "#", ".", ".", ".", "#", "#", ".", "#", "G"],
    ];
    return maze

}



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
        ancho = 0;
        altura += 50;
    }
    altura = 70;

}

// CANVAS
function setup() {
    createCanvas(800, 600);
    img = loadImage("/img/wall_right.png");
    start = loadImage("/img/wall_banner_green.png");
    pared = loadImage("/img/floor_spikes_anim_f3.png");
    tesoro = loadImage("/img/chest_full_open_anim_f2.png");
    volver = loadImage("/img/wall_banner_red.png");
    BG();
    iniciar();
    laberinto();
    button = createButton('iniciar');
    button.position(350, 10);
    button.mousePressed(iniciar);
}

// CREAR BG
function BG() {
    background(69, 35,20);
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

function laberinto() {
    for (let j = 0; j < maze.length; j++) {
        for (let i = 0; i < maze.length; i++) {
            if (maze[j][i] == "S" || maze[j][i] == "+") {
                image(img, ancho, altura, 50, 50);
            } else if (maze[j][i] == ".") {
                image(img, ancho, altura, 50, 50);
            } else if (maze[j][i] == "#") {
                image(pared, ancho, altura, 50, 50);
            } else if (maze[j][i] == "G") {
                image(tesoro, ancho, altura, 50, 50);
            } else if (maze[j][i] == "X") {
                image(img, ancho, altura, 50, 50);

            }

            ancho += 50;
        }
        ancho = 0;
        altura += 50;
    }
    altura = 70;
}