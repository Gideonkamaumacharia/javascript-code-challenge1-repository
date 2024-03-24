let basicSalary
let minimumWage = 24000
let tax
let salaryMax = [32333,500000 ,800000]


function salaryCalculator(basicSalary) {
    if(basicSalary === minimumWage) {
        tax = basicSalary * 0.1
        return tax
    }else if(basicSalary > minimumWage && basicSalary <= salaryMax[0]) {
        tax = basicSalary * 0.25
        return tax
    }else if(basicSalary > value1 && basicSalary <= salaryMax[1]) {
        tax= basicSalary * 0.3
        return tax
    }else if(basicSalary > value2 && basicSalary <= salaryMax[2]) {
        tax = basicSalary * 0.325
        return tax
    }else if (basicSalary > value3) {
        tax = basicSalary * 0.35
        return tax
    }
}
    
console(salaryCalculator(500000))