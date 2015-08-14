// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
// var FilteredList = React.createClass({
//   filterList: function(event){

//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1; //THIS LINE SAYS TO FIND THE ITEM VALUE ENTERED AND SEARCH FOR THE ITEM IN THE ARRAY THAT
//     }); //THAT DOES NOT EQUAL THE INDEX OF -1, WHICH MEANS ALL ITEMS IN THE ARRAY BECUASE THERE IS NO INDEX -1.
//     this.setState({items: updatedList});
//   },
//   //---------------------------------------------------------------//
//   getInitialState: function(){
//    return {
//      initialItems: [
//      "Apples",
//      "Broccoli",
//      "Chicken",
//      "Duck",
//      "Eggs",
//      "Fish",
//      "Granola",
//      "Hash Browns"
//      ],
//      items: []
//    }
//  },
//  //---------------------------------------------------------------//
//  //WILL RENDER THE 'INITIALITEMS' ARRAY TO THE VIEW UPON THE INITIAL STATE.
//  componentWillMount: function(){
//   this.setState({items: this.state.initialItems})
// },
// //---------------------------------------------------------------//
// //RENDERS THE HTML TO THE VIEW
// render: function(){
//   return (
//     <div className="filter-list">
//     <input type="text" placeholder="Search" onChange={this.filterList}/>
//     <List items={this.state.items}/>
//     </div>
//     );
// }
// });
// //-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
// //FINDS THE ITEMS THAT ARE EQUAL TO THE INPUT ITEM
// var List = React.createClass({
//   render: function(){
//     return (
//       <ul>
//       {
//         this.props.items.map(function(item) {
//           return <li key={item}>{item}</li>
//         })
//       }
//       </ul>
//       )  
//   }
// });

// React.render(<FilteredList/>, document.getElementById('mount-point'));