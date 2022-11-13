import { Timeline,PermIdentity,AttachMoney,MailOutline,ChatBubbleOutline,DynamicFeed,BarChart,Storefront,TrendingUp,LineStyle,Report } from '@material-ui/icons'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar=()=>{
    return(
        <div className="sidebar_wrapper">
            <div className="dashboard_wrapper">
            <div className="dashboard">Dashboard</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><Link to="/" className='link'><LineStyle/><h4 className='sidebar_text'>Home</h4></Link></li>
                <li className="dashboard_items"><Timeline/> Analytics</li>
                <li className="dashboard_items"><TrendingUp/> Sales</li>
            </ul>
            </div>
            <div className="dashboard_wrapper">
            <div className="dashboard">Products</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><Link to="/products" className='link'><Storefront/><h4 className='sidebar_text'>Products</h4></Link></li>
                <li className="dashboard_items"><Link to="/addproduct" className='link'><AddShoppingCartOutlinedIcon/><h4>Add Product</h4></Link></li>
                <li className="dashboard_items"><AttachMoney/>Transcations</li>
                <li className="dashboard_items"><BarChart/>Reports</li>
            </ul>
            </div>
            <div className="dashboard_wrapper">
            <div className="dashboard">User</div>
            <ul className="dashboard_ul">
            <li className="dashboard_items"><Link to="/users" className='link'><PermIdentity/><h4 className='sidebar_text'>Users</h4></Link></li>
            <li className="dashboard_items"><Link to="/adduser" className='link'><PersonAddOutlinedIcon /><h4 className='sidebar_text'>Add user</h4></Link></li>
                <li className="dashboard_items"><Report/>Reports</li>
            </ul>
            </div>
         <div className="dashboard_wrapper">
            <div className="dashboard">Notification</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><MailOutline/><h4>Mail</h4></li>
                <li className="dashboard_items"><DynamicFeed/>Feedback</li>
                <li className="dashboard_items"><ChatBubbleOutline/>Messages</li>
            </ul>
            </div>
        </div>   
    )
}

export default Sidebar