const fetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data; 
  };
  
  const displayUsers = async () => {
    const userList = document.getElementById('user-list');
    const users = await fetchUsers();
    userList.innerHTML = ''; 
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-card');
      userDiv.innerHTML = `
        <img src="${user.avatar}" alt="User Avatar">
        <div class="user-info">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>Email: ${user.email}</p>
        </div>
      `;
      userList.appendChild(userDiv);
    });
  };
  
  document.getElementById('fetch-users-btn').addEventListener('click', displayUsers);
  