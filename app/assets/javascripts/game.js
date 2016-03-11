'use strict';

function Game(boardContainer) {
    this.playersSymbol = {
        A : "fa fa-times",
        B : "fa fa-circle-o"
    };
    this.playersMoves;
    this.currentPlayer;
    this.winGames = [
        [1,2,3], [4,5,6] , [7,8,9],
        [1,4,7], [2,5,8] , [3,6,9],
        [1,5,9], [7,5,3]
    ];
    this.boardContainer = boardContainer;

    this.init();
}

Game.prototype.trackMove = function (cell_id) {
    this.playersMoves[this.currentPlayer].push(parseInt(cell_id));
    this.playersMoves[this.currentPlayer].sort();

    if (this.isWinner()) {
        alert("PLAYER " + this.currentPlayer + " *** YOU WON!!! ***");
        this.restart();
    } else {
        this.switchPlayer();
    }
};

Game.prototype.isWinner = function () {
    var result;
    for (var i = 0; i <= 7; i++) {
        var testSolution = this.winGames[i];
        result = true;
        for (var j = 0; j <= 2; j++) {
            if (this.playersMoves[this.currentPlayer].indexOf(testSolution[j]) < 0) {
                result = false;
                break;
            }
        }
        if (result == true) {
            break;
        }
    }

    return result;
};

Game.prototype.switchPlayer = function () {
    this.currentPlayer = (this.currentPlayer == 'A') ? 'B' : 'A';
    return this.currentPlayer;
};

Game.prototype.currentPlayerSymbol = function () {
    return this.playersSymbol[this.currentPlayer];
};

Game.prototype.restart = function () {
    this.init();
};

Game.prototype.setupBoard = function () {
    var boardHTML = "";
    var game = this;
    for(var i=1; i<=9; i++) {
        boardHTML += '<div id="cell-' + i +'" data-id="' + i + '"></div>';
    }
    $(this.boardContainer).html(boardHTML);
    $(this.boardContainer + ' div').on('click', function (event) {
        var cell = $(event.currentTarget);
        if(cell.is(':empty')) {
            cell.append('<i class="' + game.currentPlayerSymbol() + '"></i>');
            game.trackMove(cell.data('id'));

        }
    })
};

Game.prototype.init = function () {
    this.playersMoves = {
        A : [],
        B : []
    }
    this.currentPlayer = 'A';
    this.setupBoard();
};

$(document).ready(function() {
    var game = new Game('#board');
});