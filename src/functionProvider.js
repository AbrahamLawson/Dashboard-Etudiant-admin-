export function getLocalDb() {
  if (!localStorage.getItem(studentDb)) {
    localStorage.setItem(studentDb, JSON.stringify([]))
  }
  return JSON.parse(localStorage.getItem(studentDb))
}
