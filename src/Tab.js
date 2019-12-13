// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Tab extends Component {
//     static propTypes = {
//         activeTab: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         onClick: PropTypes.func.isRequired,
//     };
    
//     onClick = () => {
//         const { label, onClick } = this.props;
//         onClick(label);
//     }
    
//     render() {
//         const {
//             onClick,
//             props: {
//                 activeTab,
//                 label,
//             },
//         } = this;
        
//         let className = 'tab-list-item';
        
//         if (activeTab === label) {
//             className += ' tab-list-active';
//         }
        
//         return (
//             <li
//             className={className}
//             onClick={onClick}
//             >
//         {label}
//       </li>
//     );
// }
// }
// export default Tab;


// import React, { Component } from 'react';
// export const Tab = (props) => {
//     return (
//         <li className="tab">
//             <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
//                 onClick={(event) => {
//                     event.preventDefault();
//                     props.onClick(props.tabIndex);
//                 }}>
//                 <i className={`tab-icon ${props.iconClassName}`}/>
//             </a>
//         </li>
//     )
// }
// export default Tab;











import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
            <div>
                <p>hi</p>
            </div>
        );
    }
}

export default Tab;