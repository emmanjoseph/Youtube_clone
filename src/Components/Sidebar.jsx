import React,{useState} from 'react'
import { Stack } from '@mui/material'
import { categories } from '../Utilities/Constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    // const [activeCategory, setActiveCategory] = useState(null);


  const handleClick = (index) => {
   setSelectedCategory(categories[index].name);

     setSelectedCategory(categories[index].name)
  };
  return (
    <Stack 
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:"column"},
        width:{sx:"100%", md:"200px"}
    }}
    >
        {categories.map((category,index)=>
        {
            return <button className={`font-normal capitalize flex items-center gap-3 justify-start cursor-pointer ${selectedCategory === index?'bg-white/25':'bg-transparent'}  outline-none border-none px-4 py-2 my-2 transition-all duration-200 hover:bg-white/25  md:rounded-md text-[14px]`} key={category.name}
            onClick={
                ()=>handleClick(index)
               
            }
            >
                <span className='text-red-500 text-[13px]'><category.icon/></span>
                <span className='text-[13px]'>{category.name}</span>
            </button>
        })}
    </Stack>
  )
}

export default Sidebar
