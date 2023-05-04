import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit() {
    const [data, setData] = useState({}); // stato per i dati recuperati dall'API
    const [isLoading, setIsLoading] = useState(true); // stato per indicare se i dati sono in fase di caricamento o meno
    const [error, setError] = useState(null); // stato per gestire eventuali errori durante la chiamata API

    useEffect(() => {
        // funzione che esegue la chiamata API
        async function fetchData() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/posts');
                setData(response.data);
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);

    // funzione che gestisce la presentazione del form
    function renderForm() {
        return (
            <form>

                {/* Inserisci qui i campi del form */}
                <label htmlFor="campo1">Campo 1</label>
                <input type="text" id="campo1" name="campo1" value={data} />

                <label htmlFor="campo2">Campo 2</label>
                <input type="text" id="campo2" name="campo2" value={data.campo2} />
            </form>
        );
    }

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
    }

    return <div>{renderContent()}</div>;
}

export default  Edit;