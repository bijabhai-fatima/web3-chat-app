import React, { useContext, useState } from "react"
import { ChatAppContact } from "../../cotext/ChatAppContext"
import Model from "../index"

const Filter = () => {
    const { account, addFriends } = useContext(ChatAppContact)
    const [addFriend, setAddFriend] = useState(false)
    return (
        <div>
            <div>
                <div>
                    <input type="text" placeholder="search here..." />
                </div>
                <div>
                    <button>CLEAR CHAT</button>
                    <button onClick={() => setAddFriend(true)}>
                        ADD FRIEND
                    </button>
                </div>
            </div>

            {/* MODEL */}
            <div>
                {addFriend && (
                    <div>
                        <Model
                            openModel={setAddFriend}
                            title="WELCOME TO"
                            head="CHAT APP"
                            smallInfo="Select you friend's name and address.."
                            address=""
                            functionName={addFriends}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filter
