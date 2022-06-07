let url = new URL(location.href)
let user =JSON.parse(url.searchParams.get('data'))

let userAll = document.getElementsByClassName('userAll')[0]
let postCurrent = document.getElementsByClassName('posts')[0]

userAll.innerHTML = ` ID:${user.id}
<h3>Name:${user.name}</h3>
<h3>Email:${user.email}</h3>
<h3>Street:${user.address.street}</h3>
<h3>Suite:${user.address.suite}</h3>
<h3>City:${user.address.city}</h3>
<h3>Zipcode:${user.address.zipcode}</h3>
<h3>Lat:${user.address.geo.lat}</h3>
<h3>Lng:${user.address.geo.lng}</h3>
<h3>Phone:${user.phone}</h3>
<h3>Website:${user.website}</h3>
<h3>Name:${user.company.name}</h3>
<h3>CatchPhrase:${user.company.catchPhrase}</h3>
<h3>Bs:${user.company.bs}</h3>
`
let button = document.createElement('button')
button.innerText ='Post of current user'
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
.then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let divCardPost = document.createElement('div')
                divCardPost.classList.add('cardPost')
                divCardPost.innerHTML = `Title:${post.title}`
                let button2 = document.createElement('button')
                button2.classList.add('button2')
                button2.innerText='post-details'
                button2.onclick =()=> {
                    location.href =`./post-details.html?data=${JSON.stringify(post)}`
                }


                postCurrent.append(divCardPost)
                divCardPost.appendChild(button2)

                button.disabled = true


            }


        })
}
userAll.appendChild(button)
