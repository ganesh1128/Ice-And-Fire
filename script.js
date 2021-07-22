function loadUsers(results) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    for(user of results[0]) {
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
        <li class="li-name"><b>Characters:</b> <a href= '${user.characters[0]}' target="_blank"> Character 1</a></li>
        <li class="li-name"><b>Characters:</b> <a href= '${user.characters[12]}' target="_blank"> Character 2</a></li>
        <li class="li-name"><b>Characters:</b> <a href= '${user.characters[3]}' target="_blank"> Character 3</a></li>
        <li class="li-name"><b>Characters:</b> <a href= '${user.characters[7]}' target="_blank"> Character 4</a></li>
        <li class="li-name"><b>Characters:</b> <a href= '${user.characters[9]}' target="_blank"> Character 5</a></li>
        </ul>
        
      
      `;
  
      userList.append(userContainer);
    };
  
    document.body.append(userList);
  }
  
  let books = fetch('https://www.anapioficeandfire.com/api/books').then(resp => resp.json());
  let characters = fetch('https://www.anapioficeandfire.com/api/characters').then(resp => resp.json());

  const allBooks = async function getUsers(){
    let results = await Promise.all([books,characters]);
    console.log(results);
    
     loadUsers(results)
     

     
    } ();