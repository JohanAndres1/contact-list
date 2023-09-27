const contactos = ["Johan Sierra", "Hanne Sierra", "Marcela Corredor", "Miguel Sierra"]


// Funcion para crear un nuevo contacto

function newContact(nombre) {
    contactos.push(nombre)
    console.log(contactos)
}
newContact("Jonnathan Corredor")


// Funcion para eliminar un contacto

function deleteContact(contactoAEliminar) {
    contactos.splice(contactoAEliminar,1)
    console.log(contactos)
}
deleteContact(0)


// Funcion para imprimir un contacto un nuevo contacto

function printContact() {
    for (let i = 0; i < contactos.length; i++) {
        const element = contactos[i];
        console.log(element)
    }
}
printContact()