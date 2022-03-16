const COLOR = ['rgba(255, 224, 230, 0.85)', 'rgba(216, 222, 255, 0.85)', 'rgba(251, 235, 219, 0.85)', 'rgba(227, 215, 251, 0.88)'];

let i = 0, j = 5;
let indexColor = 0;
let button = document.querySelector('button');
let list = document.querySelector('.list');

let posts = async () => {
  let postList = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await postList.json();
}

button.addEventListener('click', function() {
posts()
    .then(response => {
    
        if (i == 100) {
            alert('No more posts');
            return;
        }
        // Создает 5 постов и вставляет их в документ
        while (i < j) {
            let post = document.createElement('article');
            post.setAttribute('class', 'post');
            let title = document.createElement('h2');
            let text = document.createElement('p');

            title.innerHTML = response[i].title;
            text.innerHTML = response[i].body;
            post.style.backgroundColor = COLOR[indexColor];
            post.append(title, text);
            list.append(post);
            i++;

        // Меняет цвет фона поста
            indexColor++;
            if (indexColor == COLOR.length) {
                indexColor = 0;
                }    
        }
        // Изменяет счетчик для отображения следующих 5 постов
        if(i == j) {
            j += 5;
        } 
    })
});

