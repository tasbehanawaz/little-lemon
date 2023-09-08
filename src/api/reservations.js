export function fetchData(date) {
    console.log("fetch data for date: ", date);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
            ]);
        }, 1000);
    });
}

export async function submitAPI() {
    console.log("submit api")
    return true
}