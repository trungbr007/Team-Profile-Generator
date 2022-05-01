const  inquirer = require('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generate =require ('./generate.js');
const fs = require ('fs');
const path = require ('path');
const { choices } = require('yargs');
const OUTPUT_DIR = path.resolve(__dirname,"dist");
const outputPath =path.join (OUTPUT_DIR,'team.html');
const teamMembers = [];

const promptManager = () =>{
return inquirer
  .prompt([
       {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter your name!');
              return false;
            }
          }
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is your ID? (Required)',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('You need to enter your id!');
              return false;
            }
          }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter your email!');
              return false;
            }
          }
    },

    {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office number? (Required)',
        validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('You need to enter your office number!');
              return false;
            }
          }
    },

  ])

//   took all the answer and created a new Manager 
  .then((answers) => {
      console.log( answers);
      const manager = new Manager(answers.name,answers.id,answers.email,answers.officenumber);
      teamMembers.push(manager);
      promptMenu ();
  })
  .catch((error) => {
    if (error.isTtyError) {
        "Prompt couldn't be rendered in the current environment"
    } else {
      "Something else went wrong"
    }
  });
};

const promptMenu = () =>{
    return inquirer.prompt([
        {
        type:'list',
        name:'menu',
        message:'Please select which opton you would like to continue with :',
        choices:['add an engineer','add an Intern','finish building team']
        }
    ])
    .then (userChoice => {
        if(userChoice.menu===choices[0]){
            promptEngineer();

        } if else(userChoice.menu===choices[1]){
            promptIntern ();
        }else{
            promptFinishBuilding()
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            "Prompt couldn't be rendered in the current environment"
        } else {
          "Something else went wrong"
        }
      });
};

const promptEngineer = () =>{
    console.log(`
    ====================
    Add an Engineer
    ====================
    `)
    return inquirer
      .prompt([
           {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter your name!');
                  return false;
                }
              }
        },
    
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID? (Required)',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('You need to enter your id!');
                  return false;
                }
              }
        },
    
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('You need to enter your email!');
                  return false;
                }
              }
        },
    
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('You need to enter your github username!');
                  return false;
                }
              }
        },
    
      ])
    
    //   took all the answer and created a new Manager 
      .then((answers) => {
          console.log( answers);
          const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
          teamMembers.push(engineer);
          promptMenu ();
      })
      .catch((error) => {
        if (error.isTtyError) {
            "Prompt couldn't be rendered in the current environment"
        } else {
          "Something else went wrong"
        }
      });
    };


    const promptIntern = () =>{
        console.log(`
    ====================
    Add an Intern
    ====================
    `)
        return inquirer
          .prompt([
               {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter your name!');
                      return false;
                    }
                  }
            },
        
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID? (Required)',
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log('You need to enter your id!');
                      return false;
                    }
                  }
            },
        
            {
                type: 'input',
                name: 'email',
                message: 'What is your email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log('You need to enter your email!');
                      return false;
                    }
                  }
            },
        
            {
                type: 'input',
                name: 'school',
                message: 'What is your school? (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                      return true;
                    } else {
                      console.log('You need to enter your school!');
                      return false;
                    }
                  }
            },
        
          ])
        
        //   took all the answer and created a new Manager 
          .then((answers) => {
              console.log( answers);
              const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
              teamMembers.push(intern);
              promptMenu ();
          })
          .catch((error) => {
            if (error.isTtyError) {
                "Prompt couldn't be rendered in the current environment"
            } else {
              "Something else went wrong"
            }
          });
        };


      const   promptFinishBuilding = () =>{

            console.log(`
            ====================
            Finish building team
            ====================
            `);

             // Create output directory if the output path doesn't exist

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,generate(teamMembers),"utf-8");
            
            };

            promptManager();

   
