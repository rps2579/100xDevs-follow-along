function createTerminalClock() {
    // should print DD/MMM/YYYY HH:MM:SS AM/PM every second and timezone
    setInterval(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const timezone = date.toString().match(/\((.*)\)/)[1];
        console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm} ${timezone} - ${date}`);
    }, 1000);
}

createTerminalClock();