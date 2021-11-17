import React,{useEffect,useState} from 'react';
import { Card, Table, Button,Popconfirm } from "antd";
import {listApi} from '../../../services/product';


// const dataSource = [{
//     id: 1,
//     name: '香皂',
//     price: 3
// }, {
//     id: 2,
//     name: '无人机',
//     price: 30
// }, {
//     id: 3,
//     name: '手机壳',
//     price: 33
// }, {
//     id: 4,
//     name: '卫生纸',
//     price: 23
// }, {
//     id: 5,
//     name: '喷雾',
//     price: 13
// }, {
//     id: 6,
//     name: '洗手液',
//     price: 6
// }]

function List(props) {
    const [dataSource,setDataSource] = useState([]);
    useEffect(()=>{
        listApi(1,3).then(
            res=>{
                console.log(res)
                setDataSource(res.data.content)
                console.log("dddddd"+dataSource.length)
            }
        )
    },[])  

    const columns = [
        {
            title: "序号",
            key: "id",
            width: 80,
            align: 'center',
            render:(txt,record,index)=>index+1
        }, {
            title: "产品",
            dataIndex: "productName"
        }, {
            title: "产品编号",
            dataIndex: "productId"
        }, {
            title: "操作",
            render:(txt,record,index)=>{
                return(
<div>
    <Button type="primary" size="small" onClick={()=>{
        props.history.push('/admin/products/edit/'+record.productId)
    }}>修改</Button>
    <Popconfirm
    title='确定删除此项?'
    onCancel={()=>{
        console.log("用户取消删除")
    }}
    onConfirm={()=>{
        console.log("用户确认删除")
        //调用删除的api
    }}

    >
    <Button type="danger" size="small" style={{margin:"0 1rem"}}>删除</Button>
    </Popconfirm>
</div>
                );
            }
        }]

    return (
        <Card
            title="商品列表"
            extra={
                <Button type="primary" size="small" onClick={()=>{
                    props.history.push("/admin/products/edit/")
                }}>新增</Button>
            }>

            <Table rowKey="id" pagination={{total:dataSource.length,defaultPageSize:10}} columns={columns} bordered dataSource={dataSource}></Table>
        </Card>
    )
}

export default List;
