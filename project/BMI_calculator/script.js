const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please eneter valid weight ${weight}`;
    } else if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `please eneter valid height ${height}`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(18.6<bmi<= 24.9){
            result.innerHTML = `<span>Congratulation Normal Range : ${bmi}</span>`
        }
    }

});