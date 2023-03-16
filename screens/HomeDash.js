import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

const HomeDash = () => {
    const width = Dimensions.get('window').width;
    const data = [
        {
          title: "Aenean leo",
          body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
          imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
          title: "In turpis",
          body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
          imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
          title: "Lorem Ipsum",
          body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          imgUrl: "https://picsum.photos/id/12/200/300",
        },
      ];
      console.log(data[2]);



  return (
    <View>
      <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={({  index }) => (
                    <View className="pt-28">

                        <Image source={{uri:`${data[index].imgUrl}`   }} className="w-full h-full"/>
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                           {data[index].title}
                        </Text>
                    </View>
                )}
            />
        </View>
    </View>
  )
}

export default HomeDash