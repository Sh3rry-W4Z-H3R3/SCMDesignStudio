// SCM Studio Contact Form Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const errorMessages = [];
        
        // Validate name (required)
        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.classList.add('error');
            errorMessages.push('Please enter your name');
        } else {
            nameInput.classList.remove('error');
        }
        
        // Validate email (required and format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            isValid = false;
            emailInput.classList.add('error');
            errorMessages.push('Please enter your email address');
        } else if (!emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('error');
            errorMessages.push('Please enter a valid email address');
        } else {
            emailInput.classList.remove('error');
        }
        
        // Validate phone (optional but must be valid if provided)
        if (phoneInput.value.trim()) {
            const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                isValid = false;
                phoneInput.classList.add('error');
                errorMessages.push('Please enter a valid phone number');
            } else {
                phoneInput.classList.remove('error');
            }
        } else {
            phoneInput.classList.remove('error');
        }
        
        // Validate subject (required)
        if (subjectSelect.value === "") {
            isValid = false;
            subjectSelect.classList.add('error');
            errorMessages.push('Please select a subject');
        } else {
            subjectSelect.classList.remove('error');
        }
        
        // Validate message (required and minimum length)
        if (!messageTextarea.value.trim()) {
            isValid = false;
            messageTextarea.classList.add('error');
            errorMessages.push('Please enter your message');
        } else if (messageTextarea.value.trim().length < 10) {
            isValid = false;
            messageTextarea.classList.add('error');
            errorMessages.push('Your message is too short (minimum 10 characters)');
        } else {
            messageTextarea.classList.remove('error');
        }
        
        return { isValid, errorMessages };
    }
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const { isValid, errorMessages } = validateForm();
        
        if (!isValid) {
            // Display error messages
            alert('Please correct the following errors:\n• ' + errorMessages.join('\n• '));
            return;
        }
        
        // Simulate form submission (in a real implementation, this would send data to a server)
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            subject: subjectSelect.value,
            message: messageTextarea.value.trim()
        };
        
        console.log('Form data submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // Real-time validation on input
    const formInputs = [nameInput, emailInput, phoneInput, subjectSelect, messageTextarea];
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateForm();
        });
    });
    
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
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
