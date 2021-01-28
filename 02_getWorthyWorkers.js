const workers = [
  {name: "Ilon Mask", salary: 2300},
  {name: "St Father", salary: 666},
  {name: "Lucifer Morning Star", salary: 1333},
	{name:"Mike","salary":1300},
  {name:"John","salary":500},
	{name:"Linda","salary":1500}
]

let getWorthyWorkers = (workers, salary= 2000) => {
  ` Return workers with salaty higher than 2000 or empty arr `
  let workersFiltered = workers.filter(worker => {
    return worker.salary >= 1000;
  });
  return workersFiltered.map(el => el.name)
}

console.log(getWorthyWorkers(workers))