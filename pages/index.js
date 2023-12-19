import React, { useState, useContext, useEffect } from "react"
import { ChatAppContact } from "../cotext/ChatAppContext"
import { Friend, Filter } from "../components/index"

export default function Home() {
    const { title } = useContext(ChatAppContact)
    const { account, userLists, createAccount } = useContext(ChatAppContact)
    return <div></div>
}
