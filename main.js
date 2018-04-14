let postr = [
    {
        id: '1',
        author: 'Pablo228',
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    }
];

function createPost(post) {
    let section = document.createElement('section');
    section.className = 'post';
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
                ${post.hashtags}
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