/**
 * Created by ggoma on 2017. 4. 9..
 */
import React, {Component} from 'react';
import {
    View,
    FlatList,
    SectionList,
    TouchableOpacity,
    ListItem,
    Text,
    StyleSheet
} from 'react-native';

const ITEM_HEIGHT = 30;


export default class FastScroll extends Component {
    render() {
        const {sections, renderItem, renderSectionHeader} = this.props;

        return (
            <View style={{flex: 1}}>
                <SectionList
                    ref={this._captureRef.bind(this)}
                    sections={sections}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    renderItem={renderItem}
                />
                {this._renderSidebar()}
            </View>
        )
    }

    _captureRef(ref){
        this._listRef = ref;
    };

    _renderSectionHeader(section) {
        const {renderSectionHeader} = this.props;
        return <View onLayoutChange={dims => (console.log(dims))}>
            {renderSectionHeader(section)}
        </View>;
    }

    _renderSidebar() {
        const {sections} = this.props;
        return (
            <View style={styles.sidebar}>
                {sections.map((section, i) => (
                    <TouchableOpacity key={i} onPress={() => this._listRef.scrollToIndex({viewPosition: 0.5})}>
                        <Text>{section.key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        right: 10,
        top: 0
    }
});