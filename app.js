const descriptions = document.querySelectorAll(".description")
const servicesContainer = document.querySelector(".services-items")
const paragraphs = document.querySelectorAll(".service-item p")
console.log(paragraphs)
const downloadButtonElement = document.getElementById("download-resume")

const servicesArray = [
    {
        icon : '<i class="fas fa-database"></i>',
        subHeading : 'Data Collection and Analysis',
        text : 'Design, implement, and manage data collection processes, ensuring accuracy and reliability. Analyze complex datasets to extract meaningful insights.'

    },
    {
        icon : '<i class="fas fa-chart-line"></i>',
        subHeading : 'Statistical Modeling',
        text : 'Develop and apply statistical models for predictive analysis, hypothesis testing, and decision-making support'

    },
    {
        icon : '<i class="fas fa-chart-pie"></i>',
        subHeading : 'Data Visualization',
        text : 'Create clear and impactful visual representations of data through charts, graphs, and dashboards to facilitate understanding.'

    },
    {
        icon : '<i class="fas fa-poll"></i>',
        subHeading : 'Survey Design and Analysis',
        text : 'Design surveys and questionnaires, collect responses, and analyze survey data for various industries.'

    },
    {
        icon : '<i class="fas fa-file-alt"></i>',
        subHeading : 'Report Writing and Presentation',
        text : 'Compile detailed statistical reports and present findings in a clear, concise manner tailored to different audiences.'

    },
    {
        icon : '<i class="fas fa-check-circle"></i>',
        subHeading : 'Quality Control and Assurance',
        text : 'Implement statistical quality control techniques to improve processes and outcomes, especially in manufacturing and service sectors.'

    },
    {
        icon : '<i class="fas fa-flask"></i>',
        subHeading : 'Research Support',
        text : 'Provide statistical expertise for academic, governmental, and corporate research projects, including experimental design and data interpretation.'

    },
    {
        icon : '<i class="fas fa-chalkboard-teacher"></i>',
        subHeading : 'Training and Workshops',
        text : 'Conduct training sessions on statistical tools and software (e.g., SPSS, R, Python) for individuals or teams.'

    },
    {
        icon : '<i class="fas fa-chart-area"></i>',
        subHeading : 'Market Research Analysis',
        text : 'Analyze market trends, customer behavior, and competitive landscapes to support business decision-making.'

    }
]

const arrayOfCards = servicesArray.forEach((service) => {
    // servicesContainer.innerHTML = ""
    const serviceCard = `
        <div class="service-item">
            <div class="service-item-inner">
                <div class="icon">
                    ${service.icon}
                </div>
                <h4>${service.subHeading}</h4>
                <p class="line-clamp description">${service.text}</p>
                <button  type="button" class="more">More
                </button>
            </div>
        </div>
    `
   
    servicesContainer.insertAdjacentHTML("afterbegin", serviceCard)
})
const moreBtns = document.querySelectorAll(".more")
console.log(moreBtns)

moreBtns.forEach((moreBtn) => {
    moreBtn.addEventListener('click', function() {
        const description = moreBtn.previousElementSibling;
        description.classList.toggle("line-clamp"); 

        // Change button text based on the state
        if (description.classList.contains("line-clamp")) {
            moreBtn.textContent = "More";
        } else {
            moreBtn.textContent = "Less";
        }
    })
})

downloadButtonElement.addEventListener("click", function(){
    const fileUrl = './LubegaJovanResume.pdf';

    const a = document.createElement('a')
    a.href = fileUrl
    a.download = 'LubegaJovanResume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
})

function runTypingEffect() {
    const text = 'Hello There....!!! My Name is Lubega Jovan.'
    const typingElement = document.querySelector('.hello-text')
    const typingDelay = 300
    typeText(text, typingElement, typingDelay)
}
function typeText(text, typingElement, delay) {
    let totalDuration = 0; 
    console.log(totalDuration)
    for(let i = 0; i < text.length; i++){
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i)
        }, totalDuration + delay * i)
    }
    totalDuration += delay * text.length;
    
    for (let i = text.length - 1; i >= 0; i--) {
        setTimeout(() => {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
        }, totalDuration + delay * (text.length - 1 - i));
       
    }
    totalDuration += delay * text.length;

    for(let i = 0; i < text.length; i++){
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i)
        }, totalDuration + delay * i)
    }

}

document.addEventListener('DOMContentLoaded', runTypingEffect)


// const mainNavContainer = document.querySelector('.nav-main')
// const minNavContainer = document.querySelector('.nav-ico')
// console.log(minNavContainer)
// const cutOffButtonElement = document.getElementById('cutOffButton')
// const mainContainer = document.querySelector('.main-content')
// cutOffButtonElement.addEventListener('click', function(){
//     const myToggle = minNavContainer.classList.toggle('showMainNav')
//     console.log(myToggle, 'its working')

//     const removeToggle = mainNavContainer.classList.toggle('showMinNav')
//     console.log(removeToggle)
//     const dynamicMargin = mainContainer.classList.toggle('dynamicMargin')
//     console.log(dynamicMargin)

//     const dynamicWidth = mainNavContainer.classList.toggle('dynamicWidth')
//     console.log(dynamicWidth)
    
// })

// const greaterThanButtonElement = document.querySelector('.greater-than-button')

// greaterThanButtonElement.addEventListener('click', ()=>{
//     const removeAddToggle = mainNavContainer.classList.toggle('showMinNav')
//     console.log(removeAddToggle)
//     const addToggle = minNavContainer.classList.toggle('showMainNav')
//     console.log(addToggle)
//     const dynamicMarginRestore = mainContainer.classList.toggle('dynamicMarginRestore')
//     console.log(dynamicMarginRestore)
//     const dynamicWidthRestore = minNavContainer.classList.toggle('dynamicWidthRestore')
//     console.log(dynamicWidthRestore)
// })
// const mainContainer = document.querySelector('.main-content')
// const mainNavigationBar = document.querySelector('.main-nav')
// const sideButtonElement = document.getElementById('sideButton')
// const hideMeClass = document.querySelector('.hideMe')
// const LogoElement = document.querySelector('.logo')
// const imageProfile = document.querySelector('.nav-profile-image-container')
// sideButtonElement.addEventListener('click', function(){
//     mainNavigationBar.classList.toggle('max-width')
//     mainContainer.classList.toggle('max-padding')
//     hideMeClass.classList.toggle('hide-text')
//     LogoElement.classList.toggle('mylogo')
//     imageProfile.classList.toggle('image-toggle')
    
// })
const navigationBar = document.querySelector('.navigation-section')
const sideBarTogglerButtonElement = document.querySelector('.sidebar-toggler')

const mainContainer = document.querySelector('.main-content')
sideBarTogglerButtonElement.addEventListener('click', ()=>{
    navigationBar.classList.toggle('collapsed')
    mainContainer.classList.toggle('max-padding-width')
})

function userScroll(){
    const minNavContainer = document.querySelector('.mini-nav')
    console.log(minNavContainer)
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 50) {
            minNavContainer.classList.add('$main-color')
            minNavContainer.classList.add('navbar-sticky')
        }
        else {
            minNavContainer.classList.remove('$main-color')
            minNavContainer.classList.remove('navbar-sticky')
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll)



