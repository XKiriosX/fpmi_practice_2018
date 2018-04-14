let postr = [
    {
        id: '1',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    }
];

function month(monthNum) {
    return ;
}

function createPost(post) {
    let section = document.createElement('section');
    section.className = 'post';
    const month = () => {
        switch(post.date.getMonth()) {
            case 1: return 'January';
            case 2: return 'February';
            case 3: return 'March';
            case 4: return 'April';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'October';
            case 11: return 'November';
            case 12: return 'December';
        }
    }
    section.innerHTML = `
    <section class="post">
        <img src="${post.photoLink}"/>
        <div class="about">
            <div class="like-btn">
                <img src="src/like.png"/>
            </div>
            <div class="author-nickname">
                ${post.author}
            </div>
            <div class="hashtags">
                ${post.hashtags.join(' ')}
            </div>
            <div class="date">
                ${post.date.getDay()} ${month()} ${post.date.getFullYear()}
            </div>
        </div>
    </section>
    `;
    return section.firstElementChild;
}

function addPhotoPost(post) {
    let toPost = createPost(post);
    document.querySelector('main').appendChild(toPost);
}