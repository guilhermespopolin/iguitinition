const faker = require('faker')

function generateEmployees(qtd = 50) {
  const employees = []

  for (let id = 0; id < qtd; id += 1) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()

    employees.push({
      id,
      firstName,
      lastName,
      email,
    })
  }

  return { employees }
}

module.exports = generateEmployees
