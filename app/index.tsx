import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const StartPage = () => {

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className={'flex justify-center items-center h-full w-fulls'}>
                    <Text className={'flex text-red'}>Start page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default StartPage;