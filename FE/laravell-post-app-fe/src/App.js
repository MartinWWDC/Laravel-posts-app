import './App.css';
import {useEffect, useState} from "react";

function App() {


    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    let handleSubmit = async (e) => {
        const data ={content: content}

        e.preventDefault();
        try {
            let res = await fetch(process.env.REACT_APP_API_BASE_URL+'/api/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            });
            let resJson = await res.json();
            console.log(resJson['content']);
            if (res.status === 200) {
                setContent("");
                //setMessage(resJson['message']);
                setMessage("miao")
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {

        }

    };

  return (
      <div className="App">
          <div className="form">
          <form onSubmit={handleSubmit}>
              <h1>Write your Text:</h1>
              <input
                  type="text"
                  value={content}
                  placeholder="Content"
                  onChange={(e) => setContent(e.target.value)}
              />


              <button type="submit">Add</button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
          </div>

      </div>
  );
}

export default App;
