// Service data in JSON format
const servicesData = [
    {
        "id": 1,
        "title": "Business Analysis",
        "description": "We provide comprehensive analysis of your business to identify strengths, weaknesses, and opportunities for sustainable growth.",
        "icon": "bi-graph-up",
        "features": [
            "SWOT Analysis",
            "Competitive Analysis",
            "Performance Metrics",
            "Growth Strategy"
        ],
        "color": "primary",
        "colorCode": "#3b82f6"
    },
    {
        "id": 2,
        "title": "Strategic Consulting",
        "description": "Our expert consultants help you navigate business challenges with tailored strategies for success.",
        "icon": "bi-lightbulb",
        "features": [
            "Business Planning",
            "Operational Efficiency",
            "Financial Modeling",
            "Risk Assessment"
        ],
        "color": "secondary",
        "colorCode": "#6b7280"
    },
    {
        "id": 3,
        "title": "Market Research",
        "description": "In-depth market research to understand your audience, trends, and gain competitive advantage.",
        "icon": "bi-search",
        "features": [
            "Consumer Insights",
            "Market Trends",
            "Competitor Analysis",
            "Opportunity Identification"
        ],
        "color": "accent",
        "colorCode": "#f59e0b"
    },
    {
        "id": 4,
        "title": "Digital Transformation",
        "description": "Modernize your business with cutting-edge digital solutions and technology integration.",
        "icon": "bi-laptop",
        "features": [
            "Technology Assessment",
            "Digital Strategy",
            "Implementation Planning",
            "Change Management"
        ],
        "color": "primary",
        "colorCode": "#3b82f6"
    },
    {
        "id": 5,
        "title": "Funding Strategy",
        "description": "Secure the right funding with our comprehensive investment and financial planning services.",
        "icon": "bi-currency-dollar",
        "features": [
            "Investment Readiness",
            "Pitch Deck Development",
            "Investor Matching",
            "Financial Planning"
        ],
        "color": "secondary",
        "colorCode": "#6b7280"
    },
    {
        "id": 6,
        "title": "Growth Marketing",
        "description": "Data-driven marketing strategies to accelerate your customer acquisition and revenue growth.",
        "icon": "bi-rocket",
        "features": [
            "Digital Marketing",
            "Brand Strategy",
            "Customer Acquisition",
            "Performance Analytics"
        ],
        "color": "accent",
        "colorCode": "#f59e0b"
    }
];

// Function to render services with enhanced animations
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');

    if (!servicesGrid) {
        console.error('Services grid element not found!');
        return;
    }

    // Clear existing content
    servicesGrid.innerHTML = '';

    servicesData.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = `service-card bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl`;
        serviceCard.style.animationDelay = `${index * 0.1}s`;

        // Use inline styles for colors to avoid CSS framework dependency issues
        serviceCard.innerHTML = `
            <div class="relative overflow-hidden h-full">
                <div class="service-gradient absolute inset-0 opacity-0 transition-opacity duration-500" ></div>
                <div class="p-6 relative z-10 h-full flex flex-col">
                    <div class="service-icon w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110" >
                        <i class="bi ${service.icon} text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 text-center mb-3">${service.title}</h3>
                    <p class="text-gray-600 text-center mb-4 text-sm leading-relaxed flex-grow">${service.description}</p>
                    <ul class="space-y-2 mb-6">
                        ${service.features.map(feature => `
                            <li class="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-1 text-sm">
                                <i class="bi bi-check-circle-fill mr-2"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                    <div class="text-center mt-auto">
                        <button class="learn-more-btn text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md relative overflow-hidden group text-sm" >
                            <span class="relative z-10">Learn More</span>
                            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
        `;

        servicesGrid.appendChild(serviceCard);
    });

    // Initialize animations after rendering
    initializeAnimations();
}

// Initialize scroll animations and interactions
function initializeAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length === 0) {
        console.log('No service cards found');
        return;
    }
    // Add parallax effect to service icons on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const serviceCards = document.querySelectorAll('.service-card');

                serviceCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const icon = card.querySelector('.service-icon');
                        const speed = 0.05;
                        const yPos = -(scrolled * speed);
                        icon.style.transform = `translateY(${yPos}px) scale(1.05)`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add hover effects for service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            const gradient = this.querySelector('.service-gradient');
            if (gradient) gradient.style.opacity = '1';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const gradient = this.querySelector('.service-gradient');
            if (gradient) gradient.style.opacity = '0';
        });
    });

    // Add click effects for learn more buttons
    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.className = 'ripple-effect absolute rounded-full bg-white opacity-30';
            ripple.style.animation = 'ripple 0.6s linear';

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode === this) {
                    this.removeChild(ripple);
                }
            }, 600);

            // Get service title from parent card
            const card = this.closest('.service-card');
            const title = card.querySelector('h3').textContent;
            console.log(`Learn more clicked for: ${title}`);

            // You can add your modal opening logic here
            // openServiceModal(serviceData.find(s => s.title === title));
        });
    });
}

// Add required CSS styles
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .service-card {
            transition: all 0.5s ease;
        }
        #services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 2rem;
        }
        @media (max-width: 768px) {
            #services-grid {
                grid-template-columns: 1fr;
                padding: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Render services when page loads
document.addEventListener('DOMContentLoaded', () => {
    addCustomStyles();
    renderServices();
});

// Re-initialize on window resize
window.addEventListener('resize', () => {
    setTimeout(initializeAnimations, 100);
});

// Export for potential use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { servicesData, renderServices };
}
