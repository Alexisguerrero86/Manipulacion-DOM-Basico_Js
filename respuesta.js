
/*function conseguirTipoDeSuscripcion(suscripcion){
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } 
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
     console.warn("ese tipo de suscripcion  no existe");
    }
   */
   // Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
 
   const conseguirTipoSuscripcion3 =0
   const tiposDeSuscripciones3 = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion2(suscripcion) {
    if (tiposDeSuscripciones3[suscripcion]) {
        console.log(tiposDeSuscripciones3[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscripcion2("free");

