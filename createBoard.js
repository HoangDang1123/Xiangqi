var container = document.querySelector('#container');
var outsideBoard = document.querySelector('#outside-board');
var insideBoard = document.querySelector('#inside-board');
var squares = document.querySelectorAll('.square');
var riverSquare = document.querySelector('.river-square');

// Hàm resize container và bàn cờ theo kích thước trình duyệt
function updateBoardSize() {
    // Lấy kích thước hiện tại của trình duyệt
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Resize container
    container.style.height = (windowHeight * 0.97) + "px";
    container.style.width = (windowWidth * 0.99) + "px";

    // Resize bàn cờ
    outsideBoard.style.left = (windowWidth * 0.2) + "px";
    outsideBoard.style.top = (windowHeight * 0.035) + "px";
    outsideBoard.style.height = (windowHeight * 0.9) + "px";
    outsideBoard.style.width = (windowWidth * 0.5 * 0.775) + "px";

    insideBoard.style.left = (windowWidth * 0.025) + "px";
    insideBoard.style.top = (windowHeight * 0.05) + "px";
    // insideBoard.style.height = (windowHeight * 0.) + "px";

    squares.forEach(square => {
        square.style.height = (windowWidth * 0.04) + "px";
        square.style.width = square.style.height;
    });

    riverSquare.style.height = (windowWidth * 0.04) + "px";
    riverSquare.style.width = ((windowWidth * 0.04 * 8) + 22) + "px"
}

// Gọi hàm updateBoardSize đầu tiên
updateBoardSize();

// Gán sự kiện resize cho hàm update
window.addEventListener('resize', updateBoardSize);