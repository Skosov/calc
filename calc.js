const keys = document.querySelectorAll('.key');

for (let key of keys)
{
  key.onclick = () => {
    insert(key.value);
  }
}



function insert(num) {
  document.querySelector('.output').value = document.querySelector('.output').value + num;
}

function equal() {
  let expresion = document.querySelector('.output').value;
  if(expresion) {
    document.querySelector('.output').value = eval(document.querySelector('.output').value);
  }
}

function clean() {
  document.querySelector('.output').value="";
}