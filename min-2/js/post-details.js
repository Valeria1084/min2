let url = new URL(location.href)
let post =JSON.parse(url.searchParams.get('data'))

let postAll = document.getElementsByClassName('postAll')[0]
postAll.innerHTML = `<h3>ID: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <h5>Body: ${post.body}</h5>
`;

let comAll = document.getElementsByClassName('comAll')[0]
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments `)
.then(response => response.json())
    .then(comments => {
        for(const commentItem of comments){
            let commentCont =document.createElement('div')
            commentCont.innerHTML = ` <h3>ID: ${commentItem.id}</h3>
                                        <h4>Name: ${commentItem.name}</h4>
                                        <h5>Email: ${commentItem.email}</h5>
                                        <h6>Body: ${commentItem.body}</h6>
                                        <h5>City: ${commentItem.city}</h5>`
            comAll.appendChild(commentCont)
        }
    })
postAll.appendChild(comAll)