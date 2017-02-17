"use strict";

var table_print = {

    CHAR_HUB    : "+",
    CHAR_HL     : "-",
    CHAR_VL     : "|",
    CHAR_SPACE  : " ",
    CHAR_WARP   : "\r\n",

    get_widths : function(arr){
        var widths = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                var arrij = arr[i][j] || "";
                if( !widths[j] || widths[j] < arrij.length ){
                    widths[j] = arrij.length;
                }
            }
        }
        return widths;
    },

    draw_border_line : function(widths){
        process.stdout.write(this.CHAR_HUB);
        for (var i = 0; i < widths.length; i++) {
            process.stdout.write(this.CHAR_HL.repeat(widths[i] + 2));
            process.stdout.write(this.CHAR_HUB);
        }
        process.stdout.write(this.CHAR_WARP);
    },

    draw_cell : function(val,length){
        if(!val){
            val = "";
        }
        var plus_space = length - val.length;
        process.stdout.write(this.CHAR_SPACE);
        process.stdout.write(val);
        process.stdout.write(this.CHAR_SPACE.repeat(plus_space));
        process.stdout.write(this.CHAR_SPACE);

    },

    draw_value_line : function(values,widths){
        process.stdout.write(this.CHAR_VL);
        for (var i = 0; i < widths.length; i++) {
            this.draw_cell(values[i],widths[i]);
            process.stdout.write(this.CHAR_VL);
        }
        process.stdout.write(this.CHAR_WARP);

    },

    print : function (arr) {
        var widths = this.get_widths(arr);
        this.draw_border_line(widths);
        for (var i = 0; i < arr.length; i++) {
            this.draw_value_line(arr[i],widths);
            this.draw_border_line(widths);
        }
    }
};

var get_9X9 = function(){
    var SIZE = 9;
    var values = [];
    for (var i = 0; i < SIZE; i++) {
        values[i] = [];
        for (var j = 0; j < SIZE; j++) {
            if( i >= j ){
                var x = Math.ceil(Math.random() * 9);
                var y = Math.ceil(Math.random() * 9);
                values[i][j] = x + "^" + y + "=" + (Math.pow(x,y)) ;
            }else{
                values[i][j] = "";
            }
        }
    }
    return values;
};

var main = function(){
    table_print.print(get_9X9());
}

main();






