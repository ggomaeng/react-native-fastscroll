/**
 * Created by ggoma on 2017. 4. 9..
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import FastScroll from './components/fastscroll';

function genCharArray(charA, charZ) {
    let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}


export default class Main extends Component {

    count = 0;

    generateDummyArray() {
        let arr = genCharArray('a', 'z');
        return arr.map(item => {
            return {key: this.count++, title: item}
        })
    }

    _renderItem({item}) {
        return (
            <View style={{height: 30}}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FastScroll
                    sections={[
                        {data: this.generateDummyArray(), key: 'Section A'},
                        {data: this.generateDummyArray(), key: 'Section B'},
                        {data: this.generateDummyArray(), key: 'Section C'},
                      ]}
                    renderSectionHeader={({section}) => <Text>{section.key}</Text>}
                    renderItem={this._renderItem.bind(this)}
                />
            </View>
        )
    }
}