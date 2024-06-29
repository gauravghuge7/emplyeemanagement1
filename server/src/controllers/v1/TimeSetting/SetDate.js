function convertToSimpleDate(isoDateString) {
    const date = new Date(isoDateString);

    const time = date.toLocaleTimeString();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}  Time :  ${time}`;
}


function convertToOnlyDate(isoDateString) {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export {
    convertToSimpleDate,
    convertToOnlyDate
}