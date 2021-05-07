// Import main chatengine dependency
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

// Import css styling
import "./App.css";

// App will be a functional component
const App = () => {

    // Render chat engine only if logged in
    if (!localStorage.getItem("username")) return <LoginForm />

    return (
        // Pass props for the chat component
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

// Export app
export default App;