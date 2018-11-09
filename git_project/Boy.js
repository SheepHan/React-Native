

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import Girl from './Girl'
// import NavigationBar from './NavigationBar'

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            what: ''
        }
    }

    render() {
        let what = this.state.what === '' ? '' : '收到了页面B的回信:' + this.state.what;
        return (
            <View style={styles.container}>
            
                <Text style={styles.tips}>页面A.</Text>
                <Text style={styles.tips}
                    onPress={() => {
                        this.props.navigator.push({
                            component: Girl,
                            name: 'Girl',
                            params: {
                                what: '邮件信息toB',
                                onCallback: (what) => {
                                    this.setState({
                                        what: what
                                    })
                                }
                            }
                        })
                    }}>
                    发送信息给页面B.</Text>
                <Text style={styles.tips}>{what}</Text>
            </View >)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    tips: {
        fontSize: 29
    }
})

