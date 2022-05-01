const Engineer= require('../lib/Engineer');


test('get engineer Github Username',()=>{
    const engineer= new Engineer
    expect(engineer.github).toEqual(expect.any(String));
})

test('get position',()=>{
    const engineer= new Engineer
    expect(engineer.position).toBe('Engineer');
})