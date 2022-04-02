let titl = document.getElementById('titl')
let pric = document.getElementById('pric')
let texs = document.getElementById('texs')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let totl = document.getElementById('totl')
let count = document.getElementById('count')
let catgr = document.getElementById('catgr')
let submit = document.getElementById('submit')
let mod = 'create'
let temp;

function gettotl() {
    if (pric.value != '') {
        let reslt = (+pric.value + +texs.value + +ads.value) - +discount.value
        totl.innerHTML = reslt
        totl.style.background = "#040"

    }
    else {
        totl.innerHTML = ''
        totl.style.background = " rgba(187, 53, 53, 0.87)"

    }
}
let datapro;
if (localStorage.prodect != null) {
    datapro = JSON.parse(localStorage.prodect)
} else {
    datapro = []
}

submit.onclick = function () {
    let newbro = {
        title: titl.value.toLowerCase(),
        pric: pric.value,
        texs: texs.value,
        ads: ads.value,
        discount: discount.value,
        totl: totl.innerHTML,
        count: count.value,
        catgr: catgr.value.toLowerCase(),
    }
    if (titl.value != '' && pric.value != '' && catgr.value != '' && newbro.count < 120) {
        if (mod === 'create') {
            if (newbro.count > 1) {
                for (let i = 0; i < newbro.count; i++) {
                    datapro.push(newbro)
                }

            } else {
                datapro.push(newbro)
            }
        }
        else {
            datapro[temp] = newbro;
            mod = 'create'
            submit.innerHTML = 'create'
            count.style.display = 'block'
        }
        cleardata()
    }


    localStorage.setItem('prodect', JSON.stringify(datapro))
    console.log(datapro)

    showdata()
}
function cleardata() {
    titl.value = ''
    pric.value = ''
    texs.value = ''
    ads.value = ''
    discount.value = ''
    totl.innerHTML = ''
    catgr.value = ''
    count.value = ''


}
function showdata() {
    let tebl = ''
    for (let i = 0; i < datapro.length; i++) {

        tebl += `<tr>
        <td> ${i + 1}</td >
    <td>${datapro[i].title}</td>
   <td>${datapro[i].pric}</td>
    <td>${datapro[i].texs}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
  
    <td>${datapro[i].totl}</td>
    <td>${datapro[i].catgr}</td>
    <td><button onclick="updatdata(${i})" id="update">update</button></td>
    <td><button onclick="deletdata(${i})" id="delete">delete</button></td>

</tr > `
    }
    document.getElementById('tdoby').innerHTML = tebl
    let btndlet = document.getElementById('dletall')
    if (datapro.length > 0) {
        btndlet.innerHTML = `<button onclick = "delataal()" >delete All (${datapro.length})</button>`
    }
    else {
        btndlet.innerHTML = ''
    }
    gettotl()
}
showdata()

function deletdata(i) {
    datapro.splice(i, 1)
    localStorage.prodect = JSON.stringify(datapro)
    showdata()
}
function delataal() {
    localStorage.clear()
    datapro.splice(0)
    showdata()
}

function updatdata(i) {
    titl.value = datapro[i].title
    pric.value = datapro[i].pric
    texs.value = datapro[i].texs
    ads.value = datapro[i].ads
    discount.value = datapro[i].discount
    gettotl()
    count.style.display = 'none'

    catgr.value = datapro[i].catgr
    submit.innerHTML = 'update'
    mod = 'update'
    temp = i;
    scroll({
        top: 0, behavior: 'smooth'
    })
}

let searchmod = 'title';
function getsearcchmod (id)
{


    let search = document.getElementById('serch')
    if (id == 'searchtitl') {
        searchmod = 'title';
        search.placeholder = 'search By Title'
    }
    else {
        searchmod = 'category';
        search.placeholder = 'search By category'
    }

    search.focus()
    search.value = '';
    showdata()


}
function searchdata (value)
{
 
    let tebl = ''
    if (searchmod == 'title') {
        for (let i = 0; i > datapro.length; i++)
        {
            // 
            if (datapro[i].title.includes(value.toLowerCase())) {


                tebl += `<tr>
                    <td> ${i}</td >
                <td>${datapro[i].title}</td>
               <td>${datapro[i].pric}</td>
                <td>${datapro[i].texs}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>

                <td>${datapro[i].totl}</td>
                <td>${datapro[i].catgr}</td>
                <td><button onclick="updatdata(${i})" id="update">update</button></td>
                <td><button onclick="deletdata(${i})" id="delete">delete</button></td>

            </tr > `

            }
        }




    }

    else {
        for (let i = 0; i > datapro.length; i++) {
            if (datapro[i].catgr.includes(value.toLowerCase())) {
                tebl += `<tr>
                    <td> ${i}</td >
                <td>${datapro[i].title}</td>
               <td>${datapro[i].pric}</td>
                <td>${datapro[i].texs}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>

                <td>${datapro[i].totl}</td>
                <td>${datapro[i].catgr}</td>
                <td><button onclick="updatdata(${i})" id="update">update</button></td>
                <td><button onclick="deletdata(${i})" id="delete">delete</button></td>

            </tr > `

            }
        }

    }
    document.getElementById('tdoby').innerHTML = tebl
}

































