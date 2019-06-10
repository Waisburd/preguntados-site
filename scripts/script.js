const MAX_ROUNDS = 5;
const INDICE_RESPUESTA_CORRECTA = 5;
const INDICE_PREGUNTA = 0;
const preguntas = [
    ['¿Cuál es la capital de Sudáfrica?', 'Ciudad del Cabo', 'Bloemfontein', 'Pretoria', 'Todas las anteriores', 4],
    ['¿Cuál de las sisguientes enfermedades ataca al higado?', 'Hepatitis', 'Diabetes', 'Artrósis', 'Cifoescoliosis', 1],
    ['¿Cuántos hijos/as tuvieron Homero y Marge Simpson?', '2', '3', '4', '5', 3],
    ['¿Cómo murió Eva Perón?', 'Muerte súbita', 'Enfermedad', 'Suicidio', 'Asesinato', 2],
    ['¿Quién pintó la Mona Lisa?', 'Leonardo Da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 1],
    ['¿Quién ganó el mundial de 1978?', 'Alemania', 'Argentina', 'Holanda', 'Brazil', 2],
    ['¿Cuántos países hay en el mundo?', '189', '192', '196', '214', 3],
    ['¿Cuál de estas ciudades no se encuentra en Europa?', 'Praga', 'Barcelona', 'Reykjavik', 'Estambul', 4],
    ['¿De donde de saca la sacarina?', 'Del carbón', 'Del azúcar', 'Del aceite de girasol', 'Del azufre', 1],
    ['¿Qué estudia la icitología?', 'Los insectos', 'Los peces', 'Las rocas', 'Las erupciones cutáneas', 2],
    ['¿Qué personaje de Disney perdió su zapato de cristal?', 'Tiana', 'Blancanieves', 'Cenicienta', 'La Sirenita', 3],
    ['¿Quién es la mascota de SEGA?', 'Ryu', 'Mario', 'Pac Man', 'Sonic', 4],
    ['¿Dónde surgió la filosofía?', 'Grecia', 'España', 'Egipto', 'Egipto', 1],
    ['¿Cuántos soldados argentinos murieron en la Guerra de las Malvinas?', '200', '649', '987', '1452', 2],
    ['¿Qué odia Mafalda?', 'El Pájaro Loco', 'Los panqueques', 'La sopa', 'A Manolito', 3],
    ['¿Quién compuso la famosa canción "Bohemian Rhapsody?', 'John Lennon', 'David Bowie', 'Elton John', 'Freddie Mercury', 4],
    ['¿Cómo se llama el estadio del FCBarcelona?', 'Camp Nou', 'Santiago Bernabeu', 'La Masia', 'Barcelona Camp', 1],
    ['¿Cuántos cuadros tiene un tablero de ajedres?', '128', '64', '76', '32', 2]
];
let preguntasUsadas = [];
let respuestasCorrectas = 0;
let round = 0;
let random;

$(document).ready(function(){
    

    chooseQuestion();
    updateQuestionUI();

    $('button').click(function(){
        if(event.target.id == preguntas[random][INDICE_RESPUESTA_CORRECTA]){
            console.log('respuesta correcta');
            respuestasCorrectas++;
            $(this).css('background-color', 'lightgreen');
            // setTimeout(1000);
            // $('#respuestas').fadeOut(1000, updateQuestionUI);
            // $(this).animate({left: '+=100%'}, 'slow');
            
        } else {
            console.log('respuesta incorrecta');
            $(this).css('background-color', 'lightred');
        }
        preguntasUsadas[round] = random;
        round++;
        $(this).css('background-color', 'rgb(81, 97, 185)');
        // $('#respuestas').fadeIn();
        chooseQuestion();
        updateQuestionUI();
    });
    

});

function chooseQuestion(){
    // random = Math.floor((Math.random() * preguntas.length));

    do {
        if(preguntasUsadas.length >= MAX_ROUNDS){
            $('body').empty();
            $('body').append('<h1>Termino la partida</h1>');
            break;
        }
        random = Math.floor((Math.random() * preguntas.length - 1));
    } while(preguntasUsadas.some(value => value == random));
}

function updateQuestionUI(){
    $("#pregunta").text(preguntas[random][INDICE_PREGUNTA]);
    for(let i = 1; i <= preguntas[random].length - 2; i++)
        $('#' + i).text(preguntas[random][i]);
}