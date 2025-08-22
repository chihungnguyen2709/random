// Đảm bảo DOM đã được tải hoàn toàn trước khi chạy script
document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử DOM cần thiết
    const themeToggle = document.getElementById('theme-toggle');
    const modeUnlimitedBtn = document.getElementById('mode-unlimited');
    const modeRangeBtn = document.getElementById('mode-range');
    const rangeInputs = document.getElementById('range-inputs');
    const generateBtn = document.getElementById('generate-btn');
    const resultDisplay = document.getElementById('result-display');
    const minNumberInput = document.getElementById('min-number');
    const maxNumberInput = document.getElementById('max-number');
    const body = document.body;

    // Chức năng chuyển đổi chế độ sáng/tối
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        const themeIcon = document.getElementById('theme-icon');
        const toggleBtn = themeToggle.querySelector('.toggle-btn');
        
        if (isLightMode) {
            toggleBtn.classList.add('active');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.classList.remove('bg-gray-600');
            themeToggle.classList.add('bg-gray-300');
        } else {
            toggleBtn.classList.remove('active');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.classList.remove('bg-gray-300');
            themeToggle.classList.add('bg-gray-600');
        }
    });

    // Chức năng chuyển đổi giữa các mode (Không giới hạn / Tùy chỉnh)
    modeUnlimitedBtn.addEventListener('click', () => {
        modeUnlimitedBtn.classList.add('bg-blue-500', 'text-white', 'scale-105');
        modeUnlimitedBtn.classList.remove('text-gray-400', 'border-gray-400', 'scale-100');
        
        modeRangeBtn.classList.add('text-gray-400', 'border-gray-400', 'scale-100');
        modeRangeBtn.classList.remove('bg-blue-500', 'text-white', 'scale-105');
        
        rangeInputs.classList.add('hidden');
    });

    modeRangeBtn.addEventListener('click', () => {
        modeRangeBtn.classList.add('bg-blue-500', 'text-white', 'scale-105');
        modeRangeBtn.classList.remove('text-gray-400', 'border-gray-400', 'scale-100');
        
        modeUnlimitedBtn.classList.add('text-gray-400', 'border-gray-400', 'scale-100');
        modeUnlimitedBtn.classList.remove('bg-blue-500', 'text-white', 'scale-105');
        
        rangeInputs.classList.remove('hidden');
    });

    // Chức năng tạo số ngẫu nhiên (chỉ tạo 1 số duy nhất)
    generateBtn.addEventListener('click', () => {
        let min, max;
        // Kiểm tra xem đang ở chế độ nào
        if (rangeInputs.classList.contains('hidden')) {
            // Chế độ không giới hạn
            min = 1;
            max = 1000000000; // 1 tỷ
        } else {
            // Chế độ tùy chỉnh
            min = parseInt(minNumberInput.value);
            max = parseInt(maxNumberInput.value);
            
            // Xử lý lỗi khi nhập giá trị
            if (isNaN(min) || isNaN(max)) {
                resultDisplay.innerHTML = `<p class="text-center text-red-400">Vui lòng nhập đầy đủ giá trị.</p>`;
                return;
            }
            if (min >= max) {
                resultDisplay.innerHTML = `<p class="text-center text-red-400">Giá trị 'Từ' phải nhỏ hơn giá trị 'Đến'.</p>`;
                return;
            }
        }
        
        // Tạo số ngẫu nhiên
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Hiển thị kết quả với phông chữ lớn
        resultDisplay.innerHTML = `<p class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white text-center">${randomNumber}</p>`;
    });
});
