import React, { useContext } from "react"
import Card from "./Card/Card"
import Chat from "./Chat/Chat"
import { ChatAppContact } from "../../cotext/ChatAppContext"

const Friend = () => {
    const {
        account,
        userName,
        sendMessage,
        readMessage,
        readUser,
        friendLists,
        friendMsg,
        loading,
        currentUserName,
        currentUserAddress,
    } = useContext(ChatAppContact)

    console.log("friedsList", friendLists)

    return (
        <div class="container bg-light p-3">
            <div class="text-md-center mt-2 text-danger font-weight-bold">
                <p>Your Friends..</p>
            </div>

            <div class="d-flex vh-50">
                <div
                    style={{ height: "560px", overflow: "auto" }}
                    class="p-2 flex-fill rounded-1 border m-2"
                >
                    {friendLists.map((item, index) => (
                        <div class="card-columns m-1">
                            <Card
                                item={item}
                                readMessage={readMessage}
                                readUser={readUser}
                            />
                        </div>
                    ))}
                </div>

                {currentUserName && currentUserAddress ? (
                    <div
                        class="p-2 rounded-1 border m-2"
                        style={{ width: "850px" }}
                    >
                        <Chat
                            functionName={sendMessage}
                            readMesssage={readMessage}
                            friendMsg={friendMsg}
                            account={account}
                            userName={userName}
                            loading={loading}
                            currentUserName={currentUserName}
                            currentUserAddress={currentUserAddress}
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default Friend
