/*
This function should take as its arguments:

- a person object (with name and tasks properties)
- one or more new tasks

The function should return a new person object with a new tasks properties. The tasks property from the 
input object should not be mutated.

updateTasks(
  { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] },
  "read books",
  "tidy room"
);

should return 
{
  name: 'Anat',
  tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
}
*/

function updateTasks(person, ...newTasks) {
    const copyPerson = {...person};
    if (person.tasks === undefined) return copyPerson;

    copyPerson.tasks = [...person.tasks]

    newTasks.map((task) => {
        copyPerson.tasks.push(task)
    })

    return copyPerson;
};

module.exports = updateTasks;