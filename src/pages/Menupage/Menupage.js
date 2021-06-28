import React from 'react';
import './styles.scss';

const Menupage = () => {
    const openTab = (tab) => {
        const tabContent = document.getElementsByClassName('tabContent');
        const tabLinks = document.getElementsByClassName('tabLinks')
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        document.getElementById(tab).style.display = "block";
    }
    return (
        <div className="menupage">
            <div className="menu">
                <div className="leftMenuContent">
                    <ul className="menuTab">
                        <li><button className="tabLinks" onClick={(e) => openTab('beverages')}>Beverages</button></li>
                        <li><button className="tabLinks" onClick={(e) => openTab('entrees')}>Entrées</button></li>
                        <li><button className="tabLinks" onClick={(e) => openTab('desserts')}>Desserts</button></li>
                    </ul>
                </div>

                <div className="rightMenuContent">
                    <div className="tabContent" id="beverages">
                        <h3>Warm</h3>

                        <div className="warmBevs">
                            <div className="left">
                                <p className="menuItemTitle">Americano</p>
                                <p className="menuItemDesc">Espresso and hot water.</p> 

                                <p className="menuItemTitle">Canadiano</p>
                                <p className="menuItemDesc">Americano with extra shot of espresso.</p>

                                <p className="menuItemTitle">Drip Coffee</p>
                                <p className="menuItemDesc">Just a classic cup of joe.</p>
                            </div>
                            <div className="right">
                                <p className="menuItemTitle">Espresso</p>
                                <p className="menuItemDesc">The perfect espresso pulled so you can taste the bean as it is meant to be.</p>

                                <p className="menuItemTitle">Cold Brew</p>
                                <p className="menuItemDesc">Refreshing coffee for warmer days.</p>

                                <p className="menuItemTitle">Turkish Coffee</p>
                                <p className="menuItemDesc">Extremely fine ground, high quality coffee served espresso style.</p>
                            </div>
                        </div>

                        <div className="coldBevs">
                            <h3>Cold</h3>
                            <div className="left">
                                <p className="menuItemTitle">Iced Coffee</p>
                                <p className="menuItemDesc">Exactly what it sounds like: regularly brewed coffee served over ice.</p>

                                <p className="menuItemTitle">Lemonade</p>
                                <p className="menuItemDesc">Freshly squeezed lemonade. Available sweetened and un-sweetened.</p>

                                <p className="menuItemTitle">Smoothie</p>
                                <p className="menuItemDesc">Assortments of ingredients available to customize your own smoothie.</p>
                            </div>
                            <div className="right">
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="tabContent" id="entrees" style={{display: "none"}}>
                        <h3>Entrées</h3>
                        
                        <p className="menuItemTitle">Chicken Dumplings</p>
                        <p className="menuItemDesc">Tasty chicken and spinach dumplings perfect for a light meal.</p>

                        <p className="menuItemTitle">Turkey Sliders</p>
                        <p className="menuItemDesc">3 turkey sliders served with a side of coleslaw.</p>

                        <p className="menuItemTitle">Caesar Salad</p>
                        <p className="menuItemDesc">Salad in it's orignal form. Additional servings include: bacon bits, avocado, french dressing.</p>

                        <p className="menuItemTitle">Antipasto Garlic Bread</p>
                        <p className="menuItemDesc">Perfect for sharing with the table. Refills available.</p>

                        <p className="menuItemTitle">Tuna Tartare</p>
                        <p className="menuItemDesc"> Asian flavors of ginger, soy, chile and lime juice are added to highlight the clean, silky taste of the tuna.</p>
                    </div>

                    <div className="tabContent" id="desserts" style={{display: "none"}}>
                        <h3>Desserts</h3>

                        <p className="menuItemTitle">"Fried" Ice Cream</p>
                        <p className="menuItemDesc">Modern twist on a classic dessert that everybody likes.</p>

                        <p className="menuItemTitle">Vanilla Pudding</p>
                        <p className="menuItemDesc">2 cups of vanilla pudding with lemon custard and sprinkled with rainbow flakes.</p>

                        <p className="menuItemTitle">Chocolate-covered Cake Balls</p>
                        <p className="menuItemDesc">Truffles made of a blend of cake crumbs and frosting dipped in choclate.</p>

                        <p className="menuItemTitle">Key Lime Pie</p>
                        <p className="menuItemDesc">Large slice of cool tangy key lime pie.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menupage;