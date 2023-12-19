import React from "react"

const Card = ({ item, readMessage, readUser }) => {
    return (
        <div class="card">
            <div
                onClick={() => (
                    readMessage(item.pubkey), readUser(item.pubkey)
                )}
                class="card-body"
            >
                <div class="card-text">
                    <b>{item.name}</b>
                </div>
                <small class="card-subtitle">{item.pubkey}</small>
            </div>
        </div>
    )
}

export default Card
