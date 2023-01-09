
function deJade() {
    let r = Math.round(127 * Math.random());
    let g = Math.round(Math.random() * 128 + 127);
    let b = Math.round(191 * Math.random());

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
