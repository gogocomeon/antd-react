import {  Form,Input,Button,Card,message } from 'antd';
// import Form from 'antd/lib/form/Form';
import React,{useEffect} from 'react';
import {createApi,getOneById} from '../../../services/product'

  const onFinishFailed = (errorInfo: any) => {
    message.error('Submit failed!');
    console.log('Failed:', errorInfo);
  };
  const PriceValidate=(rule,value,callback) =>{
      if(value*1>100){
          callback('价格不能大于100')
      }else{
        callback()
      }
  };
  const formRef = React.createRef()
  

function Edit(props) {
    // const [dataSource,setDataSource] = useState([]);
    useEffect(()=>{
        if(props.match.params.id){
            getOneById(props.match.params.id).then(res=>{
                console.log(res.data.content.productName)
                formRef.current.setFieldsValue({
                    productName: res.data.content.productName,
                    productId:res.data.content.productId
                             
             })
            })
        }
        
    },[])  
    
    const onFinish = (values: any) => {
        if(props.match.params.id){
        message.success('编辑成功!');
        props.history.push('/admin/products')
        }else{
            createApi(values).then(
                res=>{
                    message.success('Submit success!');
                    props.history.push('/admin/products')
                    console.log(res)
                }
            ).catch(err=>{
                console.log(err)
            })
        }
        
        // props.history.push('/admin/products')
        
        
        console.log('Success:', values);
      };
    // const {getFieldDecorator} = props.form
    return (
        <Card title="商品编辑">
            
            <Form  ref={formRef} name="nest-messages" onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
                {/* 此处与视频讲解不一样antd4已更新*/}
                <Form.Item label="名字" rules={[{required:true ,message: 'name is required'},{warningOnly: true}]} name="productName" >
                    <Input placeholder="请输入商品名字" />

                </Form.Item>
                <Form.Item label="价格" rules={[{required:true,message: 'price is required'},{warningOnly: true},{validator:PriceValidate}]} name="productId">
                    <Input placeholder="商品价格" />

                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit " type="primary">保存</Button>
                </Form.Item>

            </Form>
        </Card>
    )
}


export default Edit;
