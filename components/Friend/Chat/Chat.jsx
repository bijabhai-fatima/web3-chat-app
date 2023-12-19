import React, { useEffect, useState } from "react"
import { convertTime } from "../../../Utils/apiFeature"

const Chat = ({
    functionName,
    readMessage,
    friendMsg,
    account,
    userName,
    loading,
    currentUserName,
    currentUserAddress,
}) => {
    const [message, setMessage] = useState("")
    return (
        <div>
            <div class="m-2">
                <div>
                    <h4 class="text-primary">{currentUserName}</h4>
                    <p class="text-primary">{currentUserAddress}</p>
                </div>
            </div>

            <div style={{ height: "390px", overflow: "auto" }}>
                <div class="p-2 flex-fill rounded-1">
                    {friendMsg.map((item, index) => (
                        <div>
                            <p
                                class={
                                    item.sender === account
                                        ? "bg-secondary text-light rounded-1 p-1"
                                        : "bg-warning rounded-1 p-1 font-weight-bold"
                                }
                            >
                                <p class="text-break">{item.msg}</p>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEND MESSAGE */}
            <div className="m-2">
                <div class="input-group">
                    <input
                        type="text"
                        placeholder="type message here"
                        onChange={(m) => setMessage(m.target.value)}
                        class="form-control"
                    />
                    {loading == true ? (
                        <div />
                    ) : (
                        <div class="input-group-append">
                            <button
                                type="button"
                                onClick={() =>
                                    functionName({
                                        friendAddress: currentUserAddress,
                                        Msg: message,
                                    })
                                }
                                class="btn btn-danger"
                            >
                                Send
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chat
