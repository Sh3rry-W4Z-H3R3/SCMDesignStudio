// Fixed Accordion Functionality for FAQ Section

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Initialize accordion - ensure all answers are hidden initially
    faqQuestions.forEach(question => {
        const answer = question.nextElementSibling;
        question.classList.remove('active');
        answer.classList.remove('show');
    });
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('show');
            }
        });
    });
});
