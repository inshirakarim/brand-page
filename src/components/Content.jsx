import './content.css'

function Content() {
    return (
        <div>
        <div className='container'>
    <div className="description">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="buttons">
            <button className="button1">Shop Now</button>
            <button className="button2">Category</button>
        </div>
        <h6>Also Available On</h6>
        <div className="images">
            <img src="./images/flipkart.png" alt="flipkart"></img>
            <img src="./images/amazon.png" alt="amazon"></img>
        </div>
    </div>
    <div className="shoe">
    <img src="./images/shoe_image.png" alt="shoe_image"></img>
    </div>
    </div>
        </div>
    )
}

export default Content;