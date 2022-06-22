export default function colorHealth(person) {
  let result;
  if (person.health < 15) {
    result = 'critical';
  } else if (person.health < 50) {
    result = 'wounded';
  } else if (person.health >= 50) {
    result = 'healthy';
  }
  return result;
}

colorHealth({ name: 'Маг', health: 90 });