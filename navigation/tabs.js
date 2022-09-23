import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {AppColor} from '../src/screen/utils/AppColor';
import {horizScale} from '../src/screen/utils/Layouts';

export default function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'transparent',

        backgroundColor: AppColor.f4,
        height: horizScale(60),
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            if (route.name == 'Profile') {
              //navigation.openDrawer();
            } else {
              navigation.navigate({name: route.name, merge: true});
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                paddingVertical: 2,
                backgroundColor: 'transparent',
                margin: 0,
                borderTopWidth: 0,
              }}>
              <Image
                source={icon}
                style={{
                  height: 22,
                  width: 24,
                  resizeMode: 'contain',

                  tintColor: isFocused ? AppColor.new2 : AppColor.darkGrey,
                }}
              />
              <Text
                style={{
                  color: isFocused ? AppColor.f5 : AppColor.f7,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
            {/* {label==='Appoint'?<Image source={CustomImage.Group2358}style={{backgroundColor:AppColor.white,
                    // height:horizScale(50),
                    // width:horizScale(50),
                    resizeMode:'contain',
                    marginBottom:70,
                    // position:'absolute',
                    alignSelf:'center',
                    flex:1
                    }}></Image>:null} */}
          </>
        );
      })}
    </View>
  );
}
