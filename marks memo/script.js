function calculateResult() {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const institute = document.getElementById('institute').value;
    const batch = document.getElementById('batch').value;
    const division = document.getElementById('division').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
  
    const totalMarks = subject1 + subject2 + subject3;
    const averageMarks = totalMarks / 3;
    const result = averageMarks >= 40 ? 'Pass' : 'Fail';
  
    const rollNo = Math.floor(Math.random() * 1000) + 1;
  
    document.getElementById('rollNo').textContent = rollNo;
    document.getElementById('result').textContent = `Name: ${name}\nFather's Name: ${fatherName}\nInstitute: ${institute}\nBatch: ${batch}\nRoll No: ${rollNo}\nDivision: ${division}\nTotal Marks: ${totalMarks}\nAverage Marks: ${averageMarks.toFixed(2)}\nResult: ${result}`;
  }
  