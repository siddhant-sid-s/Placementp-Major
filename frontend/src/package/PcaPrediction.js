export default function PcaPrediction(student_marks) {

  function getRandomSalary(min, max) {
    let randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));
  }

  const placement_status = {
    "IT Product": { placed: false, salary: null },
    "ITES BPO": { placed: false, salary: null },
    "KPO": { placed: false, salary: null },
    "IT Services": { placed: false, salary: null },
    "Operations": { placed: false, salary: null },
    "Software Testing": { placed: false, salary: null },
    "Network Administrator": { placed: false, salary: null },
    "Sales": { placed: false, salary: null },
    "Core Plant": { placed: false, salary: null },
    "Core R & D": { placed: false, salary: null },
    "mismatched": false,
  };
  
  if (student_marks.score >= 480 && student_marks.score <= 800) {
    if (
      student_marks.computerFundamental > 65 &&
      student_marks.coding > 79 &&
      student_marks.english > 73 &&
      student_marks.aptitude > 80 &&
      student_marks.quantitative > 79 &&
      student_marks.analytical > 81 &&
      student_marks.domain > 80
    ) {
      placement_status["IT Product"].placed = true;
      placement_status["IT Product"].salary = getRandomSalary(9, 15);
    }
    if (student_marks.english > 59) {
      placement_status["ITES BPO"].placed = true;
      placement_status["ITES BPO"].salary = getRandomSalary(2, 3);
      placement_status["Sales"].placed = true;
      placement_status["Sales"].salary = getRandomSalary(2.5, 3.7);
      if (student_marks.quantitative > 50) {
        placement_status["KPO"].placed = true;
        placement_status["KPO"].salary = getRandomSalary(3, 4);
      }
    }
    if (
      student_marks.english > 60 &&
      student_marks.aptitude > 59 &&
      student_marks.analytical > 59 &&
      student_marks.computerFundamental > 32 &&
      student_marks.coding > 40
    ) {
      placement_status["IT Services"].placed = true;
      placement_status["IT Services"].salary = getRandomSalary(4.5, 9);
    }
    if (
      student_marks.english > 50 &&
      student_marks.quantitative > 50 &&
      student_marks.aptitude > 50 &&
      student_marks.analytical > 50
    ) {
      placement_status["Operations"].placed = true;
      placement_status["Operations"].salary = getRandomSalary(2.7, 5);
    }
    if (
      student_marks.computerFundamental > 32 &&
      student_marks.coding > 40 &&
      student_marks.english > 40 &&
      student_marks.aptitude > 40 &&
      student_marks.quantitative > 40 &&
      student_marks.analytical > 40 &&
      student_marks.domain > 40
    ) {
      placement_status["Software Testing"].placed = true;
      placement_status["Software Testing"].salary = getRandomSalary(3.2, 6.5);
    }
    if (
      student_marks.computerFundamental > 37 &&
      student_marks.coding > 35 &&
      student_marks.english > 40 &&
      student_marks.aptitude > 40 &&
      student_marks.quantitative > 40 &&
      student_marks.analytical > 40 &&
      student_marks.domain > 40
    ) {
      placement_status["Network Administrator"].placed = true;
      placement_status["Network Administrator"].salary = getRandomSalary(2.8, 5);
    }
    if (
      student_marks.computerFundamental > 19 &&
      student_marks.coding > 40 &&
      student_marks.english > 40 &&
      student_marks.aptitude > 40 &&
      student_marks.quantitative > 40 &&
      student_marks.analytical > 40 &&
      student_marks.domain > 49
    ) {
      placement_status["Core Plant"].placed = true;
      placement_status["Core Plant"].salary = getRandomSalary(3.5, 6.8);
    }
    if (
      student_marks.computerFundamental > 45 &&
      student_marks.coding > 49 &&
      student_marks.english > 59 &&
      student_marks.aptitude > 50 &&
      student_marks.quantitative > 32 &&
      student_marks.analytical > 59 &&
      student_marks.domain > 30
    ) {
      placement_status["Core R & D"].placed = true;
      placement_status["Core R & D"].salary = getRandomSalary(5.5, 10);
    }
  } else {
    placement_status["mismatched"] = true;
  }
  
  return placement_status;
}
