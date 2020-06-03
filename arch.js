class Miembro {
    constructor(nombre, edad, genero, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.profesion = profesion;
    }
    getMiembro() {
        return `Hola soy ${this.nombre} mi edad es ${this.edad} soy ${this.genero} y estudie  mi edad es ${this.profesion}` ;
    }
}
const Mariana = new Miembro ("Mariana", 21, "Femenino" , "Desarrollo Software");
console.log(Mariana.getMiembro());

class Alumno extends Miembro{
    constructor(nombre, edad, genero, profesion, curso){
        super(nombre, edad, genero, profesion);
        this.curso = curso;
    }
    getAlumno(){
        return `Hola soy ${this.nombre} mi edad es ${this.edad} soy ${this.genero} y estudie  mi edad es ${this.profesion}. Estoy inscrita en el curso  ${this.curso} ` ;
    }
}
const Vania = new Alumno ("Vania", 25, "Femenino" , "Ing. Ambiental", "HTML/CSS/JS");
console.log(Vania.getAlumno());


class Mentor extends Alumno{
    constructor(nombre, edad, genero, profesion, curso, horaentrada, horasalida,organizacion){
        super(nombre, edad, genero, profesion,curso);
        this.horaentrada = horaentrada;
        this.horasalida = horasalida;
        this.organizacion=organizacion;
    }
    getMentor(){
        return `Mi nombre es ${this.nombre} y doy clases de ${this.curso}. El horario es de ${this.horaentrada} pm y termina a las ${this.horasalida} pm. Los espero en  ${this.organizacion} ` ;
    }
}
const Mora = new Mentor ("Salvador", 28, "Masculino", "front-end developer", "HTML/CSS/JS" , 7, 10, "Mentorship 101");
console.log(Mora.getMentor());