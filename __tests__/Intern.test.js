const Intern= require('../lib/Intern');


test('get intern school name',()=>{
    const intern = new Intern ;
    expect(intern.school).toEqual(expect.any(String));
})

test('get position',()=>{
    const intern= new Intern
    expect(intern.position).toBe('Intern');
})