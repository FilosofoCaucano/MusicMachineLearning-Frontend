// frontend/src/App.js
// frontend/src/App.js
// frontend/src/App.js
import React, { useState, useRef } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';
import InstrumentInfo from './Components/InstrumentInfo';
import FeedbackForm from './Components/FeedbackForm';
import History from './Components/History';
import Results from './Components/Results';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    const [selectedFilter, setSelectedFilter] = useState('all'); // Filtro seleccionado
    const [results, setResults] = useState(null); // Estado para los resultados
    const [identifiedInstrument,] = useState(null); // Instrumento identificado
    const [sidebarOpen, setSidebarOpen] = useState(false); // Estado de la barra lateral
    const [filteredList, setFilteredList] = useState([]); // Lista de instrumentos filtrados

    // 🔑 Referencias para hacer scroll automático
    const refs = {
        quena: useRef(null),
        sikus: useRef(null),
        toyo: useRef(null),
        ocarina: useRef(null),
        charango: useRef(null),
        guitarra: useRef(null),
        bandola: useRef(null),
        tiple: useRef(null),
        bombo: useRef(null),
        cajon: useRef(null),
        wankara: useRef(null),
        guacharaca: useRef(null),
    };

    // 🎯 Función para búsqueda de instrumento y hacer scroll
    const handleSearch = (query) => {
        const key = query.toLowerCase().trim();
        if (refs[key]) {
            refs[key].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`No se encontró información sobre "${query}"`);
        }
    };

    // 🎼 Filtrar instrumentos por tipo y mostrar lista
    const handleFilterChange = (newFilter) => {
        setSelectedFilter(newFilter);

        if (newFilter === "all") {
            setFilteredList([]);
        } else {
            // Filtramos los instrumentos según el tipo seleccionado
            const list = instruments
                .filter((inst) => inst.type === newFilter)
                .map((inst) => ({
                    name: inst.name,
                    key: inst.name.toLowerCase().replace(/\s+/g, ""), // Generamos clave segura
                }));
            setFilteredList(list);
        }
    };

    // 📌 Función para mover a la sección al hacer clic en un instrumento filtrado
    const scrollToInstrument = (key) => {
        if (refs[key]) {
            refs[key].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`No se encontró la referencia para "${key}"`);
        }
    };

    // 🎵 Lista de instrumentos con su categoría
    const instruments = [
        { name: "Quena", type: "viento", history: "Flauta andina tradicional", imageUrl: "Quena01.jpg" },
        { name: "Sikus", type: "viento", history: "Zampoña hecha de caña", imageUrl: "Sikus01.jpg" },
        { name: "Toyos", type: "viento", history: "Flauta de madera con sonido grave", imageUrl: "Toyos01.jpg" },
        { name: "Ocarina", type: "viento", history: "Instrumento de viento con cámara ovalada", imageUrl: "Ocarina01.jpg" },
        { name: "Charango", type: "cuerda", history: "Guitarra pequeña de los Andes", imageUrl: "Charango01.jpg" },
        { name: "Guitarra", type: "cuerda", history: "Variante de guitarra española en la música andina", imageUrl: "Guitarra01.jpg" },
        { name: "Bandola", type: "cuerda", history: "Instrumento similar a la mandolina", imageUrl: "Bandola01.jpg" },
        { name: "Tiple", type: "cuerda", history: "Pequeño instrumento de cuerda con sonido agudo", imageUrl: "Tiple01.jpg" },
        { name: "Bombo", type: "percusion", history: "Tambor grande utilizado en la música andina", imageUrl: "Bombo01.jpg" },
        { name: "Cajón Peruano", type: "percusion", history: "Caja de resonancia de madera originaria de Perú", imageUrl: "CajonPeruano01.jpg" },
        { name: "Wankara", type: "percusion", history: "Pequeño tambor usado en ceremonias tradicionales", imageUrl: "Wankara01.jpg" },
        { name: "Guacharaca", type: "percusion", history: "Instrumento de percusión idiófono de raspado", imageUrl: "Guacharaca01.jpg" },
    ];

    // 🔥 Función para mostrar/ocultar el sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app-container">
            <Header toggleSidebar={toggleSidebar} />
            <div className="main-content">
                {/* 🔥 Sidebar con búsqueda y acciones */}
                <Sidebar
                    onFilterChange={handleFilterChange}
                    onSearch={handleSearch}
                    onMLAction={(action) => alert(`Técnica de ML seleccionada: ${action}`)}
                    isOpen={sidebarOpen}
                    closeSidebar={() => setSidebarOpen(false)}
                />

                <div className="content">
                    {/* 📃 Lista de instrumentos filtrados (Ahora usa 'selectedFilter') */}
                    {filteredList.length > 0 && (
                        <div className="filtered-list">
                            <h4>Instrumentos de {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}:</h4>
                            <ul>
                                {filteredList.map(({ name, key }, index) => (
                                    <li key={index} onClick={() => scrollToInstrument(key)}>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* 🔥 Contenido principal */}
                    <div className="post">
                        <h3>Sobre el Proyecto</h3>
                        <p>
                            Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.
                            La identificación de instrumentos musicales a partir de grabaciones de audio es una tarea
                            compleja que ha cobrado gran relevancia en el campo de la musicología y las aplicaciones
                            tecnológicas. La creciente disponibilidad de grandes bases de datos de música accesibles
                            al público ha creado la necesidad de desarrollar sistemas que permitan la clasificación
                            y el reconocimiento automático de los contenidos de estos archivos. La identificación
                            de instrumentos musicales en grabaciones de audio es crucial para diversas aplicaciones,
                            tales como la indexación automática de datos, la recuperación de información en bases de
                            datos, el reconocimiento de estilos musicales, la edición de audio, la generación de listas
                            de reproducción, la recuperación de audio y la transcripción musical. A pesar de los
                            numerosos estudios propuestos sobre la identificación de instrumentos musicales, no se ha
                            encontrado investigación específica sobre la identificación de los instrumentos típicos de la
                            región andina
                            La identificación de instrumentos musicales de la región andina mediante técnicas
                            de Machine Learning representa una intersección innovadora entre la música tradicional
                            y la tecnología moderna. Este enfoque aprovecha la capacidad de los algoritmos de
                            aprendizaje automático para procesar y analizar digitalmente las características acústicas
                            de los sonidos, mejorando así la precisión y eficiencia en la identificación de instrumentos
                            musicales específicos. Machine Learning (ML) ha evolucionado drásticamente en los
                            últimos años y ahora se está utilizando a escala global por los ingenieros de sistemas para
                            resolver diferentes problemas.
                        </p>
                        <p>
                            Como un subconjunto de la inteligencia artificial, ML se ha considerado vital al desarrollar
                            sistemas de software para dominios como el reconocimiento de voz/imagen o automotriz.
                            Las técnicas de ML también se han utilizado para abordar varios problemas y actividades
                            de ingeniería de software. Comúnmente, ML se ha empleado en la predicción de defectos,
                            la estimación de esfuerzo y la identificación de patrones y similitudes en el código fuente.
                            Estas técnicas están dirigidas esencialmente a resolver problemas, los cuales a menudo
                            pueden ser difíciles de analizar para las personas como la identificación y reconocimiento
                            de instrumentos.

                        </p>
                    </div>

                    {/* 🎼 AudioUploader para subir y clasificar audio */}
                    <AudioUploader onInstrumentIdentified={setResults} />
                    {/* Mostrar resultados */}
                    {results && <Results results={results} />}
                    {identifiedInstrument && (
                        <InstrumentDisplay instrumentData={identifiedInstrument} />
                    )}

                    {/* 📜 Secciones de historia con referencias */}
                    <div className="history-section">
                        <h3>Instrumentos de Viento</h3>
                        <div className="instrument-grid">
                            <div ref={refs.quena}>
                                <History instrument={{
                                    name: 'Quena',
                                    history: 'La quena es una flauta andina tradicional hecha de caña o madera, utilizada principalmente en la música folclórica de los Andes. Su origen se remonta a las culturas precolombinas, como los incas, quienes la empleaban en ceremonias religiosas y rituales agrícolas. La quena tiene seis agujeros frontales y uno posterior, lo que le permite producir una gama de notas melódicas. Su sonido es penetrante y evocador, capaz de transmitir emociones profundas. Es comúnmente acompañada por otros instrumentos como el charango y el bombo en conjuntos musicales andinos.',
                                    imageUrl: 'Quena01.jpg'
                                }} />
                            </div>
                            <div ref={refs.sikus}>
                                <History instrument={{
                                    name: 'Sikus',
                                    history: 'El siku, también conocido como zampoña, es un conjunto de flautas de pan hechas de caña, madera o bambú. Este instrumento es emblemático de la cultura andina y ha sido utilizado durante siglos en rituales, celebraciones y trabajos agrícolas. Cada tubo del siku produce una nota diferente, y su diseño varía según la región (por ejemplo, el siku ayacuchano o el siku boliviano). Los sikus suelen tocarse en pares, donde dos músicos interpretan melodías complementarias en un estilo llamado "juego de sikus".',
                                    imageUrl: 'Sikus01.jpg'
                                }} />
                            </div>
                            <div ref={refs.toyo}>
                                <History instrument={{
                                    name: 'Toyos',
                                    history: 'El toyo es una flauta de madera de gran tamaño, caracterizada por su sonido grave y profundo. Originaria de las regiones altiplánicas de Perú y Bolivia, esta flauta es utilizada en ceremonias y festivales tradicionales. El toyo se destaca por su capacidad para generar vibraciones resonantes que simbolizan la conexión con la naturaleza y los espíritus ancestrales. Su construcción requiere habilidad artesanal, ya que debe ser tallada con precisión para lograr un tono equilibrado.',
                                    imageUrl: 'Toyos01.jpg'
                                }} />
                            </div>
                            <div ref={refs.ocarina}>
                                <History instrument={{
                                    name: 'Ocarina',
                                    history: 'La ocarina es un instrumento de viento globular con una cámara de resonancia ovalada, originario de América Latina pero también popular en otras culturas como la china y la europea. En los Andes, la ocarina es utilizada principalmente en música ceremonial y como juguete musical para niños. Su diseño compacto permite producir una variedad de notas mediante la combinación de agujeros y la intensidad del soplo. Aunque su sonido es más suave que el de la quena, la ocarina es apreciada por su versatilidad y portabilidad.',
                                    imageUrl: 'Ocarina01.jpg'
                                }} />
                            </div>
                        </div>

                        <h3>Instrumentos de Cuerda</h3>
                        <div className="instrument-grid">
                            <div ref={refs.charango}>
                                <History instrument={{
                                    name: 'Charango',
                                    history: 'El charango es un pequeño instrumento de cuerda originario de los Andes, especialmente asociado con Bolivia y Perú. Tradicionalmente hecho de la caparazón de un armadillo (quirquincho), aunque hoy en día suele fabricarse de madera. Tiene cinco pares de cuerdas dobles y se toca con un estilo similar al de la guitarra. El charango es fundamental en la música andina y se utiliza tanto en piezas melódicas como en acompañamientos rítmicos. Su sonido agudo y brillante lo hace inconfundible.',
                                    imageUrl: 'Charango01.jpg'
                                }} />
                            </div>
                            <div ref={refs.guitarra}>
                                <History instrument={{
                                    name: 'Guitarra',
                                    history: 'La guitarra andina es una adaptación de la guitarra española, modificada para ajustarse a los estilos musicales de los Andes. Tiene un cuerpo más pequeño y cuerdas de nailon o tripa, lo que le da un tono más cálido y suave. Es comúnmente utilizada para acompañar canciones tradicionales, como huaynos y yaravíes. La guitarra andina también se emplea en conjuntos musicales junto con el charango y el bombo, creando armonías ricas y complejas.',
                                    imageUrl: 'Guitarra01.jpg'
                                }} />
                            </div>
                            <div ref={refs.bandola}>
                                <History instrument={{
                                    name: 'Bandola',
                                    history: 'La bandola es un instrumento de cuerda similar a la mandolina, originario de Venezuela y Colombia, pero también presente en la música andina. Tiene un cuerpo redondeado y cuerdas metálicas que producen un sonido brillante y resonante. La bandola se utiliza principalmente para interpretar melodías rápidas y virtuosas, destacándose en géneros como el joropo y el pasillo. Su diseño permite una gran versatilidad técnica, lo que la convierte en un instrumento muy apreciado por los músicos.',
                                    imageUrl: 'Bandola01.jpg'
                                }} />
                            </div>
                            <div ref={refs.tiple}>
                                <History instrument={{
                                    name: 'Tiple',
                                    history: 'El tiple es un pequeño instrumento de cuerda originario de Colombia, aunque también se encuentra en algunas regiones andinas. Tiene diez cuerdas organizadas en cuatro cursos, lo que le permite producir un sonido agudo y vibrante. El tiple es especialmente popular en la música campesina y folclórica, donde se utiliza para acompañar canciones y bailes tradicionales. Su diseño compacto y su tono distintivo lo hacen ideal para solos melódicos.',
                                    imageUrl: 'Tiple01.jpg'
                                }} />
                            </div>
                        </div>

                        <h3>Instrumentos de Percusión</h3>
                        <div className="instrument-grid">
                            <div ref={refs.bombo}>
                                <History instrument={{
                                    name: 'Bombo',
                                    history: 'El bombo es un tambor grande y profundo, esencial en la música andina. Tradicionalmente hecho de madera y piel de animal, su sonido grave y resonante proporciona el ritmo base en conjuntos musicales. El bombo se toca con baquetas acolchadas para suavizar el golpe y crear un efecto envolvente. Es comúnmente utilizado en huaynos, cacharpayas y otras danzas tradicionales. Su presencia en la música andina simboliza la fuerza y la conexión con la tierra.',
                                    imageUrl: 'Bombo01.jpg'
                                }} />
                            </div>
                            <div ref={refs.cajon}>
                                <History instrument={{
                                    name: 'Cajón Peruano',
                                    history: 'El cajón peruano es un instrumento de percusión originario de la costa peruana, aunque ha ganado popularidad en todo el mundo gracias a su versatilidad. Consiste en una caja de madera con un orificio en la parte posterior para proyectar el sonido. Se toca sentándose sobre él y golpeando la superficie frontal con las manos. El cajón es fundamental en géneros como el flamenco, el jazz y la música afroperuana. Su diseño simple pero efectivo permite producir una variedad de tonos y ritmos.',
                                    imageUrl: 'CajonPeruano01.jpg'
                                }} />
                            </div>
                            <div ref={refs.wankara}>
                                <History instrument={{
                                    name: 'Wankara',
                                    history: 'El wankara es un tambor pequeño y portátil, utilizado en ceremonias y rituales tradicionales de los Andes. Está hecho de madera y piel de animal, y su sonido agudo y preciso lo hace ideal para marcar ritmos rápidos. El wankara es comúnmente tocado junto con otros instrumentos de percusión, como el bombo, en festivales y procesiones. Su diseño compacto permite transportarlo fácilmente, lo que lo convierte en un instrumento práctico para eventos al aire libre.',
                                    imageUrl: 'Wankara01.jpg'
                                }} />
                            </div>
                            <div ref={refs.guacharaca}>
                                <History instrument={{
                                    name: 'Guacharaca',
                                    history: 'La guacharaca es un instrumento de percusión idiófono de raspado, originario de Colombia y Venezuela. Consiste en una vara de madera con ranuras transversales que se raspan con un palito para producir un sonido crujiente y rítmico. La guacharaca es esencial en géneros como el joropo y el merengue, donde se utiliza para añadir textura y energía a las piezas musicales. Su simplicidad y efectividad la han convertido en un instrumento icónico de la música latinoamericana.',
                                    imageUrl: 'Guacharaca01.jpg'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Información adicional del instrumento identificado */}
                    {identifiedInstrument && (
                        <InstrumentInfo instrument={identifiedInstrument} />
                    )}

                    <FeedbackForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
