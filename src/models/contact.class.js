// Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello),
// que va a contar con las siguientes características:
//    Nombre: que será un String.
//    Apellido: también un String.
//    Email: de nuevo un String.
//    Conectado: será un booleano que nos indicará si la persona está conectada o no.

export class Contact {
  name = "";
  surname = "";
  email = "";
  conected = false;

  constructor(name, surname, email, conected) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.conected = conected;
  }
}
