import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const StartPage = () => {

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View style={styles.container}>
                    <Text>Start page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width:  "100%",
    }
});

export default StartPage;