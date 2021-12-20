const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = event.target.children[1].value;
        console.log(input);

        fetch('http://localhost:3000/movies')
        .this(response => response.json())
        .this(data => {
            console.log(data);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);