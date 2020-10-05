// import React from 'react';
// import PropTypes from 'prop-types';
// import { useFirestore } from "react-redux-firebase";


// function MessageDetails(props) {
//   const { message } = props;
//   const firestore = useFirestore();

//   function addMessageToFirestore(event) {
//     event.preventDefault();

//     props.onNewResponseCreation();

//     return firestore.collection('messages').add({
//       what: event.target.what.value,
//       when: event.target.when.value,
//       where: event.target.where.value
//     });
//   }
//   return (
//     <React.Fragment>
//       <h1>{message.name}</h1>
//       <form onSubmit={addMessageToFirestore}>
//         <label>
//           {message.what}
//           <select name='what'>
//             <option>{message.q1a1}</option>
//             <option>{message.q1a2}</option>
//             <option>{message.q1a3}</option>
//           </select >
//         </label>
//         <br />
//         <label>
//           {message.when}
//           <select name='when'>
//             <option>{message.q2a1}</option>
//             <option>{message.q2a2}</option>
//             <option>{message.q2a3}</option>
//           </select >
//         </label>
//         <br />
//         <label>
//           {message.where}
//           <select name='where'>
//             <option>{message.q3a1}</option>
//             <option>{message.q3a2}</option>
//             <option>{message.q3a3}</option>
//           </select >
//         </label>
//         <br />
//         <button type='submit'>Submit Message!</button>
//       </form >
//     </React.Fragment >
//   );
// }

// MessageDetails.propTypes = {
//   onNewResponseCreation: PropTypes.func,
//   message: PropTypes.object,
// };

// export default MessageDetails;