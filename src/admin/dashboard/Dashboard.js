import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {Home,Category,Phonelink,Settings,ShoppingCart,PowerSettingsNew} from '@material-ui/icons';
const Dashboard=()=>{
    return(
        <>
     <div className="container-fluid  mt-32">
       <nav className='h-20 px-10 bg-blue-600 flex items-center sticky top-0 left-0 z-20'>
           <div className="">
               <h1 className='text-4xl font-bold'>Fraposter</h1>
           </div>
       </nav>
      <div className="flex space-x-4">
      <div className='w-60 h-auto border-r'>
        <ul className='bg-white shadow-xl px-5 '>
        <List>
      
              <ListItem button >
              <ListItemIcon style={{fontSize:"50px"}}>
                  <Home/>
              </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
              <ListItemIcon>
                  <Category/>
              </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
              <ListItem button>
              <ListItemIcon>
                  <ShoppingCart/>
              </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem button>
              <ListItemIcon>
                  <Phonelink/>
              </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
              <ListItem button>
              <ListItemIcon>
                  <Settings/>
              </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItem>
              <ListItem button>
              <ListItemIcon>
              <PowerSettingsNew/>
              </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
        </ul>
       </div>
       <div className="text-2xl">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil?</p>
       </div>
      </div>
     </div>
        </>
    )
}
export default Dashboard;