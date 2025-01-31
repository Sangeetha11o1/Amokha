import  {createClient} from "@sanity/client";

// export default sanityClient({
//     projectId: "nqns82nc",
//     dataset: "production"
// });

const client = createClient({
    projectId: "nqns82nc",
    dataset: "production",
    useCdn: false
});

export default client;