import {useLocation} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function Edit() {

    const location = useLocation();
    const myData = location.state.data;
    const [content, setContent] = useState({
        content: myData.content
    });

  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(content);
    };
     // funzione che gestisce la presentazione del form
    function renderForm() {

        return (
            <div className="Edit">
            <form onSubmit={handleSubmit}>

                {/* Inserisci qui i campi del form */}
                <label htmlFor="campo1">Editando Prop  {myData.id}</label>

                <input
                    type="text"
                    value={content['content']}
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                />



            </form>
                <button onClick={handleSubmit}>Edit</button>
            </div>

        );
    }
    /*
    // funzione che gestisce la presentazione del messaggio di errore
    function renderError() {
        return <div>Si è verificato un errore: {error.message}</div>;
    }

    // funzione che gestisce la presentazione dello stato di caricamento
    function renderLoading() {
        return <div>Caricamento in corso...</div>;
    }

    // funzione che decide cosa mostrare in base allo stato dell'applicazione
    function renderContent() {
        if (isLoading) {
            return renderLoading();
        } else if (error) {
            return renderError();
        } else {
            return renderForm();
        }
    }*/

    //return <div>{renderContent()}</div>;
    return <div>{renderForm()}</div>;
}

export default  Edit;