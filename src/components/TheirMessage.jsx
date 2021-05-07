
// Craete message component
const TheirMessage = ( { lastMessage, message }) => {

    // Check for first message by user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}} />
            )}
            {   // check for message being an image or other attachment
            message?.attachments?.length > 0
                ? (
                    <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ marginLeft: isFirstMessageByUser ? "4px": "48px"}}
                    />
                ) : (
                    <div className="message" style={{float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px": "48px"}}>
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default TheirMessage;