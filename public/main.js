let posts = [
    {
        id: '1',
        author: 'USER228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol', '#wtf']
    },
    {
        id: '2',
        author: 'EscobaRrR',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#eto', '#tagi']
    },
    {
        id: '3',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '4',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '5',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '6',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '7',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/post.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '8',
        author: 'Pablo228',
        date: new Date(),
        photoLink: 'src/Hlib-Paper.jpg',
        hashtags: ['#omagad', '#lol']
    },
    {
        id: '9',
        author: 'F1latovv',
        date: new Date(),
        photoLink: 'src/Nikita-Max.jpg',
        hashtags: ['#omagad', '#lol', '#nice_roof']
    }
];
let iife = (function () {
    posts.forEach((item) => {
        let toPost = createPost(item);
        document.querySelector('main').appendChild(toPost);
    });
})();

let getArray = () => posts;

function getPhotoPosts(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;

    
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
    };
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

function getPhotoPost(id) {
    let res = {};
    posts.forEach((item) => {
        if (item.id === id) {
            res = item;
        }
    });
    return res;
}

function validatePhotoPost(post) {
    if (!post.hasOwnProperty('id')) {
        return false;
    }
    if (!post.hasOwnProperty('author')) {
        return false;
    }
    if (!post.hasOwnProperty('date')) {
        return false;
    }
    if (!post.hasOwnProperty('photoLink')) {
        return false;
    }
    if (!post.hasOwnProperty('hashtags')) {
        return false;
    }
    return true;
}

function addPhotoPost(obj) {
    if (!validatePhotoPost(obj)) {
        return false;
    }
    posts.push(obj);
    return true;
}

function removePhotoPost(id) {
    let removeIndex = posts.map(function (item) {return item.id}).indexOf(id);
    posts.splice(removeIndex, 1);
    return true;
}