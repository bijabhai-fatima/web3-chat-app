import React, { useContext, useState } from "react"

import { ChatAppContact } from "../../cotext/ChatAppContext"
const Model = ({
    openModel,
    title,
    head,
    smallInfo,
    address,
    functionName,
}) => {
    const [name, setName] = useState("")

    const accountAddress = address

    return (
        <div class="container bg-light p-3 border border-info">
            <div>
                <p class="font-weight-bolder">{smallInfo}</p>
                <div class="input-group">
                    <input
                        type="text"
                        placeholder="your name"
                        onChange={(e) => setName(e.target.value)}
                        class="form-control"
                    />
                    <input
                        type="text"
                        placeholder={address}
                        class="form-control"
                    />
                </div>
                <div class="container p-2">
                    <button
                        onClick={() => functionName({ name, accountAddress })}
                        class="btn btn-primary mr-3"
                    >
                        Submit
                    </button>
                    <button
                        onClick={() => openModel(false)}
                        class="btn btn-danger m-3"
                    >
                        Cancle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Model
