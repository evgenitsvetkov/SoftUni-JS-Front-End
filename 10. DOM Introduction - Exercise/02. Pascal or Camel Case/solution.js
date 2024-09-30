function solve() {
  const validNamingConventions = ['Camel Case', 'Pascal Case'];

  const text = document.getElementById('text');
  const convention = document.getElementById('naming-convention');
  const result = document.getElementById('result');

  if (!validNamingConventions.includes(convention.value)) {
    result.textContent = 'Error!';
    return;
  }

  const pascalCaseText = text.value
      .toLowerCase()
      .split(' ')
      .map((x) => x[0].toUpperCase().concat(x.slice(1)))
      .join('');

  result.textContent = 
    convention.value === validNamingConventions[0]
    ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1))
    : pascalCaseText;
}