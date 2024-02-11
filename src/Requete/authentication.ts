import {DataType} from "../Interface/DataType.ts";

export const authentication = async (data: DataType) => {
    const requete: Response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(requete.ok) {
        const response = await requete.json();
        return response;
    } else {
        console.error('Oops une erreur est survenue')
    }
}