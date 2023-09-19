const contactos = [["Johan Sierra", 3209455922], ["Camila Lopez", 3192317547], ["Marcela Corredor", 3209847209]]


// Funcion para crear un nuevo contacto

function newContact(nombre, numero) {
    contactos.push([nombre, numero])
}
const nuevoContacto = newContact("Jonnathan Corredor", 3145867221)
console.log(contactos)


// Funcion para eliminar un contacto

function deleteContact() {
    contactos.shift()
}
const borrarContacto = deleteContact()
console.log(contactos)


// Funcion para crear un nuevo contacto

function printContact() {
    for (let i = 0; i < contactos.length; i++) {
        const element = contactos[i];
        console.log(element)
    }
}
console.log(printContact())