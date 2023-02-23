import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

export const login = (username: string = "spectrvll", password: string = "6616454") => {
    cy.request({
        method: "POST",
        url: "http://localhost:8000/login",
        body: {
            username,
            password,
        },
    }).then(({body}) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    })
}