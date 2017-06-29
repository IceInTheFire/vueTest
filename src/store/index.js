import user from "./user";



var storeInfo = {
    strict:true,
    modules: {
        user
    }
}

export default storeInfo

// export default {
//     // strict:true,
//     strict: process.env.NODE_ENV !== 'production',
//     modules: {
//         user,
//         // imageToken
//     }
// }