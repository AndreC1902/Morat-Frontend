document.addEventListener('DOMContentLoaded', () => {
    const canciones = {
      "Besos En Guerra": {
        letra: "<strong>Besos En Guerra - Morat ft. Juanes</strong>\n\n¿Quién te dijo esa mentira?\n"+
               "Que eras fácil de olvidar\n"+
               "No hagas caso a tus amigos\n"+
               "Sólo son testigos de la otra mitad\n"+
               "\n"+
               "Dos besos son demasiado\n"+
               "Y un beso no bastará\n"+
               "Y aunque adviertan al soldado, si está enamorado\n"+
               "En guerra morirá\n"+
               "\n"+
               "Ya no tienes que cuidarme\n"+
               "\n"+
               "Porque yo\n"+
               "Siempre he sabido que tus besos matan\n"+
               "Que tus promesas riman con dolor\n"+
               "Que eres experta en robarle latidos a mi corazón\n"+
               "Y tú, nunca juraste que saldría ileso\n"+
               "Ya no te atrevas a pedir perdón\n"+
               "Yo te confieso que no me arrepiento\n"+
               "Y aunque estoy sufriendo, podría estar peor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan\n"+
               "\n"+
               "Para mí nunca fue un juego\n"+
               "Para ti fue un beso más\n"+
               "Y si hoy vuelves a mi vida\n"+
               "No es que estés perdida, no es casualidad\n"+
               "\n"+
               "Ya no tienes que cuidarme\n"+
               "\n"+
               "Porque yo\n"+
               "Siempre he sabido que tus besos matan\n"+
               "Que tus promesas riman con dolor\n"+
               "Que eres experta en robarle latidos a mi corazón\n"+
               "Y tú, nunca juraste que saldría ileso\n"+
               "Ya no te atrevas a pedir perdón\n"+
               "Yo te confieso que no me arrepiento\n"+
               "Y aunque estoy sufriendo, podría estar peor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan\n"+
               "\n"+
               "Ganaré la guerra para conquistarte\n"+
               "No quiero admitir que te vas, que te vas\n"+
               "Ganaré la guerra para conquistarte\n"+
               "No quiero admitir que te vas, que te vas\n"+
               "Yo perdí batallas por nunca aceptar que\n"+
               "No eras fácil de olvidar\n"+
               "\n"+
               "Porque yo\n"+
               "Siempre he sabido que tus besos matan\n"+
               "Que tus promesas riman con dolor\n"+
               "Que eres experta en robarle latidos a mi corazón\n"+
               "Y tú, nunca juraste que saldría ileso\n"+
               "Ya no te atrevas a pedir perdón\n"+
               "Yo te confieso que no me arrepiento\n"+
               "Y aunque estoy sufriendo, podría estar peor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan, moriré de amor\n"+
               "Oh, oh, oh\n"+
               "Sabiendo que tus besos matan",
        audio: "/Canciones/Balas Perdidas/Morat - Besos En Guerra.mp3",
        imagen: "/Imagenes/Lyrics/1 - Besos en Guerra.jpeg"
      },
      "No Se Va":{
        letra: "<strong>No Se Va - Morat</strong>\n\nTan fácil que es enamorarme\n"+
               "Y tan difícil olvidarte\n"+
               "Porque la vida me juraste\n"+
               "Y hoy te busco y tú no estás\n"+
               "Y aunque me duela ver tu foto\n"+
               "Yo entreno a mi corazón roto\n"+
               "Por si mañana él te vuelve a encontrar\n"+
               "\n"+
               "Ya no sé disimular\n"+
               "Llamo y no te puedo hablar\n"+
               "Tu recuerdo no se va, no se va, no se va\n"+
               "Algo en ti quiere volver\n"+
               "Y algo en mí te va a encontrar\n"+
               "Tu recuerdo no se va, no se va, no se va\n"+
               "\n"+
               "Quédate otra vez\n"+
               "Quédate toda la noche\n"+
               "Quédate otra vez\n"+
               "Quédate más de las doce\n"+
               "Quédate otra vez\n"+
               "Que mi corazón no olvida\n"+
               "Un amor así no se olvida\n"+
               "Y no se va, no se va, no se va\n"+
               "\n"+
               "Quédate otra vez\n"+
               "Quédate toda la vida\n"+
               "Quédate otra vez\n"+
               "Tú eres mi bala perdida\n"+
               "Quédate otra vez\n"+
               "Que mi corazón no olvida\n"+
               "Un amor así no se olvida\n"+
               "Y no se va, no se va, no se va\n"+
               "\n"+
               "Quédate una y otra vez, otra vez, otra vez\n"+
               "Quédate una y otra vez, otra vez\n"+
               "Oh-oh-oh-oh\n"+
               "\n"+
               "Perder mis ojos cuando bailes\n"+
               "Sentir mil besos en el aire\n"+
               "Fue suficiente para convencerme de que si te vas\n"+
               "Te buscaré aunque suene loco\n"+
               "De Bogotá hasta Buenos Aires\n"+
               "¿Cómo te explico que no sé olvidar?\n"+
               "\n"+
               "Ya no sé disimular\n"+
               "Llamo y no te puedo hablar\n"+
               "Tu recuerdo no se va, no se va, no se va\n"+
               "Algo en ti quiere volver\n"+
               "Y algo en mí te va a encontrar\n"+
               "Tu recuerdo no se va, no se va, no se va\n"+
               "\n"+
               "Quédate otra vez\n"+
               "Quédate toda la noche\n"+
               "Quédate otra vez\n"+
               "Quédate más de las doce\n"+
               "Quédate otra vez\n"+
               "Que mi corazón no olvida\n"+
               "Un amor así no se olvida\n"+
               "Y no se va, no se va, no se va\n"+
               "\n"+
               "Quédate otra vez\n"+
               "Quédate toda la vida\n"+
               "Quédate otra vez\n"+
               "Tú eres mi bala perdida\n"+
               "Quédate otra vez\n"+
               "Que mi corazón no olvida\n"+
               "Un amor así no se olvida\n"+
               "Y no se va, no se va, no se va\n"+
               "\n"+
               "Quédate una y otra vez, otra vez, otra vez\n"+
               "Quédate una y otra vez, otra vez\n"+
               "Quédate una y otra vez, otra vez, otra vez\n"+
               "Quédate una y otra vez, otra vez",
        audio: "/Canciones/Balas Perdidas/Morat - No Se Va.mp3",
        imagen: "/Imagenes/Lyrics/Balas Perdidas.jpeg"
      },
      "A Donde Vamos":{
        letra: "<strong>A Dónde Vamos - Morat</strong>\n\nRecuerdo verte de perfil\n"+
               "Perdona si no fui sutil\n"+
               "Era verano y yo moría de sed\n"+
               "Cuando te vi solo quise beber, beber de ti\n"+
               "De ti, de ti, y emborracharme así, de ti, y\n"+
               "\n"+
               "No hay trago que sepa tan bien como tus labios en Madrid\n"+
               "Y no sé, no sé, no sé, cómo pude convencerte\n"+
               "Y no sé, no sé, no sé, fue el destino o fue la suerte\n"+
               "\n"+
               "Que siendo un extraño, te dije te amo, te he estado buscando\n"+
               "Por más de mil años, y tú respondiste, ¿a dónde vamos?\n"+
               "Contra las apuestas aquí nos quedamos\n"+
               "Viviendo de fiesta después del verano en\n"+
               "El que respondiste, ¿a dónde vamos?\n"+
               "\n"+
               "Y aunque la historia no estaba prevista\n"+
               "Somos la prueba de que existe amor a primera vista\n"+
               "No dejo de mirarte ni un segundo\n"+
               "Cuando tú estás desaparece el mundo\n"+
               "\n"+
               "Mejores noches yo no creo que existan\n"+
               "Y aunque me pida otra cerveza solo me interesa beber de ti\n"+
               "De ti, de ti, emborracharme así de ti\n"+
               "\n"+
               "Porque no hay trago que sepa tan bien (No, no)\n"+
               "Como tus labios en Madrid\n"+
               "Y no sé, no sé, no sé cómo pude convencerte (Cómo pude convencerte)\n"+
               "Y no sé, no sé, no sé, fue el destino o fue la suerte, eh\n"+
               "\n"+
               "Que siendo un extraño, te dije te amo\n"+
               "Te he estado buscando por más de mil años\n"+
               "Y tú respondiste, ¿a dónde vamos?\n"+
               "Contra las apuestas aquí nos quedamos\n"+
               "Viviendo de fiesta después del verano en el que respondiste, ¿a dónde vamos?\n"+
               "\n"+
               "Y aunque la historia no estaba prevista\n"+
               "Somos la prueba de que existe amor a primera vista\n"+
               "\n"+
               "Hoy fuimos la prueba de que dos extraños\n"+
               "Con algo de suerte, por más de mil años\n"+
               "Se siguen diciendo, ¿a dónde vamos?\n"+
               "Contra las apuestas aquí nos quedamos\n"+
               "Viviendo de fiesta después del verano en el\n"+
               "Que respondiste, ¿a dónde vamos? (¿A dónde vamos, oh?)\n"+
               "\n"+
               "Y aunque la historia no estaba prevista (La historia no vuelve)\n"+
               "Y aunque la gente a veces se resista (La gente no ve)\n"+
               "Somos la prueba de que existe amor a primera vista",
        audio: "/Canciones/A Donde Vamos/Morat - A Dónde Vamos.mp3",
        imagen: "/Imagenes/Lyrics/3. A Donde Vamos.jpeg"
      },
      "506":{
        letra: "<strong>506 - Morat ft. Juanes</strong>\n\nTu número en un papel\n"+
               "Recuerdos de una canción\n"+
               "Tardes pretendiendo ver televisión\n"+
               "Primero siente la piel\n"+
               "Y luego lo siente el corazón\n"+
               "Volver a tu calle me hace ver que\n"+
               "\n"+
               "Recuerdo porque me enamoré\n"+
               "Recuerdo lo que te enamoro\n"+
               "Pero estoy llamando porque muero por saber\n"+
               "\n"+
               "¿Como estas? No se porque pero pensé en los dos\n"+
               "Moria de ganas de escuchar tu voz\n"+
               "Se siente igual, nada cambio (oooh)\n"+
               "¿Como estas? Sigues viviendo en el 506\n"+
               "Donde dejamos el primer amor\n"+
               "Con 16, todo cambio (oooh)\n"+
               "Recuerdo porque me enamoré\n"+
               "Recuerdo lo que te enamoro\n"+
               "Pero contestaste y ya se me olvidó porque, se acabó\n"+
               "\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "\n"+
               "Ayer jugamos a escondidas con otras intenciones\n"+
               "Hoy te encuentro escondida en mas de 15 canciones\n"+
               "Y que le voy a hacer(qué), si no te puedo ver (no)\n"+
               "Es apenas normal que me den ganas de saber\n"+
               "\n"+
               "¿Sigues yendo a Cartagena de vacaciones? Si todavia le tienes miedo a los aviones\n"+
               "Y que le voy a hacer (qué), si no te puedo ver (no) es apenas normal que me den ganas de saber\n"+
               "\n"+
               "¿Como estas? No se porque pero pensé en los dos\n"+
               "Moria de ganas de escuchar tu voz\n"+
               "Se siente igual, nada cambio (oooh)\n"+
               "¿Como estas? Sigues viviendo en el 506\n"+
               "Donde dejamos el primer amor\n"+
               "Con 16, todo cambio (oooh)\n"+
               "Recuerdo porque me enamoré\n"+
               "Recuerdo lo que te enamoro\n"+
               "Pero contestaste y ya se me olvidó porque, se acabó\n"+
               "\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó (oooo)\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó\n"+
               "Oh oh oh oh, oh oh oh oh\n"+
               "Se acabó",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - 506.mp3",
        imagen: "/Imagenes/Lyrics/3. 506.jpeg"
      },
      "Cómo Te Atreves":{
        letra: "<strong>Cómo Te Atreves - Morat</strong>\n\nHoy me pregunto que será de ti\n"+
               "Te tuve cerca y ahora estás tan lejos\n"+
               "Pero prohibirme recordar lo nuestro es imposible, es imposible\n"+
               "No me perdono, sé que te perdí\n"+
               "Pero expiraron los remordimientos\n"+
               "Fui dictador, y el no dejarte ir debió haber sido mi primer decreto\n"+
               "\n"+
               "Cuatro años sin mirarte\n"+
               "Tres postales y un bolero\n"+
               "Dos meses y me olvidaste y ni siquiera me pensaste un 29 de febrero\n"+
               "Andan diciendo por la calle\n"+
               "Que solo le eres fiel al viento\n"+
               "El mismo que nunca hizo falta para levantar tu falda cada día de por medio\n"+
               "\n"+
               "¿Cómo te atreves a volver (Oh-oh)\n"+
               "A darle vida a lo que estaba muerto?\n"+
               "La soledad me había tratado bien\n"+
               "Y no eres quien para exigir derechos\n"+
               "¿Cómo te atreves a volver (Oh-oh)\n"+
               "Y a tus cenizas convertir en fuego?\n"+
               "Hoy mis mentiras veo caer\n"+
               "Que no es verdad que te olvidé\n"+
               "¿Cómo te atreves a volver?\n"+
               "\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh (Oh-oh-oh)\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh (No, no, no)\n"+
               "\n"+
               "¿Por qué volviste si te vas a ir?\n"+
               "Tantas mentiras que al final no veo\n"+
               "Nunca fui bueno para distinguir, al fin y al cabo siempre me las creo\n"+
               "\n"+
               "Cuatro vidas me juraste\n"+
               "Tres 'te odio' y un 'te quiero'\n"+
               "Dos consejos para darte, prefiero ser un cobarde que olvidarte de primero\n"+
               "Andan diciendo por la calle (Andan diciendo por la calle)\n"+
               "Que solo le eres fiel al viento (Que solo le eres fiel al viento)\n"+
               "El mismo que nunca hizo falta para levantar tu falda cada día de por medio\n"+
               "\n"+
               "¿Cómo te atreves a volver (Oh-oh)\n"+
               "A darle vida a lo que estaba muerto?\n"+
               "La soledad me había tratado bien\n"+
               "Y no eres quien para exigir derechos\n"+
               "¿Cómo te atreves a volver (Oh-oh)\n"+
               "Y a tus cenizas convertir en fuego?\n"+
               "Hoy mis mentiras veo caer\n"+
               "Que no es verdad que te olvidé\n"+
               "¿Cómo te atreves a volver?\n"+
               "\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh (Oh-oh-oh)\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh (No, no, no)\n"+
               "\n"+
               "¿Cómo te atreves a volver?\n"+
               "Me hiciste daño, pero sigo vivo\n"+
               "Contigo yo me acostumbré a perder\n"+
               "Mi corazón funciona sin latidos (¡No!)\n"+
               "\n"+
               "¿Cómo te atreves a volver (Oh-oh; ¿cómo te atreves a volver?)\n"+
               "Y a tus cenizas convertir en fuego? (En fuego)\n"+
               "Hoy mis mentiras veo caer\n"+
               "Que no es verdad que te olvidé\n"+
               "¿Cómo te atreves a volver? (¡Oh!)\n"+
               "\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh\n"+
               "(¿Cómo te atreves a volver?; oh-oh-oh)\n"+
               "(¿Cómo te atreves a volver?)\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh (No, no, no)",
        audio: "/Canciones/Sobre El Amor y Sus Efectos Secundarios/Morat - Cómo Te Atreves.mp3",
        imagen: "/Imagenes/Lyrics/4. Como Te Atreves.jpeg"
      },
      "Salir Con Vida":{
        letra: "<strong>Salir Con Vida - Morat ft. Feid</strong>\n\nJusto cuando más pensé que un beso era imposible\n"+
               "Dejé de ser invisible porque me notaste tú\n"+
               "Y era más probable que el sol nunca más saliera\n"+
               "Que el reloj se detuviera, pero me notaste tú\n"+
               "\n"+
               "Y quién lo iba a pensar, que tú me escogieras\n"+
               "Una noche cualquiera entre la multitud\n"+
               "Solo verte bailar me vuelve pedazos\n"+
               "Hoy que te tengo en mis brazos, solo te pido que tú\n"+
               "\n"+
               "Nunca te vayas, que yo quiero salir con vida\n"+
               "Y aunque intentara olvidarte mi boca no lo haría\n"+
               "No me hagas daño, que yo quiero salir con vida\n"+
               "Porque tener que extrañarte sería un acto suicida\n"+
               "Y mi boca no lo haría (Wow)\n"+
               "\n"+
               "Estaban oscuros los cristales\n"+
               "Dijiste que esta noche to' se vale\n"+
               "Tú quería' prender y era yo el que tenía todos los materiales, ey\n"+
               "Me dijiste: 'Baby, síguela', otra botella pídela\n"+
               "¿Quieres fumar? Sí, dale, baby, consíguela, ey\n"+
               "Si tienes gata, despídela\n"+
               "Tú estaba' prendida y dije que me iba a quedar contigo toda la noche\n"+
               "No te soltaba perreándote\n"+
               "Qué rico ver los videítos de cuando tú estabas tocándote\n"+
               "Bebé, sentados en una acera\n"+
               "Con ganas de bajarnos esta bellaquera\n"+
               "Quédate con esta nea, no te quedes soltera (Wow)\n"+
               "\n"+
               "Nunca te vayas, que yo quiero salir con vida\n"+
               "Y aunque intentara olvidarte mi boca no lo haría (No lo haría)\n"+
               "No me hagas daño, que yo (Que yo) quiero salir con vida (Vida)\n"+
               "Porque tener que extrañarte sería un acto suicida\n"+
               "Y mi boca no lo haría\n"+
               "\n"+
               "Mi boca te amaría\n"+
               "No tengo otra salida (No)\n"+
               "Sería un acto suicida\n"+
               "Y mi boca no lo haría (No lo haría)\n"+
               "Mi boca te daría (Daría)\n"+
               "Mil besos noche y día (Ah-ah)\n"+
               "No se despediría\n"+
               "Mi boca no lo haría\n"+
               "\n"+
               "Oh-oh\n"+
               "Mi boca no lo haría",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - Salir Con Vida.mp3",
        imagen: "/Imagenes/Lyrics/5. Salir Con Vida.jpeg"
      },
      "Segundos Platos":{
        letra: "<strong>Segundos Platos - Morat</strong>\n\nTocaste mi mano y no fue por error (Por error)\n"+
               "Sé tus intenciones, no hay que aparentar (Aparentar)\n"+
               "Aunque me muera por un beso, tú solo estás buscando un beso\n"+
               "Que al final cure una herida que dejó alguien más (Que dejó alguien más)\n"+
               "No pretendas reparar tu corazón (Tu corazón)\n"+
               "Con pedazos que te entregan los demás (Los demás)\n"+
               "Porque arreglarlo no es tan fácil, podrá latir, pero es tan frágil\n"+
               "Que, al final, cualquier recuerdo lo va a desarmar (Desarmar)\n"+
               "\n"+
               "Y yo no quiero estar ahí cuando tú llores\n"+
               "Cuando te enteres de que el tiempo no ha hecho sus labores\n"+
               "\n"+
               "Volveré, puede que tarde un rato\n"+
               "Cuando se acaben los segundos platos\n"+
               "Yo volveré a enamorarte (Volveré)\n"+
               "Volveré, solo cuando estés lista (Ah-ah)\n"+
               "Será un amor a segunda vista\n"+
               "Y yo volveré a enamorarte (Volveré)\n"+
               "Porque no quiero estar ahí cuando tú llores\n"+
               "Y que el recuerdo de alguien más riegue mis flores\n"+
               "\n"+
               "Tú tan vulnerable y fácil de leer (De leer)\n"+
               "Yo con un adiós difícil de admitir (De admitir)\n"+
               "Quiero jugar muy bien mis cartas, voy a esperar lo que haga falta\n"+
               "Porque sé (Yo sé) que yo no quiero enamorarte así\n"+
               "\n"+
               "Volveré, puede que tarde un rato\n"+
               "Cuando se acaben los segundos platos\n"+
               "Yo volveré a enamorarte (Volveré)\n"+
               "Volveré, solo cuando estés lista (Ah-ah)\n"+
               "Será un amor a segunda vista\n"+
               "Y yo volveré a enamorarte (Volveré)\n"+
               "Porque no quiero estar ahí cuando tú llores\n"+
               "Y que el recuerdo de alguien más riegue mis flores\n"+
               "\n"+
               "Volveré, ah-ah-ah\n"+
               "\n"+
               "Y volverás a sentir mariposas\n"+
               "A que un mensaje te ponga nerviosa\n"+
               "Y yo volveré a enamorarte\n"+
               "\n"+
               "Volveré (Volveré), solo cuando estés lista (Ah-ah)\n"+
               "Será un amor a segunda vista\n"+
               "Y yo, yo volveré a enamorarte (Volveré)\n"+
               "Porque no quiero estar ahí cuando tú llores (Volveré)\n"+
               "Lágrimas nuevas, pero de viejos amores (Volveré)\n"+
               "Y que el recuerdo de alguien más riegue mis flores",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - Segundos Platos.mp3",
        imagen: "/Imagenes/Lyrics/Si Ayer Fuera Hoy.jpeg"
      },
      "En Un Solo Día":{
        letra: "<strong>En Un Solo Día - Morat</strong>\n\nSentado en el banco de aquel viejo bar\n"+
               "Yo tímidamente te invito a bailar\n"+
               "Y tú, sonriendo aceptándome\n"+
               "Bailamos bachata, merengue y boleros\n"+
               "Hablando bajito, chocando los cuerpos\n"+
               "Y así cupido flechándome\n"+
               "Termina la fiesta, cada cual a su casa\n"+
               "Yo me voy con tu cara pegada en el alma\n"+
               "Y sin bien conocerte ya te comienzo a extrañar\n"+
               "\n"+
               "Tal parece que yo, me acostumbré a ti en un sólo día\n"+
               "Que te ando extrañando\n"+
               "Como si hace años que te conocía\n"+
               "Tal parece que yo\n"+
               "En un solo baile te entregué mi vida\n"+
               "Tal parece que el sentimiento venció las reglas que había\n"+
               "Venció las reglas que había\n"+
               "\n"+
               "Y bailamos bachata, merengue, boleros\n"+
               "Hablando bajito, chocando los cuerpos\n"+
               "Y así cupido flechándome\n"+
               "Termina la fiesta, cada cual a su casa\n"+
               "Yo me voy con tu cara pegada en el alma\n"+
               "Y sin bien conocerte ya te comienzo a extrañar\n"+
               "\n"+
               "Tal parece que yo, me acostumbré a ti en un sólo día\n"+
               "Que te ando extrañando\n"+
               "Como si hace años que te conocía\n"+
               "Tal parece que yo\n"+
               "En un solo baile te entregué mi vida\n"+
               "Tal parece que el sentimiento venció las reglas que había\n"+
               "Tal parece que yo me acostumbré a ti en un solo día\n"+
               "Que te ando extrañando\n"+
               "Como si hace años que te conocía\n"+
               "Tal parece que yo\n"+
               "En un solo baile te entregué mi vida\n"+
               "Tal parece que el sentimiento venció las reglas que había\n"+
               "Venció las reglas que había",
        audio: "/Canciones/Grabado en Madera/Morat - En Un Sólo Dia (Versión Acústica).mp3",
        imagen: "/Imagenes/Lyrics/SEAYSES - Especial.jpeg"
      },
      "Enamórate De Alguien Más":{
        letra: "<strong>Enamórate De Alguien Más - Morat</strong>\n\nPara variar, por fin hoy pienso en mí aunque quiera tenerte\n"+
               "Pero no soy tan fuerte para superarte\n"+
               "Por qué me aferró a que no fue un final sino un alto en el cuento\n"+
               "O en otro día lo intento, voy a recuperarte\n"+
               "\n"+
               "Y es que no quiero ilusionarme porque yo sé cómo es la vida\n"+
               "Pero nunca supe cómo darte por perdida\n"+
               "\n"+
               "Así que enamórate de alguien más\n"+
               "Reemplázame que no soy capaz\n"+
               "De olvidarte, de olvidarte\n"+
               "Por favor, ayúdame con el dolor\n"+
               "E ignórame que estaré mejor\n"+
               "Sin hablarte, sin hablarte\n"+
               "Dame una excusa para odiarte\n"+
               "Porque yo no pude jamás\n"+
               "Enamórate de alguien más\n"+
               "\n"+
               "Lo más difícil fue siempre luchar contra lo inolvidable\n"+
               "Contra un recuerdo amable de tu voz\n"+
               "Y a lo mejor me vuelvo a enamorar con suficiente tiempo\n"+
               "Ay que no pase el tiempo, por favor\n"+
               "\n"+
               "Sé que no quiero ilusionarme porque yo sé cómo es la vida\n"+
               "Pero nunca supe cómo darte por perdida, ah-ah\n"+
               "\n"+
               "Así que enamórate de alguien más\n"+
               "Reemplázame que no soy capaz\n"+
               "De olvidarte, de olvidarte\n"+
               "Por favor, ayúdame con el dolor\n"+
               "E ignórame que estaré mejor\n"+
               "Sin hablarte, sin hablarte\n"+
               "Dame una excusa para odiarte\n"+
               "Porque yo no pude jamás\n"+
               "Enamórate de alguien más\n"+
               "\n"+
               "(Ah-ah-ah-ah, ah-ah-ah-ah, ah-ah-ah-ah, ah)\n"+
               "De alguien más\n"+
               "(Ah-ah-ah-ah, ah-ah-ah-ah, ah-ah-ah-ah, ah)\n"+
               "\n"+
               "Así que enamórate de alguien más\n"+
               "Reemplázame que no soy capaz\n"+
               "De olvidarte, de olvidarte\n"+
               "Por favor, ayúdame con el dolor\n"+
               "E ignórame que estaré mejor\n"+
               "Sin hablarte, sin hablarte\n"+
               "Dame una excusa para odiarte\n"+
               "Porque yo no pude jamás\n"+
               "Enamórate de alguien más",
        audio: "/Canciones/A Donde Vamos/Morat - Enamórate De Alguien Más.mp3",
        imagen: "/Imagenes/Lyrics/10. Enamorate de Alguien Mas.jpeg"
      },
      "Acuérdate De Mí":{
        letra: "<strong>Acuérdate De Mí - Morat</strong>\n\nQuiero confesarte que ya tengo la certeza\n"+
               "De que tu recuerdo vive adentro de mi piel\n"+
               "Tengo un corazón que está perdiendo la cabeza\n"+
               "Porque se dio cuenta que ha caído ante tus pies\n"+
               "\n"+
               "Busco algún pretexto para acercarme a tú lado\n"+
               "Si me sale bien tal vez parezca accidental\n"+
               "Por fin usaré todo el coraje que he guardado\n"+
               "Para confesarte lo que nunca pude hablar\n"+
               "\n"+
               "Quiero convencerte\n"+
               "Pero no quiero\n"+
               "Arriesgarme a perderte\n"+
               "Y que te quieras ir\n"+
               "Porque siempre que te miro\n"+
               "Yo nunca sé muy bien que decir\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Por si tu corazón busca algún dueño\n"+
               "O si quieres un beso en algún sueño\n"+
               "O si quieres más noches en las que no te den ganas de dormir\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Que para mí tú siempre vas primero\n"+
               "Yo soy discreto pero igual te quiero\n"+
               "Perdón si no he sabido como hablarte de lo que siento por ti\n"+
               "Acuérdate de mí\n"+
               "\n"+
               "Nunca he estado cerca de aprender como olvidarte\n"+
               "Para ser honesto nunca lo quise intentar\n"+
               "Vivo con la maldición de verte en todas partes\n"+
               "Aunque al fin y al cabo me hace falta verte más\n"+
               "\n"+
               "Quiero convencerte\n"+
               "Pero no quiero\n"+
               "Arriesgarme a perderte\n"+
               "Y que te quieras ir\n"+
               "Porque siempre que te miro\n"+
               "Yo nunca sé muy bien que decir\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Por si tu corazón busca algún dueño\n"+
               "O si quieres un beso en algún sueño\n"+
               "O si quieres más noches en las que no te den ganas de dormir\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Que para mí tú siempre vas primero\n"+
               "Yo soy discreto pero igual te quiero\n"+
               "Perdón si no he sabido como hablarte de lo que siento por ti\n"+
               "\n"+
               "Acuérdate de mí cuando alguien más te haya olvidado\n"+
               "Yo me acordé de ti siempre que estuve enamorado\n"+
               "Si tú no estás, amor\n"+
               "Si tú no estás, amor\n"+
               "¿Dónde me quedo yo?\n"+
               "\n"+
               "Acuérdate de mí que yo por ti he sido un soldado\n"+
               "Yo me acordé de ti en todas tus guerras del pasado\n"+
               "Si tú no estás, amor\n"+
               "Si tú no estás, amor\n"+
               "¿Dónde me quedo yo?\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Por si tu corazón busca algún dueño\n"+
               "O si quieres un beso en algún sueño\n"+
               "O si quieres más noches en las que no te den ganas de dormir\n"+
               "\n"+
               "Acuérdate de mí\n"+
               "Que para mí tú siempre vas primero\n"+
               "Yo soy discreto pero igual te quiero\n"+
               "Perdón si no he sabido como hablarte de lo que siento por ti\n"+
               "Acuérdate de mí",
        audio: "/Canciones/Balas Perdidas/Morat - Acuérdate De Mí.mp3",
        imagen: "/Imagenes/Lyrics/Balas Perdidas.jpeg"
      },
      "Otras Se Pierden":{
        letra: "<strong>Otras Se Pierden - Morat</strong>\n\nLo peor son los primeros cinco días\n"+
               "Hay esperanza, pero luego se va\n"+
               "Llega el sexto y te armas de valentía\n"+
               "Y te prometes no volverla a buscar\n"+
               "\n"+
               "Para ese entonces le has devuelto su ropa\n"+
               "Y le has rogado a ese trago\n"+
               "Que no te obligue a llamarla\n"+
               "Y aunque tal vez quemaste todas las cosas\n"+
               "Que escribiste a su lado\n"+
               "Nada te ayuda a olvidarla\n"+
               "\n"+
               "Te hacen falta tantas noches en vela\n"+
               "De esas que al doler sólo te hacen más fuerte\n"+
               "Porque si el amor es un juego sin reglas\n"+
               "Unas se ganan y otras se pierden\n"+
               "Te hacen falta tantas noches en vela\n"+
               "No se aprende a amar ni se olvida por suerte\n"+
               "Porque en el amor pasa igual que en la guerra\n"+
               "Unas se ganan y otras se pierden\n"+
               "\n"+
               "Pasan seis meses que parecen seis vidas\n"+
               "Y aunque hay mil flechas que quisieras usar\n"+
               "Habría que ser experto en anatomía\n"+
               "Para apuntarle a un corazón que no está\n"+
               "\n"+
               "Para ese entonces le has devuelto su ropa\n"+
               "Y le has rogado a ese trago\n"+
               "Que no te obligue a llamarla\n"+
               "Y aunque tal vez quemaste todas las cosas\n"+
               "Que escribiste a su lado\n"+
               "Nada te ayuda a olvidarla\n"+
               "\n"+
               "Te hacen falta tantas noches en vela\n"+
               "De esas que al doler sólo te hacen más fuerte\n"+
               "Porque si el amor es un juego sin reglas\n"+
               "Unas se ganan y otras se pierden\n"+
               "Te hacen falta tantas noches en vela\n"+
               "No se aprende a amar ni se olvida por suerte\n"+
               "Porque en el amor pasa igual que en la guerra\n"+
               "Unas se ganan y otras se pierden\n"+
               "\n"+
               "Para olvidar no hay atajos\n"+
               "Su nombre quiebra tu voz (Su nombre quiebra tu voz)\n"+
               "Pero el tiempo hace el trabajo de juntar los pedazos\n"+
               "Si se rompe el amor\n"+
               "\n"+
               "Te hacen falta tantas noches en vela\n"+
               "De esas que al doler sólo te hacen más fuerte\n"+
               "Porque si el amor es un juego sin reglas\n"+
               "Unas se ganan y otras se pierden\n"+
               "Te hacen falta tantas noches en vela\n"+
               "No se aprende a amar ni se olvida por suerte\n"+
               "Porque en el amor pasa igual que en la guerra\n"+
               "Unas se ganan y otras se pierden\n"+
               "\n"+
               "Después de un año ves que sigues con vida\n"+
               "Pues nadie ha muerto al intentar olvidar\n"+
               "Y aunque su amor dejó una llama prendida\n"+
               "Estás a un beso de poderla apagar",
        audio: "/Canciones/Balas Perdidas/Morat - Otras Se Pierden.mp3",
        imagen: "/Imagenes/Lyrics/Balas Perdidas.jpeg"
      },
      "No Hay Más Que Hablar":{
        letra: "<strong>No Hay Más Que Hablar - Morat</strong>\n\nNo hay más que hablar\n"+
               "Ya no cabe una carta más sobre la mesa\n"+
               "Y aunque nos pesa, es la verdad\n"+
               "Rompiste todo en mí\n"+
               "Pero me acostumbré a nunca buscar las piezas que perdí\n"+
               "\n"+
               "Tú te quisiste ir, fui yo quien se quedó\n"+
               "Si nadie te obligó, ¿por qué ahora vuelves a mi puerta?\n"+
               "Con la certeza de que sigue abierta\n"+
               "\n"+
               "Recuerda, fue tu decisión\n"+
               "Montar tu vida en ese avión\n"+
               "Tengo testigos, me convertiste en tu enemigo\n"+
               "Si hay tantos peces en el mar\n"+
               "¿Hoy por qué vuelves a buscar algo conmigo?\n"+
               "Si ya acepté no estar contigo\n"+
               "Porque mientras tú le dabas diez vueltas al mundo\n"+
               "Yo malgastaba los segundos\n"+
               "Dando mil vueltas en la cama sin dormir\n"+
               "Mientras tú te ibas de fiesta en Barcelona\n"+
               "Jugando a ser otra persona\n"+
               "Yo no cambié, solo aprendí a vivir sin ti\n"+
               "\n"+
               "Dime por qué así de la nada me buscaste\n"+
               "Si no he cambiado y soy el mismo que dejaste\n"+
               "\n"+
               "No hay más que hablar\n"+
               "Ya no tiene sentido\n"+
               "Que me hagas promesas\n"+
               "Que sé que no vas a cumplir\n"+
               "Ya no vas a verme llorar\n"+
               "Como la última vez que te vi\n"+
               "Y aunque tú quieras insistir\n"+
               "No queda nada más que hablar\n"+
               "\n"+
               "Tú te quisiste ir, fui yo quien se quedó\n"+
               "Si nadie te obligó, ¿por qué ahora vuelves a mi puerta?\n"+
               "Con la certeza de que sigue abierta\n"+
               "\n"+
               "Recuerda, fue tu decisión\n"+
               "Montar tu vida en ese avión\n"+
               "Tengo testigos, me convertiste en tu enemigo\n"+
               "Si hay tantos peces en el mar\n"+
               "¿Hoy por qué vuelves a buscar algo conmigo?\n"+
               "Si ya acepté no estar contigo\n"+
               "Porque mientras tú le dabas diez vueltas al mundo\n"+
               "Yo malgastaba los segundos\n"+
               "Dando mil vueltas en la cama sin dormir\n"+
               "Mientras tú te ibas de fiesta en Barcelona\n"+
               "Jugando a ser otra persona\n"+
               "Yo no cambié, solo aprendí a vivir sin ti\n"+
               "\n"+
               "Dime por qué así de la nada me buscaste\n"+
               "Si no he cambiado y soy el mismo que dejaste\n"+
               "\n"+
               "Un día de Enero\n"+
               "Y aunque tú sabes que te quiero\n"+
               "No quiero que me digas que te equivocaste\n"+
               "\n"+
               "Porque mientras tú le dabas diez vueltas al mundo\n"+
               "Yo malgastaba los segundos\n"+
               "Dando mil vueltas en la cama sin dormir\n"+
               "Mientras tú te ibas de fiesta en Barcelona\n"+
               "Jugando a ser otra persona\n"+
               "Yo no cambié solo aprendí a vivir sin ti\n"+
               "\n"+
               "Dime por qué así de la nada me buscaste\n"+
               "Si no he cambiado y soy el mismo que dejaste",
        audio: "/Canciones/A Donde Vamos/Morat - No Hay Más Que Hablar.mp3",
        imagen: "/Imagenes/Lyrics/13. No hay Mas Que Hablar.jpeg"
      },
      "Mi Vida Entera":{
        letra: "<strong>Mi Vida Entera - Morat</strong>\n\nMe prometiste revivir tu corazón de piedra\n"+
               "Si yo te daba todo lo que quisieras\n"+
               "Que derritiera inviernos e inventara primaveras\n"+
               "Que te alejara de todos tus problemas\n"+
               "\n"+
               "Sinceramente solo siento pánico en escena\n"+
               "Y sostenerte la mirada me quema\n"+
               "Pero mejor ser arriesgado que un cobarde en pena\n"+
               "Cruzar los dedos para ver si te suena\n"+
               "\n"+
               "Y es que al fin\n"+
               "Si te casas con un loco\n"+
               "Vas a ver\n"+
               "Qué es la magia poco a poco\n"+
               "\n"+
               "No podrás distinguir\n"+
               "Entre besos y palabras\n"+
               "Un 'te quiero’ no me alcanza\n"+
               "Dame todo, di que sí\n"+
               "\n"+
               "Y si bailamos, tan solo bailamos\n"+
               "Y si tus pies nuestra historia escribieran\n"+
               "Como si fuera este el final de un cuento\n"+
               "Y nadie más en el mundo existiera\n"+
               "\n"+
               "Y si bailamos, tan solo bailamos\n"+
               "Al ritmo y paso que tú prefieras\n"+
               "Voy a rogarle sin descanso al tiempo\n"+
               "Que esta canción dure mi vida entera\n"+
               "Que esta canción dure mi vida entera\n"+
               "\n"+
               "Sinceramente solo siento pánico en escena\n"+
               "Y sostenerte la mirada me quema\n"+
               "Pero que hoy vivas con mi amor corriendo por tus venas\n"+
               "Es por robarme el corazón tu condena\n"+
               "\n"+
               "Y es que al fin\n"+
               "Si te casas con un loco\n"+
               "Vas a ver\n"+
               "Qué es la magia poco a poco\n"+
               "\n"+
               "No podrás distinguir\n"+
               "Entre besos y palabras\n"+
               "Un 'te quiero' no me alcanza\n"+
               "Dame todo, di que sí\n"+
               "\n"+
               "Y si bailamos, tan solo bailamos\n"+
               "(Si tan solo bailamos)\n"+
               "Y si tus pies nuestra historia escribieran\n"+
               "(Y nuestros corazones juntos nos llevan)\n"+
               "Como si fuera este el final de un cuento\n"+
               "Y nadie más en el mundo existiera\n"+
               "\n"+
               "Y si bailamos, tan solo bailamos\n"+
               "Al ritmo y paso que tú prefieras\n"+
               "Voy a rogarle sin descanso al tiempo\n"+
               "Que esta canción dure mi vida entera\n"+
               "Que esta canción dure mi vida entera\n"+
               "\n"+
               "Y es que al fin\n"+
               "Si lo piensas no es tan loco\n"+
               "Dame todo, dame todo\n"+
               "Di que sí",
        audio: "/Canciones/Balas Perdidas/Morat - Mi Vida Entera.mp3",
        imagen: "/Imagenes/Lyrics/Balas Perdidas.jpeg"
      },
      "París": {
        letra: "<strong>París - Morat ft. Duki</strong>\n\nMe pides que me vaya, pero ahora que me alejo de ti\n"+
                "Comienza la batalla para que no me vaya de aquí\n"+
                "Y aunque nadie te entiende, yo tus excusas ya me aprendí\n"+
                "Que soy indiferente, que todo el amor duele, que quien te ama\n"+
                "te hace sufrir\n"+
                "Deja ya de insistir, no es por mí, es por ti\n"+
                "Es un cuento que no te das cuenta\n"+
                "Y tengo que decirte\n"+
                "\n"+
                "Que eres tú lo que me viste de problemas\n"+
                "Eres tú, me pides flores y las quema'\n"+
                "No te mientas, el problema eres tú\n"+
                "Y tengo que decirte que es por ti\n"+
                "Que me jugué todas las cartas y perdí\n"+
                "Aposté cruz y habían dos caras\n"+
                "No te mientas, el problema\n"+
                "No te mientas, el problema eres tú\n"+
                "\n"+
                "No soy yo, oh-oh-oh-oh\n"+
                "No soy yo, oh-oh-oh-oh\n"+
                "No soy yo, oh-oh-oh-oh-oh (¡Duko!; yeah)\n"+
                "\n"+
                "¿Por qué tan crazy?\n"+
                "Hubiéramo' iluminado París como Messi\n"+
                "Tú tan selfish, yo tan empty\n"+
                "Daría lo que tengo porque sea como antes\n"+
                "Toda' mis Jordan, las camisa' y los diamante'\n"+
                "Aprendí a perder, es que la vida es cruel\n"+
                "Yo pensando en vo', tú pensando en él\n"+
                "Y si resulta ser que nos volvemo' a ver\n"+
                "Voy a gritar tu nombre y vas a saber\n"+
                "\n"+
                "Que eres tú la que me viste de problemas\n"+
                "Eres tú, me pide' flores y las quema'\n"+
                "No te mientas, el problema eres tú\n"+
                "Y tengo que decirte que es por ti\n"+
                "Que me jugué todas las cartas y perdí\n"+
                "Aposté cruz y habían dos caras\n"+
                "No te mientas, el problema\n"+
                "No te mientas, el problema eres tú\n"+
                "\n"+
                "No soy yo, oh-oh-oh-oh (¡No soy yo!)\n"+
                "No soy yo, oh-oh-oh-oh (¡No soy yo!)\n"+
                "No soy yo, oh-oh-oh-oh-oh\n"+
                "No soy yo, oh-oh-oh-oh (¡No soy yo, oh-oh!)\n"+
                "No soy yo, oh-oh-oh-oh (¡No soy yo, oh-oh!)\n"+
                "No soy yo, oh-oh-oh-oh-oh",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - París.mp3",
        imagen: "/Imagenes/Lyrics/Paris.jpeg"
      },
      "Simplemente Pasan": {
        letra: "<strong>Simplemente Pasan - Morat ft. Cami</strong>\n\nElla va por costumbre al mismo bar\n"+
                "Siempre discreta pero tan coqueta\n"+
                "Y con su mirada sin maquillar\n"+
                "Y yo, que a duras penas le puedo hablar\n"+
                "No tengo las palabras de un poeta\n"+
                "Pero moría por verla bailar conmigo\n"+
                "\n"+
                "Que bailara una de Juan Luis por siempre conmigo\n"+
                "Y emborracharnos por la ciudad con Dios de testigo\n"+
                "Ya quiero decirle que bailemos\n"+
                "Que lo peor que puede pasar es que nos gustemos\n"+
                "Que a lo mejor de alguna otra vida nos conocemos\n"+
                "Ay, qué suerte la mía\n"+
                "Que hoy te volví a encontrar en este lugar\n"+
                "\n"+
                "Porque cuando las cosas buenas tienen que pasar\n"+
                "Simplemente pasan\n"+
                "\n"+
                "Es otro jueves y al mismo bar\n"+
                "Marcan las once con dos cervezas y ya empezaban a conversar\n"+
                "Quizá el destino se acuerde de mí\n"+
                "Y en unos años pueda contarles que yo ese día\n"+
                "Lo convencí de bailar conmigo\n"+
                "\n"+
                "Que bailara una de Juan Luis por siempre conmigo\n"+
                "Y emborracharnos por la ciudad con Dios de testigo\n"+
                "Ya quiero decirle que bailemos\n"+
                "Que lo peor que puede pasar es que nos gustemos\n"+
                "Que a lo mejor de alguna otra vida nos conocemos\n"+
                "Ay, qué suerte la mía\n"+
                "Que hoy te volví a encontrar en este lugar\n"+
                "Que bailemos\n"+
                "Que lo peor que puede pasar es que no acabemos\n"+
                "Que a lo mejor de alguna otra vida nos conocemos\n"+
                "Ay, qué suerte la mía\n"+
                "Que hoy te volví a encontrar en este lugar\n"+
                "\n"+
                "Porque cuando las cosas buenas tienen que pasar\n"+
                "Simplemente pasan",
        audio: "/Canciones/A Donde Vamos/Morat - Simplemente Pasan.mp3",
        imagen: "/Imagenes/Lyrics/A donde vamos.jpeg"
      },
      "Mil Tormentas": {
        letra: "<strong>Mil Tormentas - Morat ft. Cali & El Dandee</strong>\n\nPude sobrevivir\n"+
                "A un mar sin viento\n"+
                "Pues supe conquistar tu piel\n"+
                "Y encontré un segundo aliento\n"+
                "\n"+
                "Me hiciste un favor\n"+
                "Me devolviste el miedo\n"+
                "Por fin tengo algo que perder\n"+
                "Si te vas y yo me quedo\n"+
                "\n"+
                "Y todavía me arrepiento\n"+
                "De que no oyeras primero esta canción\n"+
                "Antes de armar tu argumento\n"+
                "Del que no pude escapar\n"+
                "\n"+
                "Sabes bien que yo\n"+
                "Yo te salvé de mil tormentas\n"+
                "Pueden ser más, perdí la cuenta\n"+
                "Pues mi pronóstico fue estar contigo\n"+
                "Estar contigo\n"+
                "\n"+
                "Y tú\n"+
                "Si ya no hay sismo que te mueva\n"+
                "Intenta verme y ponte a prueba\n"+
                "Pues tu pronóstico es estar conmigo\n"+
                "Estar conmigo\n"+
                "\n"+
                "No se puede apagar\n"+
                "Amor con fuego\n"+
                "Te quieres desatar de mi\n"+
                "Pero hiciste un nudo ciego\n"+
                "\n"+
                "Te voy a rogar\n"+
                "Y yo nunca ruego\n"+
                "Acepto ser el perdedor\n"+
                "Porque sé que no es un juego\n"+
                "\n"+
                "Y todavía me arrepiento (y todavía me arrepiento)\n"+
                "De que no oyeras primero esta canción\n"+
                "Antes de armar tu argumento\n"+
                "Del que no pude escapar\n"+
                "\n"+
                "Sabes bien que yo (sabes bien que yo)\n"+
                "Yo te salvé de mil tormentas (Siempre me amaste, aunque te mientas)\n"+
                "Pueden ser más, perdí la cuenta (Puedes salvarnos si lo intentas)\n"+
                "Pues mi pronóstico es estar contigo\n"+
                "Estar contigo\n"+
                "\n"+
                "Y tú (Solamente tú)\n"+
                "Si ya no hay sismo que te mueva (Si ya no hay nada que te mueva)\n"+
                "Intenta verme y ponte a prueba (Serán tus ojos los que lluevan)\n"+
                "Pues tu pronóstico es estar conmigo\n"+
                "Estar contigo\n"+
                "\n"+
                "Me arrepiento del silencio\n"+
                "No te buscaba y te escondiste dentro de ti misma\n"+
                "Y siento que aunque hablamos nunca hablaste conmigo\n"+
                "Te habló mi ego y fue mi culpa ser el hielo que quiso apagar tu fuego\n"+
                "\n"+
                "Y nos dejamos solos\n"+
                "Y tú por dentro morías\n"+
                "Y nos dejamos solos\n"+
                "Y tú por dentro morías\n"+
                "Se fue rompiendo el lazo que antes nos unía\n"+
                "Y ahora sé que fue mi culpa dejarte\n"+
                "Y sé que si vuelves voy a darte mil razones para amarme\n"+
                "\n"+
                "Voy a revivir los sueños\n"+
                "Esos que creamos juntos de la mano\n"+
                "Revivir todas las noches sentados juntos al piano\n"+
                "\n"+
                "No te vayas, no me dejes solo, quédate conmigo\n"+
                "Sé que aún sientes lo que siento\n"+
                "Sé que entiendes lo que vivo\n"+
                "\n"+
                "Recuerdo cada palabra que decías\n"+
                "Las promesas que me hiciste si te vas van a ser promesas vacías\n"+
                "El dolor es necesario y el amor es para siempre\n"+
                "Olvidemos esta historia y escribamos la siguiente\n"+
                "\n"+
                "Sabes bien que yo (sabes bien que yo)\n"+
                "Yo te salvé de mil tormentas (Siempre me amaste, aunque te mientas)\n"+
                "Pueden ser más, perdí la cuenta (Puedes salvarnos si lo intentas)\n"+
                "Pues mi pronóstico es estar contigo\n"+
                "Estar contigo\n"+
                "\n"+
                "Y tú (Solamente tú)\n"+
                "Si ya no hay sismo que te mueva (Si ya no hay nada que te mueva)\n"+
                "Intenta verme y ponte a prueba (Serán tus ojos los que lluevan)\n"+
                "Pues tu pronóstico es estar conmigo\n"+
                "Estar contigo",
        audio: "/Canciones/Sobre El Amor y Sus Efectos Secundarios/Morat - Mil Tormentas.mp3",
        imagen: "/Imagenes/Lyrics/Sobre el Amor y Sus Efectos Secundarios.jpg"
      },
      "De Cero": {
        letra: "<strong>De Cero - Morat</strong>\n\nTú no querías creer que nos hacíamos daño\n"+
                "Yo no quería pensar que te podía perder, mmm\n"+
                "Hoy duele pretender que somos dos extraños\n"+
                "Y solo está bien visto hablarte en tu cumpleaños\n"+
                "Pero tú y yo sabemos que es por nuestro bien\n"+
                "\n"+
                "Si vuelve a tener sentido\n"+
                "Que yo vuelva a estar contigo\n"+
                "Habrá una ventaja insuperable frente a los demás\n"+
                "Si vuelve a tener sentido\n"+
                "Que yo vuelva a estar contigo\n"+
                "\n"+
                "Ya no tendremos que empezar de cero\n"+
                "Porque yo soy experto en descifrarte\n"+
                "Sé exactamente cuando darte un beso\n"+
                "Y cuando ahorrarme un beso para ir a abrazarte\n"+
                "Ya no tendremos que empezar de cero\n"+
                "A menos de que llegues a olvidarme\n"+
                "En ese caso mí único consuelo\n"+
                "Será esperar que si le ruego al cielo\n"+
                "Tal vez no tenga que empezar de cero para enamorarte\n"+
                "\n"+
                "Ya no quiero meterme con tu calendario\n"+
                "Tampoco hacerte daño con algún 'tal vez', no\n"+
                "Hay tantos peces en el mar a diario\n"+
                "Pero la historia ha dicho lo contrario\n"+
                "Los dos nadamos en un mismo acuario\n"+
                "Y sé que tú lo ves (Y sé que tú lo ves)\n"+
                "\n"+
                "Si vuelve a tener sentido\n"+
                "Que yo vuelva a estar contigo\n"+
                "\n"+
                "Ya no tendremos que empezar de cero\n"+
                "Porque yo soy experto en descifrarte\n"+
                "Sé exactamente cuando darte un beso\n"+
                "Y cuando ahorrarme un beso para ir a abrazarte\n"+
                "Ya no tendremos que empezar de cero\n"+
                "A menos de que llegues a olvidarme\n"+
                "En ese caso mí único consuelo\n"+
                "Será esperar que si le ruego al cielo\n"+
                "Tal vez no tenga que empezar de cero para enamorarte\n"+
                "\n"+
                "[Puente Instrumental]\n"+
                "\n"+
                "Ya no tendremos que empezar de cero\n"+
                "Porque tú fuiste mi punto y aparte\n"+
                "Sé exactamente cuando darte un beso\n"+
                "Y cuando ahorrarme un beso para ir a abrazarte\n"+
                "Ya no tendremos que empezar de cero\n"+
                "A menos de que llegues a olvidarme (Si quieres, dale)\n"+
                "En ese caso mí único consuelo\n"+
                "Será esperar que si le ruego al cielo\n"+
                "Tal vez no tenga que empezar de cero para enamorarte\n"+
                "Tal vez no tenga que empezar de cero para enamorarte",
        audio: "/Canciones/A Donde Vamos/Morat - De Cero.mp3",
        imagen: "/Imagenes/Lyrics/De Cero.jpeg"
      },
      "Idiota":{
        letra: "<strong>Idiota - Morat ft. Danna Paola</strong>\n\nMaldita sean las tres de la mañana\n"+
               "Cuando a la puerta tu recuerdo llama\n"+
               "Una parte de mí no va a dejarlo entrar\n"+
               "Y la otra parte le abre la ventana\n"+
               "No quiero escuchar esa canción (Oh-oh)\n"+
               "No quiero gritar tu nombre (Mmm)\n"+
               "Si pierdo la cabeza el corazón responde\n"+
               "\n"+
               "Yo nunca te olvidaré\n"+
               "Y no tiene sentido intentarlo\n"+
               "Porque un amor así no llegará otra vez\n"+
               "Porque un amor así solo llega una vez\n"+
               "Yo nunca te olvidaré\n"+
               "Y tu recuerdo me está matando\n"+
               "Y aunque un amor así no llegará otra vez\n"+
               "Como un idiota sigo buscando\n"+
               "\n"+
               "Y aunque te sigo llamando, sé\n"+
               "Que yo tengo la culpa de decir adiós\n"+
               "¿Y para qué te grito? Ven, perdóname\n"+
               "Dime de qué me sirve malgastar mi voz\n"+
               "Si vas a perdonarme y no vas a volver\n"+
               "Date la vuelta, miente, di que sientes algo cuando\n"+
               "Me doy la vuelta y aunque lo intenté\n"+
               "\n"+
               "Todos me dicen que paciencia\n"+
               "Que te ponga a prueba con mi ausencia\n"+
               "Pero nadie ve las consecuencias\n"+
               "De que este juego no salga bien\n"+
               "Todos me dicen que paciencia\n"+
               "Que te ponga a prueba con mi ausencia (Ah-ah)\n"+
               "Pero nadie ve las consecuencias (No, oh)\n"+
               "Porque nadie entiende que\n"+
               "\n"+
               "Yo nunca te olvidaré (Oh-oh)\n"+
               "Y no tiene sentido intentarlo (Oh-oh)\n"+
               "Porque un amor así no llegará otra vez\n"+
               "Porque un amor así solo llega una vez\n"+
               "Yo nunca te olvidaré (No-oh)\n"+
               "Y tu recuerdo me está matando (Oh-oh)\n"+
               "Que aunque un amor así no llegará otra vez\n"+
               "Como un idiota sigo buscando (Como un idiota)\n"+
               "\n"+
               "Todos me dicen que paciencia\n"+
               "Que te ponga a prueba con mi ausencia\n"+
               "Pero nadie ve las consecuencias\n"+
               "De que este juego no salga bien\n"+
               "Todos me dicen que paciencia\n"+
               "Que te ponga a prueba con mi ausencia (Ah-ah)\n"+
               "Pero nadie ve las consecuencias (No, oh)\n"+
               "Porque nadie entiende que\n"+
               "\n"+
               "Oh-oh-oh-oh-oh\n"+
               "Como un idiota\n"+
               "Oh-oh-oh-oh-oh\n"+
               "Como un idiota\n"+
               "Y aunque un amor así no llegará otra vez\n"+
               "Como un idiota sigo buscando (Como un idiota)\n"+
               "Oh-oh-oh-oh-oh\n"+
               "Como un idiota\n"+
               "Oh-oh-oh-oh-oh\n"+
               "Como un idiota\n"+
               "Y aunque un amor así no llegará otra vez\n"+
               "Como un idiota sigo buscando (Ah-ah-ah)\n"+
               "\n"+
               "Como un idiota sigo buscando\n"+
               "Como un idiota sigo buscando",
        audio: "/Canciones/A Donde Vamos/Morat - Idiota.mp3",
        imagen: "/Imagenes/Lyrics/19. Idiota.jpeg"
      },
      "Valen Más":{
        letra: "<strong>Valen Más - Morat</strong>\n\nTodos tenemos varias cicatrices\n"+
               "Y no ganamos nada con contarlas\n"+
               "Pero nos desvivimos para camuflarlas\n"+
               "Y aunque no haya un secreto para ser felices, la verdad\n"+
               "Siempre hay razones para salir a curarlas\n"+
               "Todos estamos hechos de recuerdos\n"+
               "Algunos simplemente no se aguantan\n"+
               "Y sueños que, aunque quieras, nunca se levantan\n"+
               "Y es que te está mintiendo quien diga que es cuerdo en realidad\n"+
               "Pues todos cargamos con un nudo en la garganta\n"+
               "\n"+
               "Tenemos que salirnos del engaño de que una foto muestra la verdad\n"+
               "Dejar de compararnos con extraños, que nadie es tan perfecto en realidad\n"+
               "Tenemos que apagar el noticiero y ver que no todo está mal\n"+
               "Hay cosas que olvidamos con los años que valen más\n"+
               "Que valen más\n"+
               "\n"+
               "Todos tenemos carga de equipaje\n"+
               "Canciones que reviven algún beso\n"+
               "Ideas que no aseguran que saldrás ileso\n"+
               "Defectos que aunque tengas mucho maquillaje no se van\n"+
               "Todos tenemos ilusiones en los huesos\n"+
               "\n"+
               "Tenemos que salirnos del engaño de que una foto muestra la verdad\n"+
               "Dejar de compararnos con extraños, que nadie es tan perfecto en realidad\n"+
               "Tenemos que apagar el noticiero y ver que no todo está mal\n"+
               "Hay cosas que olvidamos con los años que valen más\n"+
               "Que valen más\n"+
               "\n"+
               "Si sientes que ya nada tiene caso\n"+
               "Y duele el peso de la gravedad\n"+
               "Siempre hay algún refugio en un abrazo\n"+
               "Siempre hay alguna luz en la ciudad\n"+
               "\n"+
               "Tenemos que apagar el noticiero y ver que no todo está mal\n"+
               "Hay cosas que olvidamos con los años que valen más\n"+
               "Que valen más\n"+
               "\n"+
               "Todos tenemos varias cicatrices\n"+
               "Y no ganamos nada con contarlas\n"+
               "Pero nos desvivimos para camuflarlas",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - Valen Más.mp3",
        imagen: "/Imagenes/Lyrics/20. Valen Más.jpeg"
      },
      "L.C.S.V. en A.":{
        letra: "<strong>Las Cometas Siempre Vuelan En Agosto - Morat</strong>\n\nCrecimos con el peso del pasado en nuestra espalda\n"+
               "Todo pintaba para mal\n"+
               "Donde las mujeres van con miedo por la calle si se ponen falda\n"+
               "Recuerdos que aún se empolvan con cenizas de nogal\n"+
               "Todo pintaba para mal\n"+
               "Y a un país de mierda el noticiero de las nueve le daba el final\n"+
               "Porque el humor se había apagado, enmascarando tantas cicatrices\n"+
               "Difuminando la promesa de que llegarían tiempos felices\n"+
               "Y aunque un avión era un sinónimo de fuego prendido en el aire\n"+
               "Sé que rendirme a las condenas del pasado sería ser cobarde\n"+
               "\n"+
               "Seguro que entre la locura hay ilusiones enterradas\n"+
               "Aunque la noche siga oscura y todavía no vemos nada\n"+
               "Aunque nos tiemblen las rodillas, las calles hay que caminarlas\n"+
               "No hay una sola pesadilla que sea inmune a terminarla\n"+
               "Uh-uh-uh-uh, uh-uh-uh\n"+
               "Uh-uh-uh-uh, uh-uh-uh\n"+
               "\n"+
               "Porque sé\n"+
               "Que aunque el vestigio del pasado tiene un costo\n"+
               "Y aunque haya días con tristeza en nuestro rostro\n"+
               "Sé que las cometas siempre vuelan en agosto\n"+
               "\n"+
               "El sí y el no partieron a las víctimas en dos\n"+
               "Lo pienso y se quiebra mi voz\n"+
               "El realismo mágico nos tienta a más de uno a decir 'adiós', mmm\n"+
               "Y aunque estoy cansado de quejarme y que el gobierno todo lo improvise (Todo lo improvise)\n"+
               "También me tengo que sumar, no soy el hombre que yo siempre quise\n"+
               "Y a lo mejor me suena falso cuando intento ser tan positivo\n"+
               "Porque hay más de seis mal razones para seguir siendo negativos\n"+
               "\n"+
               "Seguro que entre la locura (Entre la locura) hay ilusiones enterradas (Ilusiones enterradas)\n"+
               "Aunque la noche siga oscura y todavía no vemos nada\n"+
               "Aunque nos tiemblen las rodillas, las calles hay que caminarlas\n"+
               "No hay una sola pesadilla que sea inmune a terminarla (No)\n"+
               "Uh-uh-uh-uh, uh-uh-uh\n"+
               "Uh-uh-uh-uh, uh-uh-uh\n"+
               "\n"+
               "Porque sé\n"+
               "Que aunque el vestigio del pasado tiene un costo\n"+
               "Y aunque haya días con tristeza en nuestro rostro\n"+
               "Sé que las cometas siempre vuelan en agosto\n"+
               "\n"+
               "Mmm",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - Las Cometas Siempre Vuelan En Agosto.mp3",
        imagen: "/Imagenes/Lyrics/22. LCSVEA.jpeg"
      },
      "Llamada Perdida":{
        letra: "<strong>Llamada Perdida - Morat</strong>\n\nHoy tu recuerdo me volvió a doler\n"+
               "Hoy tu recuerdo me volvió a joder\n"+
               "Y eso no me va, y eso no me va, no-oh-oh\n"+
               "Salgo a la calle y empieza a llover\n"+
               "Va más de un mes viendo el amanecer\n"+
               "Y eso no me va, y eso no me va a hacer bien\n"+
               "Porque también me hace falta resolver una inquietud\n"+
               "¿Cómo se olvida tan fácil como me olvidaste tú?\n"+
               "\n"+
               "Quiero volverte a llamar\n"+
               "Que a la mañana siguiente\n"+
               "Esa llamada perdida no se pierda y tú la encuentres\n"+
               "Yo no me voy a dormir\n"+
               "Hasta que tú te despiertes\n"+
               "Prefiero cinco llamadas perdidas, cuatro cartas, tres heridas, dos de suerte\n"+
               "Que una vida sin volver a verte\n"+
               "\n"+
               "Volví a la puerta de ese mismo hotel\n"+
               "Otro cóctel en ese mismo bar (Oh-oh-oh-oh)\n"+
               "Solo para ver si podía aguantarme, pero\n"+
               "Soy masoquista mirando tus fotos\n"+
               "Quiero tomar hasta no poder ver\n"+
               "Ya me cansé de brindar por nosotros\n"+
               "Si tú no vas a volver\n"+
               "\n"+
               "Quiero volverte a llamar\n"+
               "Que a la mañana siguiente\n"+
               "Esa llamada perdida no se pierda y tú la encuentres\n"+
               "Yo no me voy a dormir\n"+
               "Hasta que tú te despiertes\n"+
               "Prefiero cinco llamadas perdidas, cuatro cartas, tres heridas, dos de suerte\n"+
               "Que una vida sin volver, que una vida sin volver\n"+
               "Que una vida sin volver a verte\n"+
               "\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh\n"+
               "Oh-oh-oh-oh, oh-oh-oh-oh\n"+
               "Oh-oh-oh-oh",
        audio: "/Canciones/Si Ayer fuera Hoy/Morat - Llamada Perdida.mp3",
        imagen: "/Imagenes/Lyrics/23. Llamada Perdida.jpeg"
      },
      "Yo No Merezco Volver":{
        letra: "<strong>Yo No Merezco Volver - Morat</strong>\n\nBorra mi nombre de todas las frases que digas\n"+
               "Guarda silencio si vas a llamarme otra vez\n"+
               "No me pronuncies en vano si tu corazón sigue medio averiado\n"+
               "Que yo no merezco volver\n"+
               "\n"+
               "Quema mis fotos no es justo que siga en tu vida\n"+
               "Pierde a mi sombra si vuelve a seguirte otra vez\n"+
               "Ciérrame todas las puertas que cuando me fui se quedaron abiertas\n"+
               "Que yo no merezco volver\n"+
               "\n"+
               "Quema mis fotos no es justo que siga en tu vida\n"+
               "Pierde a mi sombra si vuelve a seguirte otra vez\n"+
               "Ciérrame todas las puertas que cuando me fui se quedaron abiertas\n"+
               "Que yo no merezco volver\n"+
               "\n"+
               "No intentes perdonarme\n"+
               "Nunca te quise bien\n"+
               "No intentes perdonarme\n"+
               "Que yo no me perdone\n"+
               "Dale un respiro a mi pobre conciencia\n"+
               "Que yo no merezco volver\n"+
               "\n"+
               "Tú te has ganado el derecho para detestarme\n"+
               "Y que sea más fácil hacerlo será mi deber\n"+
               "Nadie jamás se ha inventado ese dios que redima todos mis pecados\n"+
               "Y yo no merezco volver\n"+
               "\n"+
               "No intentes perdonarme\n"+
               "Nunca te quise bien\n"+
               "No intentes perdonarme\n"+
               "Que yo no me perdone\n"+
               "Dale un respiro a mi pobre conciencia\n"+
               "Que yo no merezco volver\n"+
               "\n"+
               "Dale un respiro a mi pobre conciencia\n"+
               "Que yo no merezco volver",
        audio: "/Canciones/Balas Perdidas/Morat - Yo No Merezco Volver.mp3",
        imagen: "/Imagenes/Lyrics/25. Yo no Merezco Volver.jpg"
      },
    };
  
    const contenedorLetras = document.getElementById('contenedor-letras');
    const contenedorImagen = document.getElementById('cancion-imagen');
    const contenedorAudio = document.getElementById('cancion-audio');
    const tituloCancion = document.getElementById('cancion-titulo');
    let listaCanciones = document.getElementById('lista-canciones');
  
    // Crear la lista de canciones si no ha sido creada
    if (!listaCanciones) {
      listaCanciones = document.createElement('ul');
      listaCanciones.id = 'lista-canciones';
  
      // Agregar la lista de canciones al DOM
      document.body.appendChild(listaCanciones);
  
      // Crear la lista de canciones
      Object.keys(canciones).forEach((titulo) => {
        const li = document.createElement('li');
        const spanTitulo = document.createElement('span');
        spanTitulo.textContent = titulo;
        li.appendChild(spanTitulo);
        listaCanciones.appendChild(li);
      });
    }
  
    // Asignar evento a cada elemento de la lista
    listaCanciones.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', () => {
        const titulo = li.textContent;
        const letra = canciones[titulo].letra;
        const audio = canciones[titulo].audio;
        const imagen = canciones[titulo].imagen;
  
        tituloCancion.textContent = titulo;
        contenedorLetras.innerHTML = letra.replace(/\n/g, '<br>');
        contenedorImagen.src = imagen;
        contenedorAudio.src = audio;
      });
    });
});
  