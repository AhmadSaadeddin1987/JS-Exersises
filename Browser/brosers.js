const select = document.getElementById("select");
const squares = [
    document.getElementById("div"),
    document.getElementById("div2"),
    document.getElementById("div3"),
];

function applyBlend(mode) {
    squares.forEach(sq => {
        if (sq) sq.style.backgroundBlendMode = mode;
    });
}

select.onchange = () => {
    const mode = select.selectedOptions[0].innerHTML.trim();
    applyBlend(mode);
};

// Initialize on load
applyBlend(select.selectedOptions[0].innerHTML.trim());
console.log('squares:', squares);
