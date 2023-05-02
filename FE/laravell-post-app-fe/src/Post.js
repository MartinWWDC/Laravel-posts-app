import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        // Esegui la chiamata API per recuperare i dati paginati
        axios.get(process.env.REACT_APP_API_BASE_URL+'/api/posts?page=' + currentPage)
            .then(response => {
                // Imposta i dati ricevuti dal server
                setPosts(response.data.data);
                setCurrentPage(response.data.current_page);
                setLastPage(response.data.last_page);
            })
            .catch(error => {
                console.log(error);
            });
    }, [currentPage]);

    // Gestisci la paginazione
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const deleteButton = async (postId) => {
        try {
            await fetch(process.env.REACT_APP_API_BASE_URL + `/api/posts/${postId}`, {
                method: 'DELETE'
            });
            setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));


        } catch (error) {
            console.log("c'è tipo un problema: " + error);
        }
    };

    // Restituisci i dati paginati
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <div key={post.id} className="item">
                        <div className="row">
                            <div className="col">
                                <p>id={post.id}</p>
                            </div>
                            <div className="col-5">
                                <p>{post.content}</p>
                            </div>
                            <div className="col">
                                <button className="btn" onClick={() => deleteButton(post.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>

            <nav>
                <ul className="pagination">
                    {/* Visualizza i numeri delle pagine */}
                    {[...Array(lastPage).keys()].map(pageNumber => (
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Post;
