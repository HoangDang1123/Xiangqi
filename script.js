// Lưu trữ thông tin về phần tử đang được kéo
let draggedElement = null;
let offsetX = 0, offsetY = 0;
var locationX = -1;

function getPossibleLocation() {
    return new Promise(function(resolve, reject) {
        var table = document.getElementsByTagName('table')[0];
        // Get all the rows in the table
        var rows = table.getElementsByTagName('tr');

        for (var i = 0; i < rows.length; i++) {
            // Get the cells in the given row
            var cells = rows[i].getElementsByTagName("td");
            for (var j = 0; j < cells.length; j++) {
                // Cell Object
                var cell = cells[j];
                cell.rowIndex = i;
                cell.positionIndex = j;

                cell.onclick = function () {
                    resolve((this.rowIndex, this.positionIndex));
                };
            }
        }
    });
}

// Xử lý sự kiện khi bắt đầu kéo
function handleDragStart(event) {
    draggedElement = event.target.parentNode;
    offsetX = event.clientX - draggedElement.offsetLeft;
    offsetY = event.clientY - draggedElement.offsetTop;

    element = draggedElement.innerHTML;
    color = draggedElement.style.backgroundColor;
    draggedElement.style.zIndex = '1';

    //Tạo div bóng
    var shadowElement = draggedElement.cloneNode(true);
    shadowElement.style.opacity = '0.7';
    for (var i = 0; i < shadowElement.children.length; i++) {
        shadowElement.children[i].style.opacity = '0.7';
    }
    draggedElement.parentNode.insertBefore(shadowElement, draggedElement.nextSibling);
    draggedElement.style.borderColor = 'black';
    draggedElement.style.borderStyle = 'groove';

    if (event.target.innerHTML = '卒') {
        getPossibleLocation().then(function(rowIndex, positionIndex) {
            console.log(rowIndex, positionIndex);
        });
    }
}

// Xử lý sự kiện di chuyển chuột
function handleMouseMove(event) {
    if (!draggedElement) return;
    
    // Cập nhật vị trí mới cho phần tử đang được kéo
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
}

// Xử lý sự kiện khi kết thúc kéo
function handleDragEnd(event) {
    const container = document.querySelector('#container');
    const shadowElement = document.querySelector('.shadowElement');
    const dropZone = document.querySelector('.dropZone');
    // bounding = dropZone.getBoundingClientRect();

    // if (event.clientX <= bounding.right && event.clientX >= bounding.left
    //     && event.clientY <= bounding.bottom && event.clientY >= bounding.top) {
    //         draggedElement.style.left = dropZone.style.left;
    //         draggedElement.style.top = dropZone.style.top;
    //     }
    // else if (shadowElement) {
    //     draggedElement.style.left = shadowElement.style.left;
    //     draggedElement.style.top = shadowElement.style.top;
    // }
    // else return
    // if(!draggedElement) return;
    // draggedElement.style.borderStyle = 'none';
    // draggedElement = null;

    // container.removeChild(shadowElement);
}

// Gán các xử lý sự kiện cho phần tử cần kéo
//this được sử dụng để tham chiếu đến phần tử DOM mà hàm callback được gắn bắt sự kiện.
const elements = document.querySelectorAll('.green');
elements.forEach(element => {
    element.addEventListener('mousedown', handleDragStart);
    this.addEventListener('mousemove', handleMouseMove);
    this.addEventListener('mouseup', handleDragEnd);
});