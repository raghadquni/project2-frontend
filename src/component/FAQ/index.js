import React from "react";
import "./style.css";


const FAQ = () => {

  return (
  <>
  <h1> Frequently Asked Questions </h1>
  <div className="allQ">
<h3 class="clicker" tabindex="1"> In which countries can I shop online?</h3>
<h4 class="hiddendiv"> You can shop online in all countries of the Kingdom of Saudi Arabia
 Shipped by shipping companies (Aramex, DHL)</h4>

</div>

<div className="allQ">
<h3 className="clicker" tabindex="1"> I have not received all the items in my order. What should I do?</h3>
<h4 className="hiddendiv"> Check your e-mail to see whether we have sent you an e-mail informing you that one of the items in your order is not available. In this case, we will refund you the corresponding amount for this item and the delivery expenses via the same payment used for the purchase.  <br /> <br />
Remember that your purchase may have included various deliveries which will be received on different dates. Check your purchase confirmation e-mail to see if it applies. <br /> <br />
If you have not received any e-mail and your purchase did not have various deliveries, contact Customer Services and will we reply to you as soon as possible.</h4>
</div>

<div className="allQ">
<h3 class="clicker" tabindex="1"> Can I cancel or change my order? </h3>
<h4 class="hiddendiv"> At the moment, it is not possible to cancel or change your order <br /> because we prepare your order once you confirm it on the website.</h4>

</div>

<div className="allQ">
<h3 class="clicker" tabindex="1"> What are the payment methods currently available? </h3>
<h4 class="hiddendiv"> Currently, the only method of payment is cash on delivery <br />
Soon, more payment methods will be available. </h4>

</div>

<div className="allQ">
<h3 class="clicker" tabindex="1"> How can I get free shipping? </h3>
<h4 class="hiddendiv"> When you purchase with a value of 500 SR,  you have free shipping (0 riyals for shipping). </h4>

</div>


<div className="allQ">
<h3 class="clicker" tabindex="1"> Is there a minimum order value? </h3>
<h4 class="hiddendiv"> No, not if you order from our store. </h4>

</div>

<div className="allQ">
<h3 class="clicker" tabindex="1"> Is it possible to add other products to order with the possibility of their arrival at the same time? </h3>
<h4 class="hiddendiv"> When the order is confirmed, you cannot add any other products, but you can add a new order. </h4>

</div>

  </>
  )
};

export default FAQ;
