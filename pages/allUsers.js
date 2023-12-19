import React, { useContext } from "react"
import { UserCard } from "../components/index"
import { ChatAppContact } from "../cotext/ChatAppContext"

import "bootstrap/dist/css/bootstrap.css"

const allUsers = () => {
    const { userLists, addFriends } = useContext(ChatAppContact)
    return (
        <div class="container bg-light p-3">
            <div class="text-md-center mt-2 text-danger font-weight-bold">
                <p>Find your Friends</p>
            </div>
            <div class="mb-5">
                {userLists.map((item, index) => (
                    <div class="card-columns m-3">
                        <UserCard
                            key={index + 1}
                            item={item}
                            addFriends={addFriends}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default allUsers
