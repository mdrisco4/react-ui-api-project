

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import Tab from './Tab';

// class Tabs extends Component {
//     static propTypes = {
//         children: PropTypes.instanceOf(Array).isRequired,
//     }
    
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             activeTab: this.props.children[0].props.label,
//         };
//     }
    
//     onClickTabItem = (tab) => {
//         this.setState({ activeTab: tab });
//     }
    
//     render() {
//         const {
//             onClickTabItem,
//             props: {
//                 children,
//             },
//             state: {
//                 activeTab,
//             }
//         } = this;
        
//         return (
//             <div className="tabs">
//         <ol className="tab-list">
//           {children.map((child) => {
//               const { label } = child.props;
              
//               return (
//                   <Tab
//                   activeTab={activeTab}
//                   key={label}
//                   label={label}
//                   onClick={onClickTabItem}
//                   />
//                   );
//                 })}
//         </ol>
//         <div className="tab-content">
//           {children.map((child) => {
//               if (child.props.label !== activeTab) return undefined;
//               return child.props.children;
//             })}
//         </div>
//       </div>
//     );
// }
// }

// export default Tabs;



// import React, { Component } from 'react';
// export class Tabs extends Component {
  
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             activeTabIndex: this.props.defaultActiveTabIndex
//         };
//         this.handleTabClick = this.handleTabClick.bind(this);
//     }
  
//     // Toggle currently active tab
//     handleTabClick(tabIndex) {
//         this.setState({
//             activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
//         });
//     }
  
//     // Encapsulate <Tabs/> component API as props for <Tab/> children
//     renderChildrenWithTabsApiAsProps() {
//         return React.Children.map(this.props.children, (child, index) => {
//             return React.cloneElement(child, {
//                 onClick : this.handleTabClick,
//                 tabIndex: index,
//                 isActive: index === this.state.activeTabIndex
//             });
//         });
//     }
  
//     // Render current active tab content
//     renderActiveTabContent() {
//         const {children} = this.props;
//         const {activeTabIndex} = this.state;
//         if(children[activeTabIndex]) {
//             return children[activeTabIndex].props.children;
//         }
//     }
  
//     render() {
//         return (
//             <div className="tabs">
//                 <ul className="tabs-nav nav navbar-nav navbar-left">
//                     {this.renderChildrenWithTabsApiAsProps()}
//                 </ul>
//                 <div className="tabs-active-content">
//                     {this.renderActiveTabContent()}
//                 </div>
//             </div>
//         );
//     }
// };

// export default Tabs;









import React, { Component } from 'react';
import Tab from './Tab';



class Tabs extends Component {
    constructor(props) {
        super(props);
                
        this.state = {
            activeTab: ''
        };
    }


    render() {
        return (
            <div>
                <p>some other stuff</p>
                  <Tab />

            </div>
        );
    }
}

export default Tabs;