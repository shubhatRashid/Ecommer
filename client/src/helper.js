export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.user.username,
            email:data.user.email,
            jwt: data.jwt
        })
    )
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""'
    return JSON.parse(stringifiedUser || {})
}