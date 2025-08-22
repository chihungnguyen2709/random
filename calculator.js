document.addEventListener('DOMContentLoaded', () => {
    const calcDisplay = document.getElementById('calc-display');
    const calcButtons = document.querySelectorAll('.calc-btn');
    const body = document.body;

    let currentInput = '';
    let operator = null;
    let previousValue = '';

    // Lắng nghe sự kiện click cho tất cả các nút
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                currentInput = '';
                operator = null;
                previousValue = '';
                calcDisplay.value = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    previousValue = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else if (value === '=') {
                if (operator && previousValue !== '' && currentInput !== '') {
                    const result = calculate(parseFloat(previousValue), parseFloat(currentInput), operator);
                    calcDisplay.value = result;
                    currentInput = result.toString();
                    operator = null;
                }
            } else {
                currentInput += value;
                calcDisplay.value = currentInput;
            }
        });
    });

    // Hàm tính toán
    function calculate(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
        }
    }

    // Chức năng chuyển đổi chế độ sáng/tối cho máy tính
    const themeToggleCalc = document.getElementById('theme-toggle-calc');
    themeToggleCalc.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        const themeIcon = document.getElementById('theme-icon-calc');
        const toggleBtn = themeToggleCalc.querySelector('.toggle-btn');
        
        if (isLightMode) {
            toggleBtn.classList.add('active');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggleCalc.classList.remove('bg-gray-600');
            themeToggleCalc.classList.add('bg-gray-300');
        } else {
            toggleBtn.classList.remove('active');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggleCalc.classList.remove('bg-gray-300');
            themeToggleCalc.classList.add('bg-gray-600');
        }
    });
});
