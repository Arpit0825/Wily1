import React from 'react';
import { Text, View } from 'react-native'; 
import { FlatList } from 'react-native-gesture-handler';
import db from '../Config';


export default class SearchScreen extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            allTrancstion:[]
        }
    }

    componentDidMount = async() =>{
        const query = db.collection('Transaction').get();
        query.docs.map((doc)=>{
            this.setState({
                allTrancstion:[...this.state.allTrancstion,doc.data()]
            })
        })
    }

    
    render() { 
        return ( 
            <View>
           <FlatList
           data = {this.state.allTransaction}
           renderItem = {({item})=>{(
           <View style ={{borderBottomWidth:2}}>
               <Text>{""+item.bookId}</Text>
               <Text>{""+item.studentId}</Text>
               <Text>{""+item.transactionType}</Text>
               <Text>{""+item.date.toDate}</Text>
           </View>)}}
           keyExtractor = {(item,index)=>{
               index.toString();
               }}/>
           </View>
            
         ); 
    }
}
