function attachEvents() {
    let allPosts = [];

    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    const postUrl = `${baseUrl}/posts`;
    const commentsUrl = `${baseUrl}/comments`;
    
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    const viewPostCommentButton = document.getElementById('btnViewPost');
    const postBodyElement = document.getElementById('post-body');
    const postTitleElement = document.getElementById('post-title');
    
    const postComentsElement = document.getElementById('post-comments');
    
    loadPostsButton.addEventListener('click', fetchAllPostsHandler);
    viewPostCommentButton.addEventListener('click', fetchSinglePostHandler);
    
    async function customFetch(url) {
        return fetch(url).then((response) => response.json());
    }
    
    function appendPosts(postsResponse) {
        selectElement.textContent = '';
        allPosts = [];

        Object.values(postsResponse)
        .forEach(({ body, id, title }) => {
            const optionElement = document.createElement('option');
            
            optionElement.textContent = title;
            optionElement.value = id;
            selectElement.appendChild(optionElement);
            
            allPosts.push({ body, id, title });
        });
    }
    
    function fetchAllPostsHandler() {
        customFetch(postUrl)
        .then(appendPosts);
    }
    
    function fetchSinglePostHandler() {
        //const selectedPostId = selectElement.value;
        const { value: selectedPostId, textContent: selectedPostTitle } = selectElement;
        postBodyElement.textContent = '';
        postTitleElement.textContent = '';
        
        if (!selectedPostId) {
            return;
        }
        const selectedPost = allPosts.find((x) => x.id === selectedPostId);

        postBodyElement.textContent = selectedPost.body;
        postTitleElement.textContent = selectedPost.title;
        
        customFetch(commentsUrl)
        .then((commentsResponse) => {
            postComentsElement.textContent = '';
            
            Object.values(commentsResponse)
            .filter(({ postId }) => postId === selectedPostId)
            .forEach(({ id, text }) => {
                const li = document.createElement('li');
                
                li.textContent = text;
                li.setAttribute('data-id', id);
                
                postComentsElement.appendChild(li);
            });
        });
    }
    
}

attachEvents();