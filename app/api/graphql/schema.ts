const schema = `#graphql
    type Animal {
        species: String!
        name: String!
    }

    enum COLORS {
        BLUE
        PURPLE
        BROWN
    }

    type Person {
        name: String!
        id: ID!
        faveColor: COLORS!
        pets: [Animal]!
    }

    union SearchType = Animal | Person

    type Query {
        me: String!
        people: [Person!]!
        search: [SearchType]! 
    }
`

export default schema
