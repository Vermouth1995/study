"use strict";

/*
r_inner - 内半径，单位一个字符宽度;
r_outer - 外半径，单位行高;
x - 圆心横坐标，单位同上;
y - 圆心纵坐标，单位同上;
ratio - 字符宽度/行高;

var circle = {
    r_inner : 2,
    r_outer : 4,
    x : 5,
    y : 10
}
*/
var ratio = 0.5;

function drawRing(circle) {
    var i_max =  circle.y + circle.r_outer;
    var j_max = (circle.x + circle.r_outer) / ratio;
    for (var i = 0; i <= i_max; i ++ ) {
        for (var j = 0; j <= j_max;j ++) {
            //一个字符的打印位置
            var j_by_ratio = j * ratio;
            if ( Math.pow(j_by_ratio - circle.x,2) + Math.pow(i - circle.y,2) <= Math.pow(circle.r_outer,2) &&
                 Math.pow(j_by_ratio - circle.x,2) + Math.pow(i - circle.y,2) >= Math.pow(circle.r_inner,2) ) {
                 process.stdout.write('@');
            } else {
                 process.stdout.write(' ');
            }
        }
        console.log();
    }
}

// drawRing({
//     r_inner : 5,
//     r_outer : 8,
//     x : 15,
//     y : 10
// });

function drawRing_tip(circles) {

    var get_max_width = function(){
        var width = 0;
        for (var i = 0; i < circles.length; i++) {
            var width_this =  (circles[i].x + circles[i].r_outer) / ratio;
            if (width < width_this) {
                width = width_this;
            }
        }
        return width;
    };

    var get_max_height = function(){
        var height = 0;
        for (var i = 0; i < circles.length; i++) {
            var height_this =  (circles[i].y + circles[i].r_outer);
            if (height < height_this) {
                height = height_this;
            }
        }
        return height;
    };

    var is_print_need = function(i,j){
        var j_by_ratio = j * ratio;
        for (var k = 0; k < circles.length; k++) {
            if ( Math.pow(j_by_ratio - circles[k].x,2) + Math.pow(i - circles[k].y,2) <= Math.pow(circles[k].r_outer,2) &&
                 Math.pow(j_by_ratio - circles[k].x,2) + Math.pow(i - circles[k].y,2) >= Math.pow(circles[k].r_inner,2) ) {
                    return true;
            }
        }
        return false;
    };

    var i_max = get_max_height();
    var j_max = get_max_width();
    for (var i = 0; i <= i_max; i ++ ) {
        for (var j = 0; j <= j_max;j ++) {
            //一个字符的打印位置
            if (is_print_need(i,j)) {
                 process.stdout.write('@');
            } else {
                 process.stdout.write(' ');
            }
        }
        console.log();
    }
}

drawRing_tip([
    {
        r_inner : 7,
        r_outer : 8,
        x : 9,
        y : 10
    },
    {
        r_inner : 7,
        r_outer : 8,
        x : 21,
        y : 10
    },
    {
        r_inner : 7,
        r_outer : 8,
        x : 33,
        y : 10
    },
    {
        r_inner :7,
        r_outer : 8,
        x : 15,
        y : 22
    },
    {
        r_inner :7,
        r_outer : 8,
        x : 27,
        y : 22
    }
]);
