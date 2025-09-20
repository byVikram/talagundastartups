// faq.js

// faq.js

// Function to initialize the FAQ section, now globally accessible
function initializeFAQ() {
    generateFAQItems();
}

// Function to generate FAQ HTML
function generateFAQItems() {
    const faqData = [
        {
            question: "What types of startups does Talagunda support?",
            answer: "We support early-stage technology startups across various sectors including SaaS, fintech, healthtech, and edtech. We focus on innovative ideas with high growth potential and scalable business models."
        },
        {
            question: "How much equity does Talagunda take?",
            answer: "Our equity structure is tailored to each startup's needs and typically ranges between 5-15%. We believe in fair terms that align the interests of both founders and investors for long-term success."
        },
        {
            question: "What is the application process?",
            answer: "Our process begins with an online application, followed by an initial screening, interviews with our investment team, due diligence, and finally a presentation to our investment committee. The entire process typically takes 4-6 weeks."
        },
        {
            question: "Do I need to have a prototype or MVP?",
            answer: "While not mandatory, having a prototype or MVP significantly strengthens your application. It demonstrates commitment and provides tangible evidence of your idea's feasibility. However, we do consider exceptional ideas at the concept stage with strong founding teams."
        },
        {
            question: "What kind of support do you provide beyond funding?",
            answer: "Beyond capital, we provide mentorship from industry experts, access to our network of partners and investors, office space, legal and administrative support, technical resources, and ongoing guidance through our dedicated startup success team."
        },
        {
            question: "How long does the program last?",
            answer: "Our accelerator program runs for 12 weeks, followed by ongoing support as needed. For companies we invest in but don't participate in the accelerator, we provide continuous support based on their specific needs."
        },
        {
            question: "Can international startups apply?",
            answer: "Yes, we accept applications from startups worldwide. However, you must be willing to establish a legal entity in our supported jurisdictions and have at least one founder relocatable to our main hubs during the program period."
        }
    ];

    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer || faqData.length === 0) return;

    faqContainer.innerHTML = ''; // Clear existing content

    faqData.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden';
        faqItem.innerHTML = `
                <button class="faq-btn w-full flex justify-between items-center p-6 md:p-7 text-left group" aria-expanded="false">
                    <span class="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                        ${item.question}
                    </span>
                    <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-200">
                        <svg class="faq-icon w-5 h-5 text-blue-600 transform transition-transform duration-300" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </button>
                <div class="faq-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                    <div class="px-6 md:px-7 pb-6 md:pb-7 text-gray-600 text-lg">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `;
        faqContainer.appendChild(faqItem);
    });

    // Add toggle functionality to each FAQ item
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            button.classList.toggle('bg-blue-50');
            icon.classList.toggle('rotate-180');

            if (isExpanded) {
                content.style.maxHeight = null;
                button.setAttribute('aria-expanded', 'false');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
