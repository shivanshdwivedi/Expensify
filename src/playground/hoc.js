// Higher Order Component (HOC) -  component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p> The info is : {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return(props) => (
//       <div>
//           {props.isAdmin && <p>This is private info. Please don't share!</p>}
//           <WrappedComponent {...props} />
//       </div>
//     );

// };

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
      <div>
         {props.isAuthenticated ? (<WrappedComponent {...props} /> )
          : (
             <p>
                 Please login to view info.
             </p>
         )}
      </div>
    );

};

const Authinfo = requireAuthentication(Info);

//const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<Authinfo isAuthenticated= {true} info = 'There are the details' /> , document.getElementById('root'));