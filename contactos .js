const contactos = [
    {
        id: 1,
        nombre: "Johan",
        apellido: "Sierra",
        telefono: 324672456,
        ubicacion: [ "Bogota", "Cr 24 #5-07sur"]
    },
    {
        id: 2,
        nombre: "Hanne",
        apellido: "Sierra",
        telefono: 321024674,
        ubicacion: [ "Bogota", "Carreara 12 #12-5"]
    },
    {
        id: 3,
        nombre: "Marcela",
        apellido: "Corredor",
        telefono: 320939386,
        ubicacion: [ "Bogota", "Calle 24f #13-32"]
    },
    {
        id: 4,
        nombre: "Miguel",
        apellido: "Lopez",
        telefono: 319274918,
        ubicacion: [ "Bogota", "Cl 77 #5-07"]
    }
]


// Funcion para crear un nuevo contacto

function newContact(id, nombre, apelllido, telefono, ciudad, direccion) {
    contactos.push(
        {
            id: id,
            nombre: nombre,
            apellido: apelllido,
            teléfono: telefono,
            ubicaciones: [ ciudad , direccion]
        }
    )
    console.log(contactos)
}
newContact(5,"Jonnathan", "Sierra", 301238913, "Bogota", "Calle 32 #19-9")


// Funcion para eliminar un contacto

function deleteContact(contactoAEliminar) {
    let contactoEliminado = contactos.filter(contacto => contacto.nombre == contactoAEliminar)
    console.log("Vas a eliminar este contacto", contactoEliminado)
    
// Este bloque de codigo le da la opcion al usuario si quiere eliminar el contacto o no

    // let respuesta = prompt("Lo quieres eliminar?").toLowerCase()
    // if (respuesta == "si") {
    //     contactos.splice(contactoEliminado,1)
    //     console.log("Lista de contactos actucalizada", contactos)
    // } else {
    //     console.log("No has eliminado nigun contacto")
    // }

    contactos.splice(contactoEliminado, 1)
}
deleteContact("Johan")


// Funcion para imprimir un contacto un nuevo contacto

function printContact() {
    console.log("Lista de contactos actual")
    for (let i = 0; i < contactos.length; i++) {
        const element = contactos[i];
        console.log(element)
    }
}
printContact()


// Funcion para actualizar un contacto

function update(id, propiedad, actualizar) {
    const actualiza = contactos.findIndex((contacto) => contacto.id === id)
    contactos[actualiza][propiedad] = actualizar
    console.log(`Has actualizado al contacto con el ID: ${id}`, contactos[actualiza])
}
update(2, "nombre", "Camila")