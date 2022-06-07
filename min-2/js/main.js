let usersCard = document.getElementsByClassName('users')[0]
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for(const userItem of value){
            let userCard =document.createElement('div')
            userCard.classList.add('user')
            userCard.innerHTML =`<h3>ID: ${userItem.id}</h3>
                            <h4>Name: ${userItem.name}</h4>`
            let but = document.createElement('a')
            but.innerText = 'Clik me'
            but.href = `./user-details.html?data=${JSON.stringify(userItem)}`
            userCard.appendChild(but)
            usersCard.appendChild(userCard)
            document.body.appendChild(usersCard);
        }
    })