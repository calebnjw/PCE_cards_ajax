console.log('LOGIN');

const loginButton = document.getElementById('loginButton');

const submitLogin = async () => {
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  console.log('EMAIL', email, 'PASSWORD', password);

  const { data } = await axios.post('/user/login', {
    email,
    password,
  }).catch((error) => {
    console.log(error);
  });

  if (data.loggedIn) {
    // redirect if successfully logged in
    window.location.href = '/game';
  }
};

loginButton.addEventListener('click', submitLogin);
