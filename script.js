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
        <li class="li-name"><b>Characters 1:</b> <a href= '${user.characters[0]}'> Character 1</a></li>
        <li class="li-name"><b>Characters 2:</b> <a href= '${user.characters[12]}'>Character 2</a></li>
        <li class="li-name"><b>Characters 3:</b> <a href= '${user.characters[3]}'> Character 3</a></li>
        <li class="li-name"><b>Characters 4:</b> <a href= '${user.characters[7]}'> Character 4</a></li>
        <li class="li-name"><b>Characters 5:</b> <a href= '${user.characters[9]}'> Character 5</a></li>
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