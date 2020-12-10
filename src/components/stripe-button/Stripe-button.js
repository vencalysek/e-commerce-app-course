import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishebleKey = 'pk_test_51HwUd5A1gmcEsLF9EYGAXjkjNCIhLSBGlfBpJZExKW5y2n8Du0IHwni79GvlYaCK6Js5bQVBh18LLNHXbPQtivC300GIhOQxcZ';

  const onToken = token => {
    console.log(token);
    alert('Payment was Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishebleKey}
    />
  )
}

export default StripeCheckoutButton
