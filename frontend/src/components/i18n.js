import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "English": "English",
      "Spanish": "Spanish",

      "Description": "Woolnet is Wikidata's inter-entity path grapher",
      "Time": "Time",
      "Menu": "Menu",
      "Stop": "STOP",
      "Search": "SEARCH",
      "Help": "Help",
      "Return": "Return",
      "Clear": "CLEAR",
      "Entity": "Entity",
      "EntityWrite": "Write an entity",
      "LoadingSearch": "Searching",
      "WaitingSearch": "Waiting an entry",
      "NoResultSearch": "No results",

      "Slider1": "Max path size",
      "Slider2": "Max degree of nodes",
      "Slider1Info": "Filters the paths that have a length greater than this value.",
      "Slider2Info": "Filters the paths that have nodes with a degree (number of edges) greater than this value. Value is on logarithmic scale.",

      "WoolNet": "WoolNet is the application that allows obtaining the paths that join Wikidata entities.",
      "Instructions": "Instructions",
      "Ayuda1": "Write in the search input the entity you want to search",
      "Ayuda2": "When the entities display, select one",
      "Ayuda3": "Repeat 1 and 2 with the entities that you want",
      "Ayuda4": "Clicking SEARCH will start the search for paths, using CLEAR will delete the selected entities",
      "Ayuda5": "You can stop the search using the STOP button. The search will run for maximum of two minutes",
      "Ayuda6": "You can show fewer results using the bottom sliders",

      "HelpIMG1": './../images/help/Paso1_edit.png'
    }
  },
  es: {
    translation: {
      "English": "Inglés",
      "Spanish": "Español",

      "Description": "Woolnet es el graficador de caminos entre entidades de Wikidata",
      "Time": "Tiempo",
      "Menu": "Menú",
      "Stop": "DETENER",
      "Search": "BUSCAR",
      "Help": "Ayuda",
      "Return": "Volver",
      "Clear": "LIMPIAR",
      "Entity": "Entidad",
      "EntityWrite": "Escriba una entidad",
      "LoadingSearch": "Buscando",
      "WaitingSearch": "Esperando una entrada",
      "NoResultSearch": "Sin resultados",

      "Slider1": "Largo máximo caminos",
      "Slider2": "Grado máximo de los nodos",
      "Slider1Info": "Filtra los caminos que poseen un largo mayor a este valor.",
      "Slider2Info": "Filtra los caminos que poseen nodos con un grado (cantidad de aristas) mayor a este valor. El valor está en escala logarítmica.",

      "WoolNet": "WoolNet es la aplicación que permite obtener los caminos que unen entidades de Wikidata.",
      "Instructions": "Instrucciones",
      "Ayuda1": "Escriba en el buscador la entidad la entidad que desea buscar",
      "Ayuda2": "Cuando se desplieguen entidades existentes, seleccione una",
      "Ayuda3": "Repita el paso 1. y 2 con las entidades que desea",
      "Ayuda4": "Clickeando el botón BUSCAR iniciará las búsqueda de caminos, usando LIMPIAR eliminará las entidades seleccionadas",
      "Ayuda5": "Puede detener la búsqueda clickeando en DETENER. La búsqueda se ejecutará durante un máximo de dos minutos",
      "Ayuda6": "Puede disminuir regular los resultados usando los SLIDERS inferiores",
    
      "HelpIMG1": './../images/help/Paso1_edit.png',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;//