      // ฟังก์ชันรับค่าอินพุตจากแป้มพิมพ์
      function getInputValues() {
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        if (isNaN(num1) || isNaN(num2)) {
          alert("Please enter both numbers.");
          return null;
        }
        return { num1, num2 };
      }
  
      // เพิ่มตัวรับฟังเหตุการณ์ลงในปุ่ม
      document.getElementById('addBtn').addEventListener('click', function() {
        const values = getInputValues();
        if (values) document.getElementById('result').textContent = `Result: ${values.num1 + values.num2}`;
      });
  
      document.getElementById('subtractBtn').addEventListener('click', function() {
        const values = getInputValues();
        if (values) document.getElementById('result').textContent = `Result: ${values.num1 - values.num2}`;
      });
  
      document.getElementById('multiplyBtn').addEventListener('click', function() {
        const values = getInputValues();
        if (values) document.getElementById('result').textContent = `Result: ${values.num1 * values.num2}`;
      });
  
      document.getElementById('divideBtn').addEventListener('click', function() {
        const values = getInputValues();
        if (values) {
          if (values.num2 === 0) {
            alert("Division by zero is not allowed.");
          } else {
            document.getElementById('result').textContent = `Result: ${values.num1 / values.num2}`;
          }
        }
      });
  
      document.getElementById('powerBtn').addEventListener('click', function() {
        const values = getInputValues();
        if (values) document.getElementById('result').textContent = `Result: ${Math.pow(values.num1, values.num2)}`;
      });
  
      // ปุ่มกดเคลียร์ ค่าทั้งหมดของ functionality
      document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
        document.getElementById('result').textContent = "Waiting for calculation...";
      });