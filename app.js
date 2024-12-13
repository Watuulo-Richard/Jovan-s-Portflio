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
    const typingDelay = 100
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
