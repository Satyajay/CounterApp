import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class CounterApp extends React.Component {
    // state = {
    //     counter: 0
    // }

    // increase = () => {
    //     this.setState({ counter: this.state.counter + 1 })
    // }
    // decrease = () => {
    //     this.setState({ counter: this.state.counter - 1 })
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => this.props.increase()}>
                        <Text style={styles.counterCSS}>
                            Increase
            </Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '600', fontSize: 20, padding: 10 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decrease()}>
                        <Text style={styles.counterCSS}>
                            Decrease
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterCSS: {
        fontWeight: '600', fontSize: 20, color: 'white', backgroundColor: 'grey', height: 50, width: 110, textAlign: 'center', borderRadius: 10, padding: 8,
    }
});

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decrease: () => dispatch({ type: 'DECREASE_COUNTER' })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)