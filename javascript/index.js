const agreeButton = document.getElementById('agree-button');
const button = document.getElementById('submit');
document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    if(agreeButton.checked = true){
        button.disabled = false;
    }

    if (!name) {
        document.getElementById('empty-name').textContent = 'Please enter your name';
        return;
    }
    window.location.href = '../html/page1.html';
    localStorage.setItem('name',name);
});

