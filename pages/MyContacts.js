import React, { useContext } from "react"
import Card from "../components/Friend/Card/Card"
import { ChatAppContact } from "../cotext/ChatAppContext"

const MyContacts = () => {
    const { friendLists } = useContext(ChatAppContact)
    return (
        <div class="container bg-light p-3">
            <div class="text-md-center mt-2 text-danger font-weight-bold">
                Your Friends..
            </div>
            <div class="card-columns">
                {friendLists.map((item, index) => (
                    <div class="card m-2">
                        <div class="card-body">
                            <div class="card-text">
                                <b>{item.name}</b>
                            </div>
                            <small class="card-subtitle">{item.pubkey}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyContacts
