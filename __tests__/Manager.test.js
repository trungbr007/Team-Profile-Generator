const Manager = require('../lib/Manager');


test('get office number',()=>{
    const manager = new Manager;
    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('get position',()=>{
    const manager= new Manager
    expect(manager.position).toBe('Manager');
})