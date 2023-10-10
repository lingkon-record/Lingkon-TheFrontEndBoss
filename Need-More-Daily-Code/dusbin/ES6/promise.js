function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
      { username: 'Lingkon', email: 'Lingkon@test.com' },
    ];
  }
  
  function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  }
  
  console.log(findUser('Lingkon'));

