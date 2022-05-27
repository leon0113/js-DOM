const newh2 = document.createElement('h2');
newh2.innerText = 'List Item - 6*';

const newli2 = document.createElement('li');
newli2.appendChild(newh2);

const newli = document.createElement('li');

newli.innerHTML = `
        <h5>List Item-5*</h5>
        `;

const newUl = document.getElementById('lists');
newUl.appendChild(newli);
newUl.appendChild(newli2);