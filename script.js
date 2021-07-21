function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
  
      userContainer.innerHTML = `
      
      
        <h3 class="user-name">${user.name}</h3>
        <ul class="book-ul">
        <li class="li-name"><b>IsBn:</b> ${user.isbn}</li>
        <li class="li-name"><b>Author:</b> ${user.authors}</li>
        <li class="li-name"><b>No of Pages:</b> ${user.numberOfPages}</li>
        <li class="li-name"><b>Publisher:</b> ${user.publisher}</li>
        <li class="li-name"><b>Released Date:</b> ${user.released}</li>
        
        <li class="li-name">Characters: <a href= " ${'https://www.anapioficeandfire.com/api/characters'}">characters</a></li> 
        </ul>
        
      
      `;
  
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }
  getUsers();
  async function getUsers() {
    const data = await fetch(
      "https://www.anapioficeandfire.com/api/books",
      {
        method: "GET"
      }
    );
  
    const users = await data.json();
  console.log(users)
    loadUsers(users);
  }
  
