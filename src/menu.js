import { indicateCurrentSite } from "./index.js";



function menuElementCreation(){
    const content=document.getElementById('content')

    const menu=document.querySelector('.menu')
    indicateCurrentSite(menu)



    const foodContainer=document.createElement('div');
    foodContainer.classList.add('food-container')
    const wineContainer=document.createElement('div');
    wineContainer.classList.add('wine-container')



    const foodHeader=document.createElement('div');
    foodHeader.classList.add('food-header')
    foodHeader.classList.add('menu-header')

    const wineHeader=document.createElement('div');
    wineHeader.classList.add('wine-header')
    wineHeader.classList.add('menu-header')


    const foodMenu=document.createElement('div');
    foodMenu.classList.add('food-menu')
    foodMenu.classList.add('menus-menu')
    const wineMenu=document.createElement('div');
    wineMenu.classList.add('wine-menu')
    wineMenu.classList.add('menus-menu')

    foodHeader.textContent='Food';
    wineHeader.textContent='Wine'

    
    foodContainer.appendChild(foodHeader)
    foodContainer.appendChild(foodMenu)

    wineContainer.appendChild(wineHeader)
    wineContainer.appendChild(wineMenu)


    content.appendChild(foodContainer)
    content.appendChild(wineContainer)

    // Creating food menu 


    const foodItemContainer=document.createElement('div');
    foodItemContainer.classList.add('food-item-container')



    for(let i=1;i<=6;i++){
        const foodItem =document.createElement('div');
        foodItem.classList.add(`foodItem${i}`)

        foodItem.classList.add(`foodItem`)
        foodItemContainer.appendChild(foodItem)
    }
   
    foodMenu.appendChild(foodItemContainer);

   
    

    const foodItem1=document.querySelector('.foodItem1');
    const food1Heading=document.createElement('h2');
    food1Heading.textContent='Appetizers';
    const foodpara11=document.createElement('p')
    const foodpara12=document.createElement('p')
    const foodpara13=document.createElement('p')
    foodpara11.textContent='Bruschetta with Tomato and Basil';
    foodpara12.textContent='Grilled Shrimp Skewers with Garlic Butter'
    foodpara13.textContent='Stuffed Mushrooms with Herb Cream Cheese'
    foodItem1.appendChild(food1Heading);
    foodItem1.appendChild(foodpara11)
    foodItem1.appendChild(foodpara12)
    foodItem1.appendChild(foodpara13)


    const foodItem2=document.querySelector('.foodItem2');
    const food2Heading=document.createElement('h2');
    food2Heading.textContent='Soups and Salads';
    const foodpara21=document.createElement('p')
    const foodpara22=document.createElement('p')
    const foodpara23=document.createElement('p')
    foodpara21.textContent='Classic French Onion Soup';
    foodpara22.textContent='Caesar Salad with Homemade Dressing';
    foodpara23.textContent='Quinoa and Grilled Vegetable Salad';
    foodItem2.appendChild(food2Heading);
    foodItem2.appendChild(foodpara21);
    foodItem2.appendChild(foodpara22)
    foodItem2.appendChild(foodpara23)



    const foodItem3=document.querySelector('.foodItem3');
    const food3Heading=document.createElement('h2');
    food3Heading.textContent='Meat';
    foodItem3.appendChild(food3Heading);
    const foodpara31=document.createElement('p')
    const foodpara32=document.createElement('p')
    const foodpara33=document.createElement('p')
    foodpara31.textContent='Pan-Seared Filet Mignon with Red Wine Reduction'
    foodpara32.textContent='Herb-Roasted Chicken with Lemon-Thyme Sauce'
    foodpara33.textContent='Grilled Lamb Chops with Mint Pesto'
    foodItem3.appendChild(foodpara31)
    foodItem3.appendChild(foodpara32)
    foodItem3.appendChild(foodpara33)




    const foodItem4=document.querySelector('.foodItem4');
    const food4Heading=document.createElement('h2');
    food4Heading.textContent='Seafood';
    foodItem4.appendChild(food4Heading);
    const foodpara41=document.createElement('p')
    const foodpara42=document.createElement('p')
    const foodpara43=document.createElement('p')
    foodpara41.textContent='Grilled Salmon with Dill Sauce'
    foodpara42.textContent='Lobster Ravioli in a Creamy Tomato Sauce'
    foodpara43.textContent='Seared Scallops with Citrus Beurre Blanc'
    foodItem4.appendChild(foodpara41)
    foodItem4.appendChild(foodpara42)
    foodItem4.appendChild(foodpara43)



    const foodItem5=document.querySelector('.foodItem5');
    const food5Heading=document.createElement('h2');
    food5Heading.textContent='Pasta and Risotto';
    foodItem5.appendChild(food5Heading)
    const foodpara51=document.createElement('p')
    const foodpara52=document.createElement('p')
    const foodpara53=document.createElement('p')
    foodpara51.textContent='Spaghetti Carbonara with Pancetta and Egg'
    foodpara52.textContent='Shrimp and Asparagus Risotto'
    foodpara53.textContent='Penne with Vodka Sauce and Prosciutto'
    foodItem5.appendChild(foodpara51)
    foodItem5.appendChild(foodpara52)
    foodItem5.appendChild(foodpara53)



    const foodItem6=document.querySelector('.foodItem6');
    const food6Heading=document.createElement('h2');
    food6Heading.textContent='Desserts';
    foodItem6.appendChild(food6Heading)
    const foodpara61=document.createElement('p')
    const foodpara62=document.createElement('p')
    const foodpara63=document.createElement('p')
    foodpara61.textContent='Decadent Chocolate Fondue with Fresh Fruit'
    foodpara62.textContent='Crème Brûlée with a Hint of Vanilla'
    foodpara63.textContent='Tiramisu with Espresso and Mascarpone'
    foodItem6.appendChild(foodpara61)
    foodItem6.appendChild(foodpara62)
    foodItem6.appendChild(foodpara63)

    // creating wine menu

    const wineItemContainer=document.createElement('div');
    wineItemContainer.classList.add('food-item-container')


    for(let i=1;i<=6;i++){
        const wineItem =document.createElement('div');
        wineItem.classList.add(`wineItem${i}`)

        wineItem.classList.add(`wineItem`)
        wineItemContainer.appendChild(wineItem)
    }
   
    wineMenu.appendChild(wineItemContainer);

    const wineItem1=document.querySelector('.wineItem1');
    const wine1Heading=document.createElement('h2');
    wine1Heading.textContent='Red Wines';
    const winepara11=document.createElement('p')
    const winepara12=document.createElement('p')
    const winepara13=document.createElement('p')
    winepara11.textContent='Cabernet Sauvignon';
    winepara12.textContent='Merlot'
    winepara13.textContent='Pinot Noir'
    wineItem1.appendChild(wine1Heading);
    wineItem1.appendChild(winepara11)
    wineItem1.appendChild(winepara12)
    wineItem1.appendChild(winepara13)

    const wineItem2=document.querySelector('.wineItem2');
    const wine2Heading=document.createElement('h2');
    wine2Heading.textContent='White Wines';
    const winepara21=document.createElement('p')
    const winepara22=document.createElement('p')
    const winepara23=document.createElement('p')
    winepara21.textContent='Chardonnay';
    winepara22.textContent='Sauvignon Blanc'
    winepara23.textContent='Pinot Grigio'
    wineItem2.appendChild(wine2Heading);
    wineItem2.appendChild(winepara21)
    wineItem2.appendChild(winepara22)
    wineItem2.appendChild(winepara23)

    const wineItem3=document.querySelector('.wineItem3');
    const wine3Heading=document.createElement('h2');
    wine3Heading.textContent='Rosé Wines:';
    const winepara31=document.createElement('p')
    const winepara32=document.createElement('p')
    const winepara33=document.createElement('p')
    winepara31.textContent='Provence Rosé';
    winepara32.textContent='White Zinfandel'
    winepara33.textContent='Syrah Rosé'
    wineItem3.appendChild(wine3Heading);
    wineItem3.appendChild(winepara31)
    wineItem3.appendChild(winepara32)
    wineItem3.appendChild(winepara33)

    const wineItem4=document.querySelector('.wineItem4');
    const wine4Heading=document.createElement('h2');
    wine4Heading.textContent='Sparkling Wines';
    const winepara41=document.createElement('p')
    const winepara42=document.createElement('p')
    const winepara43=document.createElement('p')
    winepara41.textContent='Champagne';
    winepara42.textContent='Prosecco'
    winepara43.textContent='Cava'
    wineItem4.appendChild(wine4Heading);
    wineItem4.appendChild(winepara41)
    wineItem4.appendChild(winepara42)
    wineItem4.appendChild(winepara43)

    const wineItem5=document.querySelector('.wineItem5');
    const wine5Heading=document.createElement('h2');
    wine5Heading.textContent='Dessert Wines';
    const winepara51=document.createElement('p')
    const winepara52=document.createElement('p')
    const winepara53=document.createElement('p')
    winepara51.textContent='Port';
    winepara52.textContent='Sauternes'
    winepara53.textContent='Moscato d\'Asti'
    wineItem5.appendChild(wine5Heading);
    wineItem5.appendChild(winepara51)
    wineItem5.appendChild(winepara52)
    wineItem5.appendChild(winepara53)

    const wineItem6=document.querySelector('.wineItem6');
    const wine6Heading=document.createElement('h2');
    wine6Heading.textContent='Wine Flights';
    const winepara61=document.createElement('p')
    winepara61.textContent='Customizable wine flights featuring a selection of wines from different regions or grape varieties.';
    wineItem6.appendChild(wine6Heading);
    wineItem6.appendChild(winepara61)



    
    
}
export default menuElementCreation