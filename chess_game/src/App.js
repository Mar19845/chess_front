import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        Brisca Game
      </div>
      <div>
        Rules:
        El orden, de mayor a menor, es el siguiente: 
        as, tres, rey, caballo, sota, siete, seis, cinco, cuatro y dos. 
        El valor de las cartas, en cualquiera de los cuatro palos, es :
        AS : 11
        TRES : 10
        REY : 4
        CABALLO: 3
        SOTA: 2

        El resto de cartas no tienen valor
        <div>
          <p>
            Distribución de las cartas
          </p>
          <p>
          Cada jugador toma una carta y la enseña. Los dos jugadores que tengan las dos cartas mayores juegan contra los que tengan las cartas menores. Reparte el jugador que sacó la carta más alta y elige sitio, sentándose frente a él su compañero, y a su derecha, el jugador contrario que sacó la carta mayor.

El jugador que da las cartas, las barajará ofreciéndoselas a cortar al de su izquierda, quien al hacerlo, no podrá tomar ni dejar menos de cuatro cartas. Después, distribuirá tres cartas a cada jugador, de una en una, en sentido contrario a las agujas del reloj, descubriendo la carta siguiente, que es la que señala el palo de triunfo, y que quedará a la vista junto al mazo en el centro de la mesa.El turno de dar, en los juegos siguientes, continúa por orden riguroso de izquierda a derecha.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
