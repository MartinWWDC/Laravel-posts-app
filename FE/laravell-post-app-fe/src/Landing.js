import React from "react";
import Form from "./Form";
import Post from "./Post";

function Landing() {
    return(
            <React.StrictMode>

            <div className="container">
                <div className="row">
                    <div className="col ">
                        <Form />

                    </div>
                    <div className="col-8">
                        <Post />

                    </div>
                </div>
            </div>
            </React.StrictMode>

    );
}


export default Landing;