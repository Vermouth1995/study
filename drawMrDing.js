"use strict";
/*
var circles = [
    {
        face
    },
    {
        eyes_left
    },
    {
        eyes_right
    },
    {
        ears_left_1
    },
    {
        ears_left_2
    },
    {
        ears_right_1
    },
    {
        ears_right_2
    }
]

var forehead = {
    f_length,
    f_x //x起始值,最大值+f_length
    f_y //y起始值,最大值+4
}

var nose = {
    n_height,
    n_y //y起始值(f_y最大值+1),最大值+n_height
}
*/

var ratio = 2;

function drawMrDing(circles,forehead,nose) {

    var get_max_width = function(){
        var width = 0;
        for (var i = 0; i < circles.length; i++) {
            var width_this =  (circles[i].x + circles[i].r_outer) / ratio ;
            if (width < width_this) {
                width = width_this;
            }
        }
        return width;
    };

    var get_max_height = function(){
        var height = 0;
        for (var i = 0; i < circles.length; i++) {
            var height_this =  circles[i].y + circles[i].r_outer;
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

    var printCircles = function(i,j) {
        if (is_print_need(i,j)) {
             process.stdout.write('@');
        } else {
             process.stdout.write(' ');
        }
    };

    // var printHair = function(i,j,x,b) {
    //
    // };

    var printForehead = function(i,j) {
        var j_by_ratio = j * ratio;
        if ( (j_by_ratio >= forehead.f_x && j_by_ratio <= forehead.f_x + forehead.f_length) &&
             (i >= forehead.f_y && i < forehead.f_y + 4) ) {
            process.stdout.write('@');
        } else {
            process.stdout.write(' ');
        }
    };

    var printNose = function(i,j) {
        var j_by_ratio = j * ratio;
        if ( j_by_ratio == circles[0].x && i >= nose.n_y && i < nose.n_y + nose.n_height ) {
            process.stdout.write('@');
        } else {
            process.stdout.write(' ');
        }
    };

    var printMouth = function(i,j) {
        var j_by_ratio = j * ratio;
        if ( (j_by_ratio >= forehead.f_x && j_by_ratio <= forehead.f_x + forehead.f_length) &&
             (i == forehead.f_y + nose.n_height + 5 || i == forehead.f_y + nose.n_height + 9) ) {
            process.stdout.write('@');
        }
        //j_by_ratio in {forehead.f_x:'',forehead.f_x + 2:'',forehead.f_x + forehead.f_length - 3:'',forehead.f_x + forehead.f_length - 1:''}
        else if ( (j_by_ratio == forehead.f_x || j_by_ratio == forehead.f_x + 2 || j_by_ratio == forehead.f_x + forehead.f_length - 2 || j_by_ratio == forehead.f_x + forehead.f_length) &&
                  (i >= forehead.f_y + nose.n_height + 5 && i < forehead.f_y + nose.n_height + 9)) {
            process.stdout.write('@');
        }
        else {
            process.stdout.write(' ');
        }
    };

    var i_max = get_max_height();
    var j_max = get_max_width();
    for (var i = 0; i <= i_max; i++) {
        for (var j = 0; j <= j_max; j++) {
            printCircles(i,j);
            printForehead(i,j);
            printNose(i,j);
            printMouth(i,j);
        }
        console.log();
    }
}

drawMrDing([
        {
            r_inner : 12,
            r_outer : 16,
            x : 26,
            y : 20
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 22,
            y : 20
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 32,
            y : 20
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 8,
            y : 16
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 8,
            y : 24
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 44,
            y : 16
        },
        {
            r_inner : 2,
            r_outer : 3,
            x : 44,
            y : 24
        }
    ],
    {
        f_length : 12,
        f_x : 20,
        f_y : 12
    },
    {
        n_height : 8,
        n_y : 17
    }
)
