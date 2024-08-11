import styles from "../css/styles.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Home() {
    const frases = [
        "¿Estás convencida?",
        "Piensa bien antes de decidir.",
        "¿Es esto lo que realmente deseas?",
        "Tómate un momento para estar segura.",
        "Asegúrate de que es lo que quieres.",
        "Considera todas las posibilidades.",
        "No te apresures, es tu decisión.",
        "¿Sientes que es lo correcto?",
        "Reflexiona un poco más, si lo necesitas.",
        "Tómate tu tiempo, no hay prisa.",
        "Estás a un paso, ¿es esto lo que piensas?",
        "Asegúrate de que te sientes bien con esto.",
        "¿Estás lista para este paso?",
        "Piensa en lo que realmente importa para ti.",
        "¿Esto es lo que te hará feliz?",
        "Respira hondo, ¿es esto lo que deseas?",
        "Asegúrate de que estás tranquila con esta decisión.",
        "Reflexiona sobre lo que viene después.",
        "Confía en tus sentimientos, ¿es lo que quieres?",
        "Date un respiro y piensa.",
        "No hay vuelta atrás, ¿estás segura?",
        "¿Es esto lo que esperabas?",
        "Asegúrate de que es lo que piensas.",
        "¿Te sientes cómoda con esta elección?",
        "¿Es este el camino que quieres tomar?",
        "Piénsalo bien, ¿estás convencida?",
        "Reflexiona un momento más.",
        "¿Es esto lo que imaginaste?",
        "¿Sientes que es la mejor opción?",
        "Tómate tu tiempo para estar segura.",
        "Piensa en lo que te hace sentir bien.",
        "¿Es esto lo que has estado buscando?",
        "Asegúrate de estar en paz con tu decisión.",
        "¿Esto te acerca a lo que quieres?",
        "¿Te sientes bien con este camino?",
        "Reflexiona antes de avanzar.",
        "¿Es esto lo que más deseas?",
        "Tómate un instante para considerar.",
        "¿Estás preparada para esto?",
        "Asegúrate de que es lo que piensas.",
        "No te apresures, tómate tu tiempo.",
        "Piensa en lo que realmente importa.",
        "¿Es esto lo que mejor te sienta?",
        "Confía en ti misma, ¿es lo que deseas?",
        "Reflexiona sobre lo que realmente quieres.",
        "No hay presión, ¿estás lista?",
        "¿Esto es lo que has estado esperando?",
        "Piensa bien antes de continuar.",
        "Tómate un momento para estar segura.",
        "¿Es esto lo que te hará feliz?",
        "Asegúrate de que te sientes bien.",
        "¿Estás en paz con esta decisión?",
        "Reflexiona sobre lo que te hace feliz.",
        "Tómate tu tiempo, ¿es lo que piensas?",
        "Piensa en lo que quieres lograr.",
        "¿Esto es lo que más valoras?",
        "¿Te sientes confiada en tu decisión?",
        "Asegúrate de que es lo correcto para ti.",
        "¿Estás preparada para lo que viene?",
        "Tómate un momento para reflexionar.",
        "Piensa en lo que significa para ti.",
        "¿Esto te hace sentir segura?",
        "Reflexiona un poco más, si lo necesitas.",
        "¿Es esto lo que realmente quieres?",
        "Asegúrate de que es lo que piensas.",
        "Tómate tu tiempo para decidir.",
        "¿Esto es lo que te traerá paz?",
        "Piensa en lo que realmente deseas.",
        "¿Estás lista para avanzar?",
        "Reflexiona sobre tus sentimientos.",
        "¿Es esto lo que has estado buscando?",
        "Asegúrate de que es lo mejor para ti.",
        "No te apresures, piensa bien.",
        "¿Es esto lo que te hará sentir bien?",
        "Tómate un instante para considerar.",
        "¿Estás segura de esta decisión?",
        "Reflexiona sobre lo que más importa.",
        "¿Es esto lo que te hace feliz?",
        "Piensa en lo que deseas lograr.",
        "¿Esto es lo que realmente piensas?",
        "Asegúrate de estar tranquila con esto.",
        "¿Estás preparada para este paso?",
        "Reflexiona un momento más, si lo necesitas.",
        "¿Es esto lo que deseas profundamente?",
        "Tómate tu tiempo para estar segura.",
        "Piensa en lo que es mejor para ti.",
        "¿Esto es lo que te sienta bien?",
        "Confía en ti misma, ¿es lo que deseas?",
        "Reflexiona antes de tomar una decisión.",
        "¿Estás en paz con este camino?",
        "Asegúrate de que es lo que piensas.",
        "Tómate un respiro y considera.",
        "¿Es esto lo que te hace feliz?",
        "Piensa en lo que realmente importa.",
        "¿Esto es lo que has estado esperando?",
        "Asegúrate de que es lo mejor para ti.",
        "Reflexiona sobre lo que realmente quieres.",
        "¿Estás lista para lo que viene?",
        "Piensa bien antes de decidir.",
        "Asegúrate de estar en paz con tu decisión."
    ];
    // const divNo = document.getElementById('click');


    function escogerFraseAlAzar() {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        return frases[indiceAleatorio];
    }
    function modifyText() {
        var t2 = document.getElementById("tiste");
        t2.textContent = escogerFraseAlAzar();
    }


    return (
        <div className={styles.home}>
            <div className={styles.all}>

                <div className={styles.head}>
                    <h1 className={styles.titleH}>Y qué tal si...</h1>
                </div>
                <div className={styles.req}>
                    <p>Comprendo lo extraño que puede llegar a resultar, un desconocido que te viene a hablar, solo que no quiero que pienses que soy el usual <strong>"no resultó a la primera, qué mas da"</strong>, me resultaste muy agradable Lisbeth, cómo puedo considerarme ser humano si no intento algo más por esa sensación, esa <strong>«corazonada»</strong> tal cual lo expresaría un necio queriendo ir contra corriente.<br />Salgamos, una oportunidad, y si se da el caso en que pueda cautivarte quedará a tu disposición el que nos veamos vez más.</p>
                    <p></p>

                </div>
                <div className={styles.invitation}>
                    <div className={styles.card}>
                        <Card className={styles.subCard} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={styles.cardImage}
                                    image="https://www.guayaquil.gob.ec/wp-content/uploads/2024/02/malecon-salado-presenta-agenda-actividades-para-febrero.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Malecón del Salado
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lugar ideal para ir a comer mientras las pláticas son amenas, por su puesto que si disfrutas de caminar, no muy lejos queda la plaza Guayarte, el recorrido es a través de un pequeño parque a lado del estero.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <div >

                                <CardActions className={styles.boxAcordar}>
                                    <a href="https://wa.me/59396143453" target="_blank" rel="noreferrer">
                                        <Button size="small" className={styles.acordar}>
                                            Acordar fecha conmigo
                                        </Button>
                                    </a>

                                </CardActions>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.click} onClick={modifyText}>
                        <div id="click" className={styles.no}>
                            No
                        </div>

                        <strong><p id="tiste"></p></strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
