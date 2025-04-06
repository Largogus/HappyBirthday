text = document.querySelector('.label');
const arrays = ['Вы самая лучшая💘', "Вы очень хороший человек", "Вы очень добрая", "Нам с Вами всегда комфортно", "Мы ценим Вашу заботу о нас", 
    "Спасибо, что всегда выслушиваете нас!", "Спасибо, что помогаете нам", "Спасибо что не выгнали нас из школы за прогулы", 'Мы очень Вас уважаем', 'Вы всегда видите в нас лучшее (даже когда мы сами сомневаемся)']

document.querySelector('.button').addEventListener('click', function() {
    random = getRandomList(arrays);
    text.textContent = random;
})

function getRandomList(array) {
    data = array[Math.floor(Math.random() * array.length)];
    return data;
}