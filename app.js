const descriptions = document.querySelectorAll(".description")
const servicesContainer = document.querySelector(".services-items")

const paragraphs = document.querySelectorAll(".service-item p")
console.log(paragraphs)

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
                <button  type="button" class="more">more
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
            moreBtn.style.border = "none"
            moreBtn.style.color = "var(--skin-color)";
            moreBtn.style.cursor = "pointer";
            // moreBtn.style.font-size = "1rem";
            moreBtn.style.background = "none"
        } else {
            moreBtn.textContent = "Less";
        }
    })
})

// .more {
//     border: none;
//     color: var(--skin-color);
//     cursor: pointer;
//     font-size: 1rem;
//     background: none;
// } 