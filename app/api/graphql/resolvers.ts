const resolvers = {
    SearchType: {
        __resolveType: (obj) => {
            if (obj.species) {
                return 'Animal'
            }
            return 'Person'
        },
    },
    Person: {
      name: (person) => {
        return person.name.toUpperCase();
      },
      pets: (person) => {
        return [{species: 'cat', name: 'darrylk'}]
      }
    },
    Query: {
        search: () => {
            return [
                { name: 'Scott', id: 'fkdajflkdjf'},
                { name: 'Darryl', species: 'Big cat' }
            ]
        },
        me: () => {
            return 'me'
        },
        people: () => {
            return [{ id: 'sajkdlfj', name: 'henry', pets: [1] }]
        }
    }
}

export default resolvers
