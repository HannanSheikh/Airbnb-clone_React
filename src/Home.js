import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"
function Home() {
    return (
        <div>
            <Banner />
            <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className="home__section">
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg?__cf_chl_captcha_tk__=1ebdb31307dcab14fd11f7b0eb0083ab7b202ac6-1606398201-0-AXnUaZUt6C6Opcv-nZ1XqhSiC_s0nEkKsZAFJBr5qCYRh_Aa3IoxMqGUmfvljpw8h4QlW0VN0CyEZxWfjhgKt7KTr0xS8n0p-hek8z5njwxggD2ZatTHFvlOqTSmkK1-l2rW3BixUw-R1o3AlMPms40st24f3TXBLMrRHrGpLyr4TPObRoGsfdESBgXVAcJJiAl4tIB-cf_XHYir_wo4rAElT_e7N-pfOxGMBPaqOtD-IAKC6fN_e18eNQ3RLqocjygvXQqiUh_de3RPYN7mZsr16yQWjc8aWhoXTP-i1vZNAB9BZK9EgcYtvkGf0u5aQjpFKTGoU5GuKPkLCHZN87f9bWwIVJ8a273sJkyE3OjtWNr6mOWJImAaJbJrWZ7U0i5vijOeNBrKJu19AEU7tP2RL_4wJVdaMdC3NhSzOozCEIMuauJMKdGXxUro3T_cYMevHSiR1MWbO1hHDfEdzbolwLO-Oz1YFRtiyBORwuT0Sd8csLhEIq99rW9UWAuap6i6_Ln8ABkc-NdtsSUe40OCwCxQAmqRt9F6U-2dwLq9b_3smdHfmJDdZcIfuyk7Iojig__ZSeXoDQOPuL80gFw"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home
