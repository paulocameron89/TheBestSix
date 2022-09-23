import './App.css';
import Thebestsix from "./componentes/Thebestsix.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>THE BEST POKEMON TEAM</h1>
        <Thebestsix
        nombre="SCISOR"
        tipo1="ACERO"
        tipo2="BICHO"
        ventajadetipo="HIELO / ROCA / HADA / PLANTA / VENENO / PSÍQUICO"
        desventajadetipo="FUEGO / TIERRA / VOLADOR / LUCHA / FANTASMA"
        pokedex="Scizor tiene un cuerpo duro como el acero que no es fácil de alterar con ningún ataque común. Este Pokémon bate las alas para regular la temperatura corporal. Confunde a los rivales con los dibujos de ojos en sus pinzas. Las pinzas que posee tienen acero. Con ellas, no hay nada que se le resista. Rompen todo lo que pillan."
        imagen="Scizor"
        logo1="LogoAcero"
        logo2="LogoBicho" />
        <Thebestsix
        nombre="PIDGEOT"
        tipo1="NORMAL"
        tipo2="VOLADOR"
        ventajadetipo="PLANTA / LUCHA / BICHO"
        desventajadetipo="ROCA / ELÉCTRICO"
        pokedex="El plumaje de este Pokémon es bonito e hipnótico. Muchos Entrenadores se quedan embobados ante la belleza impactante de las plumas que tiene en la cabeza; lo que les lleva a elegir a Pidgeot como su Pokémon. Para intimidar a su enemigo, extiende las increíbles alas que tiene. Este Pokémon vuela a una velocidad increíble. Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp."
        imagen="Pidgeot"
        logo1="LogoNormal"
        logo2="LogoVolador" />
        <Thebestsix
        nombre="POLIWRATH"
        tipo1="AGUA"
        tipo2="LUCHA"
        ventajadetipo="FUEGO / TIERRA / ROCA / NORMAL / HIELO / ACERO"
        desventajadetipo="PLANTA/ DRAGÓN / ELÉCTRICO / VENENO / VOLADOR / PSÍQUICO / BICHO / HADA"
        pokedex="Poliwrath tiene unos músculos fornidos y muy desarrollados, por lo que nunca se agota. Es tan fuerte e incansable que cruzar el océano a nado no le supone ningún esfuerzo. Experto nadador tanto a braza como a crol. Gana fácilmente a los nadadores profesionales. Tiene músculos muy desarrollados. Es capaz de nadar en el océano sin descanso."
        imagen="Poliwrath"
        logo1="LogoAgua"
        logo2="LogoLucha" />
        <Thebestsix
        nombre="STARMIE"
        tipo1="AGUA"
        tipo2="PSIQUICO"
        ventajadetipo="FUEGO / TIERRA / ROCA / LUCHA / VENENO / FANTASMA / PLANTA"
        desventajadetipo="PLANTA / DRAGÓN / ELÉCTRICO / BICHO / SINIESTRO"
        pokedex="Starmie nada por el agua haciendo girar su cuerpo estrellado a modo de hélice. El núcleo de este Pokémon brilla y llega a tornarse de siete colores. El centro de su cuerpo alberga un órgano que emite extrañas señales de radio en la noche. Su núcleo central brilla con los colores del arcoíris. Para algunos tiene el valor de una gema."
        imagen="Starmie"
        logo1="LogoAgua"
        logo2="LogoPsíquico" />
        <Thebestsix
        nombre="VICTREEBEL"
        tipo1="PLANTA"
        tipo2="VENENO"
        ventajadetipo="AGUA / TIERRA / ROCA / PLANTA / BICHO / HADA"
        desventajadetipo="FUEGO / VENENO / VOLADOR / BICHO / DRAGÓN / TIERRA / ROCA / FANTASMA"
        pokedex="Victreebel tiene una enredadera que le sale de la cabeza y que agita a modo de señuelo para atraer a sus presas y así engullirlas por sorpresa cuando estas se aproximan incautas. Cuando este Pokémon ingiere algo, incluso el objeto más duro se disolverá al instante. Dicen que vive en grandes colonias en el interior de las junglas, aunque nadie ha podido verificarlo."
        imagen="Victreebel"
        logo1="LogoPlanta"
        logo2="LogoVeneno" />
        <Thebestsix
        nombre="CHARIZARD"
        tipo1="FUEGO"
        tipo2="VOLADOR"
        ventajadetipo="PLANTA / HIELO / BICHO / ACERO / HADA / LUCHA"
        desventajadetipo="AGUA / ROCA / DRAGÓN / ELÉCTRICO"
        pokedex="Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque. Con las alas que tiene puede alcanzar una altura de casi 1400 m. Suele escupir fuego por la boca. Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente."
        imagen="Charizard"
        logo1="LogoFuego"
        logo2="LogoVolador" />
      </div>
    </div>
  );
}

export default App;
