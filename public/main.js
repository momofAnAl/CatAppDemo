const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/cat')
    .then(res => alert(res.data))
    .catch(err => console.log(err));
}
console.log("Something is working!");
btn.addEventListener('click', clickHandler)