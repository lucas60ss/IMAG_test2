fetch('https://api.example.com/data')
.then((response)=>{
    return response.json()
})
.then(data=>{
    return data
})

axios.get('https://api.example.com/data')
.then(response=>{
    return  response.data
})