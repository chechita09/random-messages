const messages = [
    "Oscar",
    "Diego",
    "Nicola",
    "Alberto",
    "Daniel",
    "Juan",
    "Ramón",
    "José",
    "Andrea",
    "Paulina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }