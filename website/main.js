async function getResponse(){
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6f72337f34eb4782a35f2e9c8d451abc')
    let content = await response.text()
    console.log(response)
}   

getResponse()