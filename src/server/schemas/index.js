export default `

  type Brand {
    id: ID!,
    name: String,
    model(first: Int = 10, offset: Int = 0): [Model] @relation(name: "MODEL_OF", direction: "IN")
  }

  type Model {
    id: ID!,
    name: String,
    rating: String,
    year: String,
    sells: String,
  }

  type Query {
    Brand(id: ID, name: String, first: Int, offset: Int): [Brand]
  }

`;
