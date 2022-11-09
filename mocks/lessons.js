import { users } from "./users";

export const lessons = [
    {
        id: 0, subject: "język polski", location: "Wiejska 45a", place: ['student'], radius: 5, days: ['poniedzialek, sroda'], time: ['12-15'],
        teacher: users[0], student: null, price: 50
    },
    {
        id: 1, subject: "matematyka", location: "Pawła Sapiechy 28, Białystok", place: ['teacher'], radius: 5, days: ['wtorek'], time: ['15-18'],
        teacher: users[1], student: null, price: 100
    },
    {
        id: 2, subject: "chemia", location: "Szkolna 17, Białystok", place: ['student'], radius: 5, days: ['piątek'], time: ['6-9'],
        teacher: null , student: users[2], price: 30
    },
]