import React from 'react';

function Payment() {


  return (
    <div>
      <h6>הזן פרטי אשראי:</h6>
      <form id="userForm" >
        <input id="creditNum" type="text" placeholder="הקש מספר אשראי" required /> <br />
        <label htmlFor="creditNum"> מספר אשראי</label>
        <input id="validityMonth" type="number" placeholder="הזן תוקף כרטיס" required /><br />
        <label htmlFor="validityMonth">תוקף כרטיס</label>
        <input id="validityYear" type="number" placeholder="הזן תוקף כרטיס" required /><br />
        <label htmlFor="validityYear">/</label>
        <input id="cvv" type="text" placeholder="הזן 3 ספרות אחרונות" required /><br />
        <label htmlFor="cvv">CVV</label>
        <button type="submit">אישור</button>
      </form>
    </div>
  )
}

export default Payment;