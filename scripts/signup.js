document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่
  
    // ดึงค่าจากฟอร์ม
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // ตรวจสอบว่ารหัสผ่านตรงกัน
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // บันทึกข้อมูลใน Local Storage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
  
    alert("Sign Up successful! Redirecting to Sign In...");
    window.location.href = "index.html"; // กลับไปหน้า Sign In
  });
  