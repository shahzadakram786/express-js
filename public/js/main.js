
const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn')


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


button.addEventListener('click', showPosts)

