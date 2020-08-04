export function check(
  func,
  mainPage,
  array,
  email,
  password,
  changeWrongPassword,
  changeWrongEmail, 
  getEmailUser
) {
  if (array.some(i => i.email === email && i.password === +password)) {
    func((mainPage = true)), 
    getEmailUser(email)
  }
  if (!array.some(i =>  i.email === email)) changeWrongEmail();
  if (!array.some(i =>  i.password === password)) changeWrongPassword();
}