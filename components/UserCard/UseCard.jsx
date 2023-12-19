import React, { useContext, useState, useEffect } from "react"
import { ChatAppContact } from "../../cotext/ChatAppContext"

const UseCard = ({ key, item, addFriends }) => {
    const { account, friendLists } = useContext(ChatAppContact)
    const [friedsAccounts, setFriendsAccount] = useState([""])

    useEffect(() => {
        const pubkeys = friendLists.map((friend) => friend.pubkey)
        setFriendsAccount(pubkeys)
    }, [friendLists])

    return (
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{item.name}</h3>
                <p class="card-text">{item.accountAddress}</p>

                {item.accountAddress == account ||
                friedsAccounts.includes(item.accountAddress) ? (
                    <button class="btn btn-primary" disabled>
                        {item.accountAddress == account
                            ? "It Is You"
                            : "Already your Friend"}
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            addFriends({
                                name: item.name,
                                accountAddress: item.accountAddress,
                            })
                        }
                        class="btn btn-primary"
                    >
                        Add Friend
                    </button>
                )}
            </div>
        </div>
    )
}

export default UseCard
