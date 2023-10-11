
var expression = "";

function addNumber(number) {
    expression += number;
    updateExpression();
}

function addOperator(operator) {
    expression += operator;
    updateExpression();
}



function calculate() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        result = eval(expression); // 使用eval函数计算表达式
        if (isNaN(result)) {
            throw "输入表达式无效";
        }
        result =  result;
    } catch (error) {
        result = "" + error;
    }
    document.getElementById("result").innerHTML = result;
    expression="";
    updateExpression();
}
// 三角函数
function calculateSin() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "sin(" + expression + "°" + ") = " + Math.sin(angle/180*Math.PI).toFixed(2);
    } catch (error) {
        result =  error;
    }
    document.getElementById("result").innerHTML = result;
}

function calculateCos() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "cos(" + expression + "°"  + ") = " + Math.cos(angle/180*Math.PI).toFixed(2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}

function calculateTan() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "tan(" + expression + "°"  + ") = " + Math.tan(angle/180*Math.PI).toFixed(2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
// 反三角函数
function calculateaSin() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "asin(" + expression + ") = " + (Math.asin(angle)/Math.PI*180).toFixed(2)+"度";
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}

function calculateaCos() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "acos(" + expression + ") = " + (Math.acos(angle)/Math.PI*180).toFixed(2)+"度";
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}

function calculateaTan() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var angle = eval(expression); // 使用eval函数计算角度
        if (isNaN(angle)) {
            throw "输入表达式无效";
        }
        result = "atan(" + expression + ") = " + (Math.atan(angle)/Math.PI*180).toFixed(2)+"度";
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
// 开2次根
function calculateSqrt() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var num = eval(expression); // 使用eval函数计算数值
        if (isNaN(num)) {
            throw "输入表达式无效";
        }
        result = "√" + expression + " = " + Math.sqrt(num).toFixed(2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
// 多次幂
function calculatePower() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var parts = expression.split('^');
        if (parts.length != 2) {
            throw "输入表达式无效";
        }

        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);

        if (isNaN(base) || isNaN(exponent)) {
            throw "输入表达式无效";
        }
        result = base + "^" + exponent + " = " + Math.pow(base, exponent);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
//平方
function calculatePower1() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var base = eval(expression); // 使用eval函数计算底数
        if (isNaN(base)) {
            throw "输入表达式无效";
        }
        result = base + "^2 = " + Math.pow(base, 2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}

//开多次根
function calculateRoot() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var parts = expression.split('√');
        if (parts.length != 2) {
            throw "输入表达式无效";
        }

        var degree = parseFloat(parts[0]);
        var radicand = parseFloat(parts[1]);

        if (isNaN(degree) || isNaN(radicand)) {
            throw "输入表达式无效";
        }
        result = degree+"√" + radicand + " = " + Math.pow(radicand, 1 / degree);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}

// 对数
//以10为底
function calculateLog() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var num = eval(expression); // 使用eval函数计算数值
        if (isNaN(num)) {
            throw "输入表达式无效";
        }
        result = "lg(" + expression + ") = " + Math.log10(num).toFixed(2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
//以e为底
function calculateLn() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var num = eval(expression); // 使用eval函数计算数值
        if (isNaN(num)) {
            throw "输入表达式无效";
        }
        result = "ln(" + expression + ") = " + Math.log(num).toFixed(2);
    } catch (error) {
        result = error;
    }
    document.getElementById("result").innerHTML = result;
}
// 倒数
function calculateReciprocal() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var num = eval(expression); // 使用eval函数计算数值
        if (isNaN(num)) {
            throw "输入表达式无效";
        }
        result = "1/" + expression + " = " + (1 / num).toFixed(5);
        } catch (error) {
            result = error;
        }
        document.getElementById("result").innerHTML = result;
}
//绝对值
function calculateAbsoluteValue() {
    var expression = document.getElementById("expression").value;
    var result;
    try {
        var num = eval(expression); // 使用eval函数计算数值
        if (isNaN(num)) {
            throw "输入表达式无效";
        }
        result = "|" + expression +"|"+ " = " + Math.abs(num).toFixed(5);
        } catch (error) {
            result = error;
        }
        document.getElementById("result").innerHTML = result;
    // var number = parseFloat(document.getElementById("number").value);
    // var absoluteValue = Math.abs(number);
    // document.getElementById("result").textContent = "绝对值：" + absoluteValue;
}

function clearInput() {
    expression = "";
    document.getElementById("result").innerHTML = "";
    updateExpression();
}

function updateExpression() {
    document.getElementById("expression").value = expression;
}