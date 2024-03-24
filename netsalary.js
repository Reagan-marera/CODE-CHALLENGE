function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.15;
    const NHIFDeductionRate = 0.025;
    const NSSFRate = 0.06;

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const NHIFDeduction = grossSalary * NHIFRate;
    const NSSFDeduction = grossSalary * NSSFfRate;

    const netSalary = grossSalary - tax - NHIFDeductionDeduction - NSSFDeductionDeduction;
    return netSalary;
}

const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", netSalary);