let HelloResolvers = {
    Query: {
        hello: (root,{name}) =>{ 
                    return 'Hello world! '+name
                }
    },
};


exports.Resolvers = HelloResolvers