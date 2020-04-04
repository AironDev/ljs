// Calc
function calc(param){
    var val = param;
    var screen = document.getElementById('screen').innerHTML;
    switch (val) {
        case 1:
            document.getElementById('screen').innerHTML = screen+'1';
            break;
        case 2:
            document.getElementById('screen').innerHTML = screen+'2';
            break;
        case 3:
            document.getElementById('screen').innerHTML = screen+'3';
            break;
        case 4:
            document.getElementById('screen').innerHTML = screen+'4';
            break;
        case 5:
            document.getElementById('screen').innerHTML = screen+'5';
            break;
        case 6:
            document.getElementById('screen').innerHTML = screen+'6';
            break;
        case 7:
            document.getElementById('screen').innerHTML = screen+'7';
            break;
        case 8:
            document.getElementById('screen').innerHTML = screen+'8';
            break;
        case 9:
            document.getElementById('screen').innerHTML = screen+'9';
            break;
        case 0:
            document.getElementById('screen').innerHTML = screen+'0';
            break;
        case 'add':
            document.getElementById('screen').innerHTML = screen+'+';
            break;
        case 'sub':
            document.getElementById('screen').innerHTML = screen+'-';
            break;
        case 'mul':
            document.getElementById('screen').innerHTML = screen+'*';
            break;
        case 'div':
            document.getElementById('screen').innerHTML = screen+'/';
            break;
        case 'clear':
            document.getElementById('screen').innerHTML = '';
            break;
        case 'ans':
            document.getElementById('screen').innerHTML = eval(screen);
            break;
        default:
            break;
    }
}