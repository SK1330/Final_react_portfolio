import React from 'react'
import MainLayout from '../Styles/Layouts'
import InnerLayout from '../Styles/Layout2'
import Title from '../Components/Title'
import portfolios from '../Data/Portfolio'
import MenuItem from '../Components/MenuItem'
import { useState } from 'react'
import Button from '../Components/Button'


const allButtons = ['All', ...new Set (portfolios.map(item => item.category))]

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButtons);

  const filter = (button)=>{

    if(button === 'All'){
      setMenuItems(portfolios)
      return;
    }
    const filteredData = portfolios.filter(item => item.category === button);
    setMenuItems(filteredData);
  }

  return (
    <MainLayout>
      <Title title={'Portfolios'} titlespan={'Portfolios'} />
      <InnerLayout>
        <Button filter={filter} button={button} />
            <MenuItem menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  )
}



export default PortfolioPage