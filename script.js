
function Post(id, content, media, username, likes, createdAt) {
  this.id = id;
  this.content = content;
  this.media = media;
  this.username = username;
  this.likes = likes;
  this.createdAt = createdAt;
}

function generateRelativeDate(createdAt) {
  const currentdate = new Date();
  const postDate = new Date(createdAt);
  const localPostDate = new Date(postDate.getTime() + postDate.getTimezoneOffset() * 60 * 1000);

  const timestamp = currentdate.getTime();
  const oldTimes = localPostDate.getTime();

  const seconds = Math.floor(timestamp / 1000);
  const secondss = Math.floor(oldTimes / 1000);

  const timeDifference = seconds - secondss;


  const minutes = Math.floor(timeDifference / 60);
  const hours = Math.floor(timeDifference / 3600);
  const days = Math.floor(timeDifference / 86400);
  const months = Math.floor(timeDifference / 2620800);
  const years = Math.floor(timeDifference / 31449600);

  if (years > 0) {
    return years === 1 ? "a year ago" : years + " years ago";
  } else if (months > 0) {
    return months === 1 ? "a month ago" : months + " months ago";
  } else if (days > 0) {
    return days === 1 ? "a day ago" : days + " days ago";
  } else if (hours > 0) {
    return hours === 1 ? "an hour ago" : hours + " hours ago";
  } else if (minutes > 0) {
    return minutes === 1 ? "a minute ago" : minutes + " minutes ago";
  } else {
    return "just now";
  }
}


function displayPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const usernameElement = document.createElement("p");
  usernameElement.classList.add("post-username");
  usernameElement.textContent = post.username || "Anonymous";
  postElement.appendChild(usernameElement);

  const contentElement = document.createElement("p");
  contentElement.classList.add("post-content");
  contentElement.textContent = post.content;
  postElement.appendChild(contentElement);

  if (post.media && post.media.type === "image") {
    const imageElement = document.createElement("img");
    imageElement.classList.add("post-media");
    imageElement.src = post.media.url;
    postElement.appendChild(imageElement);
  }

  if (post.media && post.media.type === "video") {
    const videoElement = document.createElement("iframe");
    videoElement.classList.add("post-media");
    videoElement.src = post.media.url.replace(/&link=.*/, '');
    videoElement.src = post.media.url.replace("watch?v=", "embed/");
    videoElement.width = "100%";
    videoElement.height = "auto";
    postElement.appendChild(videoElement);
  }

  const flexContainer = document.createElement('div');
  flexContainer.className = 'flex';

  const likeButton = document.createElement("button");
  likeButton.setAttribute("class", "btn");
  likeButton.setAttribute('onclick', 'likeButton(this)')

  likeButton.innerHTML = '<span class="like likeSticker">&#x2764;</span>';

  const likesElement = document.createElement("p");
  likesElement.classList.add("post-likes");

  const likey = document.createElement('p');
  likey.classList.add('likey')

  if (post.likes > 1) {
    likesElement.textContent = post.likes;
    likey.textContent = 'Likes'
  } else {
    likesElement.textContent = post.likes;
    likey.textContent = 'Like'
  }


  flexContainer.appendChild(likeButton);
  flexContainer.appendChild(likesElement);
  flexContainer.appendChild(likey);
  postElement.appendChild(flexContainer);

  const createdAtElement = document.createElement("p");
  createdAtElement.classList.add("post-date");
  createdAtElement.textContent = generateRelativeDate(post.createdAt);
  postElement.appendChild(createdAtElement);

  document.getElementById("posts").appendChild(postElement);
}

let posts = [
  {
    id: 1,
    content: "Enjoying a delicious cup of coffee at my favorite cafe.",
    username: "CoffeeLover123",
    likes: 20,
    createdAt: "2023-12-03T18:15:00Z",
    media: {
      type: "image",
      url: "https://picsum.photos/200/300?image=1025",
    },
  },
  {
    id: 2,
    content: "Exploring the beautiful hiking trails near my home.",
    username: "NatureAdventurer456",
    likes: 35,
    createdAt: "2023-12-03T15:15:00Z",
    media: {
      type: "image",
      url: "https://picsum.photos/200/300?image=1026",
    },
  },
  {
    id: 3,
    content:
      "Trying out a new recipe for homemade pasta and it turned out amazing!",
    username: "FoodieExpert789",
    likes: 50,
    createdAt: "2023-12-03T13:15:00Z",
    media: null,
  },
  {
    id: 4,
    content:
      "Just finished reading an incredible book that I highly recommend.",
    username: "BookwormExtraordinaire1011",
    likes: 40,
    createdAt: "2023-12-03T11:15:00Z",
    media: null,
  },
  {
    id: 5,
    content: "Caught a stunning sunset while kayaking with friends.",
    username: "AdventureSeeker1213",
    likes: 60,
    createdAt: "2023-12-03T09:15:00Z",
    media: {
      type: "image",
      url: "https://picsum.photos/200/300?image=1029",
    },
  },
  {
    id: 6,
    content: "Learning a new skill playing the guitar and making progress.",
    username: "MusicalEnthusiast1415",
    likes: 25,
    createdAt: "2023-12-03T07:15:00Z",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/Z3Q6rXfQF_U?si=aSYk3mSroZRPmrlF", //the real link in here is not available in YouTube or probaby got deleted so i changed it
    },
  },
  {
    id: 7,
    content:
      "Spent the day volunteering at a local animal shelter and it was so rewarding.",
    username: "CompassionateHeart1617",
    likes: 45,
    createdAt: "2023-12-03T05:15:00Z",
    media: null,
  },
  {
    id: 8,
    content:
      "Just got back from an amazing trip to Bali and it was unforgettable.",
    username: "TravelEnthusiast1819",
    likes: 70,
    createdAt: "2023-12-03T03:15:00Z",
    media: {
      type: "image",
      url: "https://picsum.photos/200/300?image=1032",
    },
  },
  {
    id: 9,
    content: "Had a great time at a concert last night.",
    username: "MusicLover2021",
    likes: 30,
    createdAt: "2023-12-03T01:15:00Z",
    media: {
      type: "video",
      url: "https://www.youtube.com/watch?v=aynofxLApBU", //the real link in here is not available in YouTube or probaby got deleted so i changed it.
    },
  },
  {
    id: 10,
    content: "Started a new workout routine and feeling motivated to get fit.",
    username: "FitnessEnthusiast2223",
    likes: 55,
    createdAt: "2023-12-03T20:15:00Z",
    media: null,
  },
];

function countProperties(obj, prop) {
  let count = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key === prop) {
        count++;
      } else if (typeof obj[key] === 'object') {
        count += countProperties(obj[key], prop);
      }
    }
  }
  return count;
}

function deletecurrent() {
  var postElements = document.getElementsByClassName('post');
  while (postElements.length > 0) {
    postElements[0].parentNode.removeChild(postElements[0]);
  }
}
function resetArray(newArray) {
  posts.length = 0;
  posts.push(...newArray);
}

function postingNewsFeed() {
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  let freearray = [...posts];

  resetArray(freearray);
  deletecurrent();
  posts.forEach((post) => displayPost(post));
}

let prop = 'id';
let idcount = countProperties(posts, prop);

function NewPost() {
  let newid = idcount + 1;
  let user = document.getElementById('username').value;
  let caption = document.getElementById('caption').textContent;
  let imagelink = document.getElementById('imagelink').value;
  let videolink = document.getElementById('videolink').value;

  var current_time = new Date();

  var formatted_time = `${current_time.getFullYear()}-${(current_time.getMonth() + 1).toString().padStart(2, '0')}-${current_time.getDate().toString().padStart(2, '0')}T${current_time.getHours().toString().padStart(2, '0')}:${current_time.getMinutes().toString().padStart(2, '0')}:${current_time.getSeconds().toString().padStart(2, '0')}Z`;

  if (imagelink == '' && videolink == '' && caption == '') {
    document.getElementById('username').value = "";
  }
  else {
    if (imagelink != '') {
      let newPosts = {
        id: newid,
        content: caption,
        username: user,
        likes: 0,
        createdAt: formatted_time,
        media: {
          type: "image",
          url: imagelink,
        },
      };
      posts.push(newPosts);
      postingNewsFeed();
    }

    if (videolink != '') {
      let newPosts = {
        id: newid,
        content: caption,
        username: user,
        likes: 0,
        createdAt: formatted_time,
        media: {
          type: "video",
          url: videolink,
        },
      };
      posts.push(newPosts);
      postingNewsFeed();
    }

    if (videolink == '' && imagelink == '') {
      let newPosts = {
        id: newid,
        content: caption,
        username: user,
        likes: 0,
        createdAt: formatted_time,
        media: null,
      };
      posts.push(newPosts);
      postingNewsFeed();
    }

    document.getElementById('username').value = "";
    document.getElementById('caption').textContent = "";
    document.getElementById('imagelink').value = "";
    document.getElementById('videolink').value = "";
  }
}

posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
posts.forEach((post) => displayPost(post));

function pushTime() {
  let paragraphs = document.querySelectorAll('.post-date');

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = generateRelativeDate(posts[i].createdAt);
  }
}

setInterval(pushTime, 1000);


function likeButton(button) {
  var likeSticker = button.querySelector(".likeSticker");
  var container = button.closest('.flex');
  var likeCount = container.querySelector(".post-likes");

  if (likeSticker.classList.contains("liked")) {
    likeSticker.classList.remove("liked");
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  } else {
    likeSticker.classList.add("liked");
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  }
}
