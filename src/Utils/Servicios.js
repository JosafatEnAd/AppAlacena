function endpoints() {
    const requestOptionsA={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        //este metodo transforma el objeto de JavaScript a el formato de datos JSON
        body: JSON.stringify(camposA),
    };
    const requestOptionsQ={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposQ),
    };
    const requestOptionsE={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposE),
    };
    return [requestOptionsE, requestOptionsA, requestOptionsQ]
}
export default endpoints();