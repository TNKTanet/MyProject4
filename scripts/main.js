document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่
  
    // ดึงค่า username และ password จากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // ดึงข้อมูลที่บันทึกไว้ใน Local Storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    // ตรวจสอบข้อมูล
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // ลิงก์ไปหน้า Dashboard
    } else {
      alert("Invalid username or password!");
    }
  });
  