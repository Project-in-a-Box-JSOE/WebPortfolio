function expand(s) {
    var td = s;
    var d = td.getElementByTagName('div').item(0);

    td.className = 'menuHover';
    d.className = 'menuHover';
}

function collapse(s) {
    var td = s;
    var d = td.getElementByTagName('div').item(0);

    td.className = 'menuNormal';
    d.className = 'menuNormal';
}