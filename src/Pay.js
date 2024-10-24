import React, {useState}from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import swal from 'sweetalert';
import { RotatingSquare } from 'react-loader-spinner'

const Pay = (sessionId) => {
    const [loading, setLoading] = useState(false);
    async function handleToken(token) {
        setLoading(true);
        await axios.post("payment/charge/" + sessionId.sessionId, "",
                {headers: {
                        token: token.id,
                        amount: 1200,
                    }, }).then(() => {
                    setLoading(false);
            swal("", "Payment Success", "success");
        }).catch((error) => {
            swal("", error, "error");
        });
    }
    return (<div className="App">
        <Stripe stripeKey="pk_test_51N5Mz7KlnNY2RgS5UFt6ajgYAy5uIm4XADLY9qMqiP38gIW90X9tirO1wvukEQ1dWjtR1UBpSyGFRMkRxbv8GtGw00afssK0Tj"
                token={handleToken}
                />{loading?
                        <div class="overlay">
                        <div class="centerpage">
                        <RotatingSquare
                            height="100"
                            width="100"
                            color="crimson"
                            ariaLabel="rotating-square-loading"
                            strokeWidth="4"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            /></div></div>:<></>}</div>);
};
export default Pay;