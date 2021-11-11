import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
