import React from 'react';


function Testimonials() {
    return(
        <><section>
            <h1>Testimonials</h1>

            <div className="card" name="josh">
                <img src="little-lemon/src/Josh.png" alt="Josh" />
                <div>
                    <h2>Josh</h2>
                    <p className="ratings">3 stars</p>
                    <p className="reviews">Good</p>
                </div>
            </div>

            <div className="card" name="Anna">
                <img src="little-lemon/src/Anna.png" alt="Anna" />
                <div>
                    <h2>Anna</h2>
                    <p className="ratings">5 stars</p>
                    <p className="reviews">Excellent</p>
                </div>
            </div>

            <div className="card" name="nick">
                <img src="little-lemon/src/Nick.png" alt="Nick" />
                <div>
                    <h2>Nick</h2>
                    <p className="ratings">4 stars</p>
                    <p className="reviews">Good</p>
                </div>
            </div>
        </section>
        <section>
        <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div className="images">
                    <img src="little-lemon/src/Mario and Adrian A.jpg" alt="Mario and Adrian A"></img>
                </div>
            </div>
        </section>
        </>
    );
};

export default Testimonials;