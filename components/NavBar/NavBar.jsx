import React from "react"
import { useState, useEffect, useContext } from "react"
import { Model, Error } from "../index"
import "bootstrap/dist/css/bootstrap.css"

import { ChatAppContact } from "../../cotext/ChatAppContext"
import Link from "next/link"

const NavBar = () => {
    const menuItems = [
        {
            menu: "All users",
            link: "/allUsers",
        },
        {
            menu: "CHATS",
            link: "/MyChats",
        },
        {
            menu: "CONTACTS",
            link: "/MyContacts",
        },
    ]

    //SHOW ACTIVE ACCOUNT
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const { account, userName, connectWallet, createAccount, error } =
        useContext(ChatAppContact)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <div class="container">
            {/* NavBar */}
            <div class="navbar bg-light m-2 rounded-sm">
                <div className="navbar-brand m-3">
                    <h2>Chat DApp</h2>
                </div>
                <div class="navbar nav">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            class={
                                index === active
                                    ? "nav-item-active ml-3"
                                    : "nav-link"
                            }
                        >
                            <Link href={item.link} class="cursor-pointer">
                                <div class="text-uppercase text-xl-center ">
                                    {item.menu}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CONNECT WALLATE */}
                <div class="nav m-3">
                    {account === "" ? (
                        <button
                            onClick={() => connectWallet}
                            className="btn btn-primary"
                        >
                            Connect Wallet
                        </button>
                    ) : userName === "" ? (
                        <button
                            onClick={() => setOpenModel(true)}
                            className="btn btn-primary"
                        >
                            Create Account
                        </button>
                    ) : (
                        <button className="btn btn-primary" disabled>
                            {userName}
                        </button>
                    )}
                </div>
            </div>

            {/* MODEL CONTENT */}
            <div class="containerbg-secondary">
                {openModel && (
                    <div>
                        <Model
                            openModel={setOpenModel}
                            title={"WELCOME TO"}
                            head="CHAT APP"
                            smallInfo="Kindley select your name.."
                            address={account}
                            functionName={createAccount}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar
