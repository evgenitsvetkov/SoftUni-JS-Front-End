function reversed(m, n, o) {
    var array = [m, n, o];
    let reversed = array.reverse().join(' ');
    console.log(reversed);
}

reversed('A', 'B', 'C');