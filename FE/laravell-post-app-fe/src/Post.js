import { useEffect, useState } from "react";

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(process.env.REACT_APP_API_BASE_URL + '/api/posts');
            const jsonResult = await result.json();
            setPosts(jsonResult);
        };
        fetchData().catch(error => console.log("c'è tipo un problema: " + error));
    }, []); // <= array vuoto come dipendenza

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

    return (
        <div className="posts">
            <h2>Posts:</h2>
            <div className="container px-lg-5">
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
            </div>
        </div>
    );
}

export default Post;
