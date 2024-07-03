let form = document.getElementById('information-form');
let users=[];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userBook={
        nameBook:e.target.book.value,
        theWriter:e.target.writer.value,
        genre:e.target.genre.value,
        Price:e.target.Price.value,

    };
    
    users.push(userBook);
    console.log(users);
})
