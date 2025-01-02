
const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn')
const form = document.querySelector('#add-post-form')



// Get and Show post data

async function showPosts() {


    try {

        const res = await fetch('http://localhost:8000/api/post');

        if(!res.ok){
            throw new Error('Failed to fetch data')
    
        }
        
        const data = await res.json()
        output.innerHTML = '';
    
    
        data.forEach(data => {
            const dataEl = document.createElement('div');
            dataEl.textContent = data.name;
            output.appendChild(dataEl)
        });
    }
    catch(error){

        console.log('Error fetching data:' , error)
    }

   
}

// submit new posts 

async function addData(e) {
    e.preventDefault();

    const formData = new FormData(this)
    const title = formData.get('title');

    try{
        const res = await fetch('http://localhost/api/post' , {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
                body:JSON.stringify({title})
        })

        if(!res.ok){
            throw new Error("Failed to add Post")

        }
        
        const newData = await res.json();

        const dataEle = document.createElement('div');
        dataEle.textContent = newData.title;
        output.appendChild(dataEle);

        showPosts();


    }
    catch(error){
            console.error('Error adding post')
    }
}

button.addEventListener('click', showPosts)
form.addEventListener('click', addData)


