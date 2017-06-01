import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import firebase from 'firebase';
import { Button } from './common/Index';


class ChatWindow extends Component {


  constructor(props) {
    super(props);
    this.state = { chat: '',
    messages: []

   };
    // console.log(firebaseApp);


    // console.log(firebaseApp.database());

    firebase.database().ref('Noni').on('child_added', (snapshot) => {
      console.log({ messages: snapshot.val() });
      // this.setState.message.push(snapshot.val())
      const messages = this.state.messages;
      messages.push(snapshot.val());
      this.setState({ messages });
    });
  }


  render() {
    return (


      <View>


            {this.state.messages.map((message, index) => (
                <View key={`message-${index}`} style={styles.chatwindowStyle} >
                  <Text style={styles.textViewStyle} >
                    {message}
                  </Text>
                </View>
              ))}


        <View>

        <TextInput
            style={styles.textInputStyleTwo}
            onChangeText={(value) => this.setState({ value })}
            value={this.state.value}
        />
          </View>


        <View style={styles.inputpostionStyle}>
          {/* <Input footerText="Type" placeholder="here"></Input> */}

          <TextInput
             ref={clearChat => this.chattextInput = clearChat}
             style={styles.textInputStyle}
             onChangeText={(text) => this.setState({ chat: text })}
             value={this.state.chat}
          />

        </View>

        <View style={styles.buttonpostionStyle}>
          <Button
            onPress={() => {
            firebase.database().ref('Noni').push(this.state.chat: text);
            this.chattextInput.setNativeProps({ text: '' });
          }}
          >
            Send
          </Button>
        </View>


      </View>

    );
  }
}

// .child(userId).child("username").setValue(name);


  // var newInstance = new firebase.database().ref("yo").set(this.state.text)
//   function diffRoom (){
//     this.itemsRef =  firebaseApp.database().ref();
// }


// listenForItems(itemRef) {
//   itemsRef.on('value', (snap) => {
//     items.push({
//       title: child.val().title,
//       _key: child.key
//     })
//   })
//   this.setState({
//     dataSource: this.state.dataSource.cloneWithRows(items)
//   })
// }
//


const styles = {
  buttonpostionStyle: {
    // position: 'relative',
    bottom: 15,
    // display: 'flex',
    alignItems: 'flex-end',
    // flexDirection: 'row',
    flexDirection: 'column',
    // left: 30,
    height: 23,
    justifyContent: 'flex-end',
    width: 60,
    left: 310
  },
  inputpostionStyle: {
    bottom: 30,
    height: 18,
    width: 315
  },
  chatwindowStyle: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    // height: 600,
    top: 10,
    // borderWidth: 5,
    // padding: 20,
  },
  textInputStyle: {
    height: 40, borderColor: 'gray', borderWidth: 1
  },
  textInputStyleTwo: {
    height: 40, borderColor: 'gray', borderWidth: 1, bottom: 540
  },
  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 100
  }

};

export default ChatWindow;
