import React , {useState} from 'react'
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

 const uniqueList = [
  ...new Set(Menu.map((currElem) => {
    return currElem.catagory;
 })
), 
"All",
]

const Resturant = () => {
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(uniqueList);

  const filterItem = (catagory) => {
    if(catagory === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.catagory === catagory
    })
    setMenuData(updatedList);
  }
return (
  <>
  <Navbar filterItem={filterItem} menuList={menuList}/>
  <MenuCard menuData={menuData}/>
  </>
)

}
export default Resturant

