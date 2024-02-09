export const authentication = async (data) => {
    console.log(data)
    const requete = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(requete.ok) {
        const response = await requete.json();
        console.log(response);
        return response;
    } else {
        console.error('Oops une erreur est survenue')
    }
}