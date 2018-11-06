import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// Need to get access to Redux State ( this is the global state data )

class ListItem extends Component {

    // When LayoutAnimation.spring() is called React has built in animations that
    // will fire only when called before an update
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    // This helper function will return a CardSection with item description if
    // and only if the expanded prop is set to true
    renderDescription() {
        const { library, expanded } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    // The render function is rendering a card section displaying item title
    // wrapped with a TouchableWithoutFeedback component that uses a fat arrow
    // function to perform the selectLibrary action given to us by Redux's connect function
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// mapStateToProps is how we connect the contents of our Stores data (global state)
// to our Component via props

// 
const mapStateToProps = (state, ownProps) => {
    const expanded = (state.selectedLibraryId === ownProps.library.item.id);

    return { expanded };
};

// The connect function provided to us by Redux adds the current state
// and all of our actions to our ListItem's props
export default connect(mapStateToProps, actions)(ListItem);