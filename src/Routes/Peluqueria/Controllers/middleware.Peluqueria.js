let arrTurnos = [] //guardo los turnos
const turnatorio = (string, lapsoMinutos) => { 
    console.log(lapsoMinutos)
    let separarHoras= string.split(" ").slice(3).filter((i) => {return i !== 'a'} ) //saco los datos al pedo
    let [horaInicial, horaFinal] = separarHoras //separo las dos horas
    console.log("hora inicial" , horaInicial);
    console.log("hora final", horaFinal)
    let [hora, minutos] = horaInicial.split(':') //separo la hora y los mins de la hora inicial
    let [horaCierre, minCierre] = horaFinal.split(':') //lo mismo q arriba pero con la final
    let sumarMinutos= Number(minutos) + lapsoMinutos //suma los mins
    let sumarHoras = Math.floor(sumarMinutos/60) + Number(hora) //suma las horas
    let minutosPosta = sumarMinutos % 60 //muestra los minutos acorde a la hora (por ej: 10:00 + 70 = 10:10 )

    console.log('minutos posta' ,minutosPosta)
    console.log('sumar horas', sumarHoras)
    console.log('sumar minutos', sumarMinutos)
   

    let nuevaHora = () => {
        if(sumarHoras > 24){ //si las horas sumadas son mas de 24 da la vuelta al reloj  
            let horasPosta = (sumarHoras - 1) % 12 + 1
            return `0${horasPosta}`
        }
        if(sumarHoras < 10){ //si son entre la 1 y 9 am se le agrega un 0 adelante (01:00)
            return `0${sumarHoras}`
        }
        if(sumarHoras === 24){ //si son las 12 am se envía 00 
            return `00`
        }
        else return sumarHoras
    }
    let nuevoMinuto = () => {
        if(minutosPosta < 10) return `0${minutosPosta}` //si los mins son menor q 10 se le agrega un 0 adelante (01,02 etc)
        else return minutosPosta
    } 

    console.log('nueva hora', nuevaHora())
    console.log('nuevo minuto', nuevoMinuto())


    arrTurnos.push(`${nuevaHora()}:${nuevoMinuto()}`) //pusheo valor a arr
    // console.log(arrTurnos) //pusheo valor a arr
    let ultimoElemento = arrTurnos[arrTurnos.length - 1] //consigo el ultimo elemento
    let [horaUltimoElemento, minutosUltimoElemento] = ultimoElemento.split(':') //lo divido
    
    // console.log(horaUltimoElemento)
    // console.log(horaCierre)
    if(horaUltimoElemento >= horaCierre && minutosUltimoElemento >= minCierre){
        return;
    } //cuando sea igual o mayor q hora de cierre termina el bucle
    else {
        let newString = string.replace(`${horaInicial}`, `${ultimoElemento}`) //remplazo el horario inicial con el ultimo elemento del array   
        turnatorio(newString, Number(lapsoMinutos))
    } //sino hace recursividad con el ultimo turno creado
};

arrTurnos.pop()
console.log(arrTurnos)

module.exports = {
    turnatorio,
    arrTurnos
};

// let string = 'Lunes a Viernes de 09:00 a 22:00' 
// turnatorio(string, 30)
// let primerHora= string.split(' ').slice(4, 5).join('')
// arrTurnos.unshift(primerHora)
// arrTurnos.pop()
// console.log(arrTurnos);
// un millon de variables