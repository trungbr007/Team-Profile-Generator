const Employee= require('../lib/Employee');
jest.mock('../lib/Employee.js');


test('employee name', () => {
    const employee = new Employee('');
    expect(employee.name).toEqual(expect.any(String));
})

test('employee id', () => {
    const employee = new Employee('');
    expect(employee.id).toEqual(expect.any(String));
})
test('employee email', () => {
    const employee = new Employee('');
    expect(employee.email).toEqual(expect.any(String));
})
test('employee position', () => {
    const employee = new Employee('');
    expect(employee.position).toEqual('Employee');
})
