text = document.querySelector('.label');
const arrays = ['Вы самая лучшая💘', "Вы очень хороший человек", "Вы очень добрая", "Нам с Вами всегда комфортно", "Мы ценим Вашу заботу о нас", 
    "Спасибо, что всегда выслушиваете нас!"]

document.querySelector('.button').addEventListener('click', function() {
    random = getRandomList(arrays);
    text.textContent = random;
})

function getRandomList(array) {
    data = array[Math.floor(Math.random() * array.length)];
    return data;
}