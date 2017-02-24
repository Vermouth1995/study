"use strict";

var expArr = new Array(9);

function exp() {
    var a = Math.ceil(Math.random() * 9);
    var b = Math.ceil(Math.random() * 9);
    return (a + "^" + b + "=" + Math.pow(a, b)).toString();
}

function expTable() {
    for (var i = 0, len = expArr.length; i < len; i++) {
        expArr[i] = [];
        for (var n = i + 1; n > 0; n--) {
            expArr[i].push(exp());
        }
    }
    return expArr;
}

function drawLine() {
    var expList = expArr;
    var columnStr = "+";
    for (var i = 0, len = expList.length; i < len; i++) {
        for (var j = 0, arr = []; j < len; j++) {
            arr.push(expList[j][i] != undefined ? expList[j][i].length : 0);
        }
        var arrMax = arr[0];
        for (var k = 0; k < arr.length; k++) {
            if (arrMax < arr[k]) {
                arrMax = arr[k];
            }
        }
        columnStr += "-".repeat(arrMax + 2) + "+";
    }
    return columnStr;
}

function printTable() {
    var expList = expArr;
    var borderLine = drawLine();
    var line = borderLine.replace(/-/g, " ").slice(1, -1).split("+");
    var tableString = borderLine;

    for (var i = 0, len = expList.length; i < len; i++) {
        var template = line;
        function joinExp(expression,key) {
            template[key] = " " + expression + Array(template[key].length - expression.length).join(" ");
        }
        expList[i].forEach(joinExp);
        tableString += "\n|" + template.join("|") + "|\n" + borderLine;
    }
    return tableString + "\n";
}

expTable();
console.log(printTable());
