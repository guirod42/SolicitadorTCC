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
                    size="large"
                    color="black"
                    animating={true}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    }
});

export default Loading;