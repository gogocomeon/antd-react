import { get,post,put } from "../utils/request"

export function listApi(pageNum,pageSize){
    return get("/api/v1/admin/products",{pageNum,pageSize})
}

// export function listApi(page = 1){
//     return get("/api/v1/admin/products",{page})
// }

export function createApi(data){
    return post('/api/v1/admin/createProducts',data)
}

export function modifyOne(id,data){
    return put('/api/v1/admin/products/'+id,data)
}

export function delOne(id){
    return put('/api/v1/admin/products/'+id)
}

export function getOneById(id){
    return get('/api/v1/admin/productInfo?productId='+id)
}