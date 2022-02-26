const loadbuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data))
}
loadbuddies();
const displayBuddies = (data) => {
    const allBuddies = document.getElementById('buddies');
    const buddies = data.results;
    console.log(data);
    for (const buddy of buddies) {
        // console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}`;
        allBuddies.appendChild(p);

    }
}