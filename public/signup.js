console.log('SIGNUP');

const signupButton = document.getElementById('signupButton');
const errorMessage = document.createElement('p');
document.body.append(errorMessage);

const submitLogin = async () => {
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  console.log('EMAIL', email, 'PASSWORD', password);

  const { data } = await axios.post('/user/signup', {
    email,
    password,
  }).catch((error) => {
    console.log(error);
  });

  if (data.signedUp) {
    // redirect if succesfully signed up
    window.location.href = '/user/login';
  } else {
    // display error if failed
    errorMessage.innerText = data.errors[0].message;
  }
};

signupButton.addEventListener('click', submitLogin);
