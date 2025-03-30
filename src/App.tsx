import { useState } from 'react';
import './App.css'
const aRNtImage = './images/ARNt.png';
const aRNmImage = './images/ARNm.png';
const codonesImage = './images/Codon.png';
const aminoacidosImage = './images/AminoAcido.png';
const ribosomaImage = './images/Ribosoma.png';
const anticodonesImage = './images/AntiCodon.png';

const tablaAminoacidosPdf = 'TablaAminoacidos.pdf';

const gameScreenshotImage = './images/GameScreenshot.png';

const controlArribaImage = './images/MobileArriba.png';
const controlDireccionImage = './images/MobileDireccional.png';


function App() {
  const [
    confirmPretest,
    setConfirmPretest] = useState(false);
  const [
    confirmPlayed,
    setConfirmPlayed] = useState(false);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 dark">
      <h1 className="text-4xl font-bold my-3">Sintetizador de proteínas</h1>
      <div className="my-1">
        <div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950">
          <h2 className='text-3xl font-bold my-2'>Acerca de este juego</h2>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/8UXSFCCDFiY?si=YtGVMSbCBFKP4Geh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className='text-lg'>
            Este juego open source es una representación de la síntesis de proteínas, en su <b>proceso de traducción.</b>
            <br />
            La idea es que puedas aprender como se da el <b>proceso de traducción</b> de síntesis de proteínas en el cuerpo humano;
            y los elementos involucrados en este proceso y como estos elementos se relacionan entre si para dar lugar a la síntesis de proteínas.
          </p>
          <h4 className='text-xl font-bold my-2'>Repositorio de código del juego</h4>
          <div className="codebox">
            <pre>
              <code>
              git clone https://github.com/juliangoes89/ProteinSynthesizersAlpha.git
              </code>
            </pre>
          </div>
        </div>
        <div className='card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950' id="indice">
          <h2 className='text-3xl font-bold my-2'>Indice</h2>
          <ol className='list-decimal list-inside my-2'>
            <li><a href='#teoria' className="text-blue-200 hover:text-blue-50 underline">Teoría de la traducción de síntesis de proteínas</a></li>
            <li><a href='#juego' className="text-blue-200 hover:text-blue-50 underline">¿Cómo jugar?</a></li>
            <li><a href='#pretest' className="text-blue-200 hover:text-blue-50 underline">Cuestionario Pretest</a></li>
            <li><a href='#jugar' className="text-blue-200 hover:text-blue-50 underline">Jugar</a></li>
            <li><a href='#posttest' className="text-blue-200 hover:text-blue-50 underline">Cuestionario PostTest</a></li>
          </ol>
        </div>
        <div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950" id="teoria">
          <h2 className='text-3xl font-bold my-2'>Teoría de la traducción de síntesis de proteínas</h2>
          <p className='text-lg'>
            La <b>traducción</b> es el proceso por el cual la información genética contenida en el ARNm se utiliza para producir proteínas.
            <br />
            La traducción se lleva a cabo en los ribosomas, que son las fábricas de proteínas de la célula.
            <br />
            La traducción de ARNm a proteína se realiza en tres etapas: iniciación, elongación y terminación.
            <br />
            Durante la <b>iniciación</b>, el ribosoma se une al ARNm y se coloca en el codón de inicio.
            <br />
            Durante la <b>elongación</b>, el ribosoma lee el ARNm y añade aminoácidos a la cadena de proteínas en crecimiento.
            <br />
            Durante la <b>terminación</b>, el ribosoma alcanza un codón de parada y la proteína se libera.
            <br />
            La traducción es un proceso esencial para la vida y se lleva a cabo en todas las células vivas.
          </p>
          <h3 className='text-2xl font-bold my-1'>Elementos que componen la sistesís de proteínas</h3>
          <ul className='list-disc list-inside my-2'>
            <li><a href='#ARNt' className="text-blue-200 hover:text-blue-50 underline">ARNt</a></li>
            <li><a href='#ARNm'className="text-blue-200 hover:text-blue-50 underline">ARNm</a></li>
            <li><a href="#codonesanti" className="text-blue-200 hover:text-blue-50 underline">Codones y Anticodones</a></li>
            <li><a href='#aminoacidos' className="text-blue-200 hover:text-blue-50 underline">Aminoácidos</a></li>
            <li><a href='#ribosoma' className="text-blue-200 hover:text-blue-50 underline">Ribosomoa</a></li>
          </ul>
          <h4 className='text-xl font-bold my-1' id="ARNt">ARNt</h4>
          <img src={aRNtImage} alt='ARNt' className="w-1/2 h-1/2" />
          <p className='text-lg'>
            El ARNt es un tipo de ARN que transporta aminoácidos a los ribosomas durante la traducción.
            <br />
            Cada ARNt tiene un anticodón que se une a un codón específico en el ARNm y un sitio de unión para un aminoácido.
          </p>
          <h4 className='text-xl font-bold my-1' id="ARNm">ARNm</h4>
          <img src={aRNmImage} alt='ARNm' />
          <p className='text-lg'>
            El ARNm es un tipo de ARN que lleva la información genética del ADN a los ribosomas durante la traducción.
            <br />
            El ARNm se transcribe a partir del ADN y contiene la secuencia de nucleótidos que codifica una proteína específica.
          </p>
          <h4 className='text-xl font-bold my-1' id="codonesanti">Codones y Anticodones</h4>
          <p className='text-lg'>
            <h5 className='text-lg font-bold my-1'>Codones</h5>
            <img src={codonesImage} alt='Codones' />
            Los codones son secuencias de tres nucleótidos en el ARNm que codifican un aminoácido específico.
            <br />
            <h5 className='text-lg font-bold my-1'>AntiCodon</h5>
            <img src={anticodonesImage} alt='Anticodones' />
            Los anticodones son secuencias de tres nucleótidos en el ARNt que se unen a los codones específicos en el ARNm.
            <br />
            <h5 className='text-lg font-bold my-1'>Tabla de Bases y Complementos</h5>
            la siguiente tabla describe las bases y sus complementos correspondientes en el ARN.
            <br />
            con esta tabla podemos encontrar los nucleótidos correspondientes al codón y anticodón.
            <table className='table-auto border-collapse border border-gray-400 w-full'>
              <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2 text-center w-1/2'>Base</th>
            <th className='border border-gray-300 px-4 py-2 text-center w-1/2'>Complemento</th>
          </tr>
              </thead>
              <tbody>
          <tr>
            <td className='border border-gray-300 bg-amber-600 px-4 py-2 text-center'>A</td>
            <td className='border border-gray-300 bg-yellow-400 px-4 py-2 text-center'>U</td>
          </tr>
          <tr>
            <td className='border border-gray-300 bg-blue-400 px-4 py-2 text-center'>C</td>
            <td className='border border-gray-300 bg-purple-700 px-4 py-2 text-center'>G</td>
          </tr>
          <tr>
            <td className='border border-gray-300 bg-purple-700 px-4 py-2 text-center'>G</td>
            <td className='border border-gray-300 bg-blue-400 px-4 py-2 text-center'>C</td>
          </tr>
          <tr>
            <td className='border border-gray-300 bg-yellow-400 px-4 py-2 text-center'>U</td>
            <td className='border border-gray-300 bg-amber-600 px-4 py-2 text-center'>A</td>
          </tr>
              </tbody>
            </table>
          </p>
          <h4 className='text-lg font-bold my-1' id="aminoacidos">Aminoácidos</h4>
          <img src={aminoacidosImage} alt='Aminoácidos' />
          <p className='text-lg'>
            Los aminoácidos son los bloques de construcción de las proteínas y se unen entre sí para formar cadenas de proteínas.
            <br />
            Cada aminoácido está codificado por un codón específico en el ARNm y es transportado al ribosoma por un ARNt.
            <h5 className='text-lg font-bold my-1'>Tabla de Aminoácidos</h5>
            <a href={tablaAminoacidosPdf} className="text-blue-200 hover:text-blue-50 underline" target="_blank" rel="noopener noreferrer">PDF Tabla de Aminoácidos</a>
          </p>
          <h4 className='text-lg font-bold my-1' id="Ribosoma">Ribosoma</h4>
          <img src={ribosomaImage} alt="Ribosoma" />
          <p className='text-lg'>
            Los ribosomas son las fábricas de proteínas de la célula y son los sitios donde se lleva a cabo la traducción.
            <br />
            Los ribosomas leen el ARNm y añaden aminoácidos a la cadena de proteínas en crecimiento.
          </p>
        </div>
        <div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950" id="juego">
        <h2 className='text-3xl font-bold my-2'>¿Cómo jugar?</h2>
        <img src={
          gameScreenshotImage
        }></img>
        <h3 className='text-2xl font-bold my-1'>Objetivo del juego</h3>
        <p>
          El jugador controla el ARNt, el cual carga un Anticodón y un aminoácido
          <br/>
          el objetivo del jugador es aterrizar el anticodon en el codon correspondiente
          <br/> 
          de modo que el aminoácido sea liberado correctamente al aterrizar y empieze a construir la cadena de aminoácidos
          <br/>
          al aterrizar correctamente el jugador tomará control del siguiente ARNt y así sucesivamente hasta llegar a la señal de parada
          <br/>
          liberando así la cadena de aminoácidos y sintetizando una proteína
        </p>
        <h3 className='text-2xl font-bold my-1'>Controles</h3>
        <div>
          El juego etá disponible tanto para computador como para mobile,
          <br/>
          <h4 className='text-xl font-bold my-1'>En computador los controles son:</h4>
          <ul>
            <li><strong>Espacio:</strong> controla la aceleración vertical del ARNt al dejarlo presionado acelera al soltarlo desacelera</li>
            <li><strong>Teclas de dirección  :</strong>  <span>&larr;</span> y <span>&rarr;</span>controlan la rotación horizontal del ARNt</li>
          </ul>
          <h4 className='text-xl font-bold my-1'>En Mobile los controles son:</h4>
          <ul>
            <li><strong>Botón de aceleración:</strong> <img src={controlArribaImage}></img> controla la aceleración vertical del ARNt al dejarlo presionado acelera al soltarlo desacelera</li>
            <li><strong>Botones de rotación:</strong>  <img src={controlDireccionImage}></img>controlan la rotación horizontal del ARNt</li>
          </ul>
        </div>
        </div>
        <div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950" id="pretest">
          <h1 className="text-xl font-bold">Por favor responde este cuestionario para poder jugar</h1>
          <h1 className="text-2xl font-bold text-green-400">Recuerda pulsar el botón para finalizar el cuestionario</h1>
          {!confirmPlayed && (<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedtVAIVJ-0nvc5Z15cIx8q5prKnrWu1GTA3Yvm33x4gRVVAg/viewform?embedded=true" width="100%" height="3800" frameBorder="0" style={{ margin: 0 }}>Loading…</iframe>)}
            <div className="flex items-center my-4">
            <input type="checkbox" id="confirmPretest" onChange={(e) => setConfirmPretest(e.target.checked)} className="mr-2 w-6 h-6" disabled={confirmPlayed}></input>
            <label htmlFor="confirmPretest" className="text-lg font-bold">Confirmo que he respondido el cuestionario</label>
            </div>
        </div>
        <div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950" id="jugar">
          {
            confirmPretest ? (<>
                          <h1 className="text-xl font-bold">Gracias por responder el cuestionario, puedes jugar</h1>
              <h1 className="text-xl font-bold">Recuerda girar el telefono horizontalmente para jugar</h1>
              <a href="/game" className="text-3xl font-bold my-2 text-center block bg-gradient-to-b from-pink-700 to-pink-900 p-4 rounded-lg shadow-lg">Jugar</a>
            </>
            ) : (
              <h1 className="text-xl font-bold">Por favor responde el cuestionario y confirma que lo respondiste para poder jugar</h1>
            )
          }

        </div>
        
        {confirmPretest && (<div className="card my-4 p-4 shadow-lg rounded-lg bg-gradient-to-b from-sky-900 to-sky-950" id="posttest">
            <input type="checkbox" id="confirmPlayed" onChange={(e) => setConfirmPlayed(e.target.checked)} className="mr-2 w-6 h-6"></input>
            <label htmlFor="confirmPlayed" className="text-lg font-bold">Confirmo que he jugado</label>
          
          {
            confirmPlayed ? (
              <>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">Gracias por jugar!!!</h1>
              <h1 className="text-xl font-bold">Por favor responde estos cuestionarios después de jugar</h1>
              <h1 className="text-2xl font-bold text-green-400">Recuerda pulsar el botón para finalizar el cuestionario</h1>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlyztf9DvzEukkLWdHJP8Pkn0ZeCZnOs_8Ud2_tPJpaWWvA/viewform?embedded=true" width="100%" height="3800" frameBorder="0" style={{ margin: 0 }}>Loading…</iframe>
              <h1 className="text-xl font-bold">Cuestionario sobre gusto por los videojuegos</h1>
              <h1 className="text-2xl font-bold text-purple-400">Recuerda pulsar el botón para finalizar el cuestionario</h1>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0NEFUZBJ3xguieqqZiXIF4gbHfFiS6O1XsmM4mNpisdAGAA/viewform?embedded=true" width="100%" height="3800" frameBorder="0" style={{ margin: 0 }}>Loading…</iframe>
              </>
            ):(
              <h1 className="text-xl font-bold">Por favor juega y confirma que has jugado</h1>
            )
          }
        </div>)
        }
      </div>
    </div>
  )
}

export default App
