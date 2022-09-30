import './App.css';

function App() {
  return (
    <div className="App-header ">
      <div>
        Brisca Game
      </div>
      <br />
      <div>
        <p>
          Rules:
        </p>
        <p>
          El orden, de mayor a menor, es el siguiente:
          as, tres, rey, caballo, sota, siete, seis, cinco, cuatro y dos.
          El valor de las cartas, en cualquiera de los cuatro palos, es :
        </p>
        <ol>
          <li>AS : 11</li>
          <li>TRES : 10</li>
          <li>REY : 4</li>
          <li>CABALLO: 3</li>
          <li>SOTA: 2</li>
        </ol>
        <p>
          El resto de cartas no tienen valor
        </p>
        <div>
          <p>
            Distribución de las cartas
          </p>
          <p>
            Cada jugador toma una carta y la enseña. Los dos jugadores que tengan las dos cartas mayores juegan contra los que tengan las cartas menores. Reparte el jugador que sacó la carta más alta y elige sitio, sentándose frente a él su compañero, y a su derecha, el jugador contrario que sacó la carta mayor.
            El jugador que da las cartas, las barajará ofreciéndoselas a cortar al de su izquierda, quien al hacerlo, no podrá tomar ni dejar menos de cuatro cartas. Después, distribuirá tres cartas a cada jugador, de una en una, en sentido contrario a las agujas del reloj, descubriendo la carta siguiente, que es la que señala el palo de triunfo, y que quedará a la vista junto al mazo en el centro de la mesa.El turno de dar, en los juegos siguientes, continúa por orden riguroso de izquierda a derecha.
          </p>
        </div>
        <br />
        <div>
          <p>
            Inicio y marcha del juego
          </p>
          <p>
            Inicia el juego el jugador situado a la derecha del dador, el “mano”, jugando una carta que dejará descubierta sobre la mesa. Los demás jugadores, al llegarles su turno, pueden jugar una carta cualquiera, sin obligación de asistir al palo ni jugar triunfo. Gana la baza la mayor carta jugada del palo de triunfo y, en su defecto, la carta más alta del palo de salida.
            Cada jugador robará una carta del mazo, comenzando por el que haya ganado la baza.
            Inicia la baza siguiente el jugador que ganó la anterior, que jugará una carta cualquiera, continuando los demás por orden riguroso de izquierda a derecha en la forma ya explicada. El juego termina cuando ya no quedan cartas que robar en el mazo y se han jugado todas las de la mano.
            Cualquier jugador, después de haber ganado una baza y antes de robar carta del mazo, puede recoger la carta que marca el triunfo y sustituirla por el siete del mismo palo; el siete de triunfo y cualquier carta menor que ésta, puede sustituirse por el dos de triunfo. Este cambio no podrá hacerse después de haber jugado la penúltima baza.
          </p>
        </div>

        <div>
          <p>
            Git
          </p>
          <a
            href="https://github.com/Carlos21122000/DownloadGame"
            download
            color = "#e4717a" 
          >
            Click to download
          </a>
          <ol>
            <li><a href="https://github.com/Mar19845/chess_front" >FRONT END / CLIENT</a></li>
            <li><a href="https://github.com/Mar19845/chess_backend" >BACK END</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
