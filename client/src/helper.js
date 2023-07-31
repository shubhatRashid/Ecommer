export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.username,
            jwt: data.jwt
        })
    )
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""'
    console.log(JSON.parse(stringifiedUser || {}))
    return JSON.parse(stringifiedUser || {})
}