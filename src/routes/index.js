import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/index";
import Notice from "../pages/admin/notice/Index";
import PageNotFound from "../pages/PageNotFound";
import {HomeOutlined,SmileOutlined} from '@ant-design/icons';
//路由配置文件
export const mainRoutes = [{
    path:'/login',
    component: Login
},{
    path:'/404',
    component:  PageNotFound
}];

export const adminRoutes = [{
    path:'/admin/dashboard',
    component: Index,
    isShow:true,
    titile:"看板",
    icon: <HomeOutlined />
},
{
    path:'/admin/products',
    component: List,
    //全匹配路径
    exact : true,
    isShow:true,
    titile:"列表",
    icon:<SmileOutlined />
},
{
    path:'/admin/products/edit/:id?',
    component: Edit,
    isShow:false
    // exact : true,
    // strict:true
},
{
    path:'/admin/notice',
    component: Notice,
    isShow:false
    // exact : true,
    // strict:true
}];