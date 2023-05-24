/* ***** */
/* variables */
/* ***** */
const yearE1 = document.getElementById('year');
const projectsE1 = document.getElementById('projects');
//const filtersE1 = document.getElementById('filters');
//const filtersE1 = document.querySelectorAll('filters li');


const filtersE1s = document.querySelectorAll("#filters li");
//querySelector is a css selector which targets the li present under the ul
console.log(filtersE1s);
// filtersE1s[0].addEventListener('click', function() {
//     console.log('clicked')
// })
// filtersE1s[1].addEventListener('click', function() {
//     console.log('clicked')
// })
// filtersE1s[2].addEventListener('click', function() {
//     console.log('clicked')
// })
// filtersE1s[3].addEventListener('click', function() {
//     console.log('clicked')
// })

//now comes the for loop part as it is an array
for (let i = 0; i < filtersE1s.length; i++) {
    filtersE1s[i].addEventListener('click', function(e) {
        document.querySelector("#filters li.active").classList.remove('active');
        filtersE1s[i].classList.add('active');
        let tag = e.target.id
        renderProjects(tag);
    })
    

}


yearE1.innerHTML = new Date().getFullYear();


/* ***** */
/* Projects */
/* ***** */
 
const projects = [
    {
        name: 'food webpage',
        img: 'Foodweb.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/RwBXOgw',
        tags: ['HTML' , 'CSS']

    },
    {
        name: 'Stunning Page',
        img: 'stunning page.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/RwBXOgw',
        tags: ['HTML' , 'CSS']


    },
    {
        name: 'Edyoda stories',
        img: 'Edyoda Stories.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/wvxmWMJ',
        tags: ['HTML' , 'CSS']

    },
    {
        name: 'Nukk page',
        img: 'NUKk.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['HTML' , 'CSS']

    },
    {
        name: 'Clothes Page',
        img: 'Clothes.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['CSS' , 'JS']

    },
    {
        name: 'Nukk page',
        img: 'NUKk.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['HTML' , 'CSS' ]

    },
    {
        name: 'Nukk page',
        img: 'NUKk.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['HTML' , 'JS']

    },
    {
        name: 'Nukk page',
        img: 'NUKk.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['HTML' , 'JS']

    },
    {
        name: 'Nukk page',
        img: 'NUKk.png',
        codeUrl: 'https://github.com/Muzaffar-eth/Assignment-1-Stunning-Landing-Page.git',
        liveUrl: 'https://codepen.io/muzaffar-eth/pen/JjBzVjY',
        tags: ['HTML' , 'JS']

    },
]

{/*
<div class="project">
                  <img src="Foodweb.png" alt="Food Website" style="width:100%">
                    <div class="content flex">
                        <p>Fav Food Website</p>
                        <p>
                            <a href="#"><i class="fa fa-github"></i></a>
                            <a href="#"><i class="fa fa-link"></i></a>
                        </p>
                    </div>
</div>
*/}



function renderProjects(tag){
    let output = "";


    for(let i = 0; i < projects.length; i++) {
      if(tag == 'all' || projects[i].tags.includes(tag)){
          output += `<div class="project">
          <img src="${projects[i].img}" alt="Food Website" style="width:100%">
          <div class="content flex">
            <p>${projects[i].name}</p>
            <p>
                <a href="${projects[i].codeUrl}"target="_blank" ><i class="fa fa-github"></i></a>
                <a href="${projects[i].liveUrl}"target="_blank"><i class="fa fa-link"></i></a>
            </p>
          </div>
        </div>`

}
}
    


projectsE1.innerHTML = output;
}

renderProjects('all');






/* example 
var names = ['junaid' ,'shah' , 'omer' ];
var marks = [90, 85 , 77];

console.log(names[0])

var student = 
    {
        name : 'junaid' ,
        marks:90
    }


console.log(student.name)*/











