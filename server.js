const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./api/schema/schema");
const expressGraphQL = graphqlHTTP;

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening");
});