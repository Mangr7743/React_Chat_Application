
// Craete message component
const MyMessage = ({ message }) => {

    // check for message being an image or other attachment
    if (message?.attachments?.length > 0) {
        return (
            <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{float: "right"}}
            />
        )
    }

    // return text message
    return (
        <div className="message" style={{float: "right", marginRight: "18px", color: "white", backgroundColor: "#3B2A50"}}>
            {message.text}
        </div>
    )
}

export default MyMessage;