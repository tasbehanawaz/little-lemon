import React from 'react';


function Main() {
    return(
        <main>
            <div className='head1'>
                This week's specials!
            </div>
            <div className='button2'>
                <button onClick={() => alert("see the full menu here!")}>Online Menu</button>
            </div>

            <section>
                <div class = "card-1">
                    <div className='card' name="Greek salad">
                        <img src = "little-lemon\src\Greek salad.png" alt="Greek Salad"></img>
                        <div className='card-header'>
                            <div>
                            <p class='gs' alt="Greek Salad">Greek Salad</p>
                            <p class = "pprice">$12.99</p>
                            </div>

                            <p className='description'>
                                The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>

                            <div className='card-footer'>
                                <span>Order for delivery</span>
                                <img src="little-lemon\src\delivery_dining_black_24dp.svg" alt="order for delivery"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-2">
                    <div className='card' name="Bruschetta" alt="Bruschetta">
                        <img src="Bruschetta.png" alt="Bruschetta"/>
                        <div className='card-header'>
                            <div>
                                <p class='gs' alt="Bruschetta">Bruschetta</p>
                                <p class = "pprice">$12.99</p>
                            </div>
                            <p className='description'>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <div className='card-footer'>
                                <span>Order for delivery</span>
                                <img src='delivery_dining_black_24dp.svg' alt="order for delivery"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-3">
                    <div className='card' name="Lemon dessert" alt="Lemon dessert">
                        <img src="C:\Users\Bisma Nawaz\Downloads\Little lemon webApp\little\little-lemon\src\lemon dessert.jpg" alt="Lemon dessert"></img>
                        <div className='card-header'>
                            <div>
                                <p class='gs' alt="Lemon dessert">Lemon Dessert</p>
                                <p class="pprice">$12.99</p>
                            </div>
                            <p className='description'>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <div className='card-footer'>
                                <span>Order for delivery</span>
                                <img src='little-lemon\src\delivery_dining_black_24dp.svg' alt="order for delivery"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div id="rectangle">
                <div>
                    <p class="testimonials">Testimonials</p>
                </div>
                <div class="test-1">
                    <div class="container-test">
                        <img src="little-lemon\src\Josh.png" alt="Josh" class="card-imagee"></img>
                        <p class="name">Name: Josh</p>
                        <p class="rev">Review: Good</p>
                        <div>
                            <p class="rating">Rating:</p>
                            <div class="rating-star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star unchecked"></span>
                                <span class="fa fa-star unchecked"></span>
                            </div>
                            <div className='star-list'>
                            <ul>
                                <li>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="test-2">
                    <div class="container-test">
                        <img src="little-lemon\src\Anna.png" alt="Anna" class="card-imagee"></img>
                        <p class="name">Name: Anna</p>
                        <p class="rev">Review: Excellent</p>
                        <div>
                            <p class="rating">Rating:</p>
                            <div class="rating-star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div className='star-list'>
                            <ul>
                                <li>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="test-3">
                    <div class="container-test">
                        <img src="little-lemon\src\Nick.png" alt="Nick" class="card-imagee"></img>
                        <p class="name">Name: Nick</p>
                        <p class="rev">Review: Good</p>
                        <div>
                            <p class="rating">Rating:</p>
                            <div class="rating-star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star unchecked"></span>
                            </div>
                            <div className='star-list'>
                            <ul>
                                <li>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id = "rectangle-last">
                <div class='littlechicago'>
                    <h1>Little Lemon</h1>
                    <p id="chicago">Chicago</p>
                </div>
                <p class="main-text">
                    We are a family-owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <div class="restaurant-img">
                    <img src= "little-lemon\src\Mario and Adrian A.png" alt= "restaurant food" class = "res-1"></img>
                    <img src= "little-lemon\src\Mario and Adrian B.png" alt= "restaurant food" class="res-2"></img>
                </div>
            </div>
        </main>
    );
};

export default Main;