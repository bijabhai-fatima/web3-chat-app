import React from "react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import {
    checkIfWalletConnected,
    connectWallet,
    connectingWithContract,
    convertTime,
} from "../Utils/apiFeature"

export const ChatAppContact = React.createContext()

export const ChatAppProvider = ({ children }) => {
    const title = "Welcome to chatapp"

    //usestate
    const [account, setAccount] = useState("")
    const [userName, setUserName] = useState("")
    const [friendLists, setFriendLists] = useState([])
    const [friendMsg, setFriendMsg] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLists, setUserLists] = useState([])
    const [error, setError] = useState("")

    //chat (current) user data
    const [currentUserName, setCurrentUserName] = useState("")
    const [currentUserAddress, setCurrentUserAddress] = useState("")

    //need to redirect for chating
    const router = useRouter()

    //FETCH DATA
    const fetchData = async () => {
        try {
            //get contract
            const contract = await connectingWithContract()
            //get account
            const connectAccount = await connectWallet()
            setAccount(connectAccount)
            //get username
            try {
                const userName = await contract.getUsername(connectAccount)
                setUserName(userName)
            } catch (error) {
                setError("no username")
            }
            //get frient list
            const friendLists = await contract.getMyFriendList()
            setFriendLists(friendLists)
            //get all app users
            const userList = await contract.getAllAppUser()
            setUserLists(userList)
        } catch (error) {
            setError(error)
        }
    }

    //wheneever the page is loaded fetchData will execute
    useEffect(() => {
        fetchData()
    }, [])

    //read message
    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract()
            const read = await contract.readMessage(friendAddress)
            setFriendMsg(read)
            console.log(friendMsg)
        } catch (error) {
            setError("Currently you have no Message")
        }
    }

    //create account
    const createAccount = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress)
            //     return setError("name and accountaddress, cannot be empty")
            console.log("create account ..")
            const contract = await connectingWithContract()
            const getCreatedUser = await contract.createAccount(name)
            setLoading(true)
            await getCreatedUser.wait()
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            setError("Error while creating account")
        }
    }

    //add friends
    const addFriends = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress)
            //     return setError("name and accountaddress, cannot be empty")

            const contract = await connectingWithContract()
            const addMyFriend = await contract.addFriend(accountAddress, name)
            setLoading(true)
            await addMyFriend.wait()
            setLoading(false)
            router.push("/")
            window.location.reload()
        } catch (error) {
            console.log(error)
            setError("Something went wrong while adding friend")
        }
    }

    //send message to friend
    const sendMessage = async ({ friendAddress, Msg }) => {
        try {
            // if (friendAddress || Msg) setError("Plese enter your message")

            const contract = await connectingWithContract()
            const sendMyMessage = await contract.sendMessage(friendAddress, Msg)
            setLoading(true)
            await sendMyMessage.wait()
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            setError("Something went wrong while sending the message")
        }
    }

    //read info
    const readUser = async (userAddress) => {
        try {
            const contract = await connectingWithContract()
            const userName = await contract.getUsername(userAddress)
            setCurrentUserName(userName)
            setCurrentUserAddress(userAddress)
        } catch (error) {
            setError("Someting wend wrong while fetching your info")
        }
    }
    return (
        <ChatAppContact.Provider
            value={{
                title,
                readMessage,
                createAccount,
                addFriends,
                sendMessage,
                connectWallet,
                checkIfWalletConnected,
                currentUserName,
                currentUserAddress,
                account,
                userName,
                friendLists,
                friendMsg,
                loading,
                userLists,
                error,
                readUser,
            }}
        >
            {children}
        </ChatAppContact.Provider>
    )
}
