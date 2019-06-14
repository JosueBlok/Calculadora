// ids y signos
const ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'divide', 'for', 'less', 'plus', 'equal', 'point'];
const sign = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '*', '-', '+', '=', '.'];
let data = [];

// Funcione para realizar los calculos
let calc = function(){

    if (data.length === 2){
        return data[0]
    }
    
    for (values in data){
        console.log(data)
        switch (data[values]){
            case "/":
                data.splice(values - 1, 3, Number(data[values - 1]) / Number(data[Number(values) + 1]))
                return calc()

            case "*":
                data.splice(values - 1, 3, Number(data[values - 1]) * Number(data[Number(values) + 1]))
                return calc()

            case "-":
                data.splice(values - 1, 3, Number(data[values - 1]) - Number(data[Number(values) + 1]))
                return calc()

            case "+":
                data.splice(values - 1, 3, Number(data[values - 1]) + Number(data[Number(values) + 1]))
                return calc()
        }
    }
};



for (button_id of ids){
    
    let elem = document.getElementById(button_id);
    elem.addEventListener('click', () =>{
        document.getElementById('space').value = document.getElementById('space').value + sign[ids.indexOf(elem.id)];
        // console.log(document.getElementById('space').value.length, sign[ids.indexOf(elem.id)]);
        
        let last_sign = document.getElementById('space').value.length - 1;
        // si unos de esto signos es ingresado guardo el numero ingresado hasta ahi
        switch(document.getElementById('space').value[last_sign]){
            case "/":
                data.push(document.getElementById('space').value.slice(0, -1))
                data.push(document.getElementById('space').value.slice(-1))
                document.getElementById('space').value = "";
                break

            case "*":
                data.push(document.getElementById('space').value.slice(0, -1))
                data.push(document.getElementById('space').value.slice(-1))
                document.getElementById('space').value = "";
                break

            case "-":
                data.push(document.getElementById('space').value.slice(0, -1))
                data.push(document.getElementById('space').value.slice(-1))
                document.getElementById('space').value = "";
                break

            case "+":
                data.push(document.getElementById('space').value.slice(0, -1))
                data.push(document.getElementById('space').value.slice(-1))
                document.getElementById('space').value = "";
                break

            case "=":
                data.push(document.getElementById('space').value.slice(0, -1))
                data.push(document.getElementById('space').value.slice(-1))
                document.getElementById('space').value = "";
                calc()
                document.getElementById('space').value = data[0];
                break        
        }
       

    }, false);
}

let clear = document.getElementById('clear');

clear.addEventListener('click', () =>{
    document.getElementById('space').value = "";
    data = [];
}, false);



