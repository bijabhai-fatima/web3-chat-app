import "../styles/globals.css"
import { ChatAppProvider } from "../cotext/ChatAppContext"
import { NavBar } from "../components/index"
import "bootstrap/dist/css/bootstrap.css"
import { useContext } from "react"

function MyApp({ Component, pageProps }) {
    return (
        <div class="container p-2">
            <ChatAppProvider>
                <NavBar />
                <Component {...pageProps} />
            </ChatAppProvider>
        </div>
    )
}

export default MyApp
