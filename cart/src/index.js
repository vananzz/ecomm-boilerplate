import faker from 'faker';

const cartText = `<div>${faker.random.number()}</div>`

document.querySelector('#dev-carts').innerHTML = cartText;