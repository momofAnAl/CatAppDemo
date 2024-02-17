const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('http://localhost:4000/api/cat')
    .then(res => alert(res.data))
    .catch(err => console.log(err));
}
btn.addEventListener('click', clickHandler)