// ฟังก์ชัน Logout ไปหน้า Login
function logout() {
    window.location.href = "index.html"; // เปลี่ยนเป็นหน้า Login ของคุณ
  }
  
  // ฟังก์ชันแสดงเวลาและวันที่แบบ Real-time
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
  
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent = `${day}, ${date} ${month} ${year}`;
  }
  
  // เรียกใช้ updateClock ทุก 1 วินาที
  setInterval(updateClock, 1000);
  updateClock();
  