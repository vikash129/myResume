const projects = document.getElementById('projects')

async function fetchapi() {


    try{
    const response = await fetch('https://vikash129.github.io/myResume/projects.json')

    const data = await response.json()
    return data
    }
    catch(e){
        console.log(e)
    }
}

function createHtml(language) {

    const ol = document.createElement('ol')
    ol.setAttribute('type' , 'i')
    const li = document.createElement('li')



    const span = document.createElement('span')
    span.className = 'language'
    span.innerHTML = `<i class = '${language[0].icon}' > </i>  <h4> ${language[0].name} </h4> `
    ol.appendChild(span)


    li.className = 'box head'
    li.innerHTML = "<h2>Project Name </h2> <h2>Source Code</h2> <h2>Preview</h2>"
    ol.appendChild(li)

    language.slice(1).map(data => {

        const li = document.createElement('li')
        li.className = 'box'

        const span = document.createElement('span')
        span.className = 'website'

        a1 = document.createElement('a')
        a2 = document.createElement('a')

        span.innerText = data.project

        a1.setAttribute('href', data.sourceCode  ?  data.sourceCode :  'Not Available')
        a1.style.color = 'green'
        a1.innerText = data.sourceCode ?  data.sourceCode.replace('https://github.com/' ,'') : 'Not Available'

        a2.innerText = data.preview ? data.preview.replace('https://','') : 'Not Available'
        a2.style.color = 'yellow'
        a2.setAttribute('href', data.preview ? data.preview : '#')


        li.appendChild(span)
        li.appendChild(a1)
        li.appendChild(a2)


        ol.appendChild(li)
    })

    projects.appendChild(ol)
}





fetchapi().then((data) => {

    createHtml(data.projects.django)
    createHtml(data.projects.react)


})






