const contactos = [
    {
        id: 1,
        nombres: "Johan",
        apellidos: "Sierra",
        teléfono: 324672456,
        ubicaciones: [ "Bogota", "Cr 24 #5-07sur"]
    },
    {
        id: 2,
        nombres: "Hanne",
        apellidos: "Sierra",
        teléfono: 321024674,
        ubicaciones: [ "Bogota", "Carreara 12 #12-5"]
    },
    {
        id: 3,
        nombres: "Marcela",
        apellidos: "Corredor",
        teléfono: 320939386,
        ubicaciones: [ "Bogota", "Calle 24f #13-32"]
    },
    {
        id: 1,
        nombres: "Miguel",
        apellidos: "Lopez",
        teléfono: 319274918,
        ubicaciones: [ "Bogota", "Cl 77 #5-07"]
    }
]


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