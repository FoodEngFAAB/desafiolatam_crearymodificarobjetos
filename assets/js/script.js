//Creación de Funciones Constructoras
//Función constructora Consultorio
function Consultorio(nombreConsultorio, paciente) {
    this._nombreConsultorio = function () {
        return nombreConsultorio
    }

    this._paciente = function () {
        return paciente || []
    }
}

//Función constructora Paciente
function Paciente(nombrePaciente, edad, rut, diagnostico) {
    this._nombrePaciente = function () {
        return nombrePaciente
    }

    this._edad = function () {
        return edad
    }

    this._rut = function () {
        return rut
    }

    this._diagnostico = function () {
        return diagnostico
    }
}

//Método Getter para modificar datos de Pacientes
Paciente.prototype.getNombrePaciente = function () {
    return this._nombrePaciente()
}

Paciente.prototype.getEdad = function () {
    return this._edad()
}

Paciente.prototype.getRut = function () {
    return this._rut()
}

Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico()
}

//Método Setter para devolver los valores asociados a los Pacientes
Paciente.prototype.setNombrePaciente = function (nuevoNombre) {
    this._nombrePaciente = function () {
        return nuevoNombre
    }
}

Paciente.prototype.setEdad = function (nuevaEdad) {
    this._edad = function () {
        return nuevaEdad
    }
}

Paciente.prototype.setRut = function (nuevoRut) {
    this._rut = function () {
        return nuevoRut
    }
}

Paciente.prototype.setDiagnostico = function (nuevoDiagnostico) {
    this._diagnostico = function () {
        return nuevoDiagnostico
    }
}

//Método Getter para modificar datos de Consultorio
Consultorio.prototype.getNombreConsultorio = function () {
    return this._nombreConsultorio()
}

//Método Setter para devolver los valores asociados al Consultorio
Consultorio.prototype.setNombreConsultorio = function (nuevoNombreConsultorio) {
    this._nombreConsultorio = function () {
        return nuevoNombreConsultorio
    }
}

//Método para agregar nuevos pacientes
Consultorio.prototype.agregarPaciente = function (paciente) {
    this.paciente.push(paciente)
}

//Método de búsqueda por nombre
Consultorio.prototype.buscarPacientePorNombre = function(busquedaNombre){
    this._paciente().forEach(function(element, index){
        if (element._nombrePaciente == busquedaNombre){
            console.log(`Paciente: ${element._nombrePaciente()}`)
            console.log(`Edad: ${element._edad()}`)
            console.log(`RUT: ${element._rut()}`)
            console.log(`Diagnóstico: ${element._diagnostico()}`)
        }
    })
}


//Método para la obtención de pacientes
Consultorio.prototype.obtenerPacientes = function () {
    this._paciente().forEach(function (element, index) {
        console.log(`Paciente:  ${element._nombrePaciente()}`)
        console.log(`Edad:  ${element._edad()}`)
        console.log(`RUT:  ${element._rut()}`)
        console.log(`Diagnóstico:  ${element._diagnostico()}`)
    }
    )
}

//Creación del listado de Pacientes
var paciente1 = new Paciente("Armando Boch E.", 45, "12.345.678-9", "Diagnóstico Reservado.")
var paciente2 = new Paciente("Tamara Lacossa", 25, "98.765.432-1", "No se sabe cómo vive.")
var paciente3 = new Paciente("Zoila Meza", 30, "15.975.456-0", "Fractura de una pata; requiere cirugía para aplicar clavos.")
var consultorio1 = new Consultorio('Contigo Aprendo', [paciente1, paciente2, paciente3])

console.log(paciente1.getNombrePaciente())
console.log(paciente1.getEdad())
paciente1.setNombrePaciente('Marcela')
console.log(paciente1.getNombrePaciente())

console.log(`Nombre del Consultorio: ${consultorio1.getNombreConsultorio()}`)
console.log('Listado de Pacientes')
consultorio1.obtenerPacientes()

console.log('Resultados de la búsqueda por nombre de paciente')
consultorio1.buscarPacientePorNombre('Marcela')
