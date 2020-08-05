export function check(
  func,
  array,
  email,
  password,
  changeWrongPassword,
  changeWrongEmail, 
  getEmailUser
) {
  if (array.some(i => i.email === email && i.password === +password)) {
    func((true)), 
    getEmailUser(email)
  }
  if (!array.some(i =>  i.email === email)) changeWrongEmail();
  if (!array.some(i =>  i.password === password)) changeWrongPassword();
}