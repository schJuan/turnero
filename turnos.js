const key_turnos = "key_turnos"

function TdeTurnos() {
    
    let turnos = [
        {
            "id": 1,
            "nombre": "turno 8 Hs",
            "usuarios": []
        },
        {
            "id": 2,
            "nombre": "turno 9 Hs" ,
            "usuarios":[]
        },
        {
            "id": 3,
            "nombre": "turno 10 Hs",
            "usuarios": []
        },
        {
            "id": 4,
            "nombre": "turno 11 Hs",
            "usuarios": []
        },
        {
            "id": 5,
            "nombre": "turno 12 Hs",
            "usuarios": []
        },
        {
            "id": 6,
            "nombre": "turno 13 Hs",
            "usuarios": []
        },
        {
            "id": 7,
            "nombre": "turno 14 Hs",
            "usuarios": []
        },
        {
            "id": 8,
            "nombre": "turno 15 Hs",
            "usuarios": []
        },
        {
            "id": 9,
            "nombre": "turno 16 Hs",
            "usuarios": []
        },
        {
            "id": 10,
            "nombre": "turno 17 Hs",
            "usuarios": []
        },
        {
            "id": 11,
            "nombre": "turno 18 Hs",
            "usuarios": []
        },
        {
            "id":12 ,
            "nombre": "turno 19 Hs",
            "usuarios": []
        },
        {
            "id": 13,
            "nombre": "turno 20 Hs",
            "usuarios": []
        },
        {
            "id": 14,
            "nombre": "turno 21 Hs",
            "usuarios": []
        }
    ]
    localStorage.setItem(key_turnos,JSON.stringify(turnos))
}

let turnos = JSON.parse(localStorage.getItem(key_turnos)) || TdeTurnos()