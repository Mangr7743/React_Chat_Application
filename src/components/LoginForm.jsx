// Import dependencies
import { useState } from "react";
import axios from "axios";

// Create login form component
const LoginForm = () => {
    // call our use states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // handleSubmit function
    const handleSubmit = async (event) => {
        // avoid browser resets on submit
        event.preventDefault();

        // Authentication with chatengine.io
        const authObject = { "Project-ID": process.env.REACT_APP_PROJECT_ID, "User-Name": username, "User-Secret": password };

        // try and catch block 
        try {
            // make request to chatengine api
            await axios.get("https://api.chatengine.io/chats", { headers: authObject});

            // Create small session
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            // reload page
            window.location.reload();

        } catch {
            setError("Oops, incorrect credentials.");
        }

    };

    return (
        <div className="wrapper" >
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;