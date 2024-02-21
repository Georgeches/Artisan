export default function CustomerOrder({id, orders}){
    let order = orders.find(i=>i._id==id)
    const dateString = order?.createdAt;
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return(
        <tr key={id}>
            <td>{order?.order_number}</td>
            <td>Ksh {order?.amount}</td>
            <td>Ksh {order?.shipping_fee}</td>
            <td>{order?.status}</td>
            <td>{order?.payment_status===true?"paid":"pending"}</td>
            <td>{formattedDate}</td>
        </tr>
    )
}