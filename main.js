let input = document.querySelector('input')
let button = document.querySelector('button')
let wrapper = document.querySelector('.wrapper')


button.addEventListener('click', () => {
    
    async function fetchData(i) {
        try {
            const response = await fetch(i);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            ReadFunction(data)
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
    
    fetchData('https://jsonplaceholder.typicode.com/posts')
    fetch(`https://api.nationalize.io/?name=${input.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            ReadFunction(data)
        })
})

let ReadFunction = (baza) => {
    wrapper.innerHTML = '';
    baza.map(() => {
        let div = document.createElement('div')
        div.innerHTML = `
        <div>
            <p>${baza.country[0].probability}</p>
            <p>${baza.country[0].country_ID}</p>
        </div>
        <div>
            <p>${baza.country[1].probability}</p>
            <p>${baza.country[1].country_ID}</p>
        </div>
        <div>
            <p>${baza.country[2].probability}</p>
            <p>${baza.country[2].country_ID}</p>
        </div>
        <div>
            <p>${baza.country[3].probability}</p>
            <p>${baza.country[3].country_ID}</p>
        </div>
        <div>
            <p>${baza.country[4].probability}</p>
            <p>${baza.country[4].country_ID}</p>
        </div>
        `
        wrapper.appendChild(div)
    })
}