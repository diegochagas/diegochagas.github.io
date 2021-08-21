function calculateAge(birthday) {
  const ageDifMiliseconds = Date.now() - birthday.getTime();

  const ageDate = new Date(ageDifMiliseconds);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById('age').innerHTML = calculateAge(new Date('11/05/1989'));