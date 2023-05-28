import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React from 'react';
import { Modal } from 'react-native';

interface LoadingProps {
    active: boolean
}

const Loading = (props: LoadingProps) => {
    return (
        <Modal transparent visible={props.active}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    animating={true}
                    color="black"
                    size="large"
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    }
});

export default Loading;